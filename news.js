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
        <li onclick="displayCategoryIdLoad(${category.category_id})">${category.category_name}</li>
        `;
        menuList.appendChild(li)
    });
}

const displayCategoryIdLoad = (categoryId) => {
    // console.log(categoryId)
    const url = `https://openapi.programming-hero.com/api/news/category/0${categoryId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayInformation(data.data))
        .catch(error => console.log(error))
}


const displayInformation = (data) => {
    // console.log(data)
    // console.log(data.length)
    const textView = document.getElementById("text-view")
    textView.innerHTML = `${data.length ? data.length : 'No'} items found for category Entertainment`;
    const containerlist = document.getElementById('list-container')
    containerlist.innerHTML = '';
    data.forEach(news => {
        //  console.log(news)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card card-side bg-base-300 p-8 mb-6 mx-10">
        <img class="w-60" src="${news.image_url}" alt="">
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
                        <div>
                            <h4 class="font-semibold text-2xl"><i class="fa-thin fa-eye"></i> ${news.total_view ? news.total_view : 'No'} M</h4>
                        </div>
                <label for="my-modal-6" onclick="loadModalDetails('${news._id}')" class="btn btn-primary modal-button">Details</label>
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
    console.log(detailsAll)
    
    const titleText = document.getElementById('title-text')
    titleText.innerText = detailsAll.title;

   

    const infoAll = document.getElementById('details-all')
    infoAll.innerText = detailsAll.details;

}


loadNews()




// <input type="checkbox" id="my-modal-3" class="modal-toggle" />
//     <div class="modal">
//         <div class="modal-box relative h-full">
//             <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//             <h3 class="text-lg font-bold">${detailsAll.title}</h3>

//         <div class="card-actions justify-around pt-12">
//                 <div class="flex gap-4">
//                              <img class="rounded-full w-10" src="${detailsAll.author.img}" />
//                         <div>
//                             <p>${detailsAll.author.name ? detailsAll.author.name : 'No found'}</p>
//                             <p>${detailsAll.author.published_date}</p>
//                         </div>
//                  </div>
//                         <div>
//                             <h4 class="font-semibold text-2xl"><i class="fa-thin fa-eye"></i> ${detailsAll.total_view ? detailsAll.total_view : 'No'} M</h4>
//                         </div>
//         </div>

//             <p class="py-4">${detailsAll.details}</p>
//         </div>
//     </div>