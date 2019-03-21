import axios from 'axios';

const KEY = 'AIzaSyAKN98qGAboHXmmSAoVC-WnK6xMubwOTDg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
