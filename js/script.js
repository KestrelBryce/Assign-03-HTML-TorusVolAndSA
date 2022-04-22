  /* This function converts celsius to farenheit. 
*/

function Calculate_surface_area() {
  // input
  let TuRad = parseFloat( (document.getElementById('TuRad-here').value));
  let RadORev = parseFloat( (document.getElementById('RadORev-here').value));
  
  // Equation
  let Surface_area_answer = 9/5  *  Cel  +  32;
  
  // remember to use .toFixed(2) to round to two decimal places
  
  // output for volume
  document.getElementById('Surface-area-results').innerHTML = "Your temperature in celsius rounded to the nearest degree is " + Cel_to_far_answer.toFixed(0)  +  "°"


}

  /* This function converts farenheit to celsius. 
*/

function Calculate_volume() {
  // input
  let TuRad = parseFloat( (document.getElementById('TuRad-here').value));
  let RadORev = parseFloat( (document.getElementById('RadORev-here').value));

  // Equation
  let Volume_answer = 5/9  *  (Far  -  32);
  
  // remember to use .toFixed(2) to round to two decimal places
  
  // output for volume
  document.getElementById('Volume-results').innerHTML = "Your temperature in farenheit rounded to the nearest degree is " + Far_to_cel_answer.toFixed(0)  +  "°."


  // unused/currently testing code
  // let Pyramid_volume = float(5)/float(9) * (Far-32);

  
}