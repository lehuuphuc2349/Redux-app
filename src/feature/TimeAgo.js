import React from "react";
// import { parseISO, formatDistanceToNow } from "date-fns";
import { parseISO, formatDistanceToNow } from "date-fns";
export const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const periodDate = formatDistanceToNow(date);
    timeAgo = `${periodDate} ago`;
  }
  return (
    <p>
      <span>{timeAgo}</span>
    </p>
  );
};
