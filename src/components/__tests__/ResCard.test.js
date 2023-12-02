import { render, screen } from "@testing-library/react";
import ResCard, { withPromoted } from "../ResCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render the ResCard Component with data", () => {
  render(<ResCard resData={MOCK_DATA} />);

  const resName = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

  expect(resName).toBeInTheDocument();
});

const ResCardPromoted = withPromoted(ResCard);
it("Should render ResCard promoted", () => {
  render(<ResCardPromoted resData={MOCK_DATA} />);

  const promoted = screen.getByText("Promoted");

  expect(promoted).toBeInTheDocument();
});
