import axios from 'axios';
import { Login, SignUp } from '../interfaces/auth.interface';

function login(data: Login) {
  return axios.post(
    'https://paracuando-team1.academlo.tech/api/v1/auth/login',
    data
  );
}

function signUp(data: SignUp) {
  return axios.post(
    'https://paracuando-team1.academlo.tech/api/v1/auth/sign-up',
    data
  );
}

export { login, signUp };
