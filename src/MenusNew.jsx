import React from "react";

export function MenusNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    
    const foodsArray = formData
      .get("foods")
      .split("\n")
      .map((f) => f.trim())
      .filter((f) => f !== "");

    formData.delete("foods");
    formData.append("foods[]", foodsArray);

    const successCallback = () => form.reset();
    onCreate(formData, successCallback);
  };

  return (
    <div>
      <h2>New Menu:</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="title"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="foods" className="form-label">
            Foods (one per line):
          </label>
          <textarea
            name="foods"
            className="form-control"
            id="foods"
            rows="4"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}
