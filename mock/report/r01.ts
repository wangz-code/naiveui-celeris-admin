import { MockMethod } from "vite-plugin-mock";
import { resultSuccess } from "../_util";
import { RowData } from "@/pages/components/report/r01/data";
import { faker } from "@faker-js/faker";
export default [
	{
		url: "/api/report/r01",
		statusCode: 200,
		method: "get",
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
			name: faker.person.fullName(),
			phone: faker.phone.number(),
			sales: faker.number.float(),
			payment: faker.number.float(),
			address: faker.person.jobArea(),
			state: faker.number.int(),
		});
	}
	return resultSuccess(res);
};

export const R01 =  { createResult };
