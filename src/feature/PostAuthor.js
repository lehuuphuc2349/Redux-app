import React from "react";
import { useSelector } from "react-redux";
export const PostAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );
  return (
    <p>
      <p>
        By <span>{author ? author.name : "Unknows Author"}</span>
      </p>
    </p>
  );
};
