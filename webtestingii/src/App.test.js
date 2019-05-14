import React from 'react';
import {render, fireEvent} from 'react-testing-library'
import App from './App';
import 'react-testing-library/cleanup-after-each';

describe('<App/>', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
})
