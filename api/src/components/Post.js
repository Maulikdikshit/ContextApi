import React, { useContext } from "react";
import Comment from "./Comment";
import UserInfoContext from "../context/UserInfoContext";

export default function Post({ username, isAdmin }) {
  //   const { username, isAdmin } = useContext(UserInfoContext);
  return (
    <div>
      {isAdmin && <button>Delete Comment</button>}
      <h2>Example Post Title</h2>
      <p>This is an example post content</p>

      <Comment username={username} isAdmin={isAdmin}></Comment>
    </div>
  );
}
