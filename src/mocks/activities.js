import faker from 'faker';

export const activities = [
	{
		id: faker.random.uuid(),
		author: faker.name.findName(),
		type: 'search',
		title: 'Looking for my dog!',
		description: faker.lorem.words(10),
		coordinates: {
			latitude: 43,
			longitude: 22
		}
	},
	{
		id: faker.random.uuid(),
		author: faker.name.findName(),
		type: 'found',
		title: 'Just found a dog!',
		description: faker.lorem.words(10),
		coordinates: {
			latitude: 42,
			longitude: 22
		}
	}
];