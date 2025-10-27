// node --watch about-fetch-then-map.js
fetch('http://randomuser.me/api?results=10')
//                             \ query string
    .then(response => response.json())
    .then(data => {
        let info = data.results.map(item => {
            let name = item.name.first + ' ' + item.name.last;
            let place = item.location.city;
            return `${name} is from ${place}.`;
        });
        console.table(info);
    });
