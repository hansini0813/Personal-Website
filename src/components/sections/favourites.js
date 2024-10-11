import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Favourites = () => {
  const [favoriteTracks, setFavoriteTracks] = useState([]);
  const accessToken = process.env.GATSBY_SPOTIFY_ACCESS_TOKEN;  // Use the token from the frontend .env file

  useEffect(() => {
    const fetchFavoriteTracks = async () => {
      if (!accessToken) {
        console.error('No access token found!');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8000/get-favorite-tracks?token=${accessToken}`);
        setFavoriteTracks(response.data);
      } catch (error) {
        console.error('Error fetching favorite tracks:', error);
      }
    };

    fetchFavoriteTracks();
  }, [accessToken]);

  return (
    <div>
      <h2>My Favorite Tracks</h2>
      <ul>
        {favoriteTracks.map(track => (
          <li key={track.url}>
            <a href={track.url} target="_blank" rel="noopener noreferrer">
              {track.name} by {track.artist} - Album: {track.album}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
