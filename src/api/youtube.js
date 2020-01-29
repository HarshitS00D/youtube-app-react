import axios from 'axios';

const KEY = 'AIzaSyA6R7IjumcvLysmJS-gLnJg-O2b3DRX2Ic';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 15,
		key: KEY
	}
});
