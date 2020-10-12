import React from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import { useEffect } from "react";
const host = "http://localhost:3003";

function EditUser() {
  const { id } = useParams();
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
    await Axios.patch(`${host}/users/${id}`, user);
    history.push("/");
  };
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const userData = await Axios.get(`${host}/users/${id}`);
    setUser(userData.data);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit User</h2>
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

export default EditUser;
