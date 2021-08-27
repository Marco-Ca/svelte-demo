import { writable } from 'svelte/store';

export const cryptocoin = writable([]);
const cryptocoinDetails = {};
let isLoaded = false;

export const fetchcryptocoin = async () => {
	if (isLoaded) {
		return
	};
	const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false";
	const res = await fetch(url);
	const data = await res.json();
	const loadedCryptoCoin = data.map(({id, image}) => ({
		name: id,
		id: id,
		image: image
	}));
	cryptocoin.set(loadedCryptoCoin);
	isLoaded = true;
};

export const getCoinById = async (id) => {
	if (cryptocoinDetails[id]) return cryptocoinDetails[id];

	try {
		const url = "https://api.coingecko.com/api/v3/coins/${id}";
		const res = await fetch(url);
		const data = await res.json();

		cryptocoinDetails[id] = data;
		return data;
	} catch (err) {
		console.error(`error at getCoinById: ${err}`);
		return null;
	}
};
