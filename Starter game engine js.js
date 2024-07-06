       var switchcollision = 0;
        var player = document.getElementById('player');
        var block = document.getElementById('block');
        var canvas = document.getElementById('canvas');
        var c = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var it = Number
        var images = [];
            images.length = 10;

    function getKeyAndMove(event) {
var key_code = event.which || e.keyCode;
switch (key_code) {
    case 65: //left d key
        switchcollision = 65; 
        moveLeft();
        animzia();
   
    break;
    case 68: //right a key
        switchcollision = 68; 
        moveRight();
        animzia();
        console.log(animzia());
    
    break;
    case 87: //up w key
        switchcollision = 87;
        moveup();
        animzia();
    break;
    case 83: //down s key
        switchcollision = 83;
        animzia();
        movedown();
    break;
            } 
                            }
function moveLeft() {            //objImage style.left
    collision()
    }
function moveRight() {
    collision()
    }
function moveup() {
    collision()
    }
function movedown() {
    collision()
}
function collision() {
    var bolckwidth  = parseInt(block.clientWidth) // width of the block
    var playerwidth = parseInt(player.clientWidth) // width of the player
    var playerleftside = parseInt(player.style.left); //left of the player
    var blockleftside =  parseInt(block.style.left);
    var blockrightside = parseInt(block.style.left) + parseInt(block.clientWidth);//
    var playerrightside = parseInt(player.style.left) + parseInt(player.clientWidth);//
    var blockheight = parseInt(block.clientHeight)//
    var playerheight = parseInt(player.clientHeight)//
    var playerupside = parseInt(player.style.top);//
    var blockupside =  parseInt(block.style.top);//
    var blockdownside = parseInt(block.style.top) + parseInt(block.clientHeight);//
    var playerdowntside = parseInt(player.style.top) + parseInt(player.clientHeight);//
    
    console.log("---------------------------");
    console.log(blockheight + " blockheight");
    console.log(playerheight + " playerheight");
    console.log(playerupside + " playerupside");
    console.log(blockupside + " blockupside");
    console.log(playerdowntside + "playerdowntside");
    console.log( blockdownside+ " blockdownside")
    console.log("---------------------------");
    console.log((playerupside == blockupside));
    switch(switchcollision){
        case 68: //(aRect.left > (bRect.left + bRect.width)) brec is block arec is player
                if  (((playerrightside < blockleftside) || (playerleftside >= blockrightside ))) {
                         player.style.left = playerleftside + 100 + "px";
                         return false
                 } else{
        //  console.log(  player.style.left = block.style.left - parseInt(block.style.width) );
                      if (playerupside == blockupside){
                         player.style.left = block.style.left - parseInt(block.style.width) + "px";
                         console.log("yes");
                }  else {
                    player.style.left = playerleftside + 100 + "px";
                }
                    return true   
                }
                break;
        case 65: //((aRect.left + aRect.width) < bRect.left)
            if (((blockrightside < playerleftside) || (playerrightside <= blockleftside)  )) {
                    player.style.left = playerleftside - 100 +"px";
                     return false
            } else {
                if (playerupside == blockupside){
            player.style.left = block.style.left - parseInt(block.style.width) + "px";
            console.log("yes");
        }  else {
            player.style.left = playerleftside - 100 + "px";
        }
    
            return true 
            }
        break;
    case 87:
        if ((playerupside > blockdownside) || (playerdowntside <= blockupside )) {
            player.style.top = playerupside - 100 + "px"; 
        }else{
        if (playerleftside == blockleftside){
            player.style.top = block.style.top - parseInt(block.height) + "px";
            console.log("yes");
      }  else {
            player.style.top = playerupside - 100 + "px";
      }
        return true   
        }
    break;
    case 83: 
        if((playerdowntside < blockupside) || (playerupside >= blockdownside)){
        player.style.top = playerupside + 100 + "px"; 
        } else {
            if (playerleftside == blockleftside){
            player.style.top = block.style.top - parseInt(block.height) + "px";
            console.log("yes");
      }  else {
            player.style.top = playerupside + 100 + "px";
      }  
        }
    }
}

        

            function animzia() {
    it++;
    if (it == 11) {
        it = 1;
    }

    let playerImage = new Image();
    playerImage.src = 'Walk (' + it.toString() + ').png';
    playerImage.onload = function () {
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.drawImage(playerImage, parseInt(player.style.left),parseInt(player.style.top) , 100, 100);
       
    };

   
    console.log(c);
}
    

        function init() {
            player.style.left = "300" + "px";// top for player = top block - x 
            player.style.top =  '600' + "px";// left for player = left block - x 
            player.style.height = '100' + "px";
            player.width = '100' + "px";
        //block
            block.style.left ="900" + "px"
            block.style.top ="500" + "px"
            block.style.height = "100" + "px"
            block.style.width = "100" + "px" 
        //animzia to the player 
            it = 0;
            while(it < 10){
               animzia();
        }
    }

        window.onload = init;