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

module.exports = { getX };