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
  console.log("show", Show)
  console.log("show_id", Show_id)
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
let Show={}
let Show_id=[]
let card_img



let p2_place={'00':{},'01':{},'02':{},'03':{},'04':{},'05':{},'06':{},'07':{},'08':{},'09':{},10:{}, 11:{},12:{},13:{},14:{},15:{},16:{},17:{},18:{},19:{},10:{}, 21:{},22:{},23:{},24:{},25:{},26:{},27:{},28:{},29:{},30:{}, 31:{},32:{},33:{},34:{},35:{},36:{},37:{},38:{},39:{},40:{}, 41:{},42:{},43:{},44:{},45:{},46:{},47:{},48:{},49:{},50:{}, 51:{},52:{},53:{},54:{},55:{},56:{},57:{},58:{},59:{}}




let card_put = document.getElementById("card_put");


function set() {
  Box = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]
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

  Box = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]

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

  Box = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]

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





function show(id,look){
  if(look==true){
    const card_img=document.createElement("img")
  card_img.id=String(id)
  if (Show_look[id]["fb"]==1){
    card_img.src = testdeck[id]["url"]
  }else if(Show_look[id]["fb"]==-1){
    card_img.src ="img/poke_ura.jpg"
  }
  card_img.style.position = "absolute"
  card_img.style.width = 106.857142857142858 +"px"
  card_img.style.height = 149.428571428571429 +"px"
  card_img.style.top = Show_look[id]["y"] +"px"
  card_img.style.left = Show_look[id]["x"] +"px"
  card_put.appendChild(card_img)
    return
  }
  const card_img=document.createElement("img")
  card_img.id=String(id)
  if (Show[id]["fb"]==1){
    card_img.src = testdeck[id]["url"]
  }else if(Show[id]["fb"]==-1){
    card_img.src ="img/poke_ura.jpg"
  }
  card_img.style.position = "absolute"
  card_img.style.width = 106.857142857142858 +"px"
  card_img.style.height = 149.428571428571429 +"px"
  card_img.style.top = Show[id]["y"] +"px"
  card_img.style.left = Show[id]["x"] +"px"
  card_put.appendChild(card_img)
}



function remove(id){//
  old_img=document.getElementById(id)
  old_img.remove()
  delete Show[id]
  const index = Show_id.indexOf(id)
  if (index !== -1) {
    Show_id.splice(index, 1)
  }
}

function put(id,x,y,fb){//
  if (Show_id.includes(id)) {
    remove(id) 
  }
  Show_id.push(id)
  if (!Show[id]) {
    Show[id] = {}
  }
  Show[id]["x"]=x
  Show[id]["y"]=y
  Show[id]["fb"]=fb
  show(id)
}


function reverse(card_id){//
  Show[card_id]["fb"]*=-1
  card_img=document.getElementById(card_id)
  if (Show[card_id]["fb"]==1){
    card_img.src = testdeck[card_id]["url"]
  }else if(Show[card_id]["fb"]==-1){
    card_img.src ="img/poke_ura.jpg"
  }
}

let Show_look = {}
function look(list){
  Show_look = {};
  const cardsPerRow = 12; // 1行あたりの枚数
  const cardWidth = 110;  // 画像幅+余白
  const cardHeight = 160; // 画像高さ+余白

  // 表示領域の幅・高さを取得
  const areaWidth = card_put.clientWidth;
  const areaHeight = card_put.clientHeight;

  const rowCount = Math.ceil(list.length / cardsPerRow);

  // 全体のカード群の高さ
  const totalHeight = rowCount * cardHeight;
  // y方向の中央寄せオフセット
  const offsetY = Math.max(0, (areaHeight - totalHeight) / 2);

  for (let row = 0; row < rowCount; row++) {
    // この行のカード数
    const isLastRow = (row === rowCount - 1);
    const cardsInThisRow = isLastRow && (list.length % cardsPerRow !== 0)
      ? list.length % cardsPerRow
      : cardsPerRow;

    // この行のカード群の合計幅
    const rowWidth = cardsInThisRow * cardWidth;
    // この行の左端（中央寄せのためのオフセット）
    const startX = Math.max(0, (areaWidth - rowWidth) / 2);

    for (let col = 0; col < cardsInThisRow; col++) {
      const i = row * cardsPerRow + col;
      const id = list[i];
      const x = col * cardWidth + startX;
      const y = row * cardHeight + offsetY;

      Show_look[id] = {};
      Show_look[id]["x"] = x;
      Show_look[id]["y"] = y;
      Show_look[id]["fb"] = 1;
      show(id, true);
    }
  }
}


function count(player,direction){//
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


