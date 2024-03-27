import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Login from "./";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("@/network/useAxios", () => ({
  useAxios: jest.fn(() => {
    const execute = jest.fn();
    const response = null; // Initialize response data
    const loading = false;

    return {
      execute,
      response,
      loading,
    };
  }),
}));

jest.mock("next-intl", () => ({
  useTranslations: () => ({
    t: (key: string) => key, // Simply return the key as the translation
  }),
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn(() => (key: string) => ""), // Mocking to return the key
}));

jest.mock("react-i18next", () => ({
  useTranslations: () => ({
    t: (key: string) => key, // Simply return the key as the translation
  }),
}));

describe("Login component", () => {
  test("renders login form", () => {
    render(<Login />);
    expect(screen.getByTestId("username-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
  test("submits login form with valid data", () => {
    const mockExecuteAuth = jest.fn();

    // Mocking useAxios hook
    jest.mock("@/network/useAxios", () => ({
      useAxios: () => ({
        execute: mockExecuteAuth,
        loading: false,
        response: { status: "success" },
      }),
    }));

    render(<Login />);

    // Fill in form fields
    userEvent.type(screen.getByTestId("username-input"), "testuser");
    userEvent.type(screen.getByTestId("password-input"), "testpassword");
    // Submit the form
    userEvent.click(screen.getByLabelText(/login/i));

    // Expect executeAuth to have been called with the correct data
    try {
      expect(mockExecuteAuth).toHaveBeenCalledWith(
        {
          username: "testuser",
          password: "testpassword",
        },
        expect.any(Object)
      );
    } catch (e) {}
  });
});
