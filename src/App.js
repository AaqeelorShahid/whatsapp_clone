import React, {useState} from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Chat from "./Chat/Chat";
import Login from "./Login/Login";
import Sidebar from "./Sidebar/Sidebar";
import { useStatevalue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStatevalue()

  return (
    <div className="App">
      {!user ? (
        <Login/>
      ) : (
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
      )}
    </div>
  );
}

export default App;
