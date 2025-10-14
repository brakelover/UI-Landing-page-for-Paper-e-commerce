export async function loadSectionTitle(
  wrapperSelector,
  { iconImg, title, showMoreLink }
) {
  const res = await fetch("./components/section-title.html");
  const html = await res.text();

  // Convert fetched HTML string to DOM elements
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = html;
  const template = tempContainer.querySelector("#section_title_template");

  // Clone the template and populate it with data
  const node = template.content.cloneNode(true);
  node.querySelector("img").src = iconImg;
  node.querySelector("h1").textContent = title;
  node.querySelector("a").href = showMoreLink;

  // Chèn trước phần tử đầu tiên thay vì append cuối
  const wrapper = document.querySelector(wrapperSelector);
  const firstChild = wrapper.firstChild;

  wrapper.insertBefore(node, firstChild); // If there's no first child, it appends at the end of wrapper
}
