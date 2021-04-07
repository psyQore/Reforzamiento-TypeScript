import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    email: "test@test.cl",
    password: "123456",
  });

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const { email, password } = form;

  return (
    <>
      <h3>Form</h3>
      <input
        type="text"
        className="form-control"
        value={email}
        placeholder="Email.."
        onChange={({ target }) => onChange(target.value, "email")}
      />
      <input
        type="text"
        className="form-control mt-2 mb-2"
        value={password}
        placeholder="Password.."
        onChange={({ target }) => onChange(target.value, "password")}
      />

      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  );
};

export default Form;
