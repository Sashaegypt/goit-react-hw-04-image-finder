import { useState } from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';

import { Header, Form, Button, Input } from './searchBar.style'

import PropTypes from 'prop-types'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Searchbar = ({ onSubmit, isSubmitting}) => {
    const [value, setValue] = useState('');

   const handleInputChange = event => {
       setValue(event.currentTarget.value.toLowerCase());
    };

   const handleFromSubmit = event => {
        event.preventDefault();
        if (value.trim() === '') {
            return toast.error('Please, enter');
        }
        onSubmit(value.trim());
    };

        return (
            <Header>
                <Form onSubmit={handleFromSubmit}>
                    <Button type='submit' disabled={isSubmitting}>
                      <RxMagnifyingGlass />
                    </Button>
                    <Input
                     type="text"
                     autocomplete="off"
                     autofocus
                     placeholder="Search images and photos"
                     value={value}
                        onChange={handleInputChange}
                    />
                </Form>
            </Header>
        )
    }

Searchbar.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

