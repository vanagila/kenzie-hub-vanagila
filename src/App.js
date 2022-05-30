import GlobalStyle from "./styles/global";
import { Routes } from "./routes";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const tokenStorage = localStorage.getItem("@KenzieHub:Token");
    const userStorage = localStorage.getItem("@KenzieHub:User");
    if (tokenStorage && userStorage) {
      setToken(tokenStorage);
      setUser(userStorage);
      setAuthenticated(true);
    }
  }, []);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <Routes
        user={user}
        setUser={setUser}
        token={token}
        setToken={setToken}
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
    </div>
  );
}

export default App;
