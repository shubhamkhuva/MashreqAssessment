import renderer, {act} from 'react-test-renderer';
import React from 'react';
import Login from '../src/screens/Login';
import '@testing-library/jest-dom';
import {Provider} from 'react-redux';
import store from '../src/context/store';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

describe('Login component', () => {
  test('validates form inputs', () => {
    const {getByTestId} = render(<Login />);
    const usernameInput = getByTestId('username-input');
    const passwordInput = getByTestId('password-input');

    fireEvent.changeText(usernameInput, '');
    fireEvent.changeText(passwordInput, '');

    // Add assertions to check if validation messages are displayed
  });
});
