fetch("templates/index.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("app").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error loading template:", error);
  });
