import { useState } from "react";

function FamilyMember({ familyMember }) {
  const [isVisible, setIsVisible] = useState(false);
  const expand = () => {
    if (!familyMember.hasOwnProperty("children")) return;
    setIsVisible(!isVisible);
  };
  return (
    <div style={{ paddingLeft: 10 }}>
      <p>
        {familyMember.name}
        {familyMember.hasOwnProperty("children") && (
          <button onClick={expand}>
            {isVisible ? "Hide children" : "Show children"}
          </button>
        )}
      </p>

      {isVisible &&
        familyMember.children.map((child) => {
          return (
            <div style={{ paddingLeft: 10 }}>
              <FamilyMember familyMember={child} />
            </div>
          );
        })}
    </div>
  );
}

export default FamilyMember;
