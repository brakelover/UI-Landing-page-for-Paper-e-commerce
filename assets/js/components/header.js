// Import header component
export async function loadHeader(id) {
  const res = await fetch("./components/header.html");
  const html = await res.text();

  document.querySelector(id).innerHTML = html;
}
