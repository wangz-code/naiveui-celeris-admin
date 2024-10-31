import type { Menu } from 'celeris-types';
import { Get } from '../interceptor';
import type { DefRes } from '../type';

// Define a function to call the menus API
export function menusApi() {
  return Get<DefRes<Menu[]>>('/menu/all');
}
