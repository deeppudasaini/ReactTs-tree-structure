import React from "react";
import { useEffect } from "react";

export default function InfoModal({ searchResult, title }) {
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModalTwo"
        // tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalTwoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
            </div>

            <div className="modal-body">
              {searchResult.length != 0 ? (
                searchResult.map((result) => {
                  return (
                    <div>
                      <h3>{result.label}</h3>
                      <p>{result.description}</p>
                      <p>Number of Children: {result.children.length}</p>
                      <p>Leaf or Node: {result.leafStatus ? "Leaf" : "Node"}</p>
                      <hr />
                    </div>
                  );
                })
              ) : (
                <h1>No Search Result</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
