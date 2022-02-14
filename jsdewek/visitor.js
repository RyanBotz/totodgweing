fetch('https://api.countapi.xyz/hit/ryanweb/visits')
    .then(response => response.json())
    .then(data => {
        console.log(data.value)

        document.getElementById("visitor").innerText = data.value
    });