const a = +prompt('Введіть значення а');
const b = +prompt('Введіть значення b'); 
const eps = +prompt('Введіть значення eps');

function getResult(a, b, eps) {
  const m = (b - a) / 2 + a;

  const resFromA = Math.sin(a) - Math.cos(a);
  const resFromM = Math.sin(m) - Math.cos(m);

  if (resFromM === 0 || b - a < eps) {
    return m;
  }

  if (resFromM * resFromA < 0) {
    return getResult(a, m, eps);
  } else {
    return getResult(m, b, eps);
  }
}

console.log(getResult(a, b, eps));
