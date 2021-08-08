const API_BASE = "https://api.spotify.com/v1";

const getProfile = (
  accessToken: string
): Promise<SpotifyApi.UserProfileResponse> => {
  return fetch(API_BASE + "/me", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then(
    (res) => res.json() as Promise<SpotifyApi.CurrentUsersProfileResponse>
  );
};

const getSearchTrack = (
  accessToken: string,
  options: SpotifyApi.SearchForItemParameterObject
): Promise<SpotifyApi.TrackSearchResponse> => {
  const params = Object.entries(options)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");
  return fetch(`${API_BASE}/search?${params}`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json()) as Promise<SpotifyApi.TrackSearchResponse>;
};

const createPlaylist = (
  accessToken: string,
  userId: string,
  payload: SpotifyApi.PlaylistBaseObject
): Promise<SpotifyApi.CreatePlaylistResponse> => {
  return fetch(`${API_BASE}/users/${userId}/playlists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json() as Promise<SpotifyApi.CreatePlaylistResponse>);
};
const addTraksToPlaylist = (
  accessToken: string,
  playlisId: string,
  payload: string[]
): Promise<SpotifyApi.AddTracksToPlaylistResponse> => {
  return fetch(`${API_BASE}/playlists/${playlisId}/tracks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify(payload),
  }).then(
    (res) => res.json() as Promise<SpotifyApi.AddTracksToPlaylistResponse>
  );
};

const getTopTracks = (
  accessToken: string
): Promise<SpotifyApi.UsersTopTracksResponse> => {
  const limit = 20;
  return fetch(API_BASE + `/me/top/tracks?limit=${limit}`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json() as Promise<SpotifyApi.UsersTopTracksResponse>);
};

export {
  getTopTracks,
  getProfile,
  getSearchTrack,
  createPlaylist,
  addTraksToPlaylist,
};
