export interface Login {
  email: string;
  password: string;
}

export interface Sign_Up {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RecoverPassword {
  token: string;
  email: string;
}

export interface ChangePassword {
  token: string;
  password: string;
}
