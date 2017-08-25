import React from 'react';
import ReactDOM from 'react-dom';

import ReactVoronoi from '../ReactVoronoi';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<ReactVoronoi />, root);
});
