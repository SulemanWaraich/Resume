import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionElement.current.value;
    const tags = tagElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionElement.current.value = "";
    tagElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User Id Here
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Your User Id"
          id="userId"
          ref={userIdElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="How Are You Feeling Today"
          id="title"
          ref={postTitleElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          placeholder="Tell Us More About It"
          id="body"
          ref={postBodyElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number OF Reactions
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="How Many People Reacted To This Post"
          id="reactions"
          ref={reactionElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your Hashtags Here
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Tags Using Space"
          id="tags"
          ref={tagElement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
