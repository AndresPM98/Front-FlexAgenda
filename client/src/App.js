import "./App.css";
import { Switch, Route } from "react-router-dom";
import EditProfileProf from "../src/Pages/EditProfileProf/EditProfileProf.jsx";
import {
  Form,
  Home,
  LandingPage,
  ProfessionalPage,
  QueryPage,
  FormClient,
  Login,
  AllProfessionals,
} from "./Pages";
import HomeProfessional from "./Components/HomeProfessional/HomeProfessional";
import CalendarxD from "./Pages/Calendar/CalendarxD";
import AllProfessionalPageById from "./Pages/allProfessionalPageById/allProfessionalPageById";
import Error404 from "./Components/Error404/Error404";
import ProfessionalTakeTurn from "./Pages/ProfessionalTakeTurn/ProfessionalTakeTurn";
import FormService from "./Pages/FormService/FormService";
import axios from "axios";
import Footer from "./Components/Footer/Footer";
import NavbarTwo from "./Components/NavbarTwo/NavbarTwo";
axios.defaults.baseURL = "https://backend-pf-production-1672.up.railway.app/";

function App() {
  return (
    <div className="App">
        <NavbarTwo/>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/form/:id" component={Form} />
        <Route exact path="/formClient/:id" component={FormClient} />
        <Route exact path="/Calendarpage/:id" component={CalendarxD} />
        <Route exact path="/professionalDetail/:id" component={ProfessionalPage} />
        <Route exact path="/profTT/:id" component={ProfessionalTakeTurn} />
        <Route exact path="/professional/edit/:id" component={EditProfileProf} />
        <Route exact path="/professional/edit/:id/services" component={FormService} />
        <Route exact path="/queryDetail/:id" component={QueryPage} />
        <Route path="/login" component={Login} />
        <Route path="/allProfessionals" component={AllProfessionals} />
        <Route path="/home/:id" component={AllProfessionalPageById} />
        <Route path="/*" component={Error404} />
        <Route path="/:any+" component={Error404} />
        <Footer />
      </Switch>
    </div>
  );
}

export default App;
