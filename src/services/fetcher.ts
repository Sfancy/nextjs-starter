import ky from 'ky';

const prefixUrl = process.env.API_URL || 'http://localhost:3000';

const kyInstance = ky.create({ prefixUrl, credentials: 'include' });

const fetcher = (url: string) => kyInstance.get(url).json();

export default fetcher;
