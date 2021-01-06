import React from 'react';
import PropTypes from 'prop-types';
import {Image, List} from "semantic-ui-react";

const EventAttendee = ({attendee}) => {
    return (
        <List.Item>
            <Image as='a' size='mini' circular src={attendee.photoURL}/>
        </List.Item>
    );
};

EventAttendee.propTypes = {
  attendee: PropTypes.object.isRequired,
};

export default EventAttendee;
