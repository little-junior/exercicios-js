function mudarParagrafo() {
  let paragrafo = document.querySelector("p");
  let botao = document.querySelector("button");

  paragrafo.style.visibility =
    paragrafo.style.visibility === "" ||
    paragrafo.style.visibility === "visible"
      ? "hidden"
      : "visible";

  botao.textContent =
    paragrafo.style.visibility === "visible"
      ? "Clique aqui para sumir o texto"
      : "Clique aqui para aparecer o texto";
}
