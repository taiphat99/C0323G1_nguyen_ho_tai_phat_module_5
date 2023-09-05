import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OriModal from "../../modals/modal/OriModal";

function User() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  // console.log(users);
  const [modal, setModal] = useState({
    status: false,
    data: null
  });

  const handleModal = (item) => {
    setModal({
      status: true,
      data: item
    })
  }

  const handleCloseModal = () => {
    setModal({
      status: false,
      data: null
    })
  }

  const confirmDelete = async (id) => {
     dispatch({ type: "DELETE_USER", payload: id })
    handleCloseModal();
  }


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td><button onClick={() => handleModal(user)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        modal.status && <OriModal
          msg={`Do you want to remove username: ${modal.data.username}`}
          onClose={() => handleCloseModal()}
          onConfirm={() => confirmDelete(modal.data.id)}
        />

      }
    </div>
  );
}
export default User;