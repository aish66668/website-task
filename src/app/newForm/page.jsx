"use client"
import { useState, useEffect } from "react";
import "./page.css"; // Import external CSS file

export default function Home() {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState("");
    const [editId, setEditId] = useState(null);
  
    useEffect(() => {
      fetch("/api/products")
        .then((res) => res.json())
        .then((data) => setItems(data));
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newItem = { title };
  
      if (editId) {
        newItem.id = editId;
        const response = await fetch("/api/products", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newItem),
        });
        const data = await response.json();
        setItems(items.map((item) => (item.id === editId ? data : item)));
        setEditId(null);
      } else {
        const response = await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newItem),
        });
        const data = await response.json();
        setItems([data, ...items]);
      }
  
      setTitle("");
    };
  
    const handleDelete = async (id) => {
      await fetch("/api/products", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      setItems(items.filter((item) => item.id !== id));
    };
  
    const handleEdit = (item) => {
      setTitle(item.title);
      setEditId(item.id);
    };
  
  return (
    <div className="container" style={{marginTop:"100px"}}>
      <h1 className="title">CRUD</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter item title"
          className="input"
        />
        <button className="button">
          {editId ? "Update Item" : "Add Item"}
        </button>
      </form>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id} className="list-item">
            <span>{item.title}</span>
            <div>
              <button onClick={() => handleEdit(item)} className="edit-button">Edit</button>
              <button onClick={() => handleDelete(item.id)} className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
