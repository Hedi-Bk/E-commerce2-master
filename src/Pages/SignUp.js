import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/logIn");
  };
  return (
    <div className="containerr login ">
      <div className="wrapper">
        <div className="title">
          <span>Welcome back</span>
        </div>
        <p className="title_para">Please enter your details to sign Up.</p>

        <form onSubmit={handleSubmit}>
          {/* <i classN ame="fas fa-user"></i> */}
          <div className="row">
            <input
              type="text"
              placeholder="Choose You A User Name..."
              required
            />
          </div>
          <div className="row">
            {/* <i className="fas fa-user"></i> */}
            <input type="text" placeholder="Enter your email..." required />
          </div>
          <div className="row">
            {/* <i className="fas fa-lock"></i> */}
            <input type="password" placeholder="Password" required />
          </div>

          <div className="row button">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}
