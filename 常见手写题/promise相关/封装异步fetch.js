async function Myfetch(url, options = {}) {
  try {
    let data = await fetch(url, options).then((response) => response.json());
    if (!data) return new Error(`Failed to fetch`);
    return data;
  } catch (error) {
    return error;
  }
}

(async () => {
  try {
    const data = await Myfetch("https://study.duyiedu.com/api/lyrics", {
      method: "GET",
    });
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();
