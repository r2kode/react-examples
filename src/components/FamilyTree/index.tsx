import { familyTree } from "./data/familyTree";
import FamilyMember from "./view/FamilyMember";

function FamilyTree() {
  return <FamilyMember familyMember={familyTree} />;
}

export default FamilyTree;
