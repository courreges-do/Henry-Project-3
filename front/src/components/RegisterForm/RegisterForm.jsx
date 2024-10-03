import { useState } from "react";

const RegisterForm = () => {
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
  };
  return (
    <>
      <h2>New User Registration</h2>
      <form>
        <div>
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={newUserData.username}
              onChange={""}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={newUserData.password}
              onChange={""}
            />
          </label>
        </div>
        <div>
          <label>
            Repeat Password:
            <input
              name="repeatPassword"
              type="password"
              value={newUserData.repeatPassword}
              onChange={""}
            />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={newUserData.name}
              onChange={""}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={newUserData.email}
              onChange={""}
            />
          </label>
        </div>
        <div>
          <label>
            Birth Date:
            <input
              name="birthdate"
              type="date"
              value={newUserData.birthdate}
              onChange={""}
            />
          </label>
        </div>
        <div>
          <label>
            DNI Number:
            <input
              name="nDni"
              type="number"
              value={newUserData.nDni}
              onChange={""}
            />
          </label>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
