function bir(n) {
  let product = n;
  while (n > 1) {
    n--;
    product *= n;
  }

  return product;
}

// console.log(bir(4))

let count = 2;
function iki() {
  let x = 1;
  let y = 1;
  cag(x, y);
  function cag(x, y) {
    if (count < 23) {
      count++;
      // console.log(count)
      console.log(x);
      cag(x + y, x);
    }
  }
}
iki();

function uc(n) {
  let m = n - 1;
  while (m >= 1) {
    if (n % m == 0) {
      console.log(m);
    }
    m--;
  }
}

// uc(48)

function dort(n) {
  let m = n - 1;
  let count = 1;
  let sum = 0;
  while (m >= 1) {
    if (n % m == 0) {
      sum += m;
      count++;
      // console.log(m)
    }
    m--;
  }
  console.log("Dorduncu funksiya cem ", sum, count);
}

// dort(48 )

function bes(n) {
  let isPrime = true;
  let m = n - 1;
  while (m > 1) {
    if (n % m == 0) {
      isPrime = false;
      break;
    }
    m--;
  }
  if (isPrime) {
    console.log("It is a prime num.");
  } else {
    console.log("It is not a  prime num.");
  }
}

bes(13);

function alti(n) {
  let sum = 0;
  let m = n - 1;
  while (m >= 1) {
    if (n % m == 0) {
      sum  +=m ;
    }
    m--;
  }
	if (sum == n){
		console.log('Mukemmel')
	}else{
		console.log("Mukemmel deyil")
	}
}

alti(28)



function yeddi (a,n){
	n_ = n ;
	let product = a;
	n--;
	while(n>=1){
		 product*=a
		 n--;
	}
	console.log(`${a} ^ ${n_} = ${product}`)
}

yeddi(2,10)



function extra(n,m){
	if (m >=n){
		for(n;n++;n<=m){
			console.log(n)
		}
	}
}

extra(10,15)