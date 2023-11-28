let convertBtn = document.getElementById('convertBtn');
let resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', function() {
    let hexaInput = document.getElementById('hexaInput').value;
    let r = parseInt(hexaInput[1] + hexaInput[2], 16);
    let g = parseInt(hexaInput[3] + hexaInput[4], 16);
    let b = parseInt(hexaInput[5] + hexaInput[6], 16);
    
    resultDiv.textContent = `RGB: ${r}, ${g}, ${b}`;
});










