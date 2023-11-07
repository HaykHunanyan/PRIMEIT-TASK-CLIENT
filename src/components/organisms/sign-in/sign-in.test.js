import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import userEvent from '@testing-library/user-event';
import SignIn from './sign-in';
import { userLogin } from '../../../actions/users';
import { sagaTester, renderWithRedux } from '../../../test-helpers/storeWrapper';

describe('sign in', () => {
  beforeEach(() => sagaTester.reset(true));
  it('sign in successfully', async () => {
    const { getByTestId } = renderWithRedux(
      <Router>
        <SignIn />
      </Router>,
      sagaTester.store
    );
    const inputEmail = 'xiceh18991@britted.com';
    const inputPassword = 'z';
    expect(getByTestId('form')).toBeInTheDocument();
    userEvent.type(getByTestId('email'), inputEmail);
    userEvent.type(getByTestId('password'), inputPassword);
    await fireEvent.click(screen.getByText(/Log In/));
    expect(sagaTester.wasCalled(userLogin.actionName)).toBeTruthy();
    sagaTester.dispatch(userLogin.request({ email: inputEmail, password: inputPassword }));
    await sagaTester.waitFor(userLogin.requestTypes.SUCCESS);
    const userData = sagaTester.getState().user.user.loggedInUser.user;
    expect(userData.email).toBe(inputEmail);
  });
  it('wrong inputs', async () => {
    const { getByTestId } = renderWithRedux(
      <Router>
        <SignIn />
      </Router>,
      sagaTester.store
    );
    const inputEmail = 'wrongEmail';
    const inputPassword = '';
    expect(getByTestId('form')).toBeInTheDocument();
    userEvent.type(getByTestId('email'), inputEmail);
    userEvent.type(getByTestId('password'), inputPassword);
    await fireEvent.click(screen.getByText(/Log In/));
    expect(sagaTester.wasCalled(userLogin.actionName)).toBeFalsy();
  });
  it('no such user', async () => {
    const { getByTestId } = renderWithRedux(
      <Router>
        <SignIn />
      </Router>,
      sagaTester.store
    );
    const inputEmail = 'xsssh18991@britted.com';
    const inputPassword = 'pass';
    expect(getByTestId('form')).toBeInTheDocument();
    userEvent.type(getByTestId('email'), inputEmail);
    userEvent.type(getByTestId('password'), inputPassword);
    await fireEvent.click(screen.getByText(/Log In/));
    expect(sagaTester.wasCalled(userLogin.actionName)).toBeTruthy();
    sagaTester.dispatch(userLogin.request({ email: inputEmail, password: inputPassword }));
    const error = await sagaTester.waitFor(userLogin.requestTypes.FAILURE);
    expect(error.type).toBe(userLogin.requestTypes.FAILURE);
  });
});
