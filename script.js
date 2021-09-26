window.onload = e => {
  var env = document.getElementById("envelope");
  env.addEventListener("click", event => {
    console.log("clicked");
    if (env.classList.contains("open")) env.classList.replace("open", "close");
    else env.classList.replace("close", "open");
  });
};
