import React, { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";

export default function Comment({ username, isAdmin }) {
  return (
    <div>
      <p>Logged in as {username}</p>
      {isAdmin && <button>Edit Comment</button>}
    </div>
  );
}
