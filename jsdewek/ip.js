fetch('http://ip-api.com/json/')
            .then(response => response.json())
            .then(data => {
                // console
                console.log(data)
                console.log(data.query)
                console.log(data.city) 
                console.log(data.country)
                console.log(data.countryCode) 
                console.log(data.timezone) 
                // console End

                // id ++ ip             
                document.getElementById("ip").innerText = data.query
                document.getElementById("kota").innerText = data.city
                document.getElementById("negara").innerText = data.country
                document.getElementById("kodeNegara").innerText = data.countryCode
                document.getElementById("timezone").innerText = data.timezone
                // id ++ ip End
            });