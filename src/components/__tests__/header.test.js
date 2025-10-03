import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "../../utils/UserContext";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";

describe("All Test cases for header components", () => {
  it("should have one login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <UserContextProvider>
            <Header />
          </UserContextProvider>
        </Provider>
      </BrowserRouter>
    );

    const loginText = screen.getByText("Login");
    expect(loginText).toBeInTheDocument();
  });

  it("Should have listItems", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <UserContextProvider>
            <Header />
          </UserContextProvider>
        </Provider>
      </BrowserRouter>
    );

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(0);
  });

  it("Should have About Us Text", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <UserContextProvider>
            <Header />
          </UserContextProvider>
        </Provider>
      </BrowserRouter>
    );

    const AboutUs = screen.getByText("About us");
    expect(AboutUs).toBeInTheDocument();
  });

  it("Should change login to logout when button Clicked", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <UserContextProvider>
            <Header />
          </UserContextProvider>
        </Provider>
      </BrowserRouter>
    );

    const LoginButton = screen.getByText("Login")
    fireEvent.click(LoginButton);
    const LogoutButton = screen.getByText("Logout");
    expect(LogoutButton).toBeInTheDocument();
  });
});
