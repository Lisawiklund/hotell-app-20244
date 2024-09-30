import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import "@fontsource/roboto/700.css";

// Funktion returnerar en komponent för navigation meny, där länkar renderas i en container.
// Varje länk kopplas med en "Link" komponent från React Router för att kunna omdirigera användaren.
export default function Navigation() {
    return  <Navbar style={{backgroundColor: "#003C80"}}>
    <Container  className="d-flex flex-row-reverse"  >
      <Nav> 
      <Link to={"/"} style={{textDecoration: "none"}}><Nav.Link href="#Hotell" style={{color: "#fff", fontFamily: "Roboto", fontSize: "23px"}}>Hotell</Nav.Link></Link>
      <Link to={"/HotelDetails"} style={{textDecoration: "none"}}><Nav.Link href="#Kontakt" style={{color: "#fff", fontFamily: "Roboto", fontSize: "23px" }}>Kontakt</Nav.Link></Link>
      <Link to={"/HotelDetails"} style={{textDecoration: "none"}}><Nav.Link href="#Om oss" style={{color: "#fff", fontFamily: "Roboto", fontSize: "23px"}}>Om oss</Nav.Link></Link>
      <Link to={"/HotelDetails"} style={{textDecoration: "none"}}><Nav.Link href="#FAQ" style={{color: "#fff",  fontFamily: "Roboto", fontSize: "23px"}}>FAQ</Nav.Link></Link>
      </Nav>
    </Container>
  </Navbar>
}
//Nicole