import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { selectAllPosts } from "./postsSlice";
import { ReactionButton } from "./ReactionButton";
import { TimeAgo } from "./TimeAgo";
export const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderedPosts = orderedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <TimeAgo timestamp={post.date} />
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.user} />
      <Link to={`/posts/${post.id}`} className="button mutted-button">
        View Post
      </Link>
      <ReactionButton post={post} />
    </article>
  ));
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
