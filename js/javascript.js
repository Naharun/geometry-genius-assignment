function getInputValueById(bodyInputId){
    const inputField = document.getElementById(bodyInputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}


let serial = 0;
function displayOutputData(name, totalNewOutput) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    serial+=1;
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${name}</td>
        <td>${totalNewOutput}</td>
        <td><button class="btn btn-primary convert-button">Convert to m<sup>2</sup><button></td>
    `;
    container.appendChild(tr);
}

document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = 'blog.html';
})

// card: 1  triangle area
document.getElementById('btn-triangle').addEventListener('click',function(){
    const triangleBaseOutput = getInputValueById('triangle-base-input');
    const triangleHeightOutput = getInputValueById('triangle-height-input');
    const totalNewOutput = (0.5 * triangleBaseOutput * triangleHeightOutput).toFixed(2);

    
    if(isNaN(triangleBaseOutput) || isNaN(triangleHeightOutput) || triangleBaseOutput < 0 || triangleHeightOutput < 0){
        alert('Please type valid number');
        return;
    };

    
    displayOutputData("Triangle", totalNewOutput);
})


// Card: 2  Rectangle area
document.getElementById('btn-rectangle').addEventListener('click',function(){
    const rectangleBaseOutput = getInputValueById('rectangle-base-input');
    const rectangleHeightOutput = getInputValueById('rectangle-height-input');
    const totalNewValue = (rectangleBaseOutput * rectangleHeightOutput).toFixed(2);

    if(isNaN(rectangleBaseOutput) || isNaN(rectangleHeightOutput) || rectangleBaseOutput < 0 || rectangleHeightOutput < 0){
        alert('Please type valid number');
        return;
    };

    displayOutputData("Rectangle", totalNewValue);
})

// Card:3 Parallelogram area
document.getElementById('btn-parallelogram').addEventListener('click',function(){
    const parallelogramBaseOutput = getInputValueById('parallelogram-base-input');
    const parallelogramHeightOutput = getInputValueById('parallelogram-height-input');
    const totalNewValue = (parallelogramBaseOutput * parallelogramHeightOutput).toFixed(2);

    if(isNaN(parallelogramBaseOutput) || isNaN(parallelogramHeightOutput) || parallelogramBaseOutput < 0 || parallelogramHeightOutput < 0){
        alert('Please type valid number');
        return;
    };

    displayOutputData("Parallelogram", totalNewValue);
})

// Card:4 Rhombus area
document.getElementById('btn-rhombus').addEventListener('click',function(){
    const rhombusBaseOutput = getInputValueById('rhombus-base-input');
    const rhombusHeightOutput = getInputValueById('rhombus-height-input');
    const totalNewValue = (0.5 * rhombusBaseOutput * rhombusHeightOutput).toFixed(2);

    if(isNaN(rhombusBaseOutput) || isNaN(rhombusHeightOutput) || rhombusBaseOutput < 0 || rhombusHeightOutput < 0){
        alert('Please type valid number');
        return;
    };

    displayOutputData("Rhombus", totalNewValue);
})

// Card:5 Pentagon area
document.getElementById('btn-pentagon').addEventListener('click',function(){
    const pentagonBaseOutput = getInputValueById('pentagon-base-input');
    const pentagonHeightOutput = getInputValueById('pentagon-height-input');
    const totalNewValue = (0.5 * pentagonBaseOutput * pentagonHeightOutput).toFixed(2);

    if(isNaN(pentagonBaseOutput) || isNaN(pentagonHeightOutput) || pentagonBaseOutput < 0 || pentagonHeightOutput < 0){
        alert('Please type valid number');
        return;
    };

    displayOutputData("Pentagon", totalNewValue);
})


// Card:6 Ellipse area
document.getElementById('btn-ellipse').addEventListener('click',function(){
    const ellipseBaseOutput = getInputValueById('ellipse-base-input');
    const ellipseHeightOutput = getInputValueById('ellipse-height-input');
    const totalNewValue = (3.14 * ellipseBaseOutput * ellipseHeightOutput).toFixed(2);

    if(isNaN(ellipseBaseOutput) || isNaN(ellipseHeightOutput) || ellipseBaseOutput < 0 || ellipseHeightOutput < 0){
        alert('Please type valid number');
        return;
    };

    displayOutputData("Ellipse", totalNewValue);
})

//  background random color
  function cardRandomColor(){
    let color = [];
    for (let i = 0; i < 4; i++){
        color.push(Math.floor(Math.random() * 255));
    }
    return 'rgb(' + color.join(',') + ')';
  }
  
  document.addEventListener("mouseover", function(){
    document.body.style.backgroundColor = cardRandomColor();
  });

document.getElementById('card-bg').addEventListener('mouseover',event =>{
    event.target.style.fill = cardRandomColor();
})