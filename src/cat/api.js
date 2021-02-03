const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (url) => {
  try {
    let res = await fetch(url);

    if(res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      throw new Error(res);
    }
  } catch {
    alert('실패!');
  }

};

const api = {
  fetchCats: keyword => {
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
  fetchRandom: () => {
    return request(`${API_ENDPOINT}/api/cats/random50`);
  },
  fetchCatInfo: keyword => {
    return request(`${API_ENDPOINT}/api/cats/${keyword}`);
  }
};

// const request = async (url: string) => {
//   try {
//     const result = await fetch(url);
//     return result.json();
//   } catch (e) {
//     console.warn(e);
//   }
// }
// const api = {
//   fetchGif: keyword => {
//     return request(`${API_ENDPOINT}/api/gif/search?q=${keyword}`);
//   },
//   fetchGifAll: () => {
//     return request(`${API_ENDPOINT}/api/gif/all`);
//   }
// };
