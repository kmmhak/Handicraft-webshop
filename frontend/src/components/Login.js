import { useState } from "react";
import LoginFormInput from "./LoginFormInput";
import axios from "axios";
import Button from "./UI_components/Button";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "email",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "password",
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/login", {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        console.log(response);
        navigate(`/users/${response.data.user[0].id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <LoginFormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Button className="login__btn" text="Login" />
      </form>
    </div>
  );
};

export default Login;
