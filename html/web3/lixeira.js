// Seleciona o elemento <svg> no documento e adiciona um evento de clique
document.querySelector("svg").addEventListener('click', () => {
    
    // Ao clicar no <svg>, adiciona a classe "animated" ao elemento com id "tampa"
    document.querySelector("#tampa").classList.add("animated");
    
    // Também adiciona a classe "animated" ao elemento com id "lata"
    document.querySelector("#lata").classList.add("animated");

});
