// Workng with APIs
// We need to answer the following questions
// - What is the endpoint (URL)?
// - What query string/parameters do we need to provide?
// -- What are the required parameters?
// -- What optional parameters do we want to add?
// - What HTTP method are we using?

let url = `https://restcountries.eu/rest/v2/name/Australia`;

function waitForData(res) {
  return res.json();
}

function handleData(data) {
  let pop = data[0].population;
  console.log(`The population of Australia is ${pop}.`);
}

fetch(url, {
  method: "GET",
})
  .then(waitForData)
  .then(handleData);
