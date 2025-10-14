import { loadHeader } from "./components/header.js";
import { loadSectionTitle } from "./components/section-title.js";
import { loadShortcutButton } from "./components/shortcut-button.js";
import { loadVoucherItem } from "./components/voucher-item.js";
import { loadProductCard } from "./components/product-card.js";
import { loadCategoryItem } from "./components/category-item.js";

const sections = [
  {
    selector: "#voucher_area",
    iconImg: "./assets/images/icons/black-voucher.png",
    title: "Voucher",
    showMoreLink: "#",
  },
  {
    selector: "#best_sellers",
    iconImg: "./assets/images/icons/fire.png",
    title: "Bán chạy",
    showMoreLink: "#",
  },
  {
    selector: "#product_categories",
    iconImg: "./assets/images/icons/category.png",
    title: "Danh mục",
    showMoreLink: "#",
  },
  {
    selector: "#recommend_combo",
    iconImg: "./assets/images/icons/fire.png",
    title: "Combo gợi ý",
    showMoreLink: "#",
  },
];
const shortcuts = [
  {
    title: "Bài viết",
    imgIcon: "./assets/images/icons/newspaper.png",
  },
  {
    title: "Voucher",
    imgIcon: "./assets/images/icons/voucher.png",
  },
  {
    title: "Affiliate",
    imgIcon: "./assets/images/icons/affiliate.png",
  },
];
const vouchers = [
  {
    title: "Giảm 10% tối đa 20k",
    applyTo: "Đơn đầu tiên từ 0đ",
    image: "./assets/images/voucher-thumbnail1.png",
    percentage: 70,
    status: 80,
    statusText: "Sắp hết",
  },
  {
    title: "Giảm 25% tối đa 50k",
    applyTo: "Đơn từ 200k",
    image: "./assets/images/voucher-thumbnail1.png",
    percentage: 25,
    status: 10,
    statusText: "Còn nhiều",
  },
  {
    title: "Giảm 50% tối đa 100k",
    applyTo: "Đơn từ 500k",
    image: "./assets/images/voucher-thumbnail1.png",
    percentage: 50,
    status: 40,
    statusText: "Đang hot",
  },
];
const products = [
  {
    title: "Thùng 20 gói khăn giấy tre TISSUEPack",
    img: "./assets/images/product-card1.png",
    price: "80,000 đ",
    combo: "02 túi lớn TISSUEPack x 01 lốc TISSUEPocket",
  },
  {
    title: "Khăn giấy tre TISSUEPocket 10 gói",
    img: "./assets/images/product-card1.png",
    price: "35,000 đ",
    combo: null,
  },
  {
    title: "Combo siêu tiết kiệm khăn giấy TISSUE Eco",
    img: "./assets/images/product-card1.png",
    price: "120,000 đ",
    combo: "05 lốc TISSUEPocket x 01 túi lớn",
  },
  {
    title: "Khăn ướt tre tự nhiên TISSUE Fresh",
    img: "./assets/images/product-card1.png",
    price: "45,000 đ",
    combo: null,
  },
  {
    title: "Combo gia đình TISSUE Comfort",
    img: "./assets/images/product-card1.png",
    price: "150,000 đ",
    combo: "03 túi lớn TISSUEPack x 02 lốc TISSUEPocket",
  },
  {
    title: "Combo văn phòng TISSUE Smart",
    img: "./assets/images/product-card1.png",
    price: "95,000 đ",
    combo: "02 lốc TISSUEPocket x 01 túi lớn TISSUEPack",
  },
];
const categories = [
  {
    title: "Giấy vệ sinh",
    img: "./assets/images/category1.png",
  },
  {
    title: "Khăn giấy rút",
    img: "./assets/images/category2.png",
  },
  {
    title: "Gói bỏ túi",
    img: "./assets/images/category3.png",
  },
  {
    title: "Hộp để bàn",
    img: "./assets/images/category4.png",
  },
];

// Load header
loadHeader("#header");
// Load section title
sections.forEach((section) => {
  loadSectionTitle(section.selector, {
    iconImg: section.iconImg,
    title: section.title,
    showMoreLink: section.showMoreLink,
  });
});
// Load shortcut buttons
shortcuts.forEach((shortcut) => {
  loadShortcutButton("#shortcut_wrapper", shortcut);
});
// Load voucher items
vouchers.forEach((voucher) => {
  loadVoucherItem("#voucher_list", voucher);
});
// Load product cards
products.slice(0, 4).forEach((product) => {
  loadProductCard("#product_list", product);
});
// Load categories
categories.forEach((category) => {
  loadCategoryItem("#category_list", category);
});
// Load combo cards
products.slice(-2).forEach((product) => {
  loadProductCard("#combo_list", product);
});

/**
 * Create images slider based on sample image link
 */
const sliderWrapper = document.getElementById("slider_wrapper");
const sliderDots = document.getElementById("slider_dots");

// Add images to slider
const sliderImg = "./assets/images/slider1.png";
let sliderImgs = [];
for (let i = 0; i < 3; i++) {
  sliderImgs.push(sliderImg);
}
sliderImgs.forEach((img) => {
  const imgElement = document.createElement("img");
  imgElement.src = img;
  imgElement.classList.add("slider_img");
  sliderWrapper.appendChild(imgElement);
});

// Add dots to slider
sliderImgs.forEach((_, index) => {
  const dot = document.createElement("span");
  if (index === 0) dot.classList.add("active");
  sliderDots.appendChild(dot);
});
const dots = sliderDots.querySelectorAll("span");

// Theo dõi vị trí cuộn để cập nhật chấm chỉ mục
sliderWrapper.addEventListener("scroll", () => {
  const scrollLeft = sliderWrapper.scrollLeft;
  const width = sliderWrapper.clientWidth;
  const index = Math.round(scrollLeft / width); // Làm tròn só pixel phần tử đã cuộn trên tổng chiều rộng tất cả ảnh

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index); // Lấy số đã làm tròn làm index trỏ đến dots array -> thêm style active
  });
});
