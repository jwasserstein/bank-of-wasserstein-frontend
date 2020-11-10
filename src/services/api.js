export async function apiCall(type, url, data, token) {
	if(type.toLowerCase() === 'get'){
		const resp = await fetch(url, {
			method: type,
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Bearer ${token}`
			}
		});
		const d = await resp.json();
		return d;
	} else {
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
}