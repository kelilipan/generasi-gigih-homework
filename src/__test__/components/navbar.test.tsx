import Navbar from "components/navbar";
import { render, screen } from "test-utils";
import loggedIn from "test/dummy/logged-in";

describe("navbar component", () => {
  it("should have login button", () => {
    render(<Navbar />);
    const loginButtons = screen.getByText(/Login With Spotify/i);
    expect(loginButtons).toBeVisible();
  });
  //if logged in
  it("should have search component", () => {
    render(<Navbar />, { preloadedState: loggedIn });
    const searchButton = screen.getByRole("button", { name: /search song/i });
    expect(searchButton).toBeVisible();
    const searchInput = screen.getByPlaceholderText("Input song name");
    expect(searchInput).toBeVisible();
  });

  it("should have profile", () => {
    render(<Navbar />, { preloadedState: loggedIn });
    const profile = screen.getByRole("img", { name: "Wisesa" });
    expect(profile).toBeVisible();
  });
});
