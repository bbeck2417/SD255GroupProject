<script>
const courses = [];


const form = document.getElementById('courseForm');
const courseDiv = document.getElementById('courses');


form.onsubmit = function(e) {
e.preventDefault();


const course = {
name: name.value,
description: description.value,
subject: subject.value,
credits: credits.value
};


courses.push(course);
form.reset();
showCourses();
};


function showCourses() {
courseDiv.innerHTML = '';
courses.forEach(c => {
courseDiv.innerHTML += `
<div class="course">
<strong>${c.name}</strong><br>
${c.description}<br>
Subject: ${c.subject}<br>
Credits: ${c.credits}
</div>`;
});
}
</script>