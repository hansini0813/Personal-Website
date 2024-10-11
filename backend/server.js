// backend/server.js

const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');
const spotifyRoutes = require('./routes/spotify');

dotenv.config(); // Load environment variables from .env

// Define clientId and clientSecret after loading environment variables
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

// Log these to make sure they are being loaded correctly (you can remove these once verified)
console.log('Client ID:', clientId);
console.log('Client Secret:', clientSecret);

const app = express();
const port = 8000;

// Enable CORS for frontend communication
app.use(cors({
    origin: 'http://localhost:3000', // Your frontend address, change to your actual frontend port if needed
}));

// Step 1: Redirect user to Spotify for authorization
app.get('/login', (req, res) => {
  const redirectUri = 'http://localhost:8000/callback'; // Do not encode here
  const scope = encodeURIComponent('user-top-read');

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;

  res.redirect(authUrl);
});

// Step 2: Callback route to get the authorization code and fetch tokens
app.get('/callback', async (req, res) => {
  const authCode = req.query.code;
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const redirectUri = 'http://localhost:8000/callback'; // Do not encode here

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    // Exchange authorization code for access token
    const response = await axios.post(tokenUrl, new URLSearchParams({
      grant_type: 'authorization_code',
      code: authCode,
      redirect_uri: redirectUri,  // The redirect URI must match the one provided during login
    }), {
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const accessToken = response.data.access_token;
    console.log('Access Token:', accessToken);

    // Step 3: Fetch the user's favorite songs using the access token
    const favoriteSongsResponse = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    const favoriteSongs = favoriteSongsResponse.data.items;

    // Display the favorite songs
    res.json(favoriteSongs.map(song => ({
      name: song.name,
      artist: song.artists.map(artist => artist.name).join(', '),
      album: song.album.name,
      url: song.external_urls.spotify,
    })));

  } catch (error) {
    console.error('Error getting tokens or fetching songs:', error.response ? error.response.data : error.message);
    res.status(500).send('Error getting tokens or fetching songs');
  }
});

// Use the spotify routes for additional API routes
app.use('/', spotifyRoutes); // Make sure spotify.js is correctly set up

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Spotify API integration server!');
});
