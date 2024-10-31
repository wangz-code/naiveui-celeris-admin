import { faker } from '@faker-js/faker';

const createResult = () => {
  const res: any[] = [];
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
  return res;
};

const mockData = createResult();

export default eventHandler(async (event) => {
  await sleep(600);
  const { page, pageSize } = getQuery(event);
  return usePageResponseSuccess(page as string, pageSize as string, mockData);
});
