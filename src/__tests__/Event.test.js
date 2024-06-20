import { render } from "@testing-library/react";
import { mockData } from "../mock-data";
import Event from "../components/Event";

describe("<Event /> component", () => {
  let eventComponent;
  beforeEach(() => {
    eventComponent = render(<Event event={mockData[0]} />);
  }) 
  test("renders summary", () => {
    expect(eventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
  });
});
