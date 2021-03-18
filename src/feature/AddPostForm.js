import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const onTitleChanged = (event) => setTitle(event.target.value);
  const onContentChanged = (event) => setContent(event.target.value);
  const onAuthorChanged = (event) => setUserId(event.target.value);
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded({ title, content, userId }));
      setTitle("");
      setContent("");
    }
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const usersOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));
  return (
    <section>
      <h2>Add a New Post</h2>
      <p>I am StarkLee</p>
      <h3>Hello World</h3>
      <form>
        <label htmlFor="postTitle">Post Title: </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author</label>
        <select name={userId} id="postAuthor" onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content: </label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        ></textarea>
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};
