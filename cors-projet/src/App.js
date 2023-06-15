import MessageSender from "./component/MessageSender";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MessageSender" element={<MessageSender />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
