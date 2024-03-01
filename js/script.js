let categoryBtnContainer = document.getElementById("category-btn-container");

const newsCategory = async () => {
  let res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  let data = await res.json();
  let allCategory = data.data.news_category;
  allCategory.map(function (element) {
    let categoryName = element.category_name;
    addCategoryName(categoryName);
  });
};
newsCategory();

let addCategoryName = (categoryName) => {
  let button = document.createElement("button");
  button.className = "text-gray-500 font-normal";
  button.innerText = categoryName;
  categoryBtnContainer.appendChild(button);
};
