const a = +prompt('Введіть значення а');
const b = +prompt('Введіть значення b'); 
const eps = +prompt('Введіть значення eps');

function getX(a, b, eps) {
  const m = (b - a) / 2 + a;

  const resFromA = Math.sin(a) - Math.cos(a);
  const resFromM = Math.sin(m) - Math.cos(m);

  if (resFromM === 0 || b - a < eps) {
    return m;
  }

  if (resFromM * resFromA < 0) {
    return getX(a, m, eps);
  } else {
    return getX(m, b, eps);
  }
}

console.log(getX(a, b, eps));
