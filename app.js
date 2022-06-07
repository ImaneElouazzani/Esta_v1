const data = {
    "collection":"form",
    "database":"imane_16",
    "dataSource":"Cluster0",
    "document": {"test": "value test"}
}

fetch('https://data.mongodb-api.com/app/data-kgesl/endpoint/data/beta/action/findOne', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': 'WYO6EiR1f61nCvSEHbM77byGHjYNuKIeTvlsDxYXsAjkTNWQxZlyvf1YdAH0TgaI'
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
