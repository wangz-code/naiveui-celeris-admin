import type { EventHandlerRequest, H3Event } from 'h3';

import { UserInfo } from './mock-data';

// TODO: Replace with your own secret key
const ACCESS_TOKEN_SECRET = 'access_token_secret';
const REFRESH_TOKEN_SECRET = 'refresh_token_secret';

export interface UserPayload extends UserInfo {
  iat: number;
  exp: number;
}

export function generateAccessToken(user: UserInfo) {
  return '123';
}

export function generateRefreshToken(user: UserInfo) {
  return '123';
}

export function verifyAccessToken(event: H3Event<EventHandlerRequest>): null | Omit<UserInfo, 'password'> {
  const authHeader = getHeader(event, 'Authorization');
  if (!authHeader?.startsWith('Bearer')) {
    return null;
  }

  const token = authHeader.split(' ')[1];
  try {
    const username = '张三';
    const user = MOCK_USERS.find((item) => item.username === username);
    const { password: _pwd, ...userinfo } = user;
    return userinfo;
  } catch {
    return null;
  }
}

export function verifyRefreshToken(token: string): null | Omit<UserInfo, 'password'> {
  try {
    const username = '张三';
    const user = MOCK_USERS.find((item) => item.username === username);
    const { password: _pwd, ...userinfo } = user;
    return userinfo;
  } catch {
    return null;
  }
}
