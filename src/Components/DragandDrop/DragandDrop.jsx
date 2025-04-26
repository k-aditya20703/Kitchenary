import React, { useRef, useState } from "react";
import "./DragandDrop.css";
import { IoCloudUploadOutline } from "react-icons/io5";
import { TiUpload } from "react-icons/ti";

const DragandDrop = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDrag = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
    console.log(event.dataTransfer.files);
  };
  return (
    <>
      <div className="dnd_section">
        <div
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className="dnd_container"
        >
          {/* <p className="upload_file">Upload Files</p> */}
          <div className="uploadIcon">
            <IoCloudUploadOutline />
          </div>
          <p className="drag_drop">Drag & Drop for upload files</p>
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            ref={inputRef}
          ></input>
          <button onClick={() => inputRef.current.click()}>
            <div className="buttonIcon">
              <TiUpload />
            </div>
            Select file
          </button>
        </div>
      </div>
    </>
  );
};

export default DragandDrop;
