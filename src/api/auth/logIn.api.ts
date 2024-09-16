import 'server-only';

import { BASE_URL } from '@/configs/env.config';
import type { User } from '@/types/user.type';
import ky from 'ky';

export const logIn = async (username: string, password: string) => {

     const res = await ky.post(`${BASE_URL}/auth/login`, {
          method: 'POST',
          json: {
               username,
               password,
          }
     }).json<User>();

     if (!res) {
          throw new Error('Login failed');
     }

     return res;
}





