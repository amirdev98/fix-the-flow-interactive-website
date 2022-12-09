/*checklist die haalt alle checkboxes op van de richtlijnen*/
let checklist = document.querySelectorAll(".richtlijnen input[type=checkbox]");
//progressie balk 
let progression = document.querySelector("#waarneembaar-meter");
console.log(checklist.length);
//zodra een checkbox wordt aangeklikt, wordt de progressie geupdated
checklist.forEach(function (checkbox) {
  checkbox.addEventListener("click", function () {
    progression.value = document.querySelectorAll(
      ".richtlijnen input[type=checkbox]:checked"
    ).length;
  });
});
