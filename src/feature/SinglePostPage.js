import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { selectPostById } from "./postsSlice";
import { ReactionButton } from "./ReactionButton";
import { TimeAgo } from "./TimeAgo";
export const SinglePostPage = ({ match }) => {
  const { postID } = match.params;
  const post = useSelector((state) => selectPostById(state, postID));
  if (!post) {
    return (
      <section>
        <h2>Post Not Found</h2>
      </section>
    );
  }
  return (
    <section>
      <article className="post">
        <TimeAgo timestamp={post.date} />
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
        <PostAuthor userId={post.user} />
        <ReactionButton post={post} />
      </article>
    </section>
  );
};
