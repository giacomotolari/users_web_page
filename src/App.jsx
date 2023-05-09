import { useEffect } from "react";
import "./App.css";
import "./styles/app.scss";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return <div className="App"></div>;
}

export default App;
