async function getBorderCountries(code) {
  try {
    const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);
    const data = await response.json();
    console.log(`Country:`);
    console.log(data);
    console.log(`Neighbours:`)
    const borderCodes = data.borders;
      for (let borderCode of borderCodes) {
        const borderRasponse = await fetch (`https://restcountries.com/v2/alpha/${borderCode}`);
        const borderData = await borderRasponse.json();
        console.log(borderData)
      }
  } catch (error) {
    console.log(`Error`, error)
  }
}

const code = "MKD"; 
getBorderCountries(code);
 