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


export default updateEmployeePassword;
