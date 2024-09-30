import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';

// En lista med alla hotell. Varje hotell är ett "objekt" med egenskaper som namn, betyg, pris, beskrivning, antal sängar, typ av rum, bilder, hotelID.
export const hotels = [{ 
  name: 'Family Comfort Hotel',
  rating: '4',
  price: '1382',
  hotelDesc: 'Hotellet Family Comfort är en pärla belägen i en av de mest pittoreska och eftertraktade destinationerna vid kusten. Med en strålande kombination av avslappnad lyx och enastående gästvänlighet erbjuder detta hotell en minnesvärd och avkopplande vistelse för alla sina gäster.',
  roomType: 'Familjerum',
  bedsAmount: '3',
  doubleBedsAmount: '1',
  singleBedsAmount: '2',
  imgUrl: 'https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=1060&t=st=1694783303~exp=1694783903~hmac=b5b9a34c2fb6f256d2d467e2db8bb213e4a17afb038d055d461a60c41440d07a',
  city: 'Málaga',
  hotelID: 1
},
{
  name: 'Sunshine Suite Hotel',
  rating: '3',
  price: '994',
  hotelDesc: 'Hotellet Sunshine Suites är en pärla belägen i en av de mest pittoreska och eftertraktade destinationerna vid kusten. Med en strålande kombination av avslappnad lyx och enastående gästvänlighet erbjuder detta hotell en minnesvärd och avkopplande vistelse för alla sina gäster.',
  roomType: 'Familjerum',
  bedsAmount: '4',
  doubleBedsAmount: '1',
  singleBedsAmount: '3',
  imgUrl: 'https://img.freepik.com/free-photo/huge-swimming-pool-near-hotel-resort-san-teodoro-sardinia_181624-9498.jpg?w=1060&t=st=1694783344~exp=1694783944~hmac=a9fd277d266c65f3cfbce93d7451b03df31a1a2ff69d9159f51b3898a5f65c3d',
  city: 'Mallorca',
  hotelID: 2
},
{
  name: 'Family Resorts Hotel',
  rating: '4',
  price: '1717',
  hotelDesc: 'Hotellet Family Resorts är en pärla belägen i en av de mest pittoreska och eftertraktade destinationerna vid kusten.',
  roomType: 'Familjerum',
  bedsAmount: '5',
  doubleBedsAmount: '2',
  singleBedsAmount: '3',
  imgUrl: 'https://img.freepik.com/free-photo/hammocks-umbrella-placed-near-large-pool_1203-192.jpg?w=1060&t=st=1694783934~exp=1694784534~hmac=03114c498e89f31d3dc290ef1e62b896e1728b2286ccb7509621a88aeeb519bf',
  city: 'Marbella',
  hotelID: 3
},
{
  name: 'Friends&Family Hotel',
  rating: '4',
  price: '1422',
  hotelDesc: 'Hotellet Friends&Family är en pärla belägen i en av de mest pittoreska och eftertraktade destinationerna vid kusten.',
  roomType: 'Familjerum',
  bedsAmount: '4',
  doubleBedsAmount: '2',
  singleBedsAmount: '2',
  imgUrl: 'https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?w=1060&t=st=1694784040~exp=1694784640~hmac=767395bc1c37bf0d59ab609952818289d28dd36071ea73d62626142633e07e05',
  city: 'Alicante',
  hotelID: 4
},
{
  name: 'EcoOasis Suite Hotel',
  rating: '5',
  price: '2215',
  hotelDesc: 'Hotellet EcoOasis Suite är en pärla belägen i en av de mest pittoreska och eftertraktade destinationerna vid kusten.',
  roomType: 'Familjerum',
  bedsAmount: '5',
  doubleBedsAmount: '1',
  singleBedsAmount: '4',
  imgUrl: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-front-hotel-resort-with-swimming-pool-paradise-destination-vacations-ge_1258-150769.jpg?w=1060&t=st=1694784103~exp=1694784703~hmac=ad212e83f9efe7117faf7871b07e9b8d725c97362139f6610e9dbae83967718e',
  city: 'Valencia',
  hotelID: 5
},
];

// Funktion för att hämta hotell
export function getHotel(hotelID) {
  return hotels.find((hotel) => hotel.hotelID === parseInt(hotelID));
}

// Komponent som visar hotellista
export default function HotelList(props) {
  return (
    <>
      {props.hotels.map((hotel) => (
        <Container className="d-flex flex-row-reverse" key={hotel.hotelID} 
        style={{ 
          width: "850px",
          margin: "20px"
        }} >
        <Row className="m-1 p-3" style={{ 
            backgroundColor: '#fff', 
            borderRadius: '15px', 
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
            cursor: 'pointer',
            overflow: 'hidden',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Col sm="auto" className="p-0">
            <Link to={"/HotelDetails/" + hotel.hotelID}>
              <img className="p-0" alt="hotel" src={hotel.imgUrl} style={{ 
                  width: "250px", 
                  borderRadius: '15px 0 0 15px', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </Link>
          </Col>
          <Col className="p-4" style={{ flex: 1 }}>
            <div className="h4" style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#444' }}>{hotel.name}</div>
            <div className="h6 mb-1" style={{ fontWeight: '500', color: '#777' }}>{hotel.city}</div>
            <div className="mb-2">
              <span style={{ fontWeight: '600', color: '#ffcc00' }}>{hotel.rating} stjärnor</span> &bull; {hotel.roomType} &bull; {hotel.bedsAmount} sängar
            </div>
            <div className="mb-2" style={{ color: '#555' }}>Enkel: {hotel.singleBedsAmount} &bull; Dubbel: {hotel.doubleBedsAmount}</div>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Link to={"/HotelDetails/" + hotel.hotelID}>
              <button style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  borderRadius: '8px',
                  padding: '10px 25px',
                  fontWeight: '600',
                  boxShadow: '0 5px 15px rgba(0, 123, 255, 0.3)',
                  transition: 'background-color 0.3s ease, transform 0.2s ease',
                  border: 'none'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0056b3'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#007bff'}
              >
                Från {hotel.price} SEK
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
      ))}

      <div className="pagination-container" style={{ marginLeft: "300px" }}>
        <Pagination style={{ marginTop: '20px' }}>
          <Pagination.Prev />
          <Pagination.Ellipsis />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Next />
        </Pagination>
      </div>
    </>
  );
}
