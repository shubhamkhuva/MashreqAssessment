import React from "react";
import {
  render,
  fireEvent,
  findByText,
  queryByText,
} from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import Dashboard from "./";
import { store } from "@/context/store";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
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
    t: (key: string) => "", // Simply return the key as the translation
  }),
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn(() => (key: string) => ""), // Mocking to return the key
}));

jest.mock("react-i18next", () => ({
  useTranslations: () => ({
    t: (key: string) => "", // Simply return the key as the translation
  }),
}));

describe("Dashboard Component", () => {
  it("renders correctly with user data", async () => {
    const currentUser = {
      FULL_NAME: "John Doe",
      USERNAME: "johndoe",
      EMAIL: "john@example.com",
    };

    const { getByText } = render(<Dashboard currentU={currentUser} />);

    expect(getByText(`${currentUser.FULL_NAME}`)).toBeInTheDocument();
    expect(getByText(`${currentUser.USERNAME}`)).toBeInTheDocument();
    expect(getByText(`${currentUser.EMAIL}`)).toBeInTheDocument();
  });
});
