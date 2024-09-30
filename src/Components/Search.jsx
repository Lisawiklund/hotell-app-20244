import React from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import ButtonComponent from './Button';

export default function Search() {
  return (
    <Card 
      style={{
        width: "350px", 
        height: "auto", // Gör höjden automatisk för att anpassa sig till innehållet
        background: "linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)", // Modern bakgrundsgradient
        borderRadius: "15px", // Rundade hörn
        padding: "30px", 
        marginTop: "20px", 
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" // Modern skugga
      }}
    > 
      <Card.Body>
        <Card.Title style={{ fontSize: "24px", fontWeight: "600", color: "#333" }}>Vart vill du resa?</Card.Title>
        <Card.Text>
          <div className="input-group input-group-s mb-3" >
            <div className="input-group-prepend" >
              <span 
                className="input-group-text" 
                id="basic-addon1" 
                style={{
                  height: "40px", 
                  borderRadius: "8px 0 0 8px", 
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}
              >
                <MdLocationOn size={"22px"} />
              </span>
            </div>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Destination" 
              aria-label="Username" 
              aria-describedby="basic-addon1" 
              style={{
                borderRadius: "0 8px 8px 0", 
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
                border: "1px solid #ddd"
              }} 
            />
          </div>

          <div>
            <label className="m-2">Incheckning:</label>
            <input 
              type="date" 
              style={{
                border:"1px solid #ddd", 
                borderRadius: "8px", 
                padding: "8px", 
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
                width: "100%"
              }}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label className="m-2">Utcheckning:</label>
            <input 
              type="date" 
              style={{
                border:"1px solid #ddd", 
                borderRadius: "8px", 
                padding: "8px", 
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
                width: "100%"
              }} 
            />
          </div>

          <Row style={{ marginTop: "10px" }}>
            <Col>
              <label className="m-2">Gäster</label>
              <Form.Select 
                style={{
                  width: "100%", 
                  borderColor: "#ddd", 
                  borderRadius: "8px", 
                  padding: "8px", 
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}
              >
                <option>1</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Form.Select>
            </Col>

            <Col>
              <label className="m-2">Rum</label>
              <Form.Select 
                style={{
                  width: "100%", 
                  borderColor: "#ddd", 
                  borderRadius: "8px", 
                  padding: "8px", 
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}
              >
                <option>1</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Form.Select>
            </Col>
          </Row>

          <div style={{ marginTop: "15px" }}>
            <label className="m-2">Tillval</label>
            <Form.Check type="radio" aria-label="radio 1" label="Barnvänligt" />
            <Form.Check type="radio" aria-label="radio 1" label="Specialkost" />
            <Form.Check type="radio" aria-label="radio 1" label="Flygplatstransfer" />
          </div>

          <Link to={"/"}>
            <ButtonComponent 
              text="Sök" 
              style={{
                width: "100%", 
                padding: "10px", 
                borderRadius: "8px", 
                backgroundColor: "#007bff", 
                color: "white", 
                border: "none", 
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", 
                marginTop: "15px"
              }} 
            />
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

