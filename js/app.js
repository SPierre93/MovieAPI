class Movie
{
    posterImage;
    title;
    synopsis;
    releaseDate;
    rating;

    constructor(pI,t,s,rD,r)
    {
        this.posterImage = pI;
        this.title = t;
        this.synopsis = s;
        this.releaseDate = rD;
        this.rating = r;
    }
}

const main=()=>
{
    //Fetched pages
    const homePage = document.querySelector("#homePageContainer");
    const releasesPage = document.querySelector("#releasesPageContainer");
    const ticketsPage = document.querySelector("#ticketsPageContainer");
    const eventBooking = document.querySelector("#eventBookingsPageContainer");
    const contactPage = document.querySelector("#contactUsPageContainer");
    const navigationButtons = document.querySelectorAll(".navigationLinks");
    

    //Initial load screen
    releasesPage.style.display="none";
    ticketsPage.style.display="none";
    eventBooking.style.display="none";
    contactPage.style.display="none";

    
    //Navigation Sidebar
    navigationButtons.forEach(function(button){
        button.addEventListener("click",(event)=>{
            if(button == navigationButtons[0])              //Home button
            {               
                homePage.style.display="block";
                releasesPage.style.display="none";
                ticketsPage.style.display="none";
                eventBooking.style.display="none";
                contactPage.style.display="none";
            }

            else if(button == navigationButtons[1])         //Releases button
            {
                homePage.style.display="none";
                releasesPage.style.display="block";
                ticketsPage.style.display="none";
                eventBooking.style.display="none";
                contactPage.style.display="none";
            }

            else if(button == navigationButtons[2])         //Information button
            {
                homePage.style.display="none";
                releasesPage.style.display="none";
                ticketsPage.style.display="block";
                eventBooking.style.display="none";
                contactPage.style.display="none";
            }

            else if(button == navigationButtons[3])         //Promotions button
            {
                homePage.style.display="none";
                releasesPage.style.display="none";
                ticketsPage.style.display="none";
                eventBooking.style.display="block";
                contactPage.style.display="none";
            }

            else if(button == navigationButtons[4])             //Contact us button
            {
                homePage.style.display="none";
                releasesPage.style.display="none";
                ticketsPage.style.display="none";
                eventBooking.style.display="none";
                contactPage.style.display="block";
            } 
        });
    });  


    //Releases Page
    const nowPlayingEndpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=8ac083c820b140139e74b4bb0bceb932&language=en-US&page=1`;

    fetch(nowPlayingEndpoint)
    .then(function(response){
        response.json()

        .then(function(data){
            /*let movies ={
                posterImage: "/goEW6QqoFxNI2pfbpVqmXj2WXwd.jpg",
                title: "The Outpost",
                synopsis: "A small unit of U.S. soldiers, alone at the remote Combat Outpost Keating, located deep in the valley of three mountains in Afghanistan, battles to defend against an overwhelming force of Taliban fighters in a coordinated attack. The Battle of Kamdesh, as it was known, was the bloodiest American engagement of the Afghan War in 2009 and Bravo Troop 3-61 CAV became one of the most decorated units of the 19-year conflict.",
                releaseDate: "2020-06-24",
                rating: 6.7
            };*/
        })

        .catch(function(err){
            console.log(`Error: ${err}`);
        });
    })

    .catch(function(error){
        console.log(`Error: ${err}`);
    });


    //Movie details Page
    

}
main();