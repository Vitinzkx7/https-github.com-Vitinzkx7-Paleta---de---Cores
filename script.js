function generatePalette() {
  const paletteDiv = document.getElementById("palette");
  paletteDiv.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    const colorDiv = document.createElement("div");
    colorDiv.className = "color";
    colorDiv.style.backgroundColor = color;
    colorDiv.textContent = color;
    colorDiv.onclick = () => navigator.clipboard.writeText(color);
    paletteDiv.appendChild(colorDiv);
  }
}
