import React from "react";

export default function TraversePath({ path }) {
  return (
    <div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">Root</li>
        {path.map((s) => {
          return (
            <li class="breadcrumb-item">
              <a href="#">{s}</a>
            </li>
          );
        })}

        {/* <li class="breadcrumb-item active">Library</li> */}
      </ol>
    </div>
  );
}
