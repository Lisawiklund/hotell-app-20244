import React from "react"
import { Container, Form, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom";
import ButtonComponent from "./Button";
import { AiOutlineWifi } from 'react-icons/ai';
import { MdFamilyRestroom } from 'react-icons/md';
import { FaBus } from 'react-icons/fa';
import { GiForkKnifeSpoon } from 'react-icons/gi';

export default function BookingForm(){
    
    return ( <Container>
    <Link to="/">  {/* Här skapas en länk till hoteldetails-sidan i form av en tillbakaknapp */}
       <ButtonComponent text="Tillbaka" /> 
    </Link>
<Row className="m-5 border p-5">
    <h1>Bokningsinformation</h1>
    <Col>
    <div style={{padding: "20px"}}> {/* Bokningsformulär för att användaren ska kunna fylla in information inför bokning */}
    <label>Namn</label><br></br>
    <input type="text"/>
    </div>
    <div style={{padding: "20px"}}>
    <label>Efternamn</label>
    <input type="text" />
    </div>
    <div style={{padding: "20px"}}>
    <label>Födelsedatum (År, dag, månad)</label>
    <input type="text" name="year" maxlength="4" size="5" style={{margin: "1px"}} ></input>
    <input type="text" name="day" maxlength="2" size="5" style={{margin: "1px"}} ></input>
    <input type="text" name="month" maxlength="10" size="5" style={{margin: "1px"}} ></input>
    </div>
    <div style={{padding: "20px"}}>
    <label>Adress</label><br></br>
    <input type="text" />
    </div>
    <div style={{padding: "20px"}}>
    <label>Land</label>
    <Form.Select style={{width: "150px"}}>
      <option>Sverige</option>
      <option value="Norge">Norge</option>
      <option value="Danmark">Danmark</option>
      <option value="Finland">Finnland</option>
      <option value="Island">Island</option>
    </Form.Select> 
    </div>
    </Col>
    <Col>
    <div style={{padding: "20px"}}>
    <label>Postnummer</label>
    <input type="text"/>
    </div>
    <div style={{padding: "20px"}}>
    <label>Ort</label><br></br>
    <input type="text" />
    </div>
    <div style={{padding: "20px"}}>
    <label>Mobiltelefon</label>
    <input type="text" />
    </div>
    <div style={{padding: "20px"}}>
    <label>E-postadress</label>
    <input type="text" />
    </div>
    

    </Col>
    <Col>
    {/* En ruta med hjälp av "Card" skapar för att lista ut faciliteter och visar information om*/}
    <Card style={{ width: "450px", height: "500px", backgroundColor: "#DBF2FD", padding: "40px" }}>
    <Card.Body>
    <Card.Title style={{color: "#2699FB"}}> <h4>Sammanfattning av din resa</h4></Card.Title>
    <Card.Text>
        <h5 style={{color: "#003C80"}}>Family Comfort Hotel</h5>
        <p style={{fontWeight: "bold"}}>2 familjrum x 2</p>
        <p>7 nätter</p>
        <p style={{fontWeight: "bold", fontSize: "18px"}}>Ingår i din resa:</p>
    <ul style={{ listStyleType: 'none'}}>
    <li><AiOutlineWifi size={24}/> Wi-fi</li>
    <li><MdFamilyRestroom size={22}/> Familjevänligt</li>
    <li><FaBus size={18}/> Flygtransport</li>
    <li><GiForkKnifeSpoon size={20}/> Stort matutbud</li>
    </ul>
    </Card.Text> 
    <Link to={"/ThankUBooking"}  style={{ marginLeft: "50px"}}> {/* Här skapas en länk till ThankUBooking sidan i form av en Köp nu knapp */}
  <ButtonComponent text="Köp nu" />
</Link>
</Card.Body>
</Card>
    </Col>
     <div> {/* En checkbox för godkännande av resevilkor */}
     <input type="checkbox" style={{padding: "5px"}}/> Jag godkänner resevillkoren & har kontrollerat att alla uppgifter ovan är korrekta.
     </div>
</Row>

</Container>
  ) 
};