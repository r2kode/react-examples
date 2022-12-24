import { render, screen } from "@testing-library/react";
import FamilyMember from "../FamilyMember";

const familyMember = { name: "John", age: 90, children: [] };

describe("FamililyMember", () => {
  test("should display button", () => {
    render(<FamilyMember familyMember={familyMember} />);
    // screen.debug();
    // screen.logTestingPlaygroundURL();
    const btn = screen.getByRole("button", {
      name: /show children/i,
    });
    expect(btn).toBeInTheDocument();
  });
});
