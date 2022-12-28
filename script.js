async function fetchData(){

  

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43a538bf98msh845702fed47406cp111041jsn999253279440',
      'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
    }
  };
  
  const res = await fetch('https://nba-latest-news.p.rapidapi.com/articles?team=Lakers', options)


  const record = await res.json()
  console.log('record',record);
  document.getElementById("news").innerHTML = record.map(item => `<li>${item.title}</li>`).join("");
}
fetchData();