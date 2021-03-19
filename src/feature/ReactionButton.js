import React from "react";
const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};
export const ReactionButton = ({ post }) => {
  const displayButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button key={name} type="button" className="button mutted-button">
        {emoji} {post.reactions[name]}
      </button>
    );
  });
};
