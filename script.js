let parent_card = document.querySelector(".parent-card");


async function Product() {
 
    let response = await fetch("https://fakestoreapi.com/product");
    let data = await response.json();
    console.log(data);
    data.forEach(({ image, title, price }) => {
      parent_card.innerHTML = "";
  <div class="border rounded shadow p-4 text-center flex flexx-col h-full">
          <img src="$(image)" class="w-full h-40 object-contain mb-4" alt="img" />
          <h3 class="text-base font-semibold mb-4 line-clamp-2">${title}</h3>
          <div class="mt-auto">
            <div
              class="flex justify-between items-center border-t-2 border-blue-500 pt-4"
            >
              <div class="text-black font-bold text-2xl">${price}$</div>

              <div class="flex gap-2">
                <button
                  class="love p-2 bg-gray-100 border-t-2 border-blue-500 rounded-full hover:to-blue-100"
                >
                  <i class="fa-regular fa-heart text-base"></i>
                </button>
                <button
                  class="add_to_cart p-2 bg-gray-100 border-blue-500 rounded-full hover:to-blue-100"
                >
                  <i calss="fa-solid fa-cart-shopping text-base"></i>
                </button>
                <button
                  class="details p-2 bg-gray-100 border-blue-500 rounded-full text-blue-500 hover:to-blue-100"
                >
                  <i calss="fa-solid fa-angles-right text-base"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
            
    });


  

}









