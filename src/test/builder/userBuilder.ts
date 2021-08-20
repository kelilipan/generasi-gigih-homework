import { build, fake } from "@jackfranklin/test-data-bot";

const userBuilder = build<SpotifyApi.UserProfileResponse>("User", {
  fields: {
    display_name: fake((f) => f.name.findName()),
    external_urls: {
      spotify: fake((f) => f.internet.url()),
    },
    href: fake((f) => f.internet.url()),
    id: fake((f) => f.internet.userName()),
    type: "user",
    uri: `spotify:user:${fake((f) => f.name.findName())}`,
  },
});
export default userBuilder;
