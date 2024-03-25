import axios from "axios";

export function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/sessions.json", params).then((response) => {
      console.log(response);
      event.target.reset();
    });
  };

  return (
    <div id="signup">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password Confirmation: <input name="passowrd_confirmation" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
