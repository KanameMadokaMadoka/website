function login(){
    Axios.post("http://localhost:3001/login",{
    account: account,
    password:password,}).then((response)=>{
      if(response){
        console.log(response);
        window.location.href="main.html";
      }else{
        console.log("帳號密碼錯誤");
      }
    }); 
  };

  export default login;