import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const host = "http://localhost:3003";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`${host}/users`);
    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`${host}/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4 mx-auto">
        <h1>User Details</h1>
      </div>
      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/users/view/${user.id}`}
                  className="btn btn-primary mx-1"
                >
                  view
                </Link>
                <Link
                  to={`/users/edit/${user.id}`}
                  className="btn btn-warning mx-1"
                >
                  edit
                </Link>
                <Link
                  to=""
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                  className="btn btn-danger mx-1"
                >
                  delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
