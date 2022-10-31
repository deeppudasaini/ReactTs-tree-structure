import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  BsFillFolderFill,
  BsFolder2Open,
  BsFillFileEarmarkFill,
} from "react-icons/bs";
import TreeItem from "./TreeItem";
export default function Tree({ tree, setId, instance }) {
  // const [node, setNode] = useState(props.list)
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div
        style={{
          textAlign: "left",
          borderLeft: "1px solid blue",
        }}
        className="container"
      >
        {tree?.map((child) => {
          return (
            <>
              <div style={{ paddingLeft: 20 }}>
                <TreeItem
                  node={child}
                  key={child.id}
                  setId={setId}
                  instance={instance}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
