const loadNews = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategory(data.data.news_category))
        .catch(error => console.log(error))
}

const displayCategory = (categories) => {
    const menuList = document.getElementById('menu-list')
    categories.forEach(category => {
        // console.log(category)
        const li = document.createElement('li')
        li.innerHTML = `
        <li class="hover:text-primary hover:font-bold pl-4" onclick="displayCategoryIdLoad(${category.category_id})">${category.category_name}</li>
        `;
        menuList.appendChild(li)
      
    });
   
}


// spinner ar jonno----------
const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader')
    if(isLoading){
        loaderSection.classList.remove('hidden')
    }
    else{
        loaderSection.classList.add('hidden')
    }
}


const displayCategoryIdLoad = (categoryId) => {
    // console.log(categoryId)
    toggleSpinner(true)
    const url = `https://openapi.programming-hero.com/api/news/category/0${categoryId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayInformation(data.data))
        .catch(error => console.log(error))
}


const displayInformation = (data) => {
    // console.log(data)
    // console.log(data.length)
    toggleSpinner(false)
    const textView = document.getElementById("text-view")
    textView.innerHTML = `${data.length ? data.length + ' items found for category Entertainment' : 'No items found '}`;
    const containerlist = document.getElementById('list-container')
    containerlist.innerHTML = '';
    
    data.forEach(news => {
        //  console.log(news)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card card-side bg-white p-8 mb-6 mx-10 grid sm:grid-cols-1 md:grid-cols-2">
             <img class="w-full" src="${news.image_url}" alt="">
            <div class="card-body">
                <h2 class="card-title text-3xl pb-4 font-semibold">${news.title}</h2>
                <p>${news.details.slice(0,400)}...</p>
            <div class="card-actions justify-around pt-12">
                <div class="flex gap-4">
                <img class="rounded-full w-10" src="${news.author.img}" />
                        <div>
                            <p>${news.author.name ? news.author.name : 'No found'}</p>
                            <p>${news.author.published_date}</p>
                        </div>
                </div>
                        <div class="flex pt-3">
                            <h4 class="pr-2 pt-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg></h4>
                            <h4 class="font-semibold text-2xl">${news.total_view ? news.total_view : 'No'} M</h4>
                        </div>
                        <div  class="flex pt-4">
                            <h1>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            </h1>
                            <h1>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            </h1>
                            <h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            </h1>
                            <h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            </h1>
                            <h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            </h1>
                        </div>
                        <h1 class="pt-12 sm:pl-80 md:pl-96">
                        <label for="my-modal-6" onclick="loadModalDetails('${news._id}')" class="btn btn-primary modal-button">Details</label>
                        </h1>
            </div>
        </div>
    </div>
        `;
        containerlist.appendChild(div)
    })

}



const loadModalDetails = (id) =>{
    // console.log(id)
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayModal(data.data[0]))
        .catch(error => console.log(error))

}


const displayModal = (detailsAll) =>{
    // console.log(detailsAll)
    
    const authorInfo = document.getElementById('author-info')
    authorInfo.innerHTML =`
                            <img class="w-full" src="${detailsAll.image_url}" alt="">        
                            <h1 class="py-4 font-bold text-lg">${detailsAll.title}</h1>
                 <div class="flex gap-4 ">
                                 <img class="rounded-full w-10" src="${detailsAll.author.img}" />
                        <div class="pl-6">
                                <p>${detailsAll.author.name ? detailsAll.author.name : 'No found'}</p>
                                <p>${detailsAll.author.published_date}</p>
                        </div>
                   
                         <div  class="pl-16 flex">
                                <h4 class="pr-2 pt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                               </svg>
                                </h4>
                                 <h4 class="font-semibold text-2xl">
                                ${detailsAll.total_view ? detailsAll.total_view : 'No'} M</h4>
                         </div>
                 </div>
    `;

    const infoAll = document.getElementById('details-all')
    infoAll.innerText = detailsAll.details;

}


displayCategoryIdLoad(4)

loadNews()



// datas.sort((a, b) => {
//     return b.propertyName - a.propertyName;
//     });