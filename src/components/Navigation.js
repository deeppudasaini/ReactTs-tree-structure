import React, { useState } from "react";
import Modal from "./Modal";

export default function Navbar({ setSearchResult, instance }) {
  const [search, setSearch] = useState("");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="."></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <form className="d-flex">
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
            style={{
              marginRight: 10,
            }}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <button
            className="btn btn-secondary my-2 my-sm-0"
            data-toggle="modal"
            data-target="#exampleModal"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              //   set(search);

              setSearchResult(instance.searchNodeOrLeaf(search));
            }}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
