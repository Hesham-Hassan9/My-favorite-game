var weldcome = prompt("Hello on my website, What is your name")

var howOld = prompt("How old are you")

var favSeason = prompt("what is your favorite season form 1 to 10 in Assassin's creed")

function favGame(favSeason){

while(favSeason != "1" && favSeason != "2" && favSeason != "3" && favSeason != "4" && favSeason != "5" && favSeason != "6" && favSeason != "7" && favSeason != "8" && favSeason != 9 && favSeason != "10"){

favSeason = prompt("The season you choose is not available in my website, please select from 1 to 10")

}

document.write("your favorite season is:")

if(favSeason == "1"){

document.write(
  "<div>" + "<h3>" + "Assassin's Creed"+"</h3>"
+"<img  src='https://cdn1.epicgames.com/f9a21c4ce910440d82b83b01d1c48c5e/offer/ASSA_STD_Store_Landscape_2560x1440-2560x1440-ffacc499b31caf2b6fdc1743b505be4f.jpg?h=270&resize=1&w=480'    />" + "</div>")

}

else if (favSeason =="2"){
document.write(
  "<div>" + "<h3>" + "Assassin’s Creed II"+"</h3>"
+ "<img  src='https://www.indiegamebundles.com/wp-content/uploads/2020/04/assassins_creed-2-free-game-uplay.jpg'/>" + "</div>")
}

else if(favSeason =="3"){
document.write(
  "<div>" + "<h3>" + "Assassin's Creed Brotherhood"+"</h3>"
+ "<img  src='https://fanatical.imgix.net/product/original/230d819c-833a-4b72-af5d-d96f86456771.jpeg?auto=compress,format&w=400&fit=max' />" + "</div>")
}

else if(favSeason =="4"){
document.write(
  "<div>" + "<h3>" + "Assassin's Creed Revelations"+"</h3>"
+ "<img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnox-mCHuB5luOXdXeIMHiyOdX6bHcNuswFQ&usqp=CAU'  />" + "</div>")
}

else if(favSeason =="5"){
document.write(
  "<div>" + "<h3>" + "Assassin's Creed III"+"</h3>"
+ "<img  src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPnigd0fo2LKZYOCBSdbpSA49Xu-kaecWsw&usqp=CAU'  />" + "</div>")
}

else if(favSeason =="6"){
document.write(
  "<div>" + "<h3>" + "Assassin's Creed IV Black Flag"+"</h3>"
+ "<img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi34iFuGR7POjCEjJ-26LDuszwKwUCH2A5eA&usqp=CAU'   />" + "</div>")
}

else if(favSeason =="7"){
document.write(
  "<div>" + "<h3>" + "Assassin's Creed Unity"+"</h3>"
+ "<img  src='https://fanatical.imgix.net/product/original/4bcaafb6-98e5-411b-9ef4-d2fb43582084.jpeg?auto=compress,format&w=400&fit=max'  />" + "</div>")
}

else if(favSeason =="8"){
document.write(
  "<div>" + "<h3>" + "Assassin's Creed Syndicate"+"</h3>"
+ "<img  src='https://www.hrkgame.com/media/games/.thumbnails/header_iO9uEZ2.jpg/header_iO9uEZ2-460x215.jpg'   />" + "</div>")
}

else if(favSeason =="9"){
document.write(
  "<div>" + "<h3>" + "Assassin's Creed Origins"+"</h3>"
+ "<img  src='https://cdn.akamai.steamstatic.com/steam/apps/368500/capsule_616x353.jpg?t=1602772802'   />" + "</div>")
}

else if(favSeason =="10"){
document.write(
  "<div>" + "<h3>" + "Assassin's Creed Odyssey"+"</h3>"
+ "<img  src='https://cdn.akamai.steamstatic.com/steam/apps/582160/capsule_616x353.jpg?t=1603213581'   />" + "</div>")
}

else{
  alert('You are not from the brotherhood')
}

}
favGame(favSeason);

function rating(){
  var yourRating = prompt("How do you rate this season from 0 to 5?")
  for(var i = 0; i <= yourRating; i++){
    var star = i;
    console.log(star)
  }
  document.write(
  "<div>" + "<h3>" + "your rating is:" +"</h3>"+"<h3>"+star+"<h3>"+"<img  src='https://www.researchgate.net/profile/Krishan-Kumar-59/publication/325978606/figure/fig2/AS:867425063038988@1583821659846/Star-rating-on-scale-of-5.ppm'   />" + "</div>")
}
rating();