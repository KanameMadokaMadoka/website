import "./App.css";
import { useState} from "react";
import {useNavigate} from "react-router-dom";
import Axios from "axios";
import {HashTable} from "./Componets/test";
import HashTableComponent from "./Componets/test";
// import { HasakiTable } from "./Componets/test2";
function App() {
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [newpassword,setNewPassword] = useState();
  const [employeeList, setEmployeeList] = useState([]);
  const [count,setCount] =useState([]);
  let navigate =useNavigate();
  // const hsakitable = new HasakiTable(5)
  // hsakitable.set('Kaname','Madoka')
  // hsakitable.set('Akemi','Houra')
  // hsakitable.set('sakura','kyoko')
  // hsakitable.set('miki','sayaka')
  // hsakitable.set('tomoe','mami')
  // console.log('我是hsakitbale的keys',hsakitable.Keys())
  // console.log('我是hsakitable的values',hsakitable.values())
  // console.log('======================')
  // console.log(hsakitable.get('Kaname'))
  // console.log('======================')
  // console.log(hsakitable.get('miki'))
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);    
    // 在使用 setter 函數更新狀態值時，React 會自動傳遞當前的狀態值給這個函數。而在 setCount(prevCount => prevCount + 1) 中，prevCount 就是這個傳遞進來的當前狀態值。
    // 所以你可以隨意改變數名
  }
    //測試哈希表的功能
  // const hashadd = () =>{
  //   const hashTable = new HashTable()
  //   hashTable.add(count,count+1)
  //   console.log('以下是你輸入的哈希表')
  //   console.log('我是hashTable的keys',hashTable.keys())
  //   console.log('我是hashTable的Values',hashTable.values())
  //   handleIncrement()
  // }
  //測試挑轉功能
  function jump(){
    //測試已OK 真的可以跳轉
    navigate("/main");
  }
  //登入和跳轉頁面功能
  function login(){
    Axios.post("http://localhost:3001/login",{
    account: account,
    password:password,}).then((response)=>{
      if(response.data){
        console.log(response.data);
        navigate("/main");
      }else{
        console.log(response.data);
        console.log("帳號密碼錯誤");
      }
    });
  };  
  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      account: account,
      password: password,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          account: account,
          password: password,
        },
      ]);
    });
  };
  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };
  const updateEmployeePassword = (id) => {
    Axios.put("http://localhost:3001/update", { password: newpassword, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  name: val.name,
                  account: val.account,
                  password: newpassword,
                }
              : val;
          })
        );
      }
    );
  };
  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };  
  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input 
         type="text"
         onChange={(event) => {
            setName(event.target.value);
         }}
         />

        <label>Account:</label>
        <input
          type="text"
          onChange={(event) => {
            setAccount(event.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="text"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={login}>login</button>
        <button onClick={jump}>mainpage</button>
        <button onClick={addEmployee}>register</button>
        {/* <button onClick={hashadd}>哈希表測試</button> */}
        {/* <h1>My App</h1>
        <HashTableComponent /> */}
      </div>
      <div className="employees">
        <button onClick={getEmployees}>Show Employees</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Account: {val.account}</h3>
                <h3>Password: {val.password}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="XXXXXXX"
                  onChange={(event) => {
                    setNewPassword(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateEmployeePassword(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>
                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
