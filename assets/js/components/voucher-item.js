export async function loadVoucherItem(
  wrapperSelector,
  { title, applyTo, image, percentage, status, statusText }
) {
  const res = await fetch("./components/voucher-item.html");
  const html = await res.text();

  // Convert fetched HTML string to DOM elements
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = html;
  const template = tempContainer.querySelector("#voucher_item_template");

  // Clone the template and populate it with data
  const node = template.content.cloneNode(true);
  node.querySelector(".voucher_tag").textContent = `${percentage}%`;
  node.querySelector(".voucher_img img").src = image;
  node.querySelector(".voucher_info h3").textContent = title;
  node.querySelector(".voucher_info p").textContent = applyTo;
  node.querySelector(".progress_fill").style.width = status + "%";
  //   node.querySelector(".voucher_action button").textContent = "Lấy mã";
  node.querySelector(".voucher_action p").textContent = statusText || "Sắp hết";

  document.querySelector(wrapperSelector).appendChild(node);
}
