import { useState, useRef } from "react";
import { ImEyeBlocked, ImEye } from "react-icons/im";

function Form({ setUsers, users }) {
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [inputType, setInputType] = useState("password");

  const inputNameRef = useRef(null);

  const atLeastOneFieldIsEmpty =
    !newUser.name || !newUser.username || !newUser.email || !newUser.password;

  const handleShowPassword = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const emptyInputFields = () => {
    setNewUser({
      name: "",
      username: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userToAdd = {
      id: crypto.randomUUID(),
      ...newUser,
    };

    setUsers((prevUsers) => [...prevUsers, userToAdd]);

    emptyInputFields();
  };

  const userExist = users.some((user) => user.username === newUser.username);

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputNameRef}
        placeholder="name"
        type="text"
        value={newUser.name}
        maxLength={15}
        onChange={(e) =>
          setNewUser((prevUser) => ({ ...prevUser, name: e.target.value }))
        }
        onFocus={() => (inputNameRef.current.style.backgroundColor = "yellow")}
        onBlur={() => (inputNameRef.current.style.backgroundColor = "white")}
      />
      <input
        placeholder="user name"
        type="text"
        maxLength={15}
        value={newUser.username}
        onChange={(e) =>
          setNewUser((prevUser) => ({
            ...prevUser,
            username: e.target.value,
          }))
        }
        onFocus={(e) => (e.currentTarget.style.backgroundColor = "yellow")}
        onBlur={(e) => (e.currentTarget.style.backgroundColor = "white")}
      />
      <input
        placeholder="email"
        type="email"
        value={newUser.email}
        onChange={(e) =>
          setNewUser((prevUser) => ({ ...prevUser, email: e.target.value }))
        }
        onFocus={(e) => (e.currentTarget.style.backgroundColor = "yellow")}
        onBlur={(e) => (e.currentTarget.style.backgroundColor = "white")}
      />

      <div className="password-icon-input-wrapper">
        <input
          type={inputType}
          id="password"
          value={newUser.password}
          placeholder="password"
          onChange={(e) =>
            setNewUser((prevUser) => ({
              ...prevUser,
              password: e.target.value,
            }))
          }
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
          onFocus={(e) => (e.currentTarget.style.backgroundColor = "yellow")}
          onBlur={(e) => (e.currentTarget.style.backgroundColor = "white")}
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
      <button type="submit" disabled={atLeastOneFieldIsEmpty || userExist}>
        Add User
      </button>
    </form>
  );
}

export default Form;
