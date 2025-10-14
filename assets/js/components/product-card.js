export async function loadProductCard(
  wrapperSelector,
  { title, img, price, combo }
) {
  const res = await fetch("./components/product-card.html");
  const html = await res.text();

  // Convert fetched HTML string to DOM elements
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = html;
  const template = tempContainer.querySelector("#product_card_template");

  // Clone the template and populate it with data
  const node = template.content.cloneNode(true);
  node.querySelector("img").src = img;
  node.querySelector("h4").textContent = title;
  node.querySelector(".price_and_action p").textContent = price;
  const comboTitle = node.querySelector(".preview_info p");
  const comboTab = node.querySelector(".card_img_area p");
  if (combo) {
    comboTitle.textContent = combo;
    comboTab.style.display = "block";
  } else {
    comboTab.style.display = "none";
  }

  document.querySelector(wrapperSelector).appendChild(node);
}
