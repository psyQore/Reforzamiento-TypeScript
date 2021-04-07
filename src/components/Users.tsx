import { useUsers } from "../Hooks/useUsers";
import { User } from "../interfaces/reqRes";

const Users = () => {
  const { users, pageNext, pagePrevious } = useUsers();

  const renderItem = ({ id, first_name, last_name, email, avatar }: User) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: 50,
              borderRadius: 100,
            }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

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
        <tbody>{users.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={pagePrevious}>
        Previous
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={pageNext}>
        Next
      </button>
    </>
  );
};

export default Users;
