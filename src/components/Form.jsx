import { useState } from "react";
import { ImEyeBlocked, ImEye } from "react-icons/im";

function Form({ setUsers, users }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  const handleShowPassword = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const emptyInputFields = () => {
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: crypto.randomUUID(),
      name,
      username,
      email,
      password,
    };

    const userExist = users.some((user) => user.username === username);
    console.log(
      "🚀 ~ file: Form.jsx:34 ~ handleSubmit ~ userExist:",
      userExist
    );

    if (!name || !username || !email || !password)
      return alert("Please fill all fields");
    else if (userExist) return alert("User already exist");

    setUsers((prevUsers) => [...prevUsers, newUser]);

    emptyInputFields();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        type="text"
        value={name}
        maxLength={15}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="user name"
        type="text"
        maxLength={15}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="password-icon-input-wrapper">
        <input
          type={inputType}
          id="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          minLength={3}
          maxLength={20}
          onPaste={(e) => {
            e.preventDefault();
            return false;
          }}
          onCopy={(e) => {
            e.preventDefault();
            return false;
          }}
        />
        {inputType === "password" ? (
          <ImEyeBlocked
            className="icon-eye-password"
            onClick={handleShowPassword}
          />
        ) : (
          <ImEye className="icon-eye-password" onClick={handleShowPassword} />
        )}
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}

export default Form;
