import React from 'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import {
  StyledBtnReset,
  StyledButton,
  StyledError,
  StyledField,
  StyledForm,
  Wrapper,
} from 'components/PhoneBook/PhoneBook.styled';

export const PhoneBook = ({ onAdd, onReset }) => {
  return (
    <>
      <Formik
        initialValues={{
          contacts: [],
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          onAdd({ ...values, id: nanoid() });

          actions.resetForm();
        }}
      >
        <StyledForm>
          <label> Name </label>
          <StyledField
            id="firstName"
            placeholder="Jane Smith"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я
            ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters,
            apostrophe, dash and spaces. For example Adrian, Jacob Mercer,
            Charles de Batz de Castelmore d'Artagnan"
            required
          ></StyledField>
          <StyledError name="name" component="div" />
          <label> Number </label>
          <StyledField
            type="tel"
            name="number"
            placeholder="123456789"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></StyledField>

          <Wrapper>
          <StyledButton type="submit">Add contact</StyledButton>
          <StyledBtnReset onClick={onReset} type="button" >Delete all contacts</StyledBtnReset>
          </Wrapper>
        </StyledForm>
      </Formik>
    </>
  );
};
