import { useState } from "react";
import axios from "axios";
import { validateRegisterForm } from "../../helpers/validateRegisterForm";

const RegisterForm = () => {
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
      } else return alert("The form has errors");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({
      ...newUserData,
      [name]: true,
    });
  };
  return (
    <>
      <h2>Sign up to unlock new experiences</h2>
      <form onSubmit={submitRegisterForm}>
        <div>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={newUserData.name}
              onChange={handleInputs}
              onBlur={handleBlur}
            />
          </label>
          {touched.name && errors.name && (
            <p style={{ color: "red" }}> {errors.name} </p>
          )}
        </div>
        <div>
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={newUserData.email}
              onChange={handleInputs}
              onBlur={handleBlur}
            />
          </label>
          {touched.email && errors.email && (
            <p style={{ color: "red" }}> {errors.email} </p>
          )}
        </div>
        <div>
          <label>
            Birth Date:
            <input
              name="birthdate"
              type="date"
              value={newUserData.birthdate}
              onChange={handleInputs}
              onBlur={handleBlur}
            />
          </label>
          {touched.birthdate && errors.birthdate && (
            <p style={{ color: "red" }}> {errors.birthdate} </p>
          )}
        </div>
        <div>
          <label>
            DNI Number:
            <input
              name="nDni"
              type="number"
              value={newUserData.nDni}
              onChange={handleInputs}
              onBlur={handleBlur}
            />
          </label>
          {touched.nDni && errors.nDni && (
            <p style={{ color: "red" }}> {errors.nDni} </p>
          )}
        </div>
        <div>
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={newUserData.username}
              onChange={handleInputs}
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
              value={newUserData.password}
              onChange={handleInputs}
              onBlur={handleBlur}
            />
          </label>
          {touched.password && errors.password && (
            <p style={{ color: "red" }}> {errors.password} </p>
          )}
        </div>
        <div>
          <label>
            Repeat Password:
            <input
              name="repeatPassword"
              type="password"
              value={newUserData.repeatPassword}
              onChange={handleInputs}
              onBlur={handleBlur}
            />
          </label>
          {touched.repeatPassword && errors.repeatPassword && (
            <p style={{ color: "red" }}> {errors.repeatPassword} </p>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
