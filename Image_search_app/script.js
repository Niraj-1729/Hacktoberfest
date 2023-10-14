let input=document.getElementById('search_bar');
let search_btn=document.getElementById('search-btn');
let imageContainer=document.querySelector('.image-area');

search_btn.addEventListener('click',async()=>{
    const query=input.value;
    searchImg(query);
    input.value='';
})

async function searchImg(query){
    const api_key='yYoRBvE6i2Lm6gn3OHVBbBUhTQVEcqfYDhnt925nh8E';
    const url=`https://api.unsplash.com/search/photos?query=${query}&client_id=${api_key}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        imageContainer.innerHTML = ''; // Clear previous search results

        data.results.forEach(result => {
            const imgElement = document.createElement('img');
            imgElement.src = result.urls.small;
            imgElement.alt = result.alt_description;
           
            const a=document.createElement('a');
            a.href=result.links.html;
            a.target='_blank';
            a.appendChild(imgElement);
            const para=document.createElement('li');
            para.innerText=result.user.name;
            console.log(data);
            imageContainer.appendChild(a);
            a.appendChild(para);
            console.log(data)
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}