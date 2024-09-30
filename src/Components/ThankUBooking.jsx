import React from "react";
import ButtonComponent from './Button';
import { Link } from "react-router-dom";

//Innehåller en constant med regler för bildstyling. Komponenten returnerar knapp-komponeten och en ruta med text. 
const ThankUBooking = () => {

    const backgroundStyle = {
        backgroundImage: 'url("./images/ThankYou.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '800px'
      };
    return (
    
        <div style={backgroundStyle}>
        <Link to="/booking">
          <ButtonComponent text="Tillbaka" style={{padding: "20px"}}/>
        </Link>
        
<div style={{background: "rgba(219, 242, 253, 0.5)", width: "700px", height: "300px", margin: "0 auto"}}>
    <div style={{padding: "100px", marginLeft: "90px", marginTop: "140px", Size: "300px"}}>
        <h1>Tack för ditt köp!</h1>
   
             <h6>En bekräftelse har skickats till din e-postadress. 
            Palm Booking Agency önskar dig en trevlig resa!
            </h6>
    </div>
</div>
</div>
    )
}

export default ThankUBooking;
