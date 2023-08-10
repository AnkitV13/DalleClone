import React from 'react';
import { Audio } from 'react-loader-spinner';

const Loader = () => (
    <Audio
    height="80"
    width="80"
    radius="9"
    color="#add8e6"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
  />
);

export default Loader;