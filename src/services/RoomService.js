const ENDPOINT = "/api/homecards";

const fetchRooms = () => fetch(ENDPOINT).then(response => response.json());

export { fetchRooms };
