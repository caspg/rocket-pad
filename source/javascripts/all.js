var myElement = document.querySelector('.navbar');
var options = {
  "offset": 40,
  "tolerance": 5,
};

var headroom  = new Headroom(myElement, options);
headroom.init();
