import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Service';
import Navbar from './Components/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Contact from './Components/contact';
import Login from './Components/LoginForm';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check localStorage for existing login
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <>
     {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/> 
      <Route path="/ForgotPassword" element={<ForgotPassword/>}/> 
      <Route path="/Navbar" element={<Navbar/>}/> 

    </Routes>
    
  
    </>
  );
}

export default App;
