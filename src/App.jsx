import { useEffect, useState } from "react";
import "./App.css";
import "./styles/app.scss";
import Users from "./components/Users";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState(() => {
    const storedData = localStorage.getItem("users");
    return storedData ? JSON.parse(storedData) : [];
  });

  const API_URL = "https://jsonplaceholder.typicode.com/users";
  
  useEffect(() => {
    const fetchData = async () => {
      console.log('users-test:',users);
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers(data);
    };
    // fetch data only if users array is empty
    if (users.length === 0) {
      fetchData();
    } else {
      // save users array to local storage if it is not empty and users updated
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  return (
    <div className="App">
      <Form setUsers={setUsers} />
      <Users users={users} />
    </div>
  );
}

export default App;
