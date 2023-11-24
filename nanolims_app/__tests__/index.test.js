import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("Renders Properly", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { name: "The Home" });
    expect(heading).toBeInTheDocument();
  });

  it("Should have a link to the about page", () => {
    render(<Home />);

    const link = screen.getByRole("link", { name: "About" });
    expect(link).toBeInTheDocument();
  });

  it("Should have the correct heading text", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { name: "The Home" });

    const headerText = "The Home";
    expect(heading).toHaveTextContent(headerText);
  });
});
