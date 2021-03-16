import logo from './logo.svg';
import './App.css';
import ProfilePhoto from "./Component/Profile/ProfilPhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
function App() {
  return (
    <div className="App">
    
   <ProfilePhoto />
   <Address />
   <FullName/>
  
    </div>
  );
}

export default App;
