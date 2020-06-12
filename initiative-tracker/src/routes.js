import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { CharacterEntry } from './pages/character-entry/character-entry';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route path="/characters" x component={CharacterEntry} />
    </BrowserRouter>
  );
};

export default AppRoutes;