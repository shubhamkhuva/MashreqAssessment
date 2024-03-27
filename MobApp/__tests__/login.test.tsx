import renderer, {act} from 'react-test-renderer';
import React from 'react';
import Login from '../src/screens/Login';
import '@testing-library/jest-dom'; // You might need to import this if you're using testing-library utilities
import {Provider} from 'react-redux';
import store from '../src/context/store';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

describe('Login component', () => {
  test('renders correctly', async () => {
    await act(async () => {
      const {getByText, getByPlaceholderText} = render(
        <Provider store={store}>
          <Login />
        </Provider>,
      );

      expect(getByText('Login')).toBeTruthy();
    });
  });
});
