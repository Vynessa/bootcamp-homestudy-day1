function Smartphone(brand, model, cost, volume, os){
  this.brand = brand || "Nokia";
  this.model = model || "3310";
  this.cost = cost || "$50";
  this.volume = volume || 0;
  this.os = os || "Windows 10";
}

Smartphone.prototype = {
  sdCard: function(){
    if (this.brand === "iPhone"){
      return this.brand + ' ' + "doesn\'t have an SDcard slot!";
    }
      
    else {
      return this.brand + ' ' + "has an SDcard slot!";
    }
  },
    
  appDownload: function(game){
    if (this.brand === "Lumia"){
      return "Visit the Windows store to download the " + game + ' ' +"game.";
    }
      
    if (this.brand === "iPhone"){
      return "Visit the iOS app store to download the " + game + ' ' + "game.";
    }
      
    else {
      return "Visit the Google play store to download the " + game + ' ' + "game.";
    }
  }
    
}

/*var iPhone = new Smartphone("iPhone", "6S", "$700", 32, "iOS");
var samsung = new Smartphone("Samsung", "S7edge", "$500", 16, "Nougat");
var gionee = new Smartphone("Gionee", "M6", "$150", 8, "Android Marshmallow");
var lumia = new Smartphone("Lumia", "820", "$100", 4, "Windows 10");*/

module.exports = Smartphone;

/*console.log(iPhone.appDownload("Temple Run"));
console.log(samsung.appDownload("Mortal Kombat"));
console.log(gionee.appDownload("Candy Crush"));
console.log(lumia.appDownload("Candy Crush"))*/