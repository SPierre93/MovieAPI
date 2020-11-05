const main=()=>
{
    //Fetched pages
    const bodyOpenModal = document.querySelector("body");
    const homePage = document.querySelector("#homePageContainer");
    const releasesPage = document.querySelector("#releasesPageContainer");
    const ticketsPage = document.querySelector("#ticketsPageContainer");
    const eventBooking = document.querySelector("#eventBookingsPageContainer");
    const contactPage = document.querySelector("#contactUsPageContainer");
    const navigationButtons = document.querySelectorAll(".navigationLinks");
    const menuButton = document.querySelector("#hamburgerIcon");
    const closeButton = document.querySelector("#closeMenuButton");
    const ticketButton = document.querySelector("#ticketButton");
    const navModal = document.querySelector("#sideNav");
    

    //Initial load screen
    homePage.style.display="block";
    releasesPage.style.display="none";
    ticketsPage.style.display="none";
    eventBooking.style.display="none";
    contactPage.style.display="none";
    navigationButtons[0].style.borderBottom="3px solid #ff0b76";
    navModal.style.display="none;"


    //Function to trigger automatic scrolling to the top of the page
    const scrollToTop=event=>{
        window.scrollTo(0, 0); 
    }

    const closeMenuOnClick=event=>{
        navModal.style.display="none";
        closeButton.style.display="none";
        bodyOpenModal.style.overflow="visible";
    }


    //Hamburger menu toggle
    menuButton.addEventListener("click",(event)=>{
        navModal.style.display="block";
        closeButton.style.display="block";
        bodyOpenModal.style.overflow="hidden";


        //Allows for resizing without compromising event listener rules
        window.addEventListener("resize", function() {
            if (window.matchMedia("(min-width: 992px)").matches) //Large and up
            {
                navModal.style.display="block";
                closeButton.style.display="none";
            }

            else    //Medium and below
            {
                navModal.style.display="none";
                closeButton.style.display="block";
            }
        });


        closeButton.addEventListener("click",(event)=>{
            closeMenuOnClick();
        });
    })


    //Ticket button 
    ticketButton.addEventListener("click",(event)=>{        
        scrollToTop();
        
        homePage.style.display="none";
        releasesPage.style.display="none";
        ticketsPage.style.display="block";
        eventBooking.style.display="none";
        contactPage.style.display="none";
        bodyOpenModal.style.overflow="visible";    

        navigationButtons[0].style.borderBottom="none";
        navigationButtons[1].style.borderBottom="none";
        navigationButtons[2].style.borderBottom="3px solid #ff0b76";
        navigationButtons[3].style.borderBottom="none";
        navigationButtons[4].style.borderBottom="none";
    })

    
    //Navigation Sidebar
    navigationButtons.forEach(function(button){
        button.addEventListener("click",(event)=>{
            event.preventDefault();
            
            if(button == navigationButtons[0])              //Home button
            {               
                closeMenuOnClick();
                scrollToTop();

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
                closeMenuOnClick();
                scrollToTop();

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

            else if(button == navigationButtons[2])         //Tickets button
            {
                closeMenuOnClick();
                scrollToTop();

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

            else if(button == navigationButtons[3])         //Book Events button
            {
                closeMenuOnClick();
                scrollToTop();

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
                closeMenuOnClick();
                scrollToTop();

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

        //Fetched elements
        const nowShowingContainer = document.querySelector("#nowShowingContainer");
        
        
        const movieModal = document.querySelector("#movieDetailsModal");
        const movieModalCloseBtn = document.querySelector("#movieModalContent > i");

        const title = document.querySelector("#modalMovieTitle");
        const synopsis = document.querySelector("#modalSynopsis");
        const poster = document.querySelector("#modalPoster");
        const rating = document.querySelector("#ratingScore");
        const releaseDate = document.querySelector("#releaseDate");
        const trailer = document.querySelector("#movieTrailer");
        const ratingWheel = document.querySelector("#circleRating");

        const coreImageURL = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
        const coreVideoURL = "https://www.youtube.com/watch?v=";

        //NOW PLAYING SECTION  
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
                            <img data-movie_index="${i}" src="${coreImageURL}${data.results[i].poster_path}" alt="Promo poster for ${data.results[i].title}">
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
                                     
                    if(event.target.tagName == `IMG`)
                    {
                        const clickedMovie= data.results[event.target.dataset.movie_index];
                        
                        //Dynamically populate the modal with data from the API
                        poster.src = `${coreImageURL}${clickedMovie.poster_path}`;
                        title.innerHTML  = clickedMovie.title;
                        synopsis.innerHTML = clickedMovie.overview;
                        releaseDate.innerHTML = clickedMovie.release_date;
                        rating.innerHTML = Math.floor(clickedMovie.vote_average/10*100);
                        

                        //Dynamically alter Viewer's Rating wheel
                        ratingWheel.style.strokeDashoffset = `calc(250 - (250*${rating.innerHTML}) / 100)`;


                        //Fetch data from Trailer API
                        const trailerEndPoint = `https://api.themoviedb.org/3/movie/${clickedMovie.id}/videos?api_key=8ac083c820b140139e74b4bb0bceb932&language=en-US`;
                        fetch(trailerEndPoint)

                        .then(function(res){
                           
                            res.json()
                            .then(function(ans){

                                trailer.href = `${coreVideoURL}${ans.results[0].key}`;
                            })

                            .catch(function(e){
                                console.log(`Error: ${e}`);
                            })                            
                        })

                        .catch(function(er){
                            console.log(`Error: ${er}`);
                        })

 
                        //Toggle open and close feature on movie details modal
                        movieModal.style.display="block";
                        movieModal.style.backgroundColor="rgba(0, 0, 0, 0.664)";
                        movieModal.style.height="100%";
                        movieModal.style.width="100%";
                        
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

        .then(function(Response){
            Response.json()

            .then(function(Data){
                let comingSoonWrapper="";
                
                for(let i=0; i<=7; i++)
                {
                    comingSoonWrapper+=
                   `<div>
                        <div class="moviePoster">
                            <img data-movie_index="${i}" src="${coreImageURL}${Data.results[i].poster_path}" alt="Promo poster for ${Data.results[i].title}">
                        </div> 
                        
                        <div class="movieTitle">
                            <h3> ${Data.results[i].title} </h3>
                        </div>

                        <div class="movieSynopsis">
                            <p> <span class="boldHighlight">Synopsis:</span> ${Data.results[i].overview.slice(0,100)}... </p>
                        </div>

                        <div class="movieReleaseDate">
                            <p> <span class="boldHighlight">Release date:</span> ${Data.results[i].release_date} </p>
                        </div>

                        <div class="movieRating">
                            <p> <span class="boldHighlight">Rating:</span> ${Data.results[i].vote_average} </p> 
                        </div>
                    </div>`;
                }      
                
                comingSoonContainer.innerHTML = comingSoonWrapper;

                //Event delegation (and event bubbling by default)
                comingSoonContainer.addEventListener("click",(event)=>{
                                     
                    if(event.target.tagName == `IMG`)
                    {
                        const clickedMovie= Data.results[event.target.dataset.movie_index];
                        
                        //Dynamically populate the modal with data from the API
                        poster.src = `${coreImageURL}${clickedMovie.poster_path}`;
                        title.innerHTML  = clickedMovie.title;
                        synopsis.innerHTML = clickedMovie.overview;
                        releaseDate.innerHTML = clickedMovie.release_date;
                        rating.innerHTML = Math.floor(clickedMovie.vote_average/10*100);
                        

                        //Dynamically alter Viewer's Rating wheel
                        ratingWheel.style.strokeDashoffset = `calc(250 - (250*${rating.innerHTML}) / 100)`;


                        //Fetch data from Trailer API
                        const trailerEndPoint = `https://api.themoviedb.org/3/movie/${clickedMovie.id}/videos?api_key=8ac083c820b140139e74b4bb0bceb932&language=en-US`;
                        fetch(trailerEndPoint)

                        .then(function(Res){
                           
                            Res.json()
                            .then(function(Ans){

                                trailer.href = `${coreVideoURL}${Ans.results[0].key}`;
                            })

                            .catch(function(E){
                                console.log(`Error: ${E}`);
                            })                            
                        })

                        .catch(function(Er){
                            console.log(`Error: ${Er}`);
                        })

 
                        //Toggle open and close feature on movie details modal
                        movieModal.style.display="block";
                        movieModal.style.backgroundColor="rgba(0, 0, 0, 0.664)";
                        movieModal.style.height="100%";
                        movieModal.style.width="100%";
                        
                        movieModalCloseBtn.addEventListener("click",(event)=>{
                            movieModal.style.display="none";
                        });
                    }
                })
            })

            .catch(function(Err){
                console.log(`Error: ${Err}`);
            });
        })

        .catch(function(Error){
            console.log(`Error: ${Error}`);
        });
    });
}
main();