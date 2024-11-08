import { faker } from '@faker-js/faker';

const createResult = () => {
  const res: any[] = [];
  for (let i = 0; i < 100; i++) {
    const t = faker.date.between({ from: new Date('2020-01-01'), to: new Date('2029-01-01') });
    res.push({
      key: faker.string.uuid(),
      billdate: `${t.getFullYear()}-${String(t.getMonth()).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`,
      name: faker.person.middleName(),
      phone: faker.phone.number(),
      sales: faker.number.float({ min: 1000, max: 10000 }),
      payment: faker.number.float({ min: 1000, max: 10000 }),
      address: faker.person.jobArea(),
      state: faker.number.int({ min: 0, max: 9 }),
    });
  }
  return res;
};

const mockData = createResult();

export default eventHandler(async (event) => {
  await sleep(600);
  const { offset, limit } = getQuery(event);
  return usePageResponseSuccess(offset / limit + 1, limit, mockData);
});
