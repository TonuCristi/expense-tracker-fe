export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: string;
}

export interface RegisterPayload extends Omit<User, 'id' | 'createdAt'> {
  password: string;
}

export interface LoginPayload extends Pick<User, 'email'> {
  password: string;
}

export interface AuthResponse extends MessageResponse {
  user: User;
}

export interface UserResponse extends Pick<AuthResponse, 'user'> {}

export interface MessageResponse {
  message: string;
}
