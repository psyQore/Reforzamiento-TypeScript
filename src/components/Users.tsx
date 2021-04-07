import { useEffect } from "react";
import { reqResApi } from "../api/reqRes";

const Users = () => {
  useEffect(() => {
    // Llamado de API
    reqResApi
      .get("/users")
      .then((resp) => {
        console.log(resp.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3>Users: </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default Users;
