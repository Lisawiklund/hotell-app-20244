import { Col, Row, Container } from 'react-bootstrap';
import HotelList from './HotelList';
import Search from './Search'
import { hotels } from './HotelList';

// Komponenten Main innehåller en Container som renderar både Search-komponenten och HotelList-komponenten, 
// samtidigt som den skickar med hotels-data som en egenskap till HotelList.
export default function Main(){
    return (
      <Container>
        <Row>
          <Col>
           <Search />
          </Col>
          <Col>
          <HotelList hotels={hotels}/>
          </Col>
        </Row>
      </Container>
    );
  };

  //Renata