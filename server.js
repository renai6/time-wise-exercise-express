require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

console.log(process.env.DB_PASSWORD);

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/api/notes", async (req, res) => {
  const [rows] = await connection.query("SELECT * FROM notes");

  res.json(rows);
});

app.post("/api/notes", async (req, res) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ message: "missing" });

  const note = { id: uuidv4(), content };

  try {
    await connection.query("INSERT INTO notes (id, content) VALUES (? ,?)", [
      note.id,
      note.content,
    ]);
    res.status(201).json(note);
  } catch (err) {
    console.log(err);

    res.status(500).json({ error: "Can not save note" });
  }
});

app.listen(port, () => {
  console.log(`Notes api listening on port ${port}`);
});
