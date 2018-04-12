var host = 'https://ts20.travian.tw/';

(function() {
  'use strict';
  setInterval(function(){location.reload();}, 60000+Math.random()*100000);

  if(typeof(localStorage.state)==="undefined")
    localStorage.state = "idle";

  switch(localStorage.state) {
    case "idle":
      idle();
      break;
    case "adventures":
      adventures();
      break;
    case "build":
      build();
      break;
    case "upgradeRes":
      upgradeRes();
      break;
    default:
      console.log('nothing: '+window.location.href+ ", state: " +localStorage.state);
  }
})();
