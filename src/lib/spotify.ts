import config from "../site.config";
const API_BASE = config.SPOTIFY_API_BASE_URL;
export interface PlaylistOption {
  name: string;
  description: string;
  public: boolean;
  collaborative: boolean;
}

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
  payload: PlaylistOption
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
  payload: { uris: string[] }
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
  accessToken: string,
  offset: number
): Promise<SpotifyApi.UsersTopTracksResponse> => {
  const limit = config.SPOTIFY_SEARCH_LIMIT;
  return fetch(API_BASE + `/me/top/tracks?limit=${limit}&offset=${offset}`, {
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
