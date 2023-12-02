import HelpPage from "../HelpPage";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

it("Should render HelpPage component with a heading", () => {
  render(<HelpPage />);

  // Querying
  const heading = screen.getByRole("heading", { name: "Help & Support" });

  // Assertion
  expect(heading).toBeInTheDocument();
});
