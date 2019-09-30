// Set up variables for the survey data
let i;
let first;
let second;
let third;
let fourth;
let fifth;
let sixth;
let seventh;
let eighth;
let ninth;
let tenth;
let answers = [];
let friendinfo;
let friendship = 0;
let friendvalues = [];
let id;
$("#submit").on("click", myFunction);

//My Function to pull in the Friend Data and push to array
function myFunction(event) {
event.preventDefault();
  document.getElementById("surveyAll").className = "hide";
  first = document.getElementsByTagName("Q1")[0].value; //fix this part (do not push into the array right away)
  second = document.getElementsByTagName("Q2")[1].value;
  third = document.getElementsByTagName("Q3")[2].value;
  fourth = document.getElementsByTagName("Q4")[3].value;
  fifth = document.getElementsByTagName("Q5")[4].value;
  sixth = document.getElementsByTagName("Q6")[5].value;
  seventh = document.getElementsByTagName("Q7")[6].value;
  eighth = document.getElementsByTagName("Q8")[7].value;
  ninth = document.getElementsByTagName("Q9")[8].value;
  tenth = document.getElementsByTagName("Q10")[9].value;
  console.log(tenth, sixth);
  
//   var c = document.getElementsByTagName("input")[0];  looked at W3 for help
//   var x = c.childNodes[0].nodeValue;  i need the node value to get to the value??
//   document.getElementById("demo").innerHTML = x;
}
