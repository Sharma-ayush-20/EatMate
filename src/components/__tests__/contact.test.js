import { render, screen } from "@testing-library/react";
import ContactUs from "../Contact";
import { UserContext } from "../../utils/UserContext";
import "@testing-library/jest-dom";

describe("All Test Case for my Contact page", () => {
  it("Contact page should have a heading", () => {
    render(
      <UserContext.Provider value={{ theme: "light" }}>
        <ContactUs />
      </UserContext.Provider>
    );

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    //   expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  it("should have Send Message text in contact page", () => {
    render(
      <UserContext.Provider value={{ theme: "light" }}>
        <ContactUs />
      </UserContext.Provider>
    );
    const buttonText = screen.getByText("Send Message");
    expect(buttonText).toBeInTheDocument();
  });
});

