var nav = document.getElementsByClassName('nav')[0];
var mc = new Hammer(nav, { touchAction: 'pax-x' } );

var isZoomed = function() {
  var zoom = document.documentElement.clientWidth / window.innerWidth;
  return zoom > 1;
};

// listen to events...
mc.on("swipeleft", function(ev) {
  if (isZoomed()) {
    return;
  }
  var link = document.getElementsByClassName('next-artwork')[0].href
  window.location.href = link;
});
mc.on("swiperight", function(ev) {
  if (isZoomed()) {
    return;
  }
  var link = document.getElementsByClassName('previous-artwork')[0].href
  window.location.href = link;
});
