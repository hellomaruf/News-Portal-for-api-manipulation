let categoryBtnContainer = document.getElementById("category-btn-container");
let cardContainer = document.getElementById("card-container");
const newsCategory = async () => {
  let res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  let data = await res.json();
  let allCategory = data.data.news_category;
  allCategory.map(function (element) {
    let categoryName = element.category_name;
    let categoryId = element.category_id;

    addCategoryName(categoryName, categoryId);
  });
};
newsCategory();

let addCategoryName = (categoryName, categoryId) => {
  let button = document.createElement("button");
  button.className = "";
  button.innerHTML = `
    <button onclick=categoryDetails('${categoryId}') class="text-gray-500 font-normal">${categoryName}</button>
    `;

  categoryBtnContainer.appendChild(button);
};



const categoryDetails = async (catId) => {
  let res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${catId}`
  );
  let data = await res.json();
  let allDetails = data.data;
  cardContainer.innerHTML = "";
  allDetails.map(function (element) {
    console.log(element);
    let cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
      <div class="card card-side bg-base-100 shadow-md m-8">
      <img class="w-96 max-h-3xl" src="${element.thumbnail_url}" alt="Movie"/>
      <div class="card-body">
        <h2 class="card-title font-bold">${element.title}</h2>
        <p>${element.details.slice(0, 300)}</p>
        
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-4">
              <div class="">
                  <img class="w-10 h-10 rounded-full" src="${
                    element.author.img
                  }" alt="" srcset="">
              </div>
              <div class="">
                  <p class="font-bold">${element.author.name}</p>
                  <p>${element.author.published_date}</p>
              </div>
          </div>
          <div class="flex gap-2 items-center">
              <i class="ri-eye-line text-xl font-semibold text-gray-500"></i>
              <p>${element.total_view} k</p>
          </div>
          <div>
              <div class="rating">
                  <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                  <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
                  <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                  <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                  <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                </div>
          </div>
        </div>
      </div>
    </div>
      `;
    cardContainer.appendChild(cardDiv);
  });
};
categoryDetails('01');
