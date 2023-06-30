function checkScroll(){

    //you have to check whether skill-container is visible or not
    var coordinates = skillContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top < window.innerHeight){
       animationDone = true ;
       //  console.log("skill visible");
       fillBars();
    }
    else if(coordinates.top > window.innerHeight){
       animationDone = false ;
       initializeBars();
    }

}