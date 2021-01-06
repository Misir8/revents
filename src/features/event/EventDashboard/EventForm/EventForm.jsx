import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Segment} from "semantic-ui-react";

const EventForm = ({setIsOpen}) => {
    return (
        <Fragment>
            <Segment>
                <Form>
                    <Form.Field>
                        <label>Event Title</label>
                        <input placeholder="First Name" />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input type="date" placeholder="Event Date" />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input placeholder="City event is taking place" />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input placeholder="Enter the Venue of the event" />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input placeholder="Enter the name of person hosting" />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                    </Button>
                    <Button type="button" onClick={() => setIsOpen(false)}>Cancel</Button>
                </Form>
            </Segment>
        </Fragment>
    );
};

EventForm.propTypes = {
    setIsOpen: PropTypes.func.isRequired
}

export default EventForm;
