import { useState } from "react";
import axios from "axios";
import { validateRegisterForm } from "../../helpers/validateRegisterForm";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN } from "../../helpers/pathsRoutes";
import { FormWrapper, Input, ErrorMessage } from "./styled";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [newUserData, setNewUserData] = useState({
    username: "",
    password: "",
    repeatPassword: "",
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
  });

  const handleInputs = (event) => {
    const { value, name } = event.target;
    setNewUserData({
      ...newUserData,
      [name]: value,
    });
    setErrors(validateRegisterForm({ ...newUserData, [name]: value }));
  };

  const submitRegisterForm = async (e) => {
    e.preventDefault();
    try {
      if (Object.keys(errors).length === 0) {
        await axios.post("http://localhost:3000/users/register", newUserData);
        alert("User registered successfully");

        setNewUserData({
          username: "",
          password: "",
          repeatPassword: "",
          name: "",
          email: "",
          birthdate: "",
          nDni: "",
        });
        navigate(LOGIN);
      } else return alert("The form has errors");
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Registration failed";
      alert(errorMessage);
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };
  return (
    <FormWrapper>
      <h2>Sign up to unlock new experiences</h2>
      <form onSubmit={submitRegisterForm}>
        <div>
          <label>
            Name:
            <Input
              name="name"
              type="text"
              value={newUserData.name}
              onChange={handleInputs}
              onBlur={handleBlur}
            />
          </label>
          {touched.name && errors.name && (
            <ErrorMessage> {errors.name} </ErrorMessage>
          )}
        </div>
        <div>
          <label>
            Email:
            <Input
              name="email"
              type="email"
              value={newUserData.email}
              onChange={handleInputs}
              onBlur={handleBlur}
            />
          </label>
          {touched.email && errors.email && (
            <ErrorMessage> {errors.email} </ErrorMessage>
          )}
        </div>
        <div>
          <label>
            Birth Date:
            <Input
              name="birthdate"
              type="date"
              value={newUserData.birthdate}
              onChange={handleInputs}
              onBlur={handleBlur}
            />
          </label>
          {touched.birthdate && errors.birthdate && (
            <ErrorMessage> {errors.birthdate} </ErrorMessage>
          )}
        </div>
        <div>
          <label>
            DNI Number:
            <Input
              name="nDni"
              type="number"
              value={newUserData.nDni}
              onChange={handleInputs}
              onBlur={handleBlur}
            />
          </label>
          {touched.nDni && errors.nDni && (
            <ErrorMessage> {errors.nDni} </ErrorMessage>
          )}
        </div>
        <div>
          <label>
            Username:
            <Input
              name="username"
              type="text"
              value={newUserData.username}
              onChange={handleInputs}
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
              value={newUserData.password}
              onChange={handleInputs}
              onBlur={handleBlur}
            />
          </label>
          {touched.password && errors.password && (
            <ErrorMessage> {errors.password} </ErrorMessage>
          )}
        </div>
        <div>
          <label>
            Repeat Password:
            <Input
              name="repeatPassword"
              type="password"
              value={newUserData.repeatPassword}
              onChange={handleInputs}
              onBlur={handleBlur}
            />
          </label>
          {touched.repeatPassword && errors.repeatPassword && (
            <ErrorMessage> {errors.repeatPassword} </ErrorMessage>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Sign In <Link to={LOGIN}>HERE</Link> if you have an existing account
      </p>
    </FormWrapper>
  );
};

export default RegisterForm;
