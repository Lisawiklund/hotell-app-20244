import React from "react";
import { Button } from 'react-bootstrap';

// Det här är en återanvändbar knapp. Komponenten har "props" som "parameter".
// Knappen är en Bootstrap "primär knapp".
// Knappen har en "style" egenskap som bestämmer bredd och marginal. Med hjälp av egenskapen "props.text" kan texten justeras på olika ställen i applikationen.
export default function ButtonComponent(props) { 

    return ( 
        <Button className={props.className} variant="primary" 
         style={{ width: "200px", margin: "20px" }}>{props.text}
         </Button> 

        
      );

}
