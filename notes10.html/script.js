const projects = [
    {
        title: "Personal Portfolio",
        tech: ["HTML", "CSS", "JavaScript"],
        year: 2025,
        description: "A personal portfolio website showcasing my projects and skills."
    },
    {
        title: "Weather App",
        tech: "JavaScript",
        year: 2026,
        description: "Shows local weather information."
    }
];

projects.push({
    title: "To-Do List",
    tech: "HTML, JS",
    year: 2026,
    description: "Tracks daily tasks."
});

projects.forEach(function(project) {
    console.log(project.title);
});

let jsonText = JSON.stringify(projects);
console.log(jsonText);