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

type LoginPayload = {
  username: string;
  name: string;
};

// Action
type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

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
    case "login":
      const { name, username } = action.payload;
      return {
        validate: false,
        token: "abc123",
        name,
        username,
      };
    default:
      return state;
  }
};

const Login = () => {
  const [{ validate, token, name }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        name: "Juan",
        username: "psyQu",
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "logout"
    });
  };

  if (validate) {
    return (
      <>
        <div className="alert alert-info">Validando..</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">Autenticado Como {name}</div>
      ) : (
        <div className="alert alert-danger">No Autenticado</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={ logout }>Logout</button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};

export default Login;
