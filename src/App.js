import { Route, Routes } from "react-router-dom";
import "./categories.styles.scss"
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/signin.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () =>{

  return (
    <h1>I am the Shop</h1>
  )
}
function App() {
  return (
   <Routes>
    <Route path="/" element={ <Navigation/>}> 

    <Route index element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>

    
    </Route>
   </Routes>
  );
}

export default App;
