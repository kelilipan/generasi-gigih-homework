import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "./App";

test("render root correctly", () => {
  render(<App />);
  const title = screen.getByText("Lorem ipsum?");
  expect(title).toBeVisible();

  const sectionTitle = screen.getByText(/Maw maw maw/i);
  expect(sectionTitle).toBeVisible();

  const loginButtons = screen.getAllByText("Login With Spotify");
  expect(loginButtons).toHaveLength(2);
});

// test("login button is redirect to spotify", () => {
//   render(<App />);

//   const loginButtons = screen.getAllByText("Login With Spotify")[0];
//   userEvent.click(loginButtons);
//   expect(window.location.href).toMatch();
// });
