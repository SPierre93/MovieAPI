const main=()=>
{
    //Fetched pages
    const homePage = document.querySelector("#homePageContainer");
    const releasesPage = document.querySelector("#releasesPageContainer");
    const ticketsPage = document.querySelector("#ticketsPageContainer");
    const eventBooking = document.querySelector("#eventBookingsPageContainer");
    const contactPage = document.querySelector("#contactUsPageContainer");
    const navigationButtons = document.querySelectorAll(".navigationLinks");
    const menuButton = document.querySelector("#hamburgerIcon");
    

    //Initial load screen
    releasesPage.style.display="none";
    ticketsPage.style.display="none";
    eventBooking.style.display="none";
    contactPage.style.display="none";
    navigationButtons[0].style.borderBottom="3px solid #ff0b76";
    

    //Navigation hamburger menu
  /*  menuButton.addEventListener("click,(event)=>{

    })*/

    
    //Navigation Sidebar
    navigationButtons.forEach(function(button){
        button.addEventListener("click",(event)=>{
            event.preventDefault();
            
            if(button == navigationButtons[0])              //Home button
            {               
                homePage.style.display="block";
                releasesPage.style.display="none";
                ticketsPage.style.display="none";
                eventBooking.style.display="none";
                contactPage.style.display="none";

                navigationButtons[0].style.borderBottom="3px solid #ff0b76";
                navigationButtons[1].style.borderBottom="none";
                navigationButtons[2].style.borderBottom="none";
                navigationButtons[3].style.borderBottom="none";
                navigationButtons[4].style.borderBottom="none";
            }

            else if(button == navigationButtons[1])         //Releases button
            {
                homePage.style.display="none";
                releasesPage.style.display="block";
                ticketsPage.style.display="none";
                eventBooking.style.display="none";
                contactPage.style.display="none";

                navigationButtons[0].style.borderBottom="none";
                navigationButtons[1].style.borderBottom="3px solid #ff0b76";
                navigationButtons[2].style.borderBottom="none";
                navigationButtons[3].style.borderBottom="none";
                navigationButtons[4].style.borderBottom="none";
            }

            else if(button == navigationButtons[2])         //Information button
            {
                homePage.style.display="none";
                releasesPage.style.display="none";
                ticketsPage.style.display="block";
                eventBooking.style.display="none";
                contactPage.style.display="none";

                navigationButtons[0].style.borderBottom="none";
                navigationButtons[1].style.borderBottom="none";
                navigationButtons[2].style.borderBottom="3px solid #ff0b76";
                navigationButtons[3].style.borderBottom="none";
                navigationButtons[4].style.borderBottom="none";
            }

            else if(button == navigationButtons[3])         //Promotions button
            {
                homePage.style.display="none";
                releasesPage.style.display="none";
                ticketsPage.style.display="none";
                eventBooking.style.display="block";
                contactPage.style.display="none";

                navigationButtons[0].style.borderBottom="none";
                navigationButtons[1].style.borderBottom="none";
                navigationButtons[2].style.borderBottom="none";
                navigationButtons[3].style.borderBottom="3px solid #ff0b76";
                navigationButtons[4].style.borderBottom="none";
            }

            else if(button == navigationButtons[4])             //Contact us button
            {
                homePage.style.display="none";
                releasesPage.style.display="none";
                ticketsPage.style.display="none";
                eventBooking.style.display="none";
                contactPage.style.display="block";

                navigationButtons[0].style.borderBottom="none";
                navigationButtons[1].style.borderBottom="none";
                navigationButtons[2].style.borderBottom="none";
                navigationButtons[3].style.borderBottom="none";
                navigationButtons[4].style.borderBottom="3px solid #ff0b76";
            } 
        });
    });  


    //Releases Page
    document.addEventListener("DOMContentLoaded",()=>{

        //NOW PLAYING SECTION  
        const nowShowingContainer = document.querySelector("#nowShowingContainer");
        const movieModal = document.querySelector("#movieDetailsModal");
        const movieModalCloseBtn = document.querySelector("#transparentBackground > i");
        const coreImageURL = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
        const nowPlayingEndpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=8ac083c820b140139e74b4bb0bceb932&language=en-US&page=1`;
        fetch(nowPlayingEndpoint) 

        .then(function(response){
            response.json()

            .then(function(data){
                let nowShowingWrapper="";
                
                for(let i=0; i<=11; i++)
                {
                   nowShowingWrapper+=
                   `<div>
                        <div class="moviePoster">
                            <img src="${coreImageURL}${data.results[i].poster_path}" alt="Promo poster for ${data.results[i].title}">
                        </div> 
                        
                        <div class="movieTitle">
                            <h3> ${data.results[i].title} </h3>
                        </div>

                        <div class="movieSynopsis">
                            <p> <span class="boldHighlight">Synopsis:</span> ${data.results[i].overview.slice(0,100)}... </p>
                        </div>

                        <div class="movieReleaseDate">
                            <p> <span class="boldHighlight">Release date:</span> ${data.results[i].release_date} </p>
                        </div>

                        <div class="movieRating">
                            <p> <span class="boldHighlight">Rating:</span> ${data.results[i].vote_average} </p> 
                        </div>
                    </div>`;
                }      
                
                nowShowingContainer.innerHTML = nowShowingWrapper;

                //Event delegation (and event bubbling by default)
                nowShowingContainer.addEventListener("click",(event)=>{
                    console.log(event.target.tagName);
                    
                    if(event.target.tagName == `IMG`)
                    {
                        movieModal.style.display="block";
                        
                        movieModalCloseBtn.addEventListener("click",(event)=>{
                            movieModal.style.display="none";
                        })
                    }
                })
            })

            .catch(function(err){
                console.log(`Error: ${err}`)
            });
        })

        .catch(function(error){
            console.log(`Error: ${error}`);
        });

        //COMING SOON SECTION
        const comingSoonContainer = document.querySelector("#comingSoonContainer");
        const comingSoonEndpoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=8ac083c820b140139e74b4bb0bceb932&language=en-US&page=1`;
        fetch(comingSoonEndpoint)

        .then(function(resp){
            resp.json()

            .then(function(answer){
                let comingSoonWrapper="";
                
                for(let i=0; i<=7; i++)
                {
                    comingSoonWrapper+=
                   `<div>
                        <div class="moviePoster">
                            <img src="${coreImageURL}${answer.results[i].poster_path}" alt="Promo poster for ${answer.results[i].title}">
                        </div> 
                        
                        <div class="movieTitle">
                            <h3> ${answer.results[i].title} </h3>
                        </div>

                        <div class="movieSynopsis">
                            <p> <span class="boldHighlight">Synopsis:</span> ${answer.results[i].overview.slice(0,100)}... </p>
                        </div>

                        <div class="movieReleaseDate">
                            <p> <span class="boldHighlight">Release date:</span> ${answer.results[i].release_date} </p>
                        </div>

                        <div class="movieRating">
                            <p> <span class="boldHighlight">Rating:</span> ${answer.results[i].vote_average} </p> 
                        </div>
                    </div>`;
                }      
                
                comingSoonContainer.innerHTML = comingSoonWrapper;
            })

            .catch(function(e){
                console.log(`Error: ${e}`);
            });
        })

        .catch(function(Er){
            console.log(`Error: ${Er}`);
        });
    });


    //Movie details Page
    

}
main();