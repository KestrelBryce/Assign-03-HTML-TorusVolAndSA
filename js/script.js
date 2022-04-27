  /* This function calculates the surface area of a torus. 
*/

function Calculate_surface_area() {
  // input
  let TuRad = parseFloat( (document.getElementById('TuRad-here').value));
  let RadORev = parseFloat( (document.getElementById('RadORev-here').value));
  
  // Equation
  let Surface_area_answer = Math.PI * Math.PI * 4 * TuRad * RadORev;
  
  // remember to use .toFixed(2) to round to two decimal places
  
  // output for volume
  document.getElementById('Surface-area-results').innerHTML = "Your Surface area in centimeters rounded to two decimal places is " + Surface_area_answer.toFixed(2) +  "cm<sup>2</sup>" + "."


}

  /* This function calculates the volume of a torus. 
*/

function Calculate_volume() {
  // input
  let TuRad = parseFloat( (document.getElementById('TuRad-here').value));
  let RadORev = parseFloat( (document.getElementById('RadORev-here').value));

  // Equation
  let Volume_answer = Math.PI * Math.PI * 2 * (TuRad * TuRad) * RadORev;
  
  // remember to use .toFixed(2) to round to two decimal places
  
  // output for volume
  document.getElementById('Volume-results').innerHTML = "Your Volume in centimeters rounded to two decimal places is " + Volume_answer.toFixed(2)  +  "cm<sup>3</sup>" + "."


  // unused/currently testing code
  // let Pyramid_volume = float(5)/float(9) * (Far-32);

  
}