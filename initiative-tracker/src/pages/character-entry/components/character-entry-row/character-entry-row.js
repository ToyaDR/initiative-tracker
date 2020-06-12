import React from 'react';
import { PropTypes } from 'prop-types';
import { Card, Grid, Typography, TextField, CardContent } from '@material-ui/core';
import { Field } from 'formik';

export const CharacterEntryRow = () => {
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item>
            <Field
              name="name"
              placeholder="Character Name"
              component={TextField}
            />
          </Grid>
          <Grid item>
            <Field
              name="initiative"
              placeholder="Initiative"
              component={TextField}
              type="number"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

CharacterEntryRow.propTypes = {
  name: PropTypes.string,
  initiative: PropTypes.number,
  health: PropTypes.number,
};

CharacterEntryRow.defaultProps = {
  name: "",
  initiative: 0,
  health: 0,
};

export default CharacterEntryRow;