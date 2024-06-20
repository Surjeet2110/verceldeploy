// src/components/EventRegistrationForm.js

import React, { useState } from 'react';

const EventRegistrationForm = () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            age: '',
            attendingWithGuest: 'No',
            guestName: '',
        });

        const [errors, setErrors] = useState({});

        const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value,
            });
        };

        const validate = () => {
            let errors = {};

            if (!formData.name) errors.name = 'Name is required.';
            if (!formData.email) {
                errors.email = 'Email is required.';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                errors.email = 'Email address is invalid.';
            }
            if (!formData.age || formData.age <= 0) errors.age = 'Age must be greater than 0.';
            if (formData.attendingWithGuest === 'Yes' && !formData.guestName) {
                errors.guestName = 'Guest Name is required if you are attending with a guest.';
            }

            setErrors(errors);
            return Object.keys(errors).length === 0;
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (validate()) {
                alert(`Form submitted successfully!\n${JSON.stringify(formData, null, 2)}`);
            }
        };

        return ( <
                form onSubmit = { handleSubmit } >
                <
                div >
                <
                label > Name: < /label> <
                input type = "text"
                name = "name"
                value = { formData.name }
                onChange = { handleChange }
                /> {
                    errors.name && < span style = {
                            { color: 'red' } } > { errors.name } < /span>} <
                        /div>

                    <
                    div >
                        <
                        label > Email: < /label> <
                        input type = "email"
                    name = "email"
                    value = { formData.email }
                    onChange = { handleChange }
                    /> {
                        errors.email && < span style = {
                                { color: 'red' } } > { errors.email } < /span>} <
                            /div>

                        <
                        div >
                            <
                            label > Age: < /label> <
                            input type = "number"
                        name = "age"
                        value = { formData.age }
                        onChange = { handleChange }
                        /> {
                            errors.age && < span style = {
                                    { color: 'red' } } > { errors.age } < /span>} <
                                /div>

                            <
                            div >
                                <
                                label > Are you attending with a guest ? < /label> <
                                select name = "attendingWithGuest"
                            value = { formData.attendingWithGuest }
                            onChange = { handleChange } >
                                <
                                option value = "No" > No < /option> <
                                option value = "Yes" > Yes < /option> <
                                /select> <
                                /div>

                            {
                                formData.attendingWithGuest === 'Yes' && ( <
                                    div >
                                    <
                                    label > Guest Name: < /label> <
                                    input type = "text"
                                    name = "guestName"
                                    value = { formData.guestName }
                                    onChange = { handleChange }
                                    /> {
                                        errors.guestName && < span style = {
                                                { color: 'red' } } > { errors.guestName } < /span>} <
                                            /div>
                                    )
                                }

                                <
                                button type = "submit" > Submit < /button> <
                                    /form>
                            );
                        };

                        export default EventRegistrationForm;