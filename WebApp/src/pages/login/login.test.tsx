import { render, screen } from "@testing-library/react";
import Login from "./";

test("renders welcome message", () => {
  render(<Login />);
  const welcomeElement = screen.getByText(/Welcome Back/i);
  expect(welcomeElement).toBeInTheDocument();
});
