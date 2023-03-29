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

  export default addEmployee;
  