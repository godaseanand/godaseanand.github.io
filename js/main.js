async function loadSection(elementId, fileName) {

try {

    const response = await fetch(fileName);

    if (!response.ok) {
        throw new Error(
            `Could not load ${fileName}`
        );
    }

    const html = await response.text();

    document.getElementById(elementId).innerHTML = html;

} catch (error) {

    console.error(error);

    document.getElementById(elementId).innerHTML =
        "<p>Unable to load this section.</p>";

}


}

/* Load portfolio sections */

loadSection("home", "sections/home.html");

loadSection("about", "sections/about.html");

loadSection("experience", "sections/experience.html");

loadSection("skills", "sections/skills.html");

loadSection("projects", "sections/projects.html");

loadSection("contact", "sections/contact.html");

loadSection("certifications", "sections/certifications.html");