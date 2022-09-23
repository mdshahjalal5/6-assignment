const loadCategories = async() =>{
    const res =  await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    displayCategories(data.data.news_category);
    return data;
}

const displayCategories = async(AllNews)=>{
    console.log(AllNews);
    AllNews.forEach(singleNews => {
        
        const {category_id, category_name} = singleNews;
        console.log(category_name)
    });
}

loadCategories();