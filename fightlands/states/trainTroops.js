function print_training_troops() {
  let map = {};
  jQuery('table.under_progress td.desc').each(function(){
    let arr = jQuery(this).text().match(/(\d+)\s([a-zA-Z]+)/);
    if (typeof(map[arr[2]]) === 'undefined') map[arr[2]]=0;
    map[arr[2]] += parseInt(arr[1]);
  });

  for (let k in map){
    map[k] = map[k].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  console.log(map);
}

function trainTroops() {
  let _r_type_val = Math.random();
  let train_type = _r_type_val < 0.7 ? "0":"1"; //0兵 1馬
  // if(window.location.href != "http://www.fightlands.biz/"+Server+"/build.php?id="+(train_type==0 ? 28:32)){ // 28 // 32
  //   window.location.href = "http://www.fightlands.biz/"+Server+"/build.php?id="+(train_type==0 ? 28:32); // 28 // 32
  if(!window.location.href.match(/build\.php\?id\=(28|32)/)){ // 28 // 32
    window.location.href = "http://www.fightlands.biz/"+Server+"/build.php?id="+(train_type==0 ? 28:32); // 28 // 32
  } else {
    var train_wait_time = 2;
    if(train_type == "0"){
      setTimeout(function(){
        let _r_val = Math.random();
        if(_r_val < 0.4) {
          jQuery('#build > form > div > div:nth-child(1) > div.details > a').click(); // 棒
        } else if(_r_val < 0.5) {
          jQuery('#build > form > div > div:nth-child(4) > div.details > a').click(); // 矛
        } else {
          jQuery('#build > form > div > div:nth-child(7) > div.details > a').click(); // 斧
        }
        // jQuery('#build > form > div > div:nth-child(1) > div.details > a').click(); // 羅
        // jQuery('#build > form > div > div:nth-child(4) > div.details > a').click(); // 禁
        // jQuery('#build > form > div > div:nth-child(7) > div.details > a').click(); // 帝
        setTimeout(function(){
          localStorage.state = 'idle';
          jQuery('#build > form > button').click();
        }, 1000*60*train_wait_time);
      }, 1000*5);
    } else if(train_type == "1"){
      setTimeout(function(){
        let _r_val = Math.random();
        if(_r_val < 0.5) {
          jQuery('#build > form > div > div:nth-child(1) > div.details > a').click(); // 聖
        } else {
          jQuery('#build > form > div > div:nth-child(4) > div.details > a').click(); // 條
        }

        setTimeout(function(){
          localStorage.state = 'idle';
          jQuery('#build > form > button').click();
        }, 1000*60*train_wait_time);
      }, 1000*5);
    } else {

    }

    print_training_troops();
  }
}
