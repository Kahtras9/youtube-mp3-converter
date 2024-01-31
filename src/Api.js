import axios  from "axios";

const requestOptions = {
    method: 'GET',
    url: 'https://youtube-mp36.p.rapidapi.com/dl',
    params: {},
    headers: {
      'X-RapidAPI-Key': '474db5279dmsh3b4979f76e327d2p116abbjsne60a0da680c4',
      'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
    }
  };

const fetch = async (id) => {
    requestOptions.params = { id };
    const response = await axios.request(requestOptions)
    return response;
}

export { fetch };
