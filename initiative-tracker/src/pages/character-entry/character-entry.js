import React from 'react';
import { Formik, Form } from 'formik';
import CharacterEntryRow from './components/character-entry-row/character-entry-row';

export const CharacterEntry = () => {
  return (
    <Formik>
      <Form>
        <CharacterEntryRow />
      </Form>
    </Formik>
  );
};

export default CharacterEntry;