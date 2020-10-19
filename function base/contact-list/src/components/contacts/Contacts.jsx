import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

function Contacts() {
  const contacts = useSelector((state) => state.contacts);
  return (
    <div>
      <table class="table shadow">
        <thead className="">
          <tr>
            <th scope="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name=""
                  className="custom-control-input"
                  id=""
                />
                <label className="custom-control-label"></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <Contact contact={contact} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
