function productions(){
  if(typeof(PD)!=="undefined") return PD;
  PD = {
    wood: parseInt($('#production .num:eq(0)').text().match(/(\d+,?\d+)/)[1]),
    clay: parseInt($('#production .num:eq(1)').text().match(/(\d+,?\d+)/)[1]),
    iron: parseInt($('#production .num:eq(2)').text().match(/(\d+,?\d+)/)[1]),
    crop: parseInt($('#production .num:eq(3)').text().match(/(\d+,?\d+)/)[1])
  };
  return PD;
}
function need_to_upgrade_warehouse() {
  if($('#content > div.boxes.buildingList > div.boxes-contents.cf > ul').find('li .name').text().match(/倉庫/)){
    console.log('倉庫 興建中');
    return false;
  }
  if(window.location.pathname != '/dorf1.php'){
    window.location.pathname = '/dorf1.php';
    return false;
  }
  var pd = productions();
  var stockBarWarehouse = $('#stockBarWarehouse').text().match(/(\d+,?\d+)/)[1].replace(',','');
  // var stockBarWarehouse = parseInt($('#stockBarWarehouse').text().replace(',', ''));
  var result = stockBarWarehouse/Math.max(pd.wood, pd.clay, pd.iron);
  console.log('need_to_upgrade_warehouse: '+result+', stockBarWarehouse: '+
    stockBarWarehouse+', max:'+Math.max(pd.wood, pd.clay, pd.iron));
  return result < 6;
}
function need_to_upgrade_Granary() {
  if($('#content > div.boxes.buildingList > div.boxes-contents.cf > ul').find('li .name').text().match(/穀倉/)){
    console.log('穀倉 興建中');
    return false;
  }
  if(window.location.pathname != '/dorf1.php'){
    window.location.pathname = '/dorf1.php';
    return false;
  }
  var pd = productions();
  var stockBarGranary = $('#stockBarGranary').text().match(/(\d+,?\d+)/)[1].replace(',','');
  // var stockBarGranary = parseInt($('#stockBarGranary').text().replace(',',''));
  var result = stockBarGranary/Math.max(pd.crop);
  console.log('need_to_upgrade_Granary: '+result+', stockBarGranary: '+
    stockBarGranary+', max:'+Math.max(pd.crop));
  return result < 5;
}
function upgrade_warehouse(){
  localStorage.state = 'build';
  window.location.href = host+'build.php?id=21';
}

function upgrade_Granary(){
  localStorage.state = 'build';
  window.location.href = host+'build.php?id=20';
}
function upgrade_Market(){
  localStorage.state = 'build';
  window.location.href = host+'build.php?id=19';
}

function adventure_count(){
  return $('#sidebarBoxHero div.speechBubbleContainer > div.speechBubbleContent').text();
}
function can_go_adventure(){
  if(is_hero_on_the_way()){
    console.log('hero_on_the_way');
    return false;
  }
  if(hp()<20){
    console.log('hp < 20');
    return false;
  }
  var hour = (new Date).getHours();
  var ad_cnt = adventure_count();

  // 6~12點之間 存次數 隔天過任務
  if(ad_cnt>=3){
    console.log('ad_cnt>=3');
    return true;
  }
  if((hour<6 || hour>12) && ad_cnt>=1){
    console.log('hour<6 && hour>12 && ad_cnt>=1');
    return true;
  }
  console.log('不能冒險 - ad_cnt:'+ad_cnt+", hour:"+ hour);
  return false;
}
function idle(){
  console.log("idle");

  // 先寫著，目前沒有實際功能//////////////////
  if(hp()<=0){
    if($('.heroStatusMessage').text().match(/正在再生/)){
      console.log('英雄正在再生');
    }else{
      console.log('英雄死亡');
      // localStorage.state = 'hero_dead';
    }
  }
  //////////////////////////////////////////

  if(can_go_adventure()){
    adventures();
  } else if(need_to_upgrade_warehouse()) {
    upgrade_warehouse();
  } else if(need_to_upgrade_Granary()) {
    upgrade_Granary();
  } else {
    upgradeRes();
  }
}
