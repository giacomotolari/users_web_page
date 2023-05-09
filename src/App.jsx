import { useEffect, useState } from "react";
import "./App.css";
import "./styles/app.scss";

function App() {
  const [users, setUsers] = useState(() => {
    const storedData = localStorage.getItem("users");
    return storedData ? JSON.parse(storedData) : [];
  });
  console.log('users:',users);
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      localStorage.setItem("users", JSON.stringify(data));
    };
    fetchData();
  }, []);

  return <div className="App"></div>;
}

export default App;
