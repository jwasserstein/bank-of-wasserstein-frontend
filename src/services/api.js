export async function apiCall(type, url, data, token) {
	const resp = await fetch(url, {
		method: type,
		headers: {
			'Content-Type': 'application/json',
			'authorization': `Bearer ${token}`
		},
		body: JSON.stringify(data)
	});
	const d = await resp.json();
	return d;
}