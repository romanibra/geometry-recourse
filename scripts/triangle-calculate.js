function calculateTriangleArea(){
   // triangle hight
   const triangleBaseInput=document.getElementById('triangle-base');
   const triangleBaseText=triangleBaseInput.value;
   const base =parseFloat(triangleBaseText)
   // console.log( base)

   // triangle hight
   const triangleHeightInput=document.getElementById('triangle-height');
   const triangleHeightText=triangleHeightInput.value;
   const height =parseFloat(triangleHeightText);
   console.log(height);

   const area= .5*base *height;
   console.log(area);

   // display triangle area

   const triangleAreaSpan= document.getElementById('triangle-area');
   
   triangleAreaSpan.innerText = area;
}  