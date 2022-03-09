//initialize the news api perameter
let apiKey = 'e92154a4e1e148608f24ac57be5174b3'

//grab the news contaiener
let newsAccordian = document.getElementById("newsAccordian")

      fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, {method: 'GET'}).then((response)=>{
        if(response.status == 200){
          return response.json();
        }else{
          console.log("Not successfull");
        }
      }).then((data)=>{
        let articles = data.articles;
        let newsHTML = "";
        articles.forEach(function(element){
                       let news = `
                                  <div class="card-group">
                        <div class="card">
                          <img src="${element["urlToImage"]}" class="card-img-top" alt="can not load image">
                          <div class="card-body">
                            <h5 class="card-title">${element["title"]}</h5>
                            
                            <p class="card-text"><small class="text-muted">${element["author"]}</small></p>
                          </div>
                        </div>
                        <div class="card" >
                          <div class="card-body">
                            <h5 class="card-title">${element["description"]}</h5>
                            <p class="card-text">${element["content"]}</p>
                            <p class="card-text"><small class="text-muted"><a href="${element["url"]}">Click here to read full article..</a></small></p>
                          </div>
                        </div>
                        
                      </div>`;
newsHTML += news;
      });
      newsAccordian.innerHTML = newsHTML;
        
      })

       