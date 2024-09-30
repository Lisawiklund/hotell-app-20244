
import Nav from './Nav.jsx';
 import { Link } from "react-router-dom";

 //En funktion som returnerar logotypen och styling for header. 
 //En länk som omringar logotypen skapas. När logotypen klickas på leder länken alltid till startsidan.
 //Här renderas också den globala navigationen
export default function Header(){
    
    return <div>
     <Link to={"/"}> 
              
 <div style={{backgroundColor: "#003C80", height: "120px"}}>
<img src="./images/Logo.jpg" alt="" style={{width: "180px", marginLeft: "100px"}}/>

  </div>

  </Link>
 
    <Nav /> 
    </div>
  };


