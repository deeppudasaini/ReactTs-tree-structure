import React, { useEffect } from "react";

import Form from "./components/Form";
import Navbar from "./components/Navigation";
import TraversePath from "./components/TraversePath";
import Tree from "./components/Tree";
import TreeStructure from "./dist/index.js";
import { useState } from "react";
import Modal from "./components/Modal";
import Buttons from "./components/Buttons";
import { BsInfoCircle, BsTrash } from "react-icons/bs";
import Alert from "./components/Alert";
import InfoModal from "./components/InfoModal";
import { BsFillFolderFill, BsFillFileEarmarkFill } from "react-icons/bs";
export default function Home() {
  var [treeStructure, setTreeStructure] = useState(new TreeStructure());
  const [path, setpath] = useState([""]);
  const [addResponse, setAddResponse] = useState({
    success: null,
    message: [],
  });
  const [addFormData, setAddFormData] = useState({
    label: "",
    description: "",
    leafStatus: false,
  });
  const [searchResult, setSearchResult] = useState([]);
  const [id, setId] = useState(0);
  useEffect(() => {
    console.log("ds", treeStructure.getTraversalPath(id));
    setpath(
      treeStructure.getTraversePath(
        treeStructure.treeData[0],
        treeStructure.getNodeOrLeafData(id)[0]
      )
    );
  }, [id]);
  return (
    <div>
      <Navbar
        setSearchResult={setSearchResult}
        instance={treeStructure}
        searchResult={searchResult}
      />

      <div className="row">
        <div
          className="col-4"
          style={{
            borderRight: "1px solid black",
          }}
        >
          <Tree
            tree={treeStructure.treeData}
            setId={setId}
            instance={treeStructure}
          />
        </div>
        <div className="col-8">
          <div>
            <form>
              {addResponse.message.map((s) => {
                return <Alert message={s} success={addResponse.success} />;
              })}
              <fieldset>
                <div class="form-group">
                  <label
                    class="col-form-label mt-4"
                    for="inputDefault"
                    style={{ color: "black" }}
                  >
                    Label
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Label"
                    id="inputDefault"
                    value={addFormData.label}
                    onChange={(e) => {
                      setAddFormData({ ...addFormData, label: e.target.value });
                    }}
                  />
                </div>
                <div class="form-group">
                  <label
                    for="exampleTextarea"
                    class="form-label mt-4"
                    style={{ color: "black" }}
                  >
                    Description
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleTextarea"
                    rows="3"
                    value={addFormData.description}
                    placeholder="Description"
                    onChange={(e) => {
                      setAddFormData({
                        ...addFormData,
                        description: e.target.value,
                      });
                    }}
                  ></textarea>
                </div>
              </fieldset>
            </form>
          </div>
          <div>
            <div class=" row">
              <div className="col">
                <button
                  class="btn btn-lg btn-outline-success m-4"
                  type="button"
                  onClick={() => {
                    const response = treeStructure.addNodeOrLeaf(id, {
                      ...addFormData,
                      leafStatus: false,
                    });
                    setAddResponse(response);
                  }}
                >
                  <BsFillFolderFill />
                </button>
              </div>
              <div className="col">
                <button
                  class="btn btn-lg btn-outline-success m-4"
                  type="button"
                  onClick={() => {
                    const response = treeStructure.addNodeOrLeaf(id, {
                      ...addFormData,
                      leafStatus: true,
                    });
                    setAddResponse(response);
                  }}
                >
                  <BsFillFileEarmarkFill />
                </button>
              </div>
              <div className="col">
                {" "}
                <button
                  class="btn btn-lg btn-outline-danger m-4"
                  type="button"
                  onClick={() => {
                    treeStructure.deleteNodeOrLeaf(id);
                    setAddResponse({
                      success: true,
                      message: ["Successfully Deleted"],
                    });
                  }}
                >
                  <BsTrash />
                </button>
              </div>
              <div className="col">
                {" "}
                <button
                  class="btn btn-lg btn-outline-info m-4"
                  data-toggle="modal"
                  data-target="#exampleModalTwo"
                >
                  <BsInfoCircle />
                </button>
                <InfoModal
                  searchResult={treeStructure.getNodeOrLeafData(id)}
                  title="Information of Node"
                />
              </div>
            </div>
          </div>
          <hr />
          <TraversePath path={path} />
        </div>
        <Modal searchResult={searchResult} title="Search Result" />
      </div>
    </div>
  );
}
