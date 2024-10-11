// Handles routes for Spotify API-related requests.

// backend/spotify.js

const express = require('express');
const axios = require('axios');
const router = express.Router();

// Assuming you have already handled the login and obtained the access token
router.get('/get-favorite-tracks', async (req, res) => {
  try {
    // You should have the access token stored somehow (e.g., session or database)
    const accessToken = req.session.accessToken || req.cookies.accessToken;

    if (!accessToken) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    // Fetch user's top tracks from Spotify API
    const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    // Send the tracks data back to the frontend
    res.json(response.data.items);

  } catch (error) {
    console.error('Error fetching favorite tracks:', error);
    res.status(500).json({ error: 'Error fetching favorite tracks' });
  }
});

module.exports = router;
