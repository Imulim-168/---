
let DeckLink
let Deck
let userID
let pass
const User = []


let screen = 0


let screen0 = document.getElementById("sc_0")



let screen1 = document.getElementById("sc_1")
screen1.style.display = "none"


let screen2 = document.getElementById("sc_2")
screen2.style.display = "none"


let screen3 = document.getElementById("sc_3")
screen3.style.display = "none"






function deck(){
    DeckLink = "https://api.funamushi.net/ajax/get3?id=" + document.getElementById("deckcode").value
    console.log(DeckLink)
}


function Back(){

  if(screen === 0){
    screen = -1
    console.log(screen)


  }else if(screen === 1 || screen === 2 || screen ===3){
    screen = 0
    console.log(screen)


  }else if(screen === 4 || screen === 5){
    screen = 3
    console.log(screen)


  }else if(screen === 7){
    screen = 3
    console.log(screen)


  }else if(screen === 6 || screen === 8){
    screen = 4
    console.log(screen)


  }
}
















function deckset(){
    $(function(){
        $.ajax({
          url: DeckLink, 
          type: "GET", 
          dataType: "json",
        })
          .done(function (data) {
            var data_stringify = JSON.stringify(data);
            Deck = JSON.parse(data_stringify);
            console.log(Deck)
          })
          .fail(function (data) {
            console.log("error");
          });
        });
}



function s0_s1(){
  screen0.style.display = "none"
  screen1.style.display = "block"
  screen = 1
}
 
function s0_s2(){
  screen0.style.display = "none"
  screen2.style.display ="block"
  screen = 2
}



function Regi(){
  userID = document.getElementById("userID").value
  pass = document.getElementById("pass").value
  User.push({userID:{"name":userID ,"pass":pass ,"deckcode":[]}})
  screen2.style.display = "none"
  screen3.style.display = "block"
  console.log("userID:"+userID,"pass:"+pass)
}



function Login(){
  if (userID in User){
    console.log("あるよ！")
  }else{
    console.log("ないよ！")
  }
  screen1.style.display = "none"
  screen3.style.display = "block"

}






function test(){
  let test = document.createElement("div")
  test.id = "test"
  document.getElementById("test").appendChild(test)
  document.getElementById("A").innerHTML = null
  
}