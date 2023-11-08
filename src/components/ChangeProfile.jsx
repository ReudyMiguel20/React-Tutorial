import { useState, useContext } from "react";
import { AppContext } from "../App";

function ChangeProfile() {
  const { setUsername } = useContext(AppContext);

  const [newUsername, setNewUsername] = useState("");

  return (
    <div>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change Username
      </button>
    </div>
  );
}

export default ChangeProfile;
