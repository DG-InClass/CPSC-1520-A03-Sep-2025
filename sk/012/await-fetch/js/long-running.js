// long-running.js
// Adapted from https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing

const MAX_PRIME = 1_000_000; // One Million

const isPrime = function(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0 ) {
            return false;
        }
    }
    return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

const generatePrimes = function(quota) {
    const primes = [];
    while(primes.length < quota) {
        const candidate = random(MAX_PRIME);
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }
    return primes;
}

const generatePrimesAsync = function(quota) {
    return new Promise((resolve, reject) => {
        const primes = [];
        while(primes.length < quota) {
            const candidate = random(MAX_PRIME);
            if (isPrime(candidate)) {
                primes.push(candidate);
            }
        }

        resolve(primes);
    });
}

export { generatePrimes, generatePrimesAsync }
