
const loadCategories = () => {
  fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
  //   .then((data) => displayCategories(data.categories))

};

const displayCategories = (categories) => {

  const categoryContainer = document.getElementById('category-list');



  categories.forEach((item) => {

    const button = document.createElement('div');

    button.innerHTML = `
      <div class="flex border-[1px] border-gray-300 rounded-2xl lg:w-[250px] lg:h-[85px] items-center gap-3 w-[110px] h-[50px]">
        <img class="lg:ml-9 w-12 h-8" src="${item.category_icon}" alt="">
        <button class="btn" onclick="loadCategoriesData('${item.category}')">
          ${item.category}
        </button>
      </div> 
    `;

    categoryContainer.appendChild(button);
  });
};

loadCategories();


const loadCategories2 = () => {
  fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then((res) => res.json())

    .then((data) => displayCategories2(data.pets))



};

const displayCategories2 = (pets) => {

  const categoryContainer2 = document.getElementById('all-pets-data');
  categoryContainer2.innerHTML = '';
  if (pets.length == 0) {
    categoryContainer2.classList.remove("grid")
    categoryContainer2.innerHTML = `
   <div class="min-h-[400px]  gap-5 ml-[350px] mt-[80px]">
   <img  src="assets/error.webp" alt="">
   <h1 class="font-bold text-xl">
            No Information Available
        </h1>
    </div>

    `

  }
  else {
    categoryContainer2.classList.add("grid")
  }

  pets.forEach((item) => {


    const div = document.createElement('div');
    div.innerHTML = `
  
     <div class="p-5 border-[1px] border-gray-300 rounded-lg" >
               <div>
                   <img src="${item.image}" alt="">
              </div>
              <h1 class="font-bold text-xl ">${item.pet_name}</h1>
              <div class="">
                  <img src="" alt="">
                  <p> Name: ${item.breed ? item.breed : 'Not Available'}</p>
  
              </div>
              <div class="">
                <div class="flex">
                  <img src="https://img.icons8.com/?size=24&id=84997&format=png" alt="">
                  <p>Date of birth: ${item.date_of_birth ? item.date_of_birth : "Not available"}</p>
              </div>
                  </div>
  
             <div class="">
               <div class="flex">
                  <img src="https://img.icons8.com/?size=32&id=22392&format=png" alt="">
                  <p> Gender: ${item.gender ? item.gender : "Not available"}</p>
              </div>
                      </div>
               <div class="">
                 <div class="flex">
                  <img src="https://img.icons8.com/?size=32&id=22159&format=png" alt="">
                   <p>${item.price ? item.price : "Not available"}</p></div>
               </div>
             <div class="flex gap-2">               
             
             <button class="btn btn-sm hover:bg-white hover:border-red-400">
              <img src="https://img.icons8.com/?size=25&id=53vm80oFnyfa&format=png" alt="">
             </button> 
                  <div class="flex">    
                   <button onclick ="loadDisplayTime" class="btn btn-sm hover:bg-white hover:border-red-400 ml-8">Adopt</button>
                  <button onclick="loadDisplayDetails('${item.petId}')" class="btn btn-sm ml-8  hover:bg-white hover:border-red-400">Details</button>
              </div>
           </div>
           
  
      `



    categoryContainer2.appendChild(div);
  });
};



const loadDisplayDetails = async (petId) => {
  const uri = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
  const res = await fetch(uri);
  const data = await res.json();
  loadDetails(data.petData);



}

const loadDetails = (details) => {


  const detailsContainer = document.getElementById('modal-content')


  // document.getElementById('show-modal').click();
  document.getElementById('coustomModal').showModal();

  detailsContainer.innerHTML = `
<div>
      <div>
        <img src="${details.image}" alt="${details.pet_name || 'Pet Image'}">
      </div>
      <h1 class="font-bold text-xl">${details.pet_name || 'No Name Available'}</h1>
      <div class="flex">
        <div>
          <strong>Breed:</strong>
          <p>${details.breed || 'Not Available'}</p>
        </div>
        <div>
          <strong>Gender:</strong>
          <p>${details.gender || 'Not Available'}</p>
        </div>
      </div>
      <div>
        <strong>Date of Birth:</strong>
        <p>${details.date_of_birth || 'Not Available'}</p>
      </div>
      <div>
        <strong>Price:</strong>
        <p>${details.price || 'Not Available'}</p>
      </div>
        <div>
        <strong> Description:</strong>
        <p>${details.pet_details || 'Not Available'}</p>
      </div>
    </div>
  `;


}


// displayed data based on category




const loadCategoriesData = (category) => {


  fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((res) => res.json())
    //  .then((data) =>console.log(data))
    .then((data) => displayCategories2(data.data))




};

loadCategoriesData();


// Get the modal element
