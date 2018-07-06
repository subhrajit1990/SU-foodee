
import React from 'react';

export const User = ({ match }) => (
  <div>
    <h2>User: {match.params.user}</h2>
  </div>
);
