import React, {useState, createContext} from 'react';
import {Button, Grid} from "semantic-ui-react";
import EventList from "./EventList/EventList";
import EventForm from "./EventForm/EventForm";
import cuid from "cuid";

const eventsFromDashboard = [
    {
        id: '1',
        title: 'Trip to Tower of London',
        date: '2018-03-27',
        category: 'culture',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: "Tower of London, St Katharine's & Wapping, London",
        hostedBy: 'Bob',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        attendees: [
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
        ]
    },
    {
        id: '2',
        title: 'Trip to Punch and Judy Pub',
        date: '2018-03-28',
        category: 'drinks',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: 'Punch & Judy, Henrietta Street, London, UK',
        hostedBy: 'Tom',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        attendees: [
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            }
        ]
    }
];

export const EventContext = createContext({});

const EventDashboard = () => {

    const [events, setEvent] = useState(eventsFromDashboard);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleCreateEvent = (newEvent) => {
        if(newEvent.id){
            const foundEvent = events.find(event => event.id === newEvent.id);
            const index = events.indexOf(foundEvent);
            const newEvents = [...events];
            newEvents[index] = newEvent;
            setEvent([...newEvents]);
            setSelectedEvent(null);
            setIsOpen(false);
        }else{
            newEvent.id = cuid();
            newEvent.hostPhotoURL = '/assets/user.png';
            setEvent([...events, newEvent]);
        }

    }

    const handleDeleteEvent = (id) => {
        const newEvents = events.filter(event => event.id !== id);
        setEvent([...newEvents]);
    }

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
        setIsOpen(true);
    }

    const handleCreateFormOpen = () => {
        setIsOpen(true);
        setSelectedEvent(null);
    }



    return (
        <div>
            <Grid>
                <EventContext.Provider value={{
                    handleCreateEvent,
                    handleSelectEvent,
                    handleDeleteEvent
                }}>
                    <Grid.Column width={10}>
                        <EventList events={events}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Button positive content='Create Event' onClick={handleCreateFormOpen}/>
                        {isOpen &&
                        <EventForm
                            selectedEvent={selectedEvent}
                            setIsOpen={setIsOpen}/>}
                    </Grid.Column>
                </EventContext.Provider>
            </Grid>
        </div>
    );
};

export default EventDashboard;
