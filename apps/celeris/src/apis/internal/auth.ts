import type { MessageMode, UserInfo } from '@/types';
import { Get, Post } from '../interceptor';
import { PostRes } from '../type';

// Define the API endpoint URLs as an enum
enum API {
  Login = '/auth/login',
  Logout = '/auth/logout',
  UserInfo = '/user/info',
  PermissionCode = '/auth/permission-code',
}

// Define the parameters for the login API
export interface LoginParams {
  username: string;
  password: string;
}

// Define a function to call the login API
export function loginApi(params: LoginParams) {
  return Post<PostRes<UserInfo>>('/auth/login', { ...params });
}

// Define a function to call the logout API
export function logoutApi(errorMessageMode: MessageMode = 'dialog') {
  // Make a GET request to the logout API endpoint
  return Get<void>("/auth/logout");
}

// Define a function to call the user info API
export function userInfoApi(errorMessageMode: MessageMode = 'none') {
  return new Promise((resolve) => {
    resolve({
      id: '1',
      username: 'kirklin卡特琳',
      fullName: 'Kirk Lin',
      email: 'hi@kirklin.cn',
      phone: '15912345678',
      avatarUrl: 'https://cdn-fusion.imgimg.cc/i/2024/5553dc14e1b5ce44.jpg',
      homePageUrl: '/dashboard/index',
      roles: ['admin'],
    });
  });
}

// Define a function to call the permission code API
export function permissionCodeApi(errorMessageMode: MessageMode = 'dialog') {}

export { API };
