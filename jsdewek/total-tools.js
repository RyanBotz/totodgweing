fetch('./jsondewek/total-tools.json')
    .then(response => response.json())
    .then(data => {
        console.log(data.results)

        document.getElementById("total-tools").innerText = data.results
    });