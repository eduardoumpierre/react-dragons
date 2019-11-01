import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import Header from '../../components/Header';

const FormScreen = () => {
  const handleSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <Header title="Dragon" />

      <Form onSubmit={handleSubmit}>
        <Input name="name" />
        <Input name="type" />

        <button type="submit">Salvar</button>
      </Form>
    </>
  );
};

export default FormScreen;
