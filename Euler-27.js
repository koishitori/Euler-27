class Euler27{
  constructor(){
    this.primes = [ 2 ];
    for(var i = 3; i < 1000000; i += 2 ){
      var flag = 1;
      for( var j = 0; j < this.primes.length && this.primes[ j ] ** 2 <= i; j++ )
        if( i % this.primes[ j ] === 0 ){
          flag = 0;
          break;
        }
      if( flag === 1 ){
        this.primes.push( i );
      }
    }
  }

  check( a, b ){
    var n = 0;
    while(1){
      if ( this.primes.indexOf( n ** 2 + a * n + b ) === -1 )
        break;
      n++;
    }
    return n;
  }
}

var euler27 = new Euler27();
var ans = 0;
var long = 0;
for( var a = -999; a < 1000; a++ )
  for( var b = 0; euler27.primes[ b ] < 1000; b++ ){
    var out = euler27.check( a, euler27.primes[ b ] );
    if( long < out ){
      ans = a * euler27.primes[ b ];
      long = out;
      console.log( a + " : " +  euler27.primes[ b ] + " : " + long);
    }
  }
ans;
