import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";



//end in 3 lesson  18:10


function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<MainPage/>}></Route>
       <Route path='/:id' element={<UserPage/>}></Route>

     </Routes>
   </BrowserRouter>
  );
}

export default App;
