const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')
const player1 = {
    player:1,
name:'SCORPION',
hp:100,
img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
weapon:'sword',
attack:function(name){
    console.log(name+ `Fight...`)
}


}
const player2 = {
    player:2,
    name:'SUB-ZERO',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:'sword',
    attack:function(name){
        console.log(name+ `Fight...`)
    }
    
    
    }
function createElement(tag,className){
const $tag = document.createElement(tag)
if (className)
{
$tag.classList.add(className)
}
return $tag;
}
    
 function createPlayer(playerObj)
 {
    
    const $player = createElement('div','player'+playerObj.player)
    const $progressbar = createElement('div','progressbar')
    const $character= createElement('div','character')
    const $life = createElement('div','life')
    const $name = createElement('div','name')
    const $img = createElement('img')


    
    

    $player.appendChild($progressbar)
    
    $player.appendChild($character)
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $character.appendChild($img)
    
    
    $life.style.width=playerObj.hp+'%' ;

    $name.innerText = playerObj.name;
    
    $img.src = playerObj.img;
    return $player
     }





function changeHP(player){
    const $playerLife = document.querySelector('.player'+player.player +' .life')
    player.hp =player.hp- Math.ceil(Math.random()*10)
     $playerLife.style.width = player.hp + '%'
console.log(player.hp)
    //  if(player.hp < 0 )
    //  {
    //      $arenas.appendChild(PlayerLose(player.name));
    //  }
     if (player1.hp <= 0) {
        $arenas.appendChild(playerWins(player2.name));
     
      } else if (player2.hp <= 0) {
        $arenas.appendChild(playerWins(player1.name));
      } else if (player1.hp <= 0 && player2.hp <= 0) {
        $arenas.appendChild(playerWins('drow'));
      }



  
  //width внизу
      //   if (player.hp <= 0) {
    //     player.hp = 0;
    //     $playerLife.style.width = 0 + '%';

    //   } else {
    //     player.hp -= Math.ceil(Math.random() * 20);
    //     $playerLife.style.width = player.hp + '%';
    //   }
    
}
function playerWins(name){
    const $winsTitle = createElement('div','winsTitle')
    $winsTitle.innerText= name +' win'
    $randomButton.disabled=true

    return $winsTitle
}
// function PlayerLose(name){
// const $loseTitle = createElement('div','loseTitle')
// $loseTitle.innerText= name + ' lose'
// return $loseTitle;
// }

$randomButton.addEventListener('click',function(){
       changeHP(player1)
    changeHP(player2)
    })

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))




    //  function createPlayer(playerTwo,person,health,imgTwo)
    //  {
    // const arenas = document.querySelector('.arenas')
    // const player2 = document.createElement('div')
    // player2.classList.add(playerTwo)
    // arenas.appendChild(player2)
    // const progressbar = document.createElement('div')
    // progressbar.classList.add('progressbar')
    // player2.appendChild(progressbar)

  

    // const character= document.createElement('div')
    // character.classList.add('character')
    // player2.appendChild(character)


    // const life = document.createElement('div')
    // life.classList.add('life')
    // life.style.width=health+'px' ;
    // progressbar.appendChild(life)

    // const name = document.createElement('div')
    // name.classList.add('name')
    // name.innerHTML = person;
    // progressbar.appendChild(name)

    // const img2 = document.createElement('img')
    // img2.src = imgTwo
    // character.appendChild(img2)

    //  }
    