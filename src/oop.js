function Phone(brand, model, cost, volume, os){
    this.brand = brand;
    this.model = model;
    this.cost = cost;
    this.volume = volume;
    this.os = os;
}


Phone.prototype = {
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
  
};

var iPhone = new Phone("iPhone", "6S", "$700", 32, "iOS");
var samsung = new Phone("Samsung", "S7edge", "$500", 16, "Nougat");
var gionee = new Phone("Gionee", "M6", "$150", 8, "Android Marshmallow");
var lumia = new Phone("Lumia", "820", "$100", 4, "Windows 10");


console.log(iPhone.appDownload("Temple Run"));
console.log(samsung.appDownload("Mortal Kombat"));
console.log(gionee.appDownload("Candy Crush"));
console.log(lumia.appDownload("Candy Crush"))