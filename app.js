// https://www.omnicalculator.com/conversion/cups-to-pints-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const pintsRadio = document.getElementById('pintsRadio');
const cupsRadio = document.getElementById('cupsRadio');

let pints;
let cups = v; 

// labels of the inpust
const variable = document.getElementById('variable');

pintsRadio.addEventListener('click', function() {
  variable.textContent = 'Cups';
  cups = v;
  result.textContent = '';
});

cupsRadio.addEventListener('click', function() {
  variable.textContent = 'Pints';
  pints = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(pintsRadio.checked)
    result.textContent = `Pints = ${computepints().toFixed(5)}`;

  else if(cupsRadio.checked)
    result.textContent = `Cups = ${computecups().toFixed(5)}`;
})

// calculation

function computepints() {
  return Number(cups.value) / 2;
}

function computecups() {
  return Number(pints.value) * 2;
}