import { useState } from "react";
import { validateLoginForm } from "../../helpers/validateLoginForm";
import { Link, useNavigate } from "react-router-dom";
import { REGISTER, HOME } from "../../helpers/pathsRoutes";
import { useLoginUserMutation } from "../../redux/features/users/usersApi";
import { setCredentials } from "../../redux/features/users/usersSlice";
import { useDispatch } from "react-redux";
import { FormWrapper, Input, ErrorMessage } from "./styled";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();

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
      const user = await loginUser(userData).unwrap();
      dispatch(setCredentials(user));
      navigate(HOME);
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
    <FormWrapper>
      <h2>Sign in to your new adventure</h2>
      <form onSubmit={handleSubmitLogin}>
        <div>
          <label>
            Username:
            <Input
              name="username"
              type="text"
              value={userData.username}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </label>
          {touched.username && errors.username && (
            <ErrorMessage> {errors.username} </ErrorMessage>
          )}
        </div>
        <div>
          <label>
            Password:
            <Input
              name="password"
              type="password"
              value={userData.password}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </label>
          {touched.password && errors.password && (
            <ErrorMessage> {errors.password} </ErrorMessage>
          )}
        </div>
        <button type="submit">Sign in</button>
      </form>
      <p>
        Sign Up <Link to={REGISTER}>HERE</Link> if you are not registered
      </p>
    </FormWrapper>
  );
};

export default LoginForm;
