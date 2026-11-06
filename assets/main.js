var root = document.documentElement;
var titulos = { pt: document.title, en: "Maurício Oliveira — QA Engineer" };

document.querySelectorAll(".tema").forEach(function (b) {
  b.addEventListener("click", function () {
    var t = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", t);
    try { localStorage.setItem("tema", t); } catch (e) {}
  });
});

document.querySelectorAll(".set-lang").forEach(function (b) {
  b.addEventListener("click", function () {
    var l = b.getAttribute("data-lang");
    root.setAttribute("data-lang", l);
    root.lang = l === "en" ? "en" : "pt-BR";
    document.title = titulos[l];
    try { localStorage.setItem("idioma", l); } catch (e) {}
  });
});
