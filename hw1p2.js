#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";
var primes = new Array();
var n = 2;  
while (primes.length < 100) {
  var factor = false;
  for (var i in primes) { 
    if (n % primes[i] == 0) {
      factor = true;
      break;
    }
  }
  if (factor == false) {
    primes.push(n);
  }
  n++;
}
fs.writeFileSync(outfile, primes);
