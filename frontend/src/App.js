import {BrowserRouter as Router,Routes,Route,BrowserRouter,Navigate} from "react-router-dom"
import Home from "./Pages/Home"
import EditForm from "./Pages/EditForm"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/edit-customer/:id" element={<EditForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
