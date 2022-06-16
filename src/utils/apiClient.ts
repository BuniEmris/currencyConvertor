const MY_KEY = "spW8vqxcdrfrgxk364xVBjQR33VAVo8V";
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
    return 123;
  }
};
