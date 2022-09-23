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
        // console.log(category_name)
        const li = document.createElement('li');
        li.innerHTML = `
        <a class="nav-link active" aria-current="page" href="#">${category_name}</a>
        `;
        categoryContainer.appendChild(li);
    });
}

loadCategories();


const loadNewsDetail = async category_id =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/category/02');
    const data = await res.json();
    console.log(data);
    return data;
}

const displayLoadDetails = async() =>{
    const data = await loadNewsDetail();
    const newsDetail = document.getElementById('news-detail');
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('row')
    newsDiv.innerHTML = `
    <div class="col-md-4">
    <img src="..." class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
    `;
    newsDetail.appendChild(newsDiv);
}
loadNewsDetail();

displayLoadDetails();