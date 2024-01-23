import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/Api";
import "./style.css";
import logoImage from "../../assets/logo.svg";
import padlock from "../../assets/padlock.png";
export default function Login() {
  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("");
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();

    try {
      const response = await api.post("api/Auth/v1/signin", {
        name: name,
        lastname: lastName,
        gender: "",
        address: "",
      });
      localStorage.setItem("name", name);
      localStorage.setItem("AcessToken", response.data);

      navigate("/books");
    } catch (error) {
      alert("login failed! Try again");
    }
  }
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImage} alt="Erudio logo"></img>
        <form>
          <h1>Acess your Account</h1>
          <input
            placeholder="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          ></input>

          <input
            type="lastName"
            placeholder=" lastName"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          ></input>

          <button className="button" type="submit" onClick={login}>
            Login
          </button>
        </form>
      </section>
      <img src={padlock} alt="login"></img>
    </div>
  );
}
