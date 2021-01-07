import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import {Container} from "semantic-ui-react";
import {Route} from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/event/EventDashboard/EventDetailedPage/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailedPage/UserDetailedPage";
import EventForm from "../../features/event/EventDashboard/EventForm/EventForm";
import {Fragment} from "react";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";

const App = () => {
    return (
        <Fragment>
            <Route path='/' exact component={HomePage}/>
            <Route path='/(.+)'
                   render={() => (
                       <Fragment>
                           <NavBar/>
                           <Container className='main'>
                               <Route path='/events' exact component={EventDashboard}/>
                               <Route path='/events/:id' component={EventDetailedPage}/>
                               <Route path='/people' component={PeopleDashboard}/>
                               <Route path='/profile/:id' component={UserDetailedPage}/>
                               <Route path='/createEvent' exact component={EventForm}/>
                               <Route path='/settings' component={SettingsDashboard}/>
                           </Container>
                       </Fragment>
                   )}/>
        </Fragment>

    );
}

export default App;
