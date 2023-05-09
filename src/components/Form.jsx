import { useState } from "react";

function Form({ setUsers }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: crypto.randomUUID(),
      name,
      username,
      email,
      password,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="user name"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default Form;
