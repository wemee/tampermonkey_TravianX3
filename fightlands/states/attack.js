// -14|34
// -12|35 羊
// -32 | 17
// -13|37 羊

// 24|-29

function attack() {
  if(window.location.pathname.match(/a2b/)){
    if(jQuery('#short_info').length==0){
      // jQuery('#troops a:eq(0)').click();
      // jQuery('#troops a:eq(3)').click();
      // jQuery('#troops a:eq(4)').click();
      // jQuery('#troops a:eq(5)').click();
      // jQuery('#troops a:eq(6)').click();
      // jQuery('#troops a:eq(7)').click();

      jQuery('#troops > tbody > tr > td:eq(0) > a').click();
      // jQuery('#troops > tbody > tr > td:eq(0) > input').val(20000000);

      // jQuery('#troops > tbody > tr > td:eq(6) > a').click(); // 投石車
      // jQuery('#troops > tbody > tr > td:eq(6) > input').val(100000);

      jQuery('#troops > tbody > tr > td:eq(8) > a').click();
      // jQuery('#troops > tbody > tr > td:eq(8) > input').val(2500000);

      // jQuery('#troops > tbody > tr > td:eq(9) > a').click();
      // jQuery('#troops > tbody > tr > td:eq(8) > input').val(2500000);

      // jQuery('#troops > tbody > tr > td:eq(11) > a').click(); // 英雄 // 先不要 避免要復活
      jQuery('#content > form > div.option > label:nth-child(3) > input').click(); // normal attack
      // jQuery('#content > form > div.option > label:nth-child(5) > input').click(); // raid

      var to_attack = [
        // {x:'-18',y:'36'}, // 有兵 // 變Natars了
        // {x:'-14',y:'36'}, // 會反擊 // 變Natars了
        // {x:'-24',y:'38'}, // 會反擊
        {x:'-16', y:'36'}, // 會反擊

        {x:'-13', y:'39'},
        {x:'-13', y:'40'},
        {x:'-12', y:'40'},
        {x:'-12', y:'41'},
      ];

      // 新 -18 39
      // -13 35
      // 車 -10 36
      // 車 -10 37

      // 羊
      // -13 39
      // -13 40
      // -12 40
      // -12 41
      // -11 39

      // 大肥羊
      // -12 39
      // -18 36
      // -13 42

      // Dandy from village 01 Zutphen
      // arni from village arnis village

      var idx = parseInt(Math.random()*10/2);
      var x = -10;//to_attack[idx].x;
      var y = Math.random()<0.8 ? 36:37; // ;//to_attack[idx].y;

      let _r_val = Math.random();
      console.log('_r_val:'+_r_val);
      if (_r_val<0.2) { // 一堆陷阱
        console.log('打1');
        y = 36;
      } else if (_r_val<0.4) { // Goro 不斷反擊
        console.log('打2');
        y = 37;
      } else if (_r_val<0.6) { // 不斷囤兵
        console.log('打4');
        x = -16;
        y = 42;

      } else if (_r_val<0.8) { // 肥羊
        console.log('打4');
        x = -19;
        y = 49;
        jQuery('#troops > tbody > tr > td:eq(0) > input').val(0);
        jQuery('#troops > tbody > tr > td:eq(8) > input').val(0);
        jQuery('#troops > tbody > tr > td:eq(5) > a').click(); // 聖
      } else { // 肥羊
        console.log('打3');
        x = -13;
        y = 42;
      }

      // x = -16
      // y = 53 // 以車平

      // x = -15;
      // y = 36; // 以車平

      // -14|38
      // -24|38 會反擊 -16|36
      // 10, 171, 2.82843:x
      // x = 171*2.82843/10
      // -16, 42 搶我綠洲
      jQuery('input[name="x"]').val(x);
      jQuery('input[name="y"]').val(y);
      jQuery('form[name="snd"]').submit();
    } else { // 進入確認頁
      //有車的狀況
      // jQuery('select[name="ctar1"]').val(3); // 鐵 兩個隨機攻擊
      // jQuery('select[name="ctar2"]').val(0); // 米 兩個隨機攻擊

      localStorage.state = 'trainTroops';
      jQuery('#content > form').submit();
    }
  } else {
    setTimeout(function(){
      window.location.href = "http://www.fightlands.biz/"+Server+"/a2b.php";
    }, 1000*60*2);
  }
}
