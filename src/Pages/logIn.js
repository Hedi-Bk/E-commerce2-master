import { Link, useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/home");
  };
  return (
    <div className="containerr login ">
      <div className="wrapper">
        <div className="title">
          <span>Welcome back</span>
        </div>
        <p className="title_para">Please enter your details to sign in.</p>

        <form onSubmit={handleSubmit}>
          <div className="row">
            {/* <i className="fas fa-user"></i> */}
            <input type="text" placeholder="Enter your email..." required />
          </div>
          <div className="row">
            {/* <i className="fas fa-lock"></i> */}
            <input type="password" placeholder="Password" required />
          </div>
          <div className="pass">
            <Link to="#">Forgot password?</Link>
          </div>
          <div className="row button">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Not a member?{" "}
            <span>
              <Link to="/signUp">Signup now</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
