import GlobalStyle from "./styles/global";
import { Routes } from "./routes";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
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
