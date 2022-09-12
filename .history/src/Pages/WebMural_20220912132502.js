import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const UploadAndDisplayImage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleImageChange = (e) => {
    setSelectedFiles([]);
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <div class="container">
          <figure class="image-container">
            <img className="image" src={photo} alt="" key={photo} />
          </figure>
        </div>
      );
    });
  };

  return (
    <main>
      <nav className="cabeceranavi">
        <ol>
          <div CustomLink to="/" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
          </div>
          <nav className="oli" onClick={() => handleImageChange(null)}>
            Clear
          </nav>
          <label for="upload-button">
            <nav>
              <input
                type="file"
                id="upload-button"
                multiple="multiple"
                accept="image/*"
                onChange={handleImageChange}
              />
              <div class="oli"> Submit + </div>
            </nav>
          </label>
        </ol>
      </nav>
      {selectedFiles && (
        <div>
          <div class="image-container">{renderPhotos(selectedFiles)}</div>
        </div>
      )}
    </main>
  );
};

export default UploadAndDisplayImage;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
