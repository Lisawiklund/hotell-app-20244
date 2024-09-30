import React from "react";
import { Container, Row, Card, Col } from 'react-bootstrap';
import { getHotel } from './HotelList';
import { useParams, Link } from 'react-router-dom';
import ButtonComponent from './Button';
import { AiOutlineWifi } from 'react-icons/ai';
import { MdFamilyRestroom } from 'react-icons/md';
import { FaBus } from 'react-icons/fa';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function HotelDetails(props) {
   const { hotelID } = useParams();
   const hotelInfo = getHotel(hotelID);

   if (!hotelInfo) {
     return <div>Hotellet hittades inte.</div>;
   }

   return (
     <div>
       <Link to="/"> 
         <ButtonComponent text="Tillbaka" /> 
       </Link>
       <Container className="d-flex flex-row-reverse">
         <Row className="m-5 border p-5">
           <h1>{hotelInfo.name}</h1>
           <Col style={{marginRight: "30px"}}>
             <MDBCarousel showControls fade>
               <MDBCarouselItem className='w-100 d-block' itemId={1} src={hotelInfo.imgUrl} alt='. ..'></MDBCarouselItem>
               <MDBCarouselItem className='w-100 d-block' itemId={2} src={hotelInfo.imgUrl2} alt='...'></MDBCarouselItem>
               <MDBCarouselItem className='w-100 d-block' itemId={3} src={hotelInfo.imgUrl3} alt='...'></MDBCarouselItem>
             </MDBCarousel>
             <div style={{ width: "550px", margin: "10px"}}>
               <p>{hotelInfo.hotelDesc}</p>
             </div>
           </Col>

           <Col>
             <Card style={{ width: "450px", height: "540px", backgroundColor: "#DBF2FD", padding: "40px" }}>
               <Card.Body>
                 <Card.Title>Faciliteter</Card.Title>
                 <Card.Text>
                   <ul style={{ listStyleType: 'none' }}>
                     <li><AiOutlineWifi size={24}/> Wi-fi</li>
                     <li><MdFamilyRestroom size={22}/> Familjevänligt</li>
                     <li><FaBus size={18}/> Flygtransport</li>
                     <li><GiForkKnifeSpoon size={20}/> Stort matutbud</li>
                   </ul>
                   <p>För dig med matallergi eller särskilda matpreferenser erbjuder vi flera alternativ:</p>
                   <ul>
                     <li>Vegetarisk</li>
                     <li>Glutenfritt</li>
                     <li>Nötfri</li>
                     <li>Vegan</li>
                     <li>Laktosfritt</li>
                   </ul>
                   <h5>SEK {hotelInfo.price} per natt</h5>
                 </Card.Text>
                 <Link to="/booking" style={{ margin: "45px"}}>
                   <ButtonComponent text="Boka" />
                 </Link>
               </Card.Body>
             </Card>
           </Col>
         </Row>
       </Container>
     </div>
   );
}

