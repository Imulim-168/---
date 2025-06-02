

function deep_copy(itr){
  return JSON.parse(JSON.stringify(itr))
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function choose_at_random(arrayData, count) {
  var count = count || 1
  var arrayData = arrayData
  var result = []
  for (var i = 0; i < count; i++) {
    var arrayIndex = Math.floor(Math.random() * arrayData.length);
    result[i] = arrayData[arrayIndex];
    arrayData.splice(arrayIndex, 1);
  }
  return result;
}

function log() {
  console.log("p1")
  console.log("D", p1_Deck)
  console.log("H", p1_Hand)
  console.log("S", p1_Side)

  console.log("p2")
  console.log("D", p2_Deck)
  console.log("H", p2_Hand)
  console.log("S", p2_Side)
}



let Box

let p1_Hand = []
let p1_Side = []
let p1_Deck = []
let p1_Field = []
let p1_Trash = []

let p2_Hand = []
let p2_Side = []
let p2_Deck = []
let p2_Field = []
let p2_Trash = []

let rand
let Show=[{"id":59,"x":527,"y":527,"fb":1},{"id":"00","x":333,"y":321,"fb":1},{"id":"05","x":810,"y":777,"fb":0},{"id":"08","x":3,"y":111,"fb":0}]
let card

let p1_place={'00':{},'01':{},'02':{},'03':{},'04':{},'05':{},'06':{},'07':{},'08':{},'09':{},10:{}, 11:{},12:{},13:{},14:{},15:{},16:{},17:{},18:{},19:{},10:{}, 21:{},22:{},23:{},24:{},25:{},26:{},27:{},28:{},29:{},30:{}, 31:{},32:{},33:{},34:{},35:{},36:{},37:{},38:{},39:{},40:{}, 41:{},42:{},43:{},44:{},45:{},46:{},47:{},48:{},49:{},50:{}, 51:{},52:{},53:{},54:{},55:{},56:{},57:{},58:{},59:{}}
let p2_place={'00':{},'01':{},'02':{},'03':{},'04':{},'05':{},'06':{},'07':{},'08':{},'09':{},10:{}, 11:{},12:{},13:{},14:{},15:{},16:{},17:{},18:{},19:{},10:{}, 21:{},22:{},23:{},24:{},25:{},26:{},27:{},28:{},29:{},30:{}, 31:{},32:{},33:{},34:{},35:{},36:{},37:{},38:{},39:{},40:{}, 41:{},42:{},43:{},44:{},45:{},46:{},47:{},48:{},49:{},50:{}, 51:{},52:{},53:{},54:{},55:{},56:{},57:{},58:{},59:{}}


card = document.createElement('img');
card.src = 'https://www.pokemon-card.com/assets/images/card_images/large/SV4a/045127_P_MIMIKKIXYU.jpg';
card.style.width = 106.857142857142858 +"px";
card.style.height = 149.428571428571429 +"px";
card.style.top = 100+"px";
card.style.left = 300+"px";
card.style.position ="absolute"

let card_put = document.getElementById("card_put");
card_put.appendChild(card);

function set() {
  Box = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]

  for (i = 7; i >= 1; i--) {
    rand = getRandomInt(Box.length)
    p1_Hand.push(Box[rand])
    Box.splice(rand, 1)
  }

  for (i = 6; i >= 1; i--) {
    rand = getRandomInt(Box.length)
    p1_Side.push(Box[rand])
    Box.splice(rand, 1)
  }

  for (i = Box.length; i >= 1; i--) {
    rand = getRandomInt(Box.length)
    p1_Deck.push(Box[rand])
    Box.splice(rand, 1)
  }

  Box = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]

  for (i = 7; i >= 1; i--) {
    rand = getRandomInt(Box.length)
    p2_Hand.push(Box[rand])
    Box.splice(rand, 1)
  }

  for (i = 6; i >= 1; i--) {
    rand = getRandomInt(Box.length)
    p2_Side.push(Box[rand])
    Box.splice(rand, 1)
  }

  for (i = Box.length; i >= 1; i--) {
    rand = getRandomInt(Box.length)
    p2_Deck.push(Box[rand])
    Box.splice(rand, 1)
  }
}

function reset(player) {

  Box = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]

  if (player == "p1") {
    p1_Hand = []
    p1_Side = []
    p1_Deck = []
    for (i = 7; i >= 1; i--) {
      rand = getRandomInt(Box.length)
      p1_Hand.push(Box[rand])
      Box.splice(rand, 1)
    }
    for (i = 6; i >= 1; i--) {
      rand = getRandomInt(Box.length)
      p1_Side.push(Box[rand])
      Box.splice(rand, 1)
    }
    for (i = Box.length; i >= 1; i--) {
      rand = getRandomInt(Box.length)
      p1_Deck.push(Box[rand])
      Box.splice(rand, 1)
    }
  } else if (player == "p2") {
    p2_Hand = []
    p2_Side = []
    p2_Deck = []
    for (i = 7; i >= 1; i--) {
      rand = getRandomInt(Box.length)
      p2_Hand.push(Box[rand])
      Box.splice(rand, 1)
    }
    for (i = 6; i >= 1; i--) {
      rand = getRandomInt(Box.length)
      p2_Side.push(Box[rand])
      Box.splice(rand, 1)
    }
    for (i = Box.length; i >= 1; i--) {
      rand = getRandomInt(Box.length)
      p2_Deck.push(Box[rand])
      Box.splice(rand, 1)
    }
  }
}



function cut(List){
  Box = deep_copy(List)
  List.splice(0,List.length)

  for (i = Box.length; i >= 1; i--){
    rand = getRandomInt(Box.length)
    List.push(Box[rand])
    Box.splice(rand, 1)
  }
}

function below(id,List_1,List_2){
  List_2.push(List_1[List_1.indexOf(id)])
  List_1.splice(List_1.indexOf(id),1)
}

function above(id,List_1,List_2){
  List_2.unshift(List_1[List_1.indexOf(id)])
  List_1.splice(List_1.indexOf(id),1)
}

function draw(player){
  if(player=="p1"){
    p1_Hand.push(p1_Deck[0])
    p1_Deck.splice(0,1)
  }else if(player=="p2"){
    p2_Hand.push(p2_Deck[0])
    p2_Deck.splice(0,1)
  }
}


function show(){
  for (i=Object.keys(Show).length-1; i>=0;i-- ){
    card=document.createElement("img")
    if (Show[i]["fb"]==1){
      card.src = `${testdeck[Number(Show[i]["id"])]['url']}`
    }else if(Show[i]["fb"]==1){
      card.src ="https://funamushi.net/pokeca_hitorimawashi/img/poke_ura.jpg"
    }
    card.style.position = "absolute"
    card.width = 106.857142857142858
    card.height = 149.428571428571429
    card.style.top = Show[i]["y"]
    card.style.left = Show[i]["x"]
  }
}



function move(){


}

function put(id,x,y){




}


function reverse(player,card_id){



}

function look(list,){

}


function count(player,direction){
  document.querySelector(`.p${player} .damageBox`).value = Number(document.querySelector(`.p${player} .damageBox`).value)+direction*10
}

function right_click(){




}



























document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
});













const testdeck = [
  {
    name: 'ミミッキュ',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV4a/045127_P_MIMIKKIXYU.jpg',
    id: "00"
  },
  {
    name: 'ミミッキュ',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV4a/045127_P_MIMIKKIXYU.jpg',
    id: "01"
  },
  {
    name: 'ミミッキュ',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV4a/045127_P_MIMIKKIXYU.jpg',
    id: "02"
  },
  {
    name: 'ミミッキュ',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV4a/045127_P_MIMIKKIXYU.jpg',
    id: "03"
  },
  {
    name: 'ヤミラミ',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/BW4-B/027803_P_YAMIRAMI.jpg',
    id: "04"
  },
  {
    name: 'プレシャスキャリー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SVLN/046220_T_PURESHIXYASUKIXYARI.jpg',
    id: "05"
  },
  {
    name: 'プレシャスキャリー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SVLN/046220_T_PURESHIXYASUKIXYARI.jpg',
    id: "06"
  },
  {
    name: 'プレシャスキャリー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SVLN/046220_T_PURESHIXYASUKIXYARI.jpg',
    id: "07"
  },
  {
    name: 'マスターボール',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SVHM/045373_T_MASUTABORU.jpg',
    id: "08"

  },
  {
    name: 'マスターボール',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SVHM/045373_T_MASUTABORU.jpg',
    id: "09"
  },
  {
    name: 'マスターボール',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SVHM/045373_T_MASUTABORU.jpg',
    id: 10
  },
  {
    name: 'マスターボール',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SVHM/045373_T_MASUTABORU.jpg',
    id: 11
  },
  {
    name: 'パソコン通信',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/BW/037436_T_PASOKONTSUUSHIN.jpg',
    id: 12
  },
  {
    name: 'パソコン通信',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/BW/037436_T_PASOKONTSUUSHIN.jpg',
    id: 13
  },
  {
    name: 'パソコン通信',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/BW/037436_T_PASOKONTSUUSHIN.jpg',
    id: 14
  },
  {
    name: 'パソコン通信',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/BW/037436_T_PASOKONTSUUSHIN.jpg',
    id: 15
  },
  {
    name: 'ダウジングマシン',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/BW7-B/028292_T_DAUJINGUMASHIN.jpg',
    id: 16
  },
  {
    name: 'ダウジングマシン',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/BW7-B/028292_T_DAUJINGUMASHIN.jpg',
    id: 17
  },
  {
    name: 'プライムキャッチャー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV5M/045279_T_PURAIMUKIXYATCHIXYA.jpg',
    id: 18
  },
  {
    name: 'プライムキャッチャー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV5M/045279_T_PURAIMUKIXYATCHIXYA.jpg',
    id: 19
  },
  {
    name: 'プライムキャッチャー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV5M/045279_T_PURAIMUKIXYATCHIXYA.jpg',
    id: 20
  },
  {
    name: 'プライムキャッチャー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV5M/045279_T_PURAIMUKIXYATCHIXYA.jpg',
    id: 21
  },
  {
    name: 'スクランブルスイッチ',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV8/046435_T_SUKURANBURUSUITCHI.jpg',
    id: 22
  },
  {
    name: 'スクランブルスイッチ',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV8/046435_T_SUKURANBURUSUITCHI.jpg',
    id: 23
  },
  {
    name: 'ポケモン回収サイクロン',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV6/045784_T_POKEMONKAISHIXYUUSAIKURON.jpg',
    id: 24
  },
  {
    name: 'ポケモン回収サイクロン',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV6/045784_T_POKEMONKAISHIXYUUSAIKURON.jpg',
    id: 25
  },
  {
    name: 'ポケモン回収サイクロン',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV6/045784_T_POKEMONKAISHIXYUUSAIKURON.jpg',
    id: 26
  },
  {
    name: 'ポケモン回収サイクロン',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV6/045784_T_POKEMONKAISHIXYUUSAIKURON.jpg',
    id: 27
  },
  {
    name: 'ポケバイタルA',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV6a/045930_T_POKEBAITARUA.jpg',
    id: 28
  },
  {
    name: 'ポケバイタルA',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV6a/045930_T_POKEBAITARUA.jpg',
    id: 29
  },
  {
    name: 'ポケバイタルA',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV6a/045930_T_POKEBAITARUA.jpg',
    id: 30
  },
  {
    name: 'ポケバイタルA',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV6a/045930_T_POKEBAITARUA.jpg',
    id: 31
  },
  {
    name: 'メガトンブロワー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV7a/046285_T_MTONBUROA.jpg',
    id: 32
  },
  {
    name: 'アンフェアスタンプ',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV5a/045640_T_ANFUEASUTANPU.jpg',
    id: 33
  },
  {
    name: 'アンフェアスタンプ',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV5a/045640_T_ANFUEASUTANPU.jpg',
    id: 34
  },
  {
    name: 'ヒーローマント',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV5M/045281_T_HIROMANTO.jpg',
    id: 35
  },
  {
    name: 'ヒーローマント',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV5M/045281_T_HIROMANTO.jpg',
    id: 36
  },
  {
    name: 'ヒーローマント',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV5M/045281_T_HIROMANTO.jpg',
    id: 37
  },
  {
    name: 'いのちのしずく',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/BW/037438_T_INOCHINOSHIZUKU.jpg',
    id: 38
  },
  {
    name: 'いのちのしずく',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/BW/037438_T_INOCHINOSHIZUKU.jpg',
    id: 39
  },
  {
    name: 'いのちのしずく',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/BW/037438_T_INOCHINOSHIZUKU.jpg',
    id: 40
  },
  {
    name: 'ペパー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV4a/045139_T_PEPA.jpg',
    id: 41
  },
  {
    name: 'ペパー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV4a/045139_T_PEPA.jpg',
    id: 42
  },
  {
    name: 'ペパー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV4a/045139_T_PEPA.jpg',
    id: 43
  },
  {
    name: 'ペパー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV4a/045139_T_PEPA.jpg',
    id: 44
  },
  {
    name: 'ナンジャモ',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV2D/043664_T_NANJIXYAMO.jpg',
    id: 45
  },
  {
    name: 'ナンジャモ',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV2D/043664_T_NANJIXYAMO.jpg',
    id: 46
  },
  {
    name: 'ナンジャモ',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV2D/043664_T_NANJIXYAMO.jpg',
    id: 47
  },
  {
    name: 'ナンジャモ',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV2D/043664_T_NANJIXYAMO.jpg',
    id: 48
  },
  {
    name: 'ニュートラルセンター',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV6a/045938_T_NIXYUTORARUSENTA.jpg',
    id: 49
  },
  {
    name: 'ニュートラルセンター',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV6a/045938_T_NIXYUTORARUSENTA.jpg',
    id: 50
  },
  {
    name: 'ニュートラルセンター',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV6a/045938_T_NIXYUTORARUSENTA.jpg',
    id: 51
  },
  {
    name: 'レガシーエネルギー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV6/045792_E_REGASHIENERUGI.jpg',
    id: 52
  },
  {
    name: 'レガシーエネルギー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV6/045792_E_REGASHIENERUGI.jpg',
    id: 53
  },
  {
    name: 'レガシーエネルギー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV6/045792_E_REGASHIENERUGI.jpg',
    id: 54
  },
  {
    name: 'レガシーエネルギー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV6/045792_E_REGASHIENERUGI.jpg',
    id: 55
  },
  {
    name: 'ミストエネルギー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV5M/045288_E_MISUTOENERUGI.jpg',
    id: 56
  },
  {
    name: 'ミストエネルギー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV5M/045288_E_MISUTOENERUGI.jpg',
    id: 57
  },
  {
    name: 'ミストエネルギー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV5M/045288_E_MISUTOENERUGI.jpg',
    id: 58
  },
  {
    name: 'ミストエネルギー',
    url: 'https://www.pokemon-card.com/assets/images/card_images/large/SV5M/045288_E_MISUTOENERUGI.jpg',
    id: 59
  }
]



