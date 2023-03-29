import "./App2.css";
import { useState } from "react";
import Axios from "axios";

function App2() {
    const [name, setName] = useState("Akemi");
    const [model, setModel] = useState("EPSON");
    const [category, setCategory] = useState("Printer");
    const [year, setYear] = useState("2023");
    const [code,setCode] = useState("123456789");
    const [position,setPosition] = useState("1");
    const [equipmentList, setEquipmentList] = useState([]);
    let user="Madoka";

    document.addEventListener('drop',(e) =>{
        e.preventDefault();
        e.target.alt="";
        e.target.src="printer.png";
        console.log(e.target.id);
        console.log("拖移成功!");
    },false);
    
    document.addEventListener('dragstart',(e) =>{
        e.target.style.border='5px dashed yellow';
        console.log("開始拖移");
    }, false);
    
    document.addEventListener('dragend',(e) =>{
        e.target.style.border='none';
        console.log("拖移結束");
    },false);
    

   
    //新增設備
    const  addEquipment = () => {
        Axios.post("http://localhost:3001/createequipment", {
          name: name,
          model: model,
          category: category,
          year: year,
          code: code,
          position: position,
        }).then(() => {
          setEquipmentList([
            ...equipmentList,
            {
              name: name,
              model: model,
              category: category,
              year: year,
              code: code,
              position: position,
            },
          ]);
        });
      };
      //獲取設備資訊
      const getEquipment = () => {
        Axios.get("http://localhost:3001/equipment").then((response) => {
          setEquipmentList(response.data);
        });
      };
      //刷新顯示設備
      const flashEquipment=()=>{
        let tmp =equipmentList.length;
        let a="",b="",c="",d="",e="",f="";
        for(let i=0; i<tmp;i++){
          a=equipmentList[i].name;
          b=equipmentList[i].model;
          c=equipmentList[i].category;
          d=equipmentList[i].year;
          e=equipmentList[i].code;
          f=equipmentList[i].position;
          document.getElementById("p"+i).innerText=a;
          if(c=="printer"){document.getElementById(i).src="printer.png";}else if(c=="cmp"){document.getElementById(i).src="cmp.png";};
          console.log(a,b,c,d,e,f);
        };
      }
    //獲取設備資訊 顯示在console.log
    const test =() =>{
      getEquipment();
      console.log(equipmentList);
      flashEquipment();
      
    };
   //確認code和position是否有衝突和最大上限數量
   const check = (c,p) => {
   let tmp=equipmentList.length;
   if(tmp<20){
   for(let i=0;i<=tmp;i++){ 
   console.log(i,equipmentList[i].code,equipmentList[i].position);
   if(equipmentList[i].code==c){window.alert("編號已存在"); return false;};
   if(equipmentList[i].position==position){window.alert("位置上已有設備"); return false;}else{return true;}
  }
  }else{ window.alert("設備已達最大上限"); return false;}};

  const inputdata =() =>{
    const a = document.getElementById("footerform");
    if(check()){addEquipment(); {window.alert("輸入成功"); a.style.visibility= "none";}}else{window.alert("輸入失敗");};
  };

  const showinputdata= ()=>{
    const a =document.getElementById("footerform")
    a.style.visibility="visible";
  }
  const delinputdata= ()=>{
    const a=document.getElementById("footerform")
    a.style.visibility="hidden";
  }



    function deldata(e) {
        setCode(prompt('編號','123456789'));
        if (code == null || "") {
            window.alert("已經取消輸入");
        } else {
            window.alert("刪除成功");
        }
    }
return(
    <div className="grid-container">
        <div className="item1">
        <p>設備管理系統</p> 
        <button>匯出</button>
        <button>匯入</button>
        <button onClick={test}>獲取資料</button>
        <button>登出</button>
        </div>
        <div className="item2">
        <p>使用者: {user}</p>
        <ul>
            <li>名子:{name}</li>
            <li>型號:{model}</li>
            <li>類別:{category}</li>
            <li>年份:{year}</li>
            <li>財編:{code}</li>
            <li>位置:{position}</li>
        </ul>
        <button onClick={showinputdata}>新增印表機</button>
        <button onClick={delinputdata}>刪除印表機</button>
        </div>
        <div className="item3 e"><img id="0"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p0">我是1號</p></div>
        <div className="item4 e"><img id="1"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p1">我是2號</p></div>
        <div className="item5 e"><img id="2"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p2">我是3號</p></div>
        <div className="item6 e"><img id="3"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p3">我是4號</p></div>
        <div className="item7 e"><img id="4"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p4">我是5號</p></div>
        <div className="item8 e"><img id="5"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p5">我是6號</p></div>
        <div className="item9 e"><img id="6"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p6">我是7號</p></div>
        <div className="item10 e"><img id="7"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p7">我是8號</p></div>
        <div className="item11 e"><img id="8"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p8">我是9號</p></div>
        <div className="item12 e"><img id="9"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p9">我是10號</p></div>
        <div className="item13 e"><img id="10"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p10">我是11號</p></div>
        <div className="item14 e"><img id="11"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p11">我是12號</p></div>
        <div className="item15 e"><img id="12"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p12">我是13號</p></div>
        <div className="item16 e"><img id="13"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p13">我是14號</p></div>
        <div className="item17 e"><img id="14"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p14">我是15號</p></div>
        <div className="item18 e"><img id="15"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p15">我是16號</p></div>
        <div className="item19 e"><img id="16"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p16">我是17號</p></div>
        <div className="item20 e"><img id="17"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p17">我是18號</p></div>
        <div className="item21 e"><img id="18"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p18">我是19號</p></div>
        <div className="item22 e"><img id="19"src="no.png" alt="" draggable="true" height={25} width={25}/><p id="p19">我是20號</p></div>
        <div  id="footerform" className="item23">
          <form>
            <label >名子:</label><input className="inputarea" type="text" onChange={(event)=>{setName(event.target.value)}} ></input>
            <label >型號:</label>
              <select onChange={(event)=>{setModel(event.target.value)}} >
              <option value="EPSON">EPSON</option>
              <option value="NEXSON">NEXSON</option>
              <option value="APPLE">APPLE</option>
              <option value="TSMC">TSMC</option>
              </select>
            <label>類別:</label>
            <select onChange={(event)=>{setCategory(event.target.value)}}>
              <option value="printer">Printer</option>
              <option value="cmp">Computer</option>
              <option value="ups">Ups</option>
            </select>
            <label >年份:</label>
            <select onChange={(event)=>{setYear(event.target.value)}}>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
            <label >財編:</label>
            <input className="inputarea"type="text" onChange={(event)=>{setCode(event.target.value)}}></input>
            <label >位置:</label>
            <select onChange={(event)=>{setPosition(event.target.value)}}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            </select>
            <input type="submit" value="送出" className="senddata" onClick={inputdata}></input>
          </form>
        </div>
      </div>
);
}
export default App2;
