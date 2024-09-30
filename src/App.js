// Här importeras CSS-filen och de olika komponenterna som behövs för appen.
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Search from './Components/Search';
import BookingForm from './Components/BookingForm';
import { Switch, Route } from 'react-router-dom';  //React-router-dom används för att hantera de olika delarna i webbapplikation.
import HotelDetails from './Components/HotelDetails';
import ThankUBooking from './Components/ThankUBooking';


// Här skapas App komponeten och returnerar alla  huvudkomponenten för appen.
export default function App() {
  
  return (
    //Först renderas header komponeten
    <div>
    <Header /> 
  {/*Switch används för att hantera olika route (URL:er) i appen*/}
    <Switch>
    {/* Exempelvis om URL-matchningen är "/HotelDetails/:hotelID", renderas HotelDetails-komponenten.*/}
      <Route path="/HotelDetails/:hotelID" component={HotelDetails}></Route>

      {/* När rot-URL:en är ("/"), alltså när säkvägen är exact ("/") renderas Main-komponenten och Search komponeten. Detta för att säkerställa
       att inga andra sidor renderas när användaren vill komma till just startsidan */}
      <Route path="/" exact component={Main}></Route>
     <Route path="/" exact component={Search}></Route>

     {/* Om URL-matchningen är "/booking", renderas BookingForm-komponenten.*/}
      <Route path="/booking" component={BookingForm}></Route>

       {/* Om URL-matchningen är "/ThankUBooking", renderas ThankUBooking-komponenten.*/}
      <Route path="/ThankUBooking" component={ThankUBooking}></Route>
  
    </Switch>
  
    <Footer />
{/*Sist renderas footer komponeten*/}
  </div>
  );
}
