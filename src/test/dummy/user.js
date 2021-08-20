import userBuilder from "test/builder/userBuilder";

export const userData = userBuilder();
const user = {
  isAuthenticated: true,
  accessToken: "test",
  data: userData,
};

export default user;
