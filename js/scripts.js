//business logic
function hideResults() {
  document.getElementById("go").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("c").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const radio1 = document.querySelector("input#radio1").value;
    const radio2 = document.querySelector("input#radio2").value;
    const radio3 = document.querySelector("input#radio3").value;
    const operator = document.querySelector("input[name='operator']:checked").value;
    const operator2 = document.querySelector("input[name='operator2']:checked").value;
    const operator3 = document.querySelector("input[name='operator3']:checked").value;

    if (radio1)
  }
}
