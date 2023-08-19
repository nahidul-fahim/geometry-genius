//FUNCTION TO GET INPUT VALUE

function valueFromInputBox (inputField){
    const providedValue = document.getElementById(inputField);
    const providedValueInString = providedValue.value;
    const providedValueInNumber = parseFloat(providedValueInString);
    providedValue.value = '';
    return providedValueInNumber;
}

// FUNCTION TO GET SET AREA VALUE

function setAreaValue (areaElementId, area){
    const areaPlacement = document.getElementById(areaElementId);
    areaPlacement.innerText = area;
}

// FUNCTION TO ADD AREA TO HISTORY

function addAreaToHistory (geometryShape){
    const shapeName = document.getElementById (geometryShape);
    
}

// TRIANGLE-AREA-CALCULATION

document.getElementById('triangle-calculation').addEventListener('click', function(){
    const triangleBaseInput = valueFromInputBox('triangle-base-input');
    const triangleHeightInput = valueFromInputBox('triangle-height-input');
    if (isNaN(triangleBaseInput) || isNaN (triangleHeightInput) || triangleBaseInput < 0 || triangleHeightInput < 0){
        window.alert('You must enter positive numbers only');
        return;
    }
    const triangleArea = 0.5 * triangleBaseInput * triangleHeightInput;
    setAreaValue('tranglge-area-add', triangleArea);
})

//RECTANGLE-AREA-CALCULATION

document.getElementById('rectangle-calculation').addEventListener('click', function(){
    const rectagnleWidthInput = valueFromInputBox('rectangle-width-input');
    const rectangleHeightInput = valueFromInputBox('rectangle-length-input');
    if (isNaN(rectagnleWidthInput) || isNaN (rectangleHeightInput) || rectagnleWidthInput < 0 || rectangleHeightInput < 0){
        window.alert('You must enter positive numbers only');
        return;
    }
    const rectangleArea = rectagnleWidthInput * rectangleHeightInput;
    setAreaValue ('rectangle-area-add', rectangleArea);
})

//PARALLELOGRAM-AREA-CALCULATION

document.getElementById('parallelogram-area-calculation').addEventListener('click', function (){
    const parallelogramBaseInput = valueFromInputBox('parallelogra-base-input');
    const parallelogramHeightInput = valueFromInputBox('parallelogra-height-input')
    if (isNaN(parallelogramBaseInput) || isNaN (parallelogramHeightInput) || parallelogramBaseInput < 0 || parallelogramHeightInput < 0){
        window.alert('You must enter positive numbers only');
        return;
    }
    const parallelogramArea = parallelogramBaseInput * parallelogramHeightInput;
    setAreaValue ('parallelogram-area-add', parallelogramArea);
})