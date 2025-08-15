export function MenusNew({ onCreate }) {

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  };

  return (
    <div>
      <h2>New Menu:</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="title" className="form-label">Title:</label>
        <input name="title" type="text" className="form-control" id="title" required />
      </div>

      <div className="mb-3">
        <label htmlFor="foods" className="form-label">Foods:</label>
        <input name="foods" type="text" className="form-control" id="foods" required />
      </div>

      <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  )
}