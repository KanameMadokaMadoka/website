const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());
//資料庫連結
const db = mysql.createConnection({
  user: "madoka",
  host: "127.0.0.1",
  password: "ABCd@12345",
  database: "employeeSystem",
});
//登入
app.post("/login",(req,res)=>{
 const account = req.body.account;
 const password = req.body.password;
 db.query(
  "SELECT name,password FROM employees WHERE account = ?",
  [account],
  (err,result) => {
    if(err){
      res.send(false);
      console.log(err);
    }else if(password===result[0].password){
      res.send(true);
    }else {
      res.send(false);
    }    
  }
  );
});
//新建員工
app.post("/create", (req, res) => {
  const name = req.body.name;
  const account = req.body.account;
  const password = req.body.password;

  db.query(
    "INSERT INTO employees (name, account, password) VALUES (?,?,?)",
    [name, account, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
//查詢員工
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//員工密碼更新
app.put("/update", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  db.query(
    "UPDATE employees SET password = ? WHERE id = ?",
    [password, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//刪除員工
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//新建設備
app.post("/createequipment", (req, res) => {
  const name = req.body.name;
  const model = req.body.model;
  const category = req.body.category;
  const year = req.body.year;
  const code = req.body.code;
  const position =req.body.position;
  db.query(
  "INSERT INTO equipment (name, model, category, year, code, position) VALUES (?,?,?,?,?,?)",
  [name, model, category, year, code, position],
  (err, result) => {
    if (err) {
      console.log(err);
    }
  }
);
});
//查詢設備
app.get("/equipment", (req, res) => {
  db.query("SELECT * FROM equipment", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//修改設備
app.put("/updateequipment", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const model = req.body.model;
  const category = req.body.category;
  const year = req.body.year;
  const code =req.body.code;
  db.query(
    "UPDATE equipment SET name = ?  model = ? category = ? year = ? code = ? WHERE id = ?",
    [name, model, category, year, code, id ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//刪除設備
app.delete("/deleteequipment/:position", (req, res) => {
  const position = req.params.position;
  db.query("DELETE FROM equipment WHERE position = ?", position, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
