import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

const Users = () => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Llamado de API
    reqResApi
      .get<ReqResList>("/users")
      .then((resp) => {
        console.log(resp.data.data[0].first_name);
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
