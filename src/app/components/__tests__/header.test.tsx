import { MemoryRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { Header } from "../header";

describe("<Header />", () => {
  it("Should render the Header component without any problem", () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getByText(/Progressive Labs/i));
  });
});
