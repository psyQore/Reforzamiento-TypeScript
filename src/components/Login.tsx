import { useEffect, useReducer } from "react";

// Interfas
interface AuthState {
  validate: boolean;
  token: string | null;
  username: string;
  name: string;
}

// State
const initialState: AuthState = {
  validate: true,
  token: null,
  username: "",
  name: "",
};

// Action
type AuthAction = {
  type: "logout";
};

// Reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validate: false,
        token: null,
        name: "",
        username: "",
      };
    default:
      return state;
  }
};

const Login = () => {
  const [{ validate }, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  if (validate) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando..</div>
      </>
    );
  }

  return (
    <>
      <div className="alert alert-danger">No Autenticado</div>
      <div className="alert alert-success">Autenticado</div>
      <button className="btn btn-primary">Login</button>
      &nbsp;
      <button className="btn btn-danger">Logout</button>
    </>
  );
};

export default Login;
