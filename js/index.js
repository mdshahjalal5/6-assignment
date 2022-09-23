const loadCategories = async() =>{
    const res =  await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    displayCategories(data.data.news_category);
    return data;
}


loadCategories();