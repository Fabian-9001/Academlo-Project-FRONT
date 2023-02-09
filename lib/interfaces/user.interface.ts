export interface UserResponse {
  results: Results;
}

export interface Results {
  id: string;
  email: string;
  username: string;
  profile: Profile[];
}

export interface Profile {
  id: string;
  image_url: null;
  code_phone: null;
  phone: null;
  role: Role;
}

export interface Role {
  id: string;
  name: string;
}
