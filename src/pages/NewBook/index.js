import React, { useState } from "react";
import "./style.css";
import LogoImage from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/Api";

export default function NewBook() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [lauchDate, setLauchDate] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();
  async function CreateBook(e) {
    e.preventDefault();

    const data = {
      title,
      author,
      lauchDate,
      price,
    };
    const AcessToken = localStorage.getItem("AcessToken");
    try {
      await api.post("api/Book/v1", data, {
        headers: {
          Authorization: `Bearer ${AcessToken}`,
        },
      });
    } catch (err) {
      alert("Error while recording Book! Try again");
    }
    navigate("/books");
  }
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
        <form onSubmit={CreateBook}>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
          <input
            type="date"
            value={lauchDate}
            onChange={(e) => setLauchDate(e.target.value)}
          ></input>
          <input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>

          <button className="button" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
