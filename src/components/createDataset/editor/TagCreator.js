import React, { useState, useEffect, useRef } from "react";

import {
  CheckOutlined,
  DeleteForeverOutlined,
  CloseOutlined,
} from "@mui/icons-material";

const TagCreator = ({
  resizeRatio,
  tagToEdit,
  cancelTag,
  saveTag,
  deleteTag,
}) => {
  const [tag, setTag] = useState(tagToEdit);
  const inputRef = useRef(null);

  function handleChangeTagName(e) {
    const { value } = e.target;
    const updatedTag = Object.assign({}, tag, { name: value });
    setTag(updatedTag);
  }

  function handleSubmit(e) {
    if (e.keyCode == 13) {
      return saveTag(tag);
    }
    if (e.keyCode == 27) {
      return cancelTag();
    }
  }

  useEffect(() => {
    inputRef.current.focus();
  });

  function deleteButtonPositionStyle() {
    const style = {};
    if (tag.left < 50) {
      style.right = "-42px";
    } else {
      style.left = "-42px";
    }
    return style;
  }

  return (
    <div
      className="reactPictureTagger-newTag"
      style={{
        left: tag.left * resizeRatio,
        top: tag.top * resizeRatio,
        width: tag.width * resizeRatio,
        height: tag.height * resizeRatio,
      }}
    >
      <input
        id="name"
        className="reactPictureTagger-newTag-name"
        placeholder="Tag name"
        name="name"
        value={tag.name}
        type="text"
        ref={inputRef}
        onChange={handleChangeTagName}
        onKeyDown={handleSubmit}
      />
      <div className="reactPictureTagger-tag-upateControls">
        <a onClick={() => saveTag(tag)} title="Save">
          <CheckOutlined />
        </a>
        <a onClick={cancelTag} title="Cancel">
          <CloseOutlined />
        </a>
      </div>
      {deleteTag != null ? (
        <a
          onClick={deleteTag}
          className="reactPictureTagger-tag-deleteButton"
          style={deleteButtonPositionStyle()}
          title="Delete"
        >
          <DeleteForeverOutlined />
        </a>
      ) : null}
    </div>
  );
};

export default TagCreator;
