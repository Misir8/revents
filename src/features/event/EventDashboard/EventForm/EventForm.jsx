import React, {Fragment, useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Segment} from "semantic-ui-react";
import {EventContext} from "../EventDashboard";

const EventForm = ({setIsOpen}) => {

    const [form, setForm] = useState({
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''
    });

    const {handleCreateEvent} = useContext(EventContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleCreateEvent(form);
        setForm({...form, title: '', date: '', city: '', venue: '', hostedBy: ''});
        setIsOpen(false);
    }

    return (
        <Fragment>
            <Segment>
                <Form onSubmit={(event) => handleFormSubmit(event)}>
                    <Form.Field>
                        <label>Event Title</label>
                        <input
                            onChange={(event) =>
                                setForm({...form, title: event.target.value})}
                            value={form.title}
                            name="title"
                            placeholder="Event Title"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input
                            onChange={(event) =>
                                setForm({...form, date: event.target.value})}
                            type="date"
                            value={form.date}
                            name="date"
                            placeholder="Event Date"/>
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input
                            onChange={(event) =>
                                setForm({...form, city: event.target.value})}
                            name="city"
                            value={form.city}
                            placeholder="City event is taking place"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input
                            onChange={(event) =>
                                setForm({...form, venue: event.target.value})}
                            name="venue"
                            value={form.venue}
                            placeholder="Enter the Venue of the event"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input
                            onChange={(event) =>
                                setForm({...form, hostedBy: event.target.value})}
                            name="hostedBy"
                            value={form.hostedBy}
                            placeholder="Enter the name of person hosting"/>
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
