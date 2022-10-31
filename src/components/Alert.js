import React from "react";

export default function Alert({ success, message }) {
  return (
    <div>
      <div
        className={
          success
            ? "alert alert-dismissible alert-success"
            : "alert alert-dismissible alert-danger"
        }
      >
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <h4 class="alert-heading">{success ? "Sucess" : "Error"}</h4>
        <p class="mb-0">{message}.</p>
      </div>
    </div>
  );
}
