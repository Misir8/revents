import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import EventListItem from "./EventListItem";

const EventList = ({events}) => {
    return (
        <Fragment>
            {events.map(event => (
                <EventListItem key={event.id} event={event}/>
            ))}
        </Fragment>
    );
};

EventList.propTypes = {
    events: PropTypes.array.isRequired
};

export default EventList;
