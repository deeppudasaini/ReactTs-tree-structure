import React, { useState } from "react";
import Tree from "./Tree";
import {
  BsFillFolderFill,
  BsFolder2Open,
  BsFillFileEarmarkFill,
} from "react-icons/bs";
import Fade from "react-reveal/Fade";
import Modal from "./Modal";
import InfoModal from "./InfoModal";
export default function TreeItem({ node, setId, instance }) {
  const { children, label } = node;

  const [showChildren, setShowChildren] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const handleClick = (status) => {
    setShowChildren(!showChildren);
    setId(node.id);
  };
  return (
    <>
      <Fade top>
        <div onClick={handleClick} style={{ marginBottom: "10px" }}>
          {node.id == null ? (
            <></>
          ) : showChildren && !node.leafStatus ? (
            <BsFolder2Open />
          ) : !showChildren && node.leafStatus ? (
            <BsFillFileEarmarkFill />
          ) : (
            <BsFillFolderFill />
          )}
          <span
            style={{
              marginRight: 10,
              paddingLeft: 3,
              fontWeight: "bold",
              color: "black",
            }}
          >
            {label}
          </span>
        </div>
      </Fade>
      <div>{showChildren && <Tree tree={children} setId={setId} />}</div>
    </>
  );
}
