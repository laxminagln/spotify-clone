//https://developer.spotify.com/documentation/web-playbaack-sdk/quick-start/#

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = 'e9ff6475f24647ff8a27a23f6ef252cc';
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
