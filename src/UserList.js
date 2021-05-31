import axios from "axios";
import React, { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState(null)
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      setUsers(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  return <ol>{users&& true ? users.map(user => <li>{user.name}</li>) : <div></div> }</ol>;
};

export default UserList;
