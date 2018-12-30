import React from 'react';
import ReactDOM from 'react-dom';

const title = '[A.Z 2018.12.30]My minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
