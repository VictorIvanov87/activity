import faker from 'faker';

export const activitiesMock = [
	{
		id: faker.random.uuid(),
		author: faker.name.findName(),
		type: 'search',
		title: 'Looking for my dog!',
		description: faker.lorem.words(10),
		coordinates: {
			latitude: 42.642163,
			longitude: 23.3955948,
		},
	},
	{
		id: faker.random.uuid(),
		author: faker.name.findName(),
		type: 'found',
		title: 'Just found a dog!',
		description: faker.lorem.words(10),
		coordinates: {
			latitude: 42.661163,
			longitude: 23.4055948,
		},
	},
];
