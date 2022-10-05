import { useState } from "react";

function User() {
  const [hasError, setHasError] = useState(false);
  if (hasError) throw new Error("yippee-ki-yay!!!");

  return (
    <div>
      <h2>User</h2>
      <button onClick={() => setHasError(true)}>Crash this component</button>
    </div>
  );
}

export default User;
