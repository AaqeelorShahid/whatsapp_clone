import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Chat from "./Chat/Chat";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Sidebar />
                <Chat />
              </>
            }
          />
          <Route
            path="/room/:roomId"
            element={
              <>
                <Sidebar />
                <Chat />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
