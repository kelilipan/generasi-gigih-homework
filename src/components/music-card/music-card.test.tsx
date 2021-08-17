import { render, screen } from "@testing-library/react";
import MusicCard from "./index";
import userEvent from "@testing-library/user-event";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

const data: SpotifyApi.TrackObjectFull = {
  album: {
    album_type: "single",
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3dTzeO0QCd86cXSgQ04Y3r",
        },
        href: "https://api.spotify.com/v1/artists/3dTzeO0QCd86cXSgQ04Y3r",
        id: "3dTzeO0QCd86cXSgQ04Y3r",
        name: "Rainych",
        type: "artist",
        uri: "spotify:artist:3dTzeO0QCd86cXSgQ04Y3r",
      },
    ],
    available_markets: ["ID"],
    external_urls: {
      spotify: "https://open.spotify.com/album/3x2ptEjQPfVFKOyQKLiuAc",
    },
    href: "https://api.spotify.com/v1/albums/3x2ptEjQPfVFKOyQKLiuAc",
    id: "3x2ptEjQPfVFKOyQKLiuAc",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2737ae2f53cf686124393716fe0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e027ae2f53cf686124393716fe0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048517ae2f53cf686124393716fe0",
        width: 64,
      },
    ],
    name: 'Black Catcher (From "Black Clover")',
    release_date: "2020-02-18",
    release_date_precision: "day",
    type: "album",
    uri: "spotify:album:3x2ptEjQPfVFKOyQKLiuAc",
  },
  artists: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3dTzeO0QCd86cXSgQ04Y3r",
      },
      href: "https://api.spotify.com/v1/artists/3dTzeO0QCd86cXSgQ04Y3r",
      id: "3dTzeO0QCd86cXSgQ04Y3r",
      name: "Rainych",
      type: "artist",
      uri: "spotify:artist:3dTzeO0QCd86cXSgQ04Y3r",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/39qSAHKb2FaGwcDlGtIXNJ",
      },
      href: "https://api.spotify.com/v1/artists/39qSAHKb2FaGwcDlGtIXNJ",
      id: "39qSAHKb2FaGwcDlGtIXNJ",
      name: "Mattyyym",
      type: "artist",
      uri: "spotify:artist:39qSAHKb2FaGwcDlGtIXNJ",
    },
  ],
  available_markets: ["ID"],
  disc_number: 1,
  duration_ms: 200350,
  explicit: false,
  external_ids: {
    isrc: "QZGWW2045323",
  },
  external_urls: {
    spotify: "https://open.spotify.com/track/5orWOyd3hzYUIhxBs6QpdV",
  },
  href: "https://api.spotify.com/v1/tracks/5orWOyd3hzYUIhxBs6QpdV",
  id: "5orWOyd3hzYUIhxBs6QpdV",
  is_local: false,
  name: 'Black Catcher (From "Black Clover")',
  popularity: 34,
  preview_url:
    "https://p.scdn.co/mp3-preview/1f976060b3aead4821c27851cac531942011e32c?cid=bbb897e54ab84c188d7ce7b6a811348f",
  track_number: 1,
  type: "track",
  uri: "spotify:track:5orWOyd3hzYUIhxBs6QpdV",
};

test("music card component to be rendered correctly", async () => {
  render(
    <MusicCard
      isPlayed={false}
      handlePlay={() => {}}
      data={data}
      isSelected={true}
      handleSelect={(uri) => {
        console.log(uri);
      }}
    />
  );

  const albumName = screen.getByTestId("album-name");
  const trackName = screen.getByTestId("track-name");
  const selectTrackButton = screen.getByText(/select/i);
  expect(albumName).toBeVisible();
  expect(albumName).toHaveTextContent(data.album.name);
  expect(trackName).toBeVisible();
  expect(trackName).toHaveTextContent(data.name);
  expect(selectTrackButton).toBeVisible();
});

test("select button is select current track", () => {
  render(
    <MusicCard
      isPlayed={false}
      handlePlay={() => {}}
      data={data}
      isSelected={true}
      handleSelect={(uri) => {
        console.log(uri);
      }}
    />
  );
  const consoleSpy = jest.spyOn(console, "log");
  const selectTrackButton = screen.getByText(/select/i);
  expect(selectTrackButton).toBeVisible();

  userEvent.click(selectTrackButton);
  expect(consoleSpy).toHaveBeenCalledWith(data.uri);
});
