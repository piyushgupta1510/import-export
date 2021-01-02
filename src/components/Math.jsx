import React from "react";

const pi = 3.141592653589793238;
const SpeedofLight = 299792458;
function Pi() {
  return pi;
}

function doublePi() {
  return pi * 2;
}

function tripplePi() {
  return pi * 3;
}

export default Pi;
export { doublePi, tripplePi, SpeedofLight };
