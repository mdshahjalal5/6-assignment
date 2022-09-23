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
    const singleNews = data.data.forEach(singleNews =>{
        console.log(singleNews);
        const {title, image_url, details, rating,thumbnail_url, total_view, _id, author, } = singleNews;
        console.log('title', title);
        console.log('image url', image_url);
        console.log('details', details);
        console.log('rating', rating);
        console.log('thumbnail_url', thumbnail_url);
        console.log('total_view', total_view);
        console.log('_id', _id);
        console.log('author', author);
        console.log(author.published_date, 'publish date')
        const newsDetail = document.getElementById('news-detail');
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row', 'g-5', 'mb-4')
        newsDiv.innerHTML = `
        <div class="col-md-4">
        <img src=" ${thumbnail_url} " class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${title}</h5> </br>
          <p class="card-text">${details.length >100 ? details.slice(0,100) : details}
            </br>  </br>
            ${ details.length> 500? details.slice(101,500) + '...' :details}
          </p>
          
          <div class="row">
            <div class="col-md-4 d-flex justify-content-around">
                <img src="${image_url}" style="max-width:40px" alt="" class='rounded-circle'>
                <div>
                    <h5>Jane Cooper</h5>
                    <p>${author.published_date.split(' ')[0]} </p>

                </div>
            </div>
            <div class="col-md-3">
                <h3> <span><i class="fa-solid fa-eye"></i></span> &nbsp;${total_view ? total_view + ' M': 'N/a'}</h3>
            </div>
            <div class="col-md-3">
                    <span><i class="fa-regular fa-star-half-stroke"></i></span>
                    <span><i class="fa-regular fa-star"></i></span>
                    <span><i class="fa-regular fa-star"></i></span>
                    <span><i class="fa-regular fa-star"></i></span>
                    <span><i class="fa-regular fa-star"></i></span>
            </div>
            <div class="col-md-2">
                <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span>
            </div>
            <div class="text-center">
                <div class="btn btn-primary w-25 mt-4 text-center">Details</div>
            </div>
          </div>
        </div>
      </div>
        `;
        newsDetail.appendChild(newsDiv);
    })
}


displayLoadDetails();