import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';
import { RowData } from '#/views/components/report/r01/data';
import { faker } from '@faker-js/faker';
export default [
  {
    url: '/api/report/r01',
    statusCode: 200,
    method: 'get',
    timeout: 1200,
    response: () => createResult(),
  },
] as MockMethod[];

const createResult = () => {
  const res: RowData[] = [];
  for (let i = 0; i < 100; i++) {
    res.push({
      key: faker.string.uuid(),
      billdate: faker.date.anytime().toLocaleDateString(),
      name: faker.person.middleName(),
      phone: faker.phone.number(),
      sales: faker.number.float({ min: 1000, max: 10000 }),
      payment: faker.number.float({ min: 1000, max: 10000 }),
      address: faker.person.jobArea(),
      state: faker.number.int({ min: 0, max: 9 }),
    });
  }
  return resultSuccess(res);
};

export const R01 = { createResult };
