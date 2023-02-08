import {
  ChangePassword,
  Login,
  RecoverPassword,
  Sign_Up,
} from '../interfaces/auth.interface';
import instance from '../helpers/axios.helpers';

function login(data: Login) {
  return instance.post('/auth/login', data);
}

function signUp(data: Sign_Up) {
  return instance.post('/auth/sign-up', data);
}

function recoveryPassword(email: RecoverPassword) {
  return instance.post('/auth/forget-password', email);
}

function changePassword(data: ChangePassword) {
  return instance.post(`/auth/change-password/${data.token}`, data.password);
}

export { login, signUp, recoveryPassword, changePassword };
