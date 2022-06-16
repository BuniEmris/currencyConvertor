const MY_KEY = "Jkxdz4nyrSNYDhZBiSAxWoWooU42z2uI";
const API_URL = "https://api.apilayer.com/exchangerates_data/convert?";
export const getResource = async (addr: any) => {
  try {
    let res = await fetch(API_URL + addr, {
      method: "GET",
      headers: {
        apikey: MY_KEY,
      },
    });

    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(err);
  }
};
