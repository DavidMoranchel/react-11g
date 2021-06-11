import React, { useState } from "react";

import { useHistory } from "react-router";

import Header from "../../components/Header";
import AppLoading from "../../components/AppLoading";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newPost = JSON.stringify({
        title,
        description,
        image,
        author,
      });
      const response = await fetch(
        "https://react-11g-default-rtdb.firebaseio.com/posts.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/JSON",
          },
          body: newPost,
        }
      );
      await response.json();

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="form-group col-md-6">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  placeholder="David ...."
                  value={author}
                  onChange={(event) => setAuthor(event.target.value)}
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  placeholder="http://.../.jpg|.png|.jpeg"
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                />
              </div>

              <button className="btn btn-primary mt-2" type="submit">
                Crear Post
              </button>
            </form>
          </div>
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
