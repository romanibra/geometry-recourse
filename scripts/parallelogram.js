function parallelogram(){
    const baseInput=document.getElementById('parallelogram-base');
    const baseText=baseInput.value;
   const base=parseFloat(baseText);
   console.log(base);

   const heightInput=document.getElementById('parallelogram-height');
   const heightText=heightInput.value;
   const height=parseFloat(heightText);
   console.log(height)


//    calculate
    const area = base*height;
    console.log('parallelogram area is',area)

    // display value

    const parallelogramValueSpan=document.getElementById('parallelogram-area');
    parallelogramValueSpan.innerText=area

}