const api = 'https://api.github.com/rate_limit';

fetch(api)
    .then(resp => {
        // console.log(resp);
        if(!resp.ok) {
            throw new Error(`Unable to access endpoint: ${resp.status}, ${resp.statusText}`)
        }

        return resp.json();
    })
    .then(data => {
        // console.log(data);
        let customObj = {
            remaining: data.rate.remaining,
            used: data.rate.used,
            limit: data.rate.limit
        }
        return customObj;
        // return data.rate;
    })
    .then(details => {
        console.log(details);
        let msg = `I have ${details.remaining} calls left after making ${details.used} calls`;
        console.log(msg);
    })
    .catch(err => {
        console.log(err);
    });


function dostuff(info) {
    return info.length;
}

console.log(dostuff('bob'));

