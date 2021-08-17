import { render, screen } from "test-utils";
// import userEvent from "@testing-library/user-event";
import Index from "../../pages/home";

test("render content correctly", () => {
  render(<Index />);
  const title = screen.getByText("Lorem ipsum?");
  expect(title).toBeVisible();

  const sectionTitle = screen.getByText(/Maw maw maw/i);
  expect(sectionTitle).toBeVisible();

  const loginButtons = screen.getByText(/Login With Spotify/i);
  expect(loginButtons).toBeVisible();
});

// test("login button is redirect to spotify", () => {
//   render(<App />);

//   const loginButtons = screen.getAllByText("Login With Spotify")[0];
//   userEvent.click(loginButtons);
//   expect(window.location.href).toMatch();
// });
