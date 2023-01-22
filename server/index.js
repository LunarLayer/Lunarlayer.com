import express from "express";
import mysql from "mysql";
import cors from "cors";
import path from "path"

const app = express();
app.use(cors({ origin: 'http://lunarlayer.com/' }));
app.use(express.json());
const PORT = process.env.PORT || 8800;

const db = mysql.createConnection({
  host: "mysql45.unoeuro.com",
  user: "lunarlayer_com",
  password: "nEyxG26mHkBect9fw5Dz",
  database: "lunarlayer_com_db"
});

app.get("/strings", (req, res) => {
  const q = "SELECT * FROM strings";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  })
});

app.get("/tonality", (req, res) => {
  const q = "SELECT * FROM tonality";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  })
});

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});