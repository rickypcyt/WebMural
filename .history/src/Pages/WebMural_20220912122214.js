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
          <CustomLink to="/" className="oli">
            Home
          </CustomLink>
          <div className="oli" onClick={() => handleImageChange(null)}>
            Clear
          </div>
          <label for="upload-button">
            <nav>
              <input
                type="file"
                id="upload-button"
                multiple="multiple"
                accept="image/*"
                onChange={handleImageChange}
              />
              <a class="oli"> Submit + </a>
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
