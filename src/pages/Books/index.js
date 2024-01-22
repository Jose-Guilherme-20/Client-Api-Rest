import React from "react";
import "./style.css";
import LogoImage from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";

export default function Book() {
  return (
    <div className="book-container">
      <header>
        <img src={LogoImage} alt="Erudio"></img>
        <span>
          Welcome, <strong>José</strong>!
        </span>
        <Link className="button" to="book/new">
          Add new Book
        </Link>
        <button type="button">
          <FiPower size={18} color="#251FC5"></FiPower>
        </button>
      </header>
      <h1>Registerd Books</h1>
      <ul>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Author:</strong>
          <p>Nigel Poulton</p>
          <strong>Price:</strong>
          <p>Docker Deep Dive</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>

          <button type="button">
            <FiEdit size={20} color="#251FC5"></FiEdit>
          </button>

          <button type="button">
            <FiTrash2 size={20} color="#251FC5"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Author:</strong>
          <p>Nigel Poulton</p>
          <strong>Price:</strong>
          <p>Docker Deep Dive</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>

          <button type="button">
            <FiEdit size={20} color="#251FC5"></FiEdit>
          </button>

          <button type="button">
            <FiTrash2 size={20} color="#251FC5"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Author:</strong>
          <p>Nigel Poulton</p>
          <strong>Price:</strong>
          <p>Docker Deep Dive</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>

          <button type="button">
            <FiEdit size={20} color="#251FC5"></FiEdit>
          </button>

          <button type="button">
            <FiTrash2 size={20} color="#251FC5"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Author:</strong>
          <p>Nigel Poulton</p>
          <strong>Price:</strong>
          <p>Docker Deep Dive</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>

          <button type="button">
            <FiEdit size={20} color="#251FC5"></FiEdit>
          </button>

          <button type="button">
            <FiTrash2 size={20} color="#251FC5"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Author:</strong>
          <p>Nigel Poulton</p>
          <strong>Price:</strong>
          <p>Docker Deep Dive</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>

          <button type="button">
            <FiEdit size={20} color="#251FC5"></FiEdit>
          </button>

          <button type="button">
            <FiTrash2 size={20} color="#251FC5"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Author:</strong>
          <p>Nigel Poulton</p>
          <strong>Price:</strong>
          <p>Docker Deep Dive</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>

          <button type="button">
            <FiEdit size={20} color="#251FC5"></FiEdit>
          </button>

          <button type="button">
            <FiTrash2 size={20} color="#251FC5"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Author:</strong>
          <p>Nigel Poulton</p>
          <strong>Price:</strong>
          <p>Docker Deep Dive</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>

          <button type="button">
            <FiEdit size={20} color="#251FC5"></FiEdit>
          </button>

          <button type="button">
            <FiTrash2 size={20} color="#251FC5"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Author:</strong>
          <p>Nigel Poulton</p>
          <strong>Price:</strong>
          <p>Docker Deep Dive</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>

          <button type="button">
            <FiEdit size={20} color="#251FC5"></FiEdit>
          </button>

          <button type="button">
            <FiTrash2 size={20} color="#251FC5"></FiTrash2>
          </button>
        </li>
      </ul>
    </div>
  );
}
