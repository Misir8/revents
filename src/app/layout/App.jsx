import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import {Container} from "semantic-ui-react";

const App = () => {
    return (
        <div className="App">
            <NavBar/>
            <Container className='main'>
                <EventDashboard/>
            </Container>
        </div>
    );
}

export default App;
