import React from "react";
import "./style.css";
import LogoImage from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function NewBook() {
  return (
    <div className="new-book-container">
      <div className="content">
        <section className="form">
          <img src={LogoImage} alt="Erudio"></img>
          <h1>Add New Book</h1>
          <p>Enter the book information and click on 'Add'</p>
          <Link className="back-link" to="/books">
            <FiArrowLeft size={16} color="#251fc5"></FiArrowLeft>
            Home
          </Link>
        </section>
        <form>
          <input placeholder="Title"></input>
          <input placeholder="Author"></input>
          <input type="date"></input>
          <input placeholder="Price"></input>

          <button className="button" type="submit"></button>
        </form>
      </div>
    </div>
  );
}
