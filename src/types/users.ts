export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
}
export interface UserIdQueryParams {
  username: string;
}

export interface UserResponse {
  id: number;
  email: string;
  username: string;
}
