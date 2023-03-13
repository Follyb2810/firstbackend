// import logo from './logo.svg';
import './App.css';
import Header from './componet/Header';
import Footer from './componet/Footer';
import LandingPages from './screens/LandingPages';
import RegisterPage from './screens/RegisterPage';
import LoginPage from './screens/LoginPage';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Mynote from './Mynote';
// f781ghmWAkSK6f6u
function App() {
  return (
    <BrowserRouter>
      <Header/>
            <main>
        <Routes>
            <Route path="/" exact element={<LandingPages/>}/>
            <Route path="/register" exact  element={<RegisterPage/>}/>
            <Route path="/login" exact  element={<LoginPage/>}/>
            <Route path="/note" exact  element={<Mynote/>}/>
         </Routes>
              </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
