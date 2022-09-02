const loadNews = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
   fetch(url)
   .then(res => res.json())
   .then(data => displayCategory(data.data.news_category))
   .catch(error => console.log(error))
}

const displayCategory = (categories) =>{
    const menuList = document.getElementById('menu-list')
    categories.forEach(category => {
        console.log(category)
        const li = document.createElement('li')
        li.innerHTML = `
        <li onclick="displayCategoryIdLoad(${category.category_id})">${category.category_name}</li>
        `;
        menuList.appendChild(li)
    });
}

const displayCategoryIdLoad = (categoryId) =>{
    console.log(categoryId)
    const url = `https://openapi.programming-hero.com/api/news/category/0${categoryId}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}


const displayInformation = () =>{
    
}

loadNews()