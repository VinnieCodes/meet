import { render } from "@testing-library/react";
import { mockData } from "../mock-data";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let eventComponent;
  beforeEach(() => {
    eventComponent = render(<Event event={mockData[0]} />);
  });
  test("renders summary", () => {
    expect(eventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
  });
  test("renders location", () => {
    expect(
      eventComponent.queryByText(mockData[0].location)
    ).toBeInTheDocument();
  });
  test("renders created", () => {
    expect(
      eventComponent.queryByText(mockData[0].created)
    ).toBeInTheDocument();
  });
  test("renders show details", () => {
    expect(eventComponent.queryByText("Show details")).toBeInTheDocument();
  });
  // test("when a user clicks", () => {
  //   userEvent.click(eventComponent.queryByText("Show details"))
  //   expect(eventComponent.queryByText(mockData[0].description)).not.toBeInTheDocument();
    
  // });
});
