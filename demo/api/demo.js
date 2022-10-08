import fetch from 'node-fetch'

getAPI()

function getAPI () {
  fetch('http://localhost:6969/api')
    .then(response => response.json())
    .then(data => console.log(data))
}
