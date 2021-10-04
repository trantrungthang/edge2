// Initialize and add the map
function initMap(){
    //Your location
    const loc={ lat: 13.337398 , lng:109.284210};
    //Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'),{
        zoom :14,
        center : loc
    });
    //The maker, position at location 
    const market = new google.maps.Market({ position : loc, map: map});
}

//Sticky menu background
window.addEventListener('scroll',function() {
    if(window.scrollY >150){
        document.querySelector('#navbar').style.opacity = 0.9;
    }   else{
        document.querySelector('#navbar').style.opacity = 1;
    }
});

//Smooth Scrolling
$('#navbar a, .btn').on('click', function(event){
    if(this.hash !==''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop : $(hash).offset().top - 100
            },
            800
        );
    }
});