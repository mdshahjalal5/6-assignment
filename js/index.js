const loadCategories = async() =>{
    const res =  await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    displayCategories(data.data.news_category);
    return data;
}

const displayCategories = async(AllNews)=>{
    console.log(AllNews);
    const categoryContainer = document.getElementById('category-container');
    AllNews.forEach(singleNews => {
        
        const {category_id, category_name} = singleNews;
        console.log(category_name)
        const li = document.createElement('li');
        li.innerHTML = `
        <a class="nav-link active" aria-current="page" href="#">${category_name}</a>
        `;
        categoryContainer.appendChild(li);
    });
}

loadCategories();