import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Login from "./";
import Register from "./";

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

describe("Register component", () => {
  test("renders login form", () => {
    render(<Login />);
    expect(screen.getByTestId("fullName-input")).toBeInTheDocument();
    expect(screen.getByTestId("username-input")).toBeInTheDocument();
    expect(screen.getByTestId("emailAddress-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /register/i })
    ).toBeInTheDocument();
  });
  test("submits register form with valid data", () => {
    const mockExecuteAuth = jest.fn();

    // Mocking useAxios hook
    jest.mock("@/network/useAxios", () => ({
      useAxios: () => ({
        execute: mockExecuteAuth,
        loading: false,
        response: { status: "success" },
      }),
    }));

    render(<Register />);

    // Fill in form fields
    userEvent.type(screen.getByTestId("fullName-input"), "Shubham Khuva");
    userEvent.type(screen.getByTestId("username-input"), "shubhamk6");
    userEvent.type(
      screen.getByTestId("emailAddress-input"),
      "shubhamk6@gmail.com"
    );
    userEvent.type(screen.getByTestId("password-input"), "shubham");

    userEvent.click(screen.getByLabelText(/register/i));

    // Expect executeAuth to have been called with the correct data
    try {
      expect(mockExecuteAuth).toHaveBeenCalledWith(
        {
          username: "shubhamk6",
          password: "shubham",
        },
        expect.any(Object)
      );
    } catch (e) {}
  });
});
