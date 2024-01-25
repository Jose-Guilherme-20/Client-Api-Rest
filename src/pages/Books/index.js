import React, { useState, useEffect } from "react";
import "./style.css";
import LogoImage from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";
import api from "../../services/Api";

export default function Books() {
  const [books, setBooks] = useState([]);
  const userName = localStorage.getItem("userName");
  const acessToken = localStorage.getItem("acessToken");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("api/Book/v1/asc/2/1", {
        headers: {
          Authorization: `Bearer ${acessToken}`,
        },
      })
      .then((response) => {
        setBooks(response.data.list);
      });
  }, [acessToken]);

  async function deleteBook(id) {
    try {
      await api.delete(`api/Book/v1/${id}`, {
        headers: {
          Authorization: `Bearer ${acessToken}`,
        },
      });
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      alert("Delete failed! try again");
    }
  }
  async function EditBook(id) {
    try {
      navigate.push(`book/new/${id}`);
    } catch (error) {
      alert("Delete failed! try again");
    }
  }
  return (
    <div className="book-container">
      <header>
        <img src={LogoImage} alt="Erudio"></img>
        <span>
          Welcome, <strong>José</strong>!
        </span>
        <Link className="button" to="/book/new/0">
          Add new Book
        </Link>
        <button type="button">
          <FiPower size={18} color="#251FC5"></FiPower>
        </button>
      </header>
      <h1>Registerd Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>Title:</strong>
            <p>{book.title}</p>
            <strong>Author:</strong>
            <p>{book.author}</p>
            <strong>Price:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(book.price)}
            </p>
            <strong>Release Date:</strong>
            <p>
              {Intl.DateTimeFormat("pt-BR").format(new Date(book.launchDate))}
            </p>

            <button onClick={() => EditBook(book.id)} type="button">
              <FiEdit size={20} color="#251FC5"></FiEdit>
            </button>

            <button type="button" onClick={() => deleteBook(book.id)}>
              <FiTrash2 size={20} color="#251FC5"></FiTrash2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
