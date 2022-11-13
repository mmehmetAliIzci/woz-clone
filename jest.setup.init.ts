import '@testing-library/jest-dom';
import React from 'react';
import 'jest-fetch-mock';

import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

global.React = React;
