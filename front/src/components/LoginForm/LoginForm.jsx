import { useState } from "react";
import axios from "axios";
import { validateLoginForm } from "../../helpers/validateLoginForm";
import { Link } from "react-router-dom";
import { REGISTER } from "../../helpers/pathsRoutes";

const LoginForm = () => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(validateLoginForm({ ...userData, [name]: value }));
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/users/login", userData);
      alert("User logged in successfully");
    } catch (error) {
      alert("User data is incorrect", error);
    }
  };
  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({
      ...userData,
      [name]: true,
    });
  };
  return (
    <>
      <h2>Sign in to your new adventure</h2>
      <form onSubmit={handleSubmitLogin}>
        <div>
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={userData.username}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </label>
          {touched.username && errors.username && (
            <p style={{ color: "red" }}> {errors.username} </p>
          )}
        </div>
        <div>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={userData.password}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </label>
          {touched.password && errors.password && (
            <p style={{ color: "red" }}> {errors.password} </p>
          )}
        </div>
        <button type="submit">Sign in</button>
      </form>
      <p>
        Sign Up <Link to={REGISTER}>HERE</Link> if you are not registered
      </p>
    </>
  );
};

export default LoginForm;
