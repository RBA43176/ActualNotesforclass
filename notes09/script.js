function calculateGrade() {
  // 1. Grab the score typed into the HTML input box
  const score = Number(document.getElementById("scoreInput").value);
  let grade;

  // 2. Check the grade (including D)
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  // 3. Log to console and show on the webpage
  console.log("Score: " + score + ", Grade: " + grade);
  document.getElementById("resultDisplay").textContent = `Your Grade: ${grade}`;
}
