import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Segment, Item, Button, List, Icon} from "semantic-ui-react";
import EventAttendee from "./EventListAttendee";
import {EventContext} from "../EventDashboard";

const EventListItem = ({event}) => {

    const {handleSelectEvent, handleDeleteEvent} = useContext(EventContext);

    return (
        <div>
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                            <Item.Content>
                                <Item.Header as="a">{event.title}</Item.Header>
                                <Item.Description>
                                    Hosted by <a>{event.hostedBy}</a>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        {event.attendees && event.attendees.map(attendee => (
                            <EventAttendee key={attendee.id} attendee={attendee}/>
                        ))}
                    </List>
                </Segment>
                <Segment clearing>
                    <span>{event.description}</span>
                    <Button onClick={() => handleDeleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
                    <Button onClick={() => handleSelectEvent(event)} as="a" color="teal" floated="right" content="View" />
                </Segment>
            </Segment.Group>
        </div>
    );
};

EventListItem.propTypes = {
    event: PropTypes.object.isRequired
}

export default EventListItem;
