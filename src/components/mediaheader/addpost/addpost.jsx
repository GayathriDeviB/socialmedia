import React, { useState } from "react";
import closebutton from "../../../assets/images/closebutton.jpeg";
import "./addpost.css";
const Addpost = (props) => {
  const [imgFile, uploadImg] = useState([]);
  const Imgpreview = (e) => {
    if (e.target.files.length !== 0) {
      uploadImg((imgFile) => [
        ...imgFile,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };
  return props.trigger ? (
    <div className="addpostclose">
      <div className="addpostmain">
        <div className="create">
          <h5>Create a post</h5>
          <div className="preview">
            <h4>Image Preview</h4>
            {imgFile.map((elem) => {
              return (
                <span key={elem}>
                  <img src={elem} alt="image" />
                </span>
              );
            })}

            <input
              type="file"
              onChange={Imgpreview}
              placeholder="Choose File"
            />
          </div>
        </div>
        <div className="describe">
          <form>
            <input type="text" placeholder="Title" />
          </form>
          <form>
            <textarea
              rows="20"
              cols="50"
              placeholder=" Description goes here"
            ></textarea>
          </form>

          <button>Add post to feed</button>
        </div>
      </div>
      <button onClick={() => props.setTrigger(false)}>
        <img src={closebutton} alt="closebutton" />
      </button>
    </div>
  ) : (
    ""
  );
};
export default Addpost;
