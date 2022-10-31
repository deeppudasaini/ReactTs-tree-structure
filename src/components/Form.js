import React, { useEffect } from "react";
import { useState } from "react";

export default function Form({ instance, id }) {
  const [form, setForm] = useState({
    label: "",
    description: "",
    leafStatus: false,
    children: [],
  });

  return (
    <div>
      <form>
        <fieldset>
          <div class="form-group">
            <label class="col-form-label mt-4" for="inputDefault">
              Label
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Label"
              id="inputDefault"
              value={form.label}
              onChange={(e) => {
                setForm({ ...form, label: e.target.value });
              }}
            />
          </div>
          <div class="form-group">
            <label for="exampleTextarea" class="form-label mt-4">
              Description
            </label>
            <textarea
              class="form-control"
              id="exampleTextarea"
              rows="3"
              value={form.description}
              placeholder="Description"
              onChange={(e) => {
                setForm({ ...form, description: e.target.value });
              }}
            ></textarea>
          </div>
        </fieldset>
        <div>
          <div class="d-grid gap-2">
            <button
              class="btn btn-lg btn-primary m-4"
              type="button"
              onClick={() => {
                instance.addNodeOrLeaf(id, { ...form, leafStatus: false });
              }}
            >
              Add Node
            </button>
            <button
              class="btn btn-lg btn-primary m-4"
              type="button"
              onClick={() => {
                instance.addNodeOrLeaf(id, { ...form, leafStatus: true });
              }}
            >
              Add Leaf
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
