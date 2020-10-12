import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
const host = "http://localhost:3003";

function AddUser() {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const onInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const submitUserForm = async (e) => {
    e.preventDefault();
    await Axios.post(`${host}/users`, user);
    history.push("/");
  };
  return (
    <>
      <div className="container mt-5">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add User</h2>
          <form
            onSubmit={(e) => {
              submitUserForm(e);
            }}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                value={user.name}
                name="name"
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your UserName"
                value={user.username}
                name="username"
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Email"
                value={user.email}
                name="email"
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Phone Number"
                value={user.phone}
                name="phone"
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Website Name"
                value={user.website}
                name="website"
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUser;
