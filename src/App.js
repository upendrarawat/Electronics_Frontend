import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Home from './components/useerInterface/components/screens/Home';
import Cart from './components/useerInterface/components/screens/Cart';
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard"
import ProductPurchaseScreen from './components/useerInterface/components/screens/ProductPurchaseScreen'
import OtpComponent from './components/useerInterface/components/users/OtpComponent';
import Shopping from './components/useerInterface/components/screens/Shopping'
import ProductFilterScreen from './components/useerInterface/components/screens/ProductFilterScreen';
import MyAccount from './components/useerInterface/components/screens/MyAccount';


function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route element={<AdminLogin/>} path="/adminlogin"/>
        <Route element={<Dashboard/>} path="/dashboard/*"/>
        <Route element={<Home/>} path="/Home"/>
        <Route element={<ProductPurchaseScreen/>} path="/productpurchasescreen" />
        <Route element={<Cart/>} path="/cart"/>
        <Route element={<OtpComponent />} path="/otp"/>
        <Route element={<Shopping/>} path="/useraccount"/>
        <Route element={<ProductFilterScreen/>} path="/ProductFilterScreen"/>
        <Route element={<MyAccount/>} path="/Myaccount"/>
       

      
      </Routes>
      </Router> 
     
      </div>
  );
}

export default App;
