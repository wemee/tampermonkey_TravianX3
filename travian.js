var host = 'https://ts20.travian.tw/';

(function() {
  'use strict';
  setInterval(function(){location.reload();}, 60000+Math.random()*100000);

  if($('h1:contains("玩家登入")').length >= 1){ // 登入畫面
    $('#content > div.outerLoginBox > div.innerLoginBox > form input[name="name"]').val('wemee7012@gmail.com');
    $('#content > div.outerLoginBox > div.innerLoginBox > form input[name="password"]').val('70121127');
    $('#s1 > div > div.button-content').click();
  } else {
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
  }
})();
