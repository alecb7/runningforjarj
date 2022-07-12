import moment from 'moment';

export const getEstimatedTime = (pace, distance, startTime) => {
	var time = moment.utc(pace, 'HH:mm:ss');
	const minutes = time.minutes() * distance;
	const seconds = time.seconds() * distance;

	const finishTime = moment(startTime)
		.add(minutes, 'm')
		.add(seconds, 's')
		.add(10, 'm');

	return finishTime;
};

export const updateSections = (sections) => {
	let previousEndTime;
	let previousStartTime;
	return sections.map((section, index) => {
		const { startTime, endTime, estimatedPace, distance } = section;
		let estimatedStartTime, estimatedEndTime;

		if (!startTime && index !== 0) {
			estimatedStartTime = previousEndTime;
		}

		if (!!startTime && !endTime) {
			console.log({ estimatedPace, distance, startTime });
			estimatedEndTime = getEstimatedTime(estimatedPace, distance, startTime);
		}
		if (!startTime && !endTime) {
			estimatedEndTime = getEstimatedTime(
				estimatedPace,
				distance,
				estimatedStartTime
			);
		}

		previousEndTime = endTime || estimatedEndTime;

		return { ...section, estimatedEndTime, estimatedStartTime };
	});
};

const sections = [
	{
		komootLink:
			'https://www.komoot.com/tour/715006417?share_token=a6Vn27dfEagvVupRBTG7HPP3MYefHflO7fghGaSOKlAbBE52x4&ref=wtd',
		distance: 10,
		startLocation: 'Dyrham ',
		elevation: 160,
		estimatedPace: '00:08:30',
		sectionID: '2',
		endLocation: 'Little Sodbury',
		users: [
			{
				sectionID: '2',
				sectionUserID: 'ef0dc32a-ad11-49a5-81a9-8a6f909c2f8e',
				userID: '7',
				name: 'Ruth'
			},
			{
				sectionID: '2',
				sectionUserID: 'a1ddab8d-61a6-400b-a026-576e7d1ca7dd',
				userID: '6',
				name: 'Toffee'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/748733877?share_token=aBjcmygD9C2ix3nLTfPT6jcGf8i6G1wYGZFUR6QzG4OSdTXPno&ref=wtd',
		distance: 8.2,
		startLocation: 'Warwick',
		elevation: 60,
		estimatedPace: '00:08:00',
		sectionID: '13',
		endLocation: 'Cubbington',
		users: [
			{
				sectionID: '13',
				sectionUserID: '31743c6f-c5d2-47d2-badc-f44cbc87fe34',
				userID: '10',
				name: 'Nom'
			},
			{
				sectionID: '13',
				sectionUserID: 'ab34cd1d-4a01-4846-a211-4ac16581f5fa',
				userID: '7',
				name: 'Ruth'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/715048928?share_token=aPg2PmiGRZ3thPp40WuTYEE7icT2fl5Sp0CvdtC3a38PbW9Q75&ref=wtd',
		distance: 12.6,
		startLocation: 'A40/Koloshi Indian Restaurant',
		elevation: 230,
		estimatedPace: '00:08:00',
		sectionID: '8',
		endLocation: 'Winchcombe',
		users: [
			{
				sectionID: '8',
				sectionUserID: '70ffd260-5c49-46a8-8fb8-d329089b6d90',
				userID: '5',
				name: 'Ally'
			},
			{
				sectionID: '8',
				sectionUserID: '2434a916-8332-4bc2-9314-6420453880e6',
				userID: '9',
				name: 'JJ'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/714995605?share_token=ah5pvoILmuBTRkfMbiyX9Pw4QVzmJDq1zAqRlZfDGtTHh8ndqu&ref=wtd',
		distance: 15.6,
		startLocation: 'Winchcombe',
		elevation: 180,
		estimatedPace: '00:08:00',
		sectionID: '9',
		endLocation: 'Broadway',
		users: [
			{
				sectionID: '9',
				sectionUserID: '2575569b-0970-4d1b-9d31-27e74df3382a',
				userID: '10',
				name: 'Nom'
			},
			{
				sectionID: '9',
				sectionUserID: '18714095-cc17-4ab7-8a19-a2e0ea96210d',
				userID: '3',
				name: 'Bubbles'
			}
		]
	},
	{
		startTime: '2022-07-17T04:00:00',
		komootLink:
			'https://www.komoot.com/tour/714998762?share_token=auBQbK6PoFdD8Yu8qYWWCpZM6TlKk852UWvWHsf7uMjEBNx8Qi&ref=wtd',
		distance: 13.3,
		startLocation: 'Keynsham High St',
		elevation: 210,
		estimatedPace: '00:08:00',
		sectionID: '1',
		endLocation: 'Dryham',
		users: [
			{
				sectionID: '1',
				sectionUserID: 'b1203918-b698-460a-97de-872a2ff15dda',
				userID: '2',
				name: 'Cat'
			},
			{
				sectionID: '1',
				sectionUserID: '976da0cc-eb54-4cae-b79c-1bc8592d64f3',
				userID: '4',
				name: 'Finch'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/715031810?share_token=aX7fKCkzUnlXJExv1KB7OdGh95vN2GUYrz3lEs6zrkAUvWpcfC&ref=wtd',
		distance: 9.35,
		startLocation: 'Painswick',
		elevation: 230,
		estimatedPace: '00:08:00',
		sectionID: '6',
		endLocation: 'Birdlip',
		users: [
			{
				sectionID: '6',
				sectionUserID: '1924f53a-b152-4a86-b30c-99dca1e8ce20',
				userID: '1',
				name: 'Luke'
			},
			{
				sectionID: '6',
				sectionUserID: 'a6961b01-d7b0-4dba-994d-88b008dd95bd',
				userID: '8',
				name: 'Candy'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/715024376?share_token=amINYorcyxgLiML82XYtPhI9hAo9XHJHXjwniOynQQ4vczGqY4&ref=wtd',
		distance: 14,
		startLocation: 'Coaley Peak',
		elevation: 290,
		estimatedPace: '00:08:00',
		sectionID: '5',
		endLocation: 'Painswick',
		users: [
			{
				sectionID: '5',
				sectionUserID: 'a3546b85-528f-4420-86b1-3bedcefefdc2',
				userID: '10',
				name: 'Nom'
			},
			{
				sectionID: '5',
				sectionUserID: '99c3b5ba-b2bc-49db-9f0f-13a90a826073',
				userID: '4',
				name: 'Finch'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/715017937?share_token=aINlhrXqe9jmaIrW8135sOTAmYPHHHfaqFGAJzWUPpwHgqqfiy&ref=wtd',
		distance: 14.4,
		startLocation: 'Wootton under edge',
		elevation: 480,
		estimatedPace: '00:08:00',
		sectionID: '4',
		endLocation: 'Coaley Peak',
		users: [
			{
				sectionID: '4',
				sectionUserID: '7f260363-2629-47b1-ba47-17cbb95f9ae6',
				userID: '3',
				name: 'Bubbles'
			},
			{
				sectionID: '4',
				sectionUserID: '67f998bc-9ad7-4c3e-b504-5089436ec62e',
				userID: '5',
				name: 'Ally'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/748762668?share_token=a2ndmmWtD7jSkfW5CG4xUTVP0ZPBnQ0WbRBSq94kDzotNa4Yq0&ref=wtd',
		distance: 10,
		startLocation: 'Desford',
		elevation: 110,
		estimatedPace: '00:08:00',
		sectionID: '19',
		endLocation: 'Ratby',
		users: [
			{
				sectionID: '19',
				sectionUserID: 'dc1fb8d0-9762-4dc4-90c0-f05138a86432',
				userID: '8',
				name: 'Candy'
			},
			{
				sectionID: '19',
				sectionUserID: '231dae87-09e0-4862-aa70-3c9b2eb1d1f1',
				userID: '9',
				name: 'JJ'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/715041772?share_token=aklOM0ca4yqv4Dc2XXMfT17E9JUkLnUZ8L3SBfNC8X6sPDk4a4&ref=wtd',
		distance: 11.7,
		startLocation: 'Birdlip',
		elevation: 130,
		estimatedPace: '00:08:00',
		sectionID: '7',
		endLocation: 'A40/Koloshi Indian Restaurant',
		users: [
			{
				sectionID: '7',
				sectionUserID: '835bb2c1-4b5c-49d1-9929-f8c2e7eb55bc',
				userID: '2',
				name: 'Cat'
			},
			{
				sectionID: '7',
				sectionUserID: '36aa4fad-9802-4d42-90ec-05052a19c061',
				userID: '3',
				name: 'Bubbles'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/715083026?share_token=apY8HVi7V7k7mqB2dXklS2FlbGwPDToucopJ29EGkVX74v5XBW&ref=wtd',
		distance: 15.8,
		startLocation: 'Long Marston',
		elevation: 120,
		estimatedPace: '00:08:00',
		sectionID: '11',
		endLocation: 'Snitterfield',
		users: [
			{
				sectionID: '11',
				sectionUserID: 'ca226778-e6e0-47a8-8f21-e045812343da',
				userID: '8',
				name: 'Candy'
			},
			{
				sectionID: '11',
				sectionUserID: '66152d3a-d811-4850-97f7-388aef866a93',
				userID: '5',
				name: 'Ally'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/715011675?share_token=an8IM2X2CQfkUW3753P0gWqIg3sF2ebJnBxLwSvJht48Sht9JP&ref=wtd',
		distance: 14.7,
		startLocation: 'Little Sodbury',
		elevation: 200,
		estimatedPace: '00:08:00',
		sectionID: '3',
		endLocation: 'Wootton under edge',
		users: [
			{
				sectionID: '3',
				sectionUserID: 'c9b3a532-6dd4-4027-8637-0fc0e7b7d60e',
				userID: '1',
				name: 'Luke'
			},
			{
				sectionID: '3',
				sectionUserID: 'b3ecc896-3667-4e21-9a06-8497f2dff0cd',
				userID: '9',
				name: 'JJ'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/715358875?share_token=ac57Tko6VqhK6qaYxfkTi2u6xM1IBZZzQGVWiAkLRrFFwd6bdT&ref=wtd',
		distance: 5.8,
		startLocation: 'Ratby',
		elevation: 100,
		estimatedPace: '00:08:00',
		sectionID: '20',
		endLocation: 'Woodhouse Eaves',
		users: [
			{
				sectionID: '20',
				sectionUserID: 'e95d39fe-7334-4609-b006-1c4a1d57ea60',
				userID: '2',
				name: 'Cat'
			},
			{
				sectionID: '20',
				sectionUserID: 'd64d0ca2-88dd-45d8-925a-b48251f6f9cc',
				userID: '3',
				name: 'Bubbles'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/715361404?share_token=a418kmRrkyyU34KySffe53eLgreS43vTDPWNkarkWLZuC6Vckg&ref=wtd',
		distance: 6.1,
		startLocation: 'Woodhouse eaves',
		elevation: 70,
		estimatedPace: '00:08:00',
		sectionID: '21',
		endLocation: 'Memorial Garden',
		users: [
			{
				sectionID: '21',
				sectionUserID: '5ba27ba8-e012-42f2-b6bc-aa237056ef13',
				userID: '2',
				name: 'Cat'
			},
			{
				sectionID: '21',
				sectionUserID: '6daa2606-520e-4f36-bd18-33dd4ed43832',
				userID: '5',
				name: 'Ally'
			},
			{
				sectionID: '21',
				sectionUserID: '5467d565-6f45-4608-9ced-143cec59d957',
				userID: '7',
				name: 'Ruth'
			},
			{
				sectionID: '21',
				sectionUserID: 'c7ef77b3-5b75-4859-8cae-23620b6380f5',
				userID: '3',
				name: 'Bubbles'
			},
			{
				sectionID: '21',
				sectionUserID: 'dbe670c7-9a5e-49c1-a7d9-bd9fa4598c6d',
				userID: '10',
				name: 'Nom'
			},
			{
				sectionID: '21',
				sectionUserID: '230b46bb-417d-443f-8117-88e149cb5671',
				userID: '1',
				name: 'Luke'
			},
			{
				sectionID: '21',
				sectionUserID: '2042f955-ef13-45a3-baf7-730eeff5123f',
				userID: '4',
				name: 'Finch'
			},
			{
				sectionID: '21',
				sectionUserID: '3828df52-d2ea-4bce-bbb2-02b38c881498',
				userID: '9',
				name: 'JJ'
			},
			{
				sectionID: '21',
				sectionUserID: 'c09ac76c-af87-4028-8739-3ecb400ec019',
				userID: '8',
				name: 'Candy'
			},
			{
				sectionID: '21',
				sectionUserID: '1355c3fd-db9e-4430-99b0-383771825c8f',
				userID: '6',
				name: 'Toffee'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/748733311?share_token=aDlMQIVGYxCgy1xgJCfakNhBXrsim4d9uoD0kRfn591IWxSnjl&ref=wtd',
		distance: 11.4,
		startLocation: 'Snitterfield',
		elevation: 80,
		estimatedPace: '00:08:00',
		sectionID: '12',
		endLocation: 'Warwick',
		users: [
			{
				sectionID: '12',
				sectionUserID: '3b5c9098-b71e-458f-a0b0-bdb890b191f6',
				userID: '1',
				name: 'Luke'
			},
			{
				sectionID: '12',
				sectionUserID: '93e96c16-515c-4647-a264-19e033292ed3',
				userID: '9',
				name: 'JJ'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/748761802?share_token=adIpmYWNuZNmSERiZbjnaPEkCZsGoD7FWUeCgaJhWH4lRbUXym&ref=wtd',
		distance: 8,
		startLocation: 'Wibtoft',
		elevation: 30,
		estimatedPace: '00:08:30',
		sectionID: '17',
		endLocation: 'Stoney Stanton',
		users: [
			{
				sectionID: '17',
				sectionUserID: 'b107e964-4fd9-45e3-89ad-a9f4c92536c3',
				userID: '3',
				name: 'Bubbles'
			},
			{
				sectionID: '17',
				sectionUserID: '276e1c42-6760-47bb-b300-754b47a348b8',
				userID: '10',
				name: 'Nom'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/715071233?share_token=afqsszyYjv0FWvgzQNAqs7awDvKsY1aNE5I3F2yTEAAG3hU1go&ref=wtd',
		distance: 15.7,
		startLocation: 'Broadway',
		elevation: 20,
		estimatedPace: '00:07:30',
		sectionID: '10',
		endLocation: 'Long Marston',
		users: [
			{
				sectionID: '10',
				sectionUserID: '2c2adea5-c52f-46ee-9154-a79e5153a19e',
				userID: '2',
				name: 'Cat'
			},
			{
				sectionID: '10',
				sectionUserID: 'b506c4f3-44cf-4bf3-af36-871c0b91f886',
				userID: '4',
				name: 'Finch'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/748746412?share_token=ahaaDKPyJdkXkPQy0CLK9FOZnu9242lCcdsa1YwAR17dOY6YT4&ref=wtd',
		distance: 9.65,
		startLocation: 'Ryton-on-Dunsmore',
		elevation: 60,
		estimatedPace: '00:07:30',
		sectionID: '15',
		endLocation: 'Brinklow',
		users: [
			{
				sectionID: '15',
				sectionUserID: '11eee222-0846-4ef5-bc52-9eb6d9707e35',
				userID: '9',
				name: 'JJ'
			},
			{
				sectionID: '15',
				sectionUserID: '942f2969-ee70-4c10-8be9-bbc86c4b90d2',
				userID: '4',
				name: 'Finch'
			},
			{
				sectionID: '15',
				sectionUserID: '16242e98-8a30-4bc3-80b7-adedb6936825',
				userID: '1',
				name: 'Luke'
			}
		]
	},
	{
		komootLink:
			'https://www.komoot.com/tour/748746114?share_token=aGO0V5UsbdxeJxE1c2eO2gZMfHKRaOctHO1l652bQ9NwENy2lj&ref=wtd',
		distance: 9.5,
		startLocation: 'Cubbington',
		elevation: 70,
		estimatedPace: '00:09:00',
		sectionID: '14',
		endLocation: 'Ryton-on-Dunsmore',
		users: [
			{
				sectionID: '14',
				sectionUserID: '8aef6dc1-0a55-45fb-98e5-ee1fd11b2495',
				userID: '8',
				name: 'Candy'
			},
			{
				sectionID: '14',
				sectionUserID: '8fb81096-7bf1-4e81-a93d-5172b57dd651',
				userID: '6',
				name: 'Toffee'
			}
		]
	}
];

//console.log(updateSections(sections));
// getEstimatedTime('00:08:00', 13.7, '2022-07-17T04:00:00');
