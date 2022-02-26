import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatRoom from "./Components/ChatRoom";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
