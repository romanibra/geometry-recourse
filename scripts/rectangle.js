function rectangleArea(){
    const lengthInput=document.getElementById('rectangle-length')
    const lengthText=lengthInput.value
    const length=parseFloat(lengthText)
    console.log(length)
    

    const widthInput=document.getElementById('rectangle-width');
    const widthText=widthInput.value;
    const width=parseFloat(widthText);
    console.log(width);

    // calculate value

    const area=length*width;
    console.log('rectangle area value is', area)

    // display value

    const rectangleAreaSpan=document.getElementById('rectangle-Area')
    rectangleAreaSpan.innerText=area
}