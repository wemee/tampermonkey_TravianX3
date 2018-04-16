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
  return result < 10;
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
  return result < 10;
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

  // 2次以上 直接去冒險
  if(ad_cnt>1){
    console.log('ad_cnt>=3');
    return true;
  }
  // 0~12點之間 存次數 隔天過任務
  if(hour>=12 && ad_cnt>0){ // if((hour<6 || hour>=12) && ad_cnt>=1){
    console.log('hour<6 && hour>12 && ad_cnt>=1');
    return true;
  }
  console.log('不能冒險 - ad_cnt:'+ad_cnt+", hour:"+ hour);
  return false;
}

function is_villange_building(){
  if($('#content > div.boxes.buildingList > div.boxes-contents.cf > ul').find('li .name').text().match(/市場|鋼鐵鑄造廠|村莊大樓|行宮/)){
    console.log('村莊 興建中');
    return true;
  }
  return false;
}
function tmp(){
  // return false;


  // if(localStorage.clay_f_level >= 3){
  //   return false;
  // }
  // if($('#content > div.boxes.buildingList > div.boxes-contents.cf > ul').find('li .name').text().match(/磚廠/)){
  //   console.log('磚廠 興建中');
  //   return false;
  // }
  // localStorage.clay_f_level++;
  // return true;

  //////////////////////////////////////////////////////////////////////////////
  // if($('#village_map > div.gid1.level10').length==1 && localStorage.wood_f_level<3) { // 資源廠可以先升到3級
  //   console.log('資源廠可以先升到3級');
  //   return true;
  // } else {
  //   console.log('not 資源廠可以先升到3級');
  //   return false;
  // }
  //////////////////////////////////////////////////////////////////////////////
  if(is_villange_building()){
    console.log('1 行宮 興建中');
    return false;
  }
  return localStorage.residence_level < 10
}
function can_main_building(){
  if(is_villange_building()){
    console.log('2 村莊大樓 興建中');
    return false;
  }
  return localStorage.main_building_level < 15
}
function can_iron_f(){
  if(is_villange_building()){
    console.log('3 村莊 興建中');
    return false;
  }
  return localStorage.iron_f_level < 4;
}
function can_market_f(){
  if(is_villange_building()){
    console.log('3 村莊 興建中');
    return false;
  }
  return localStorage.marke_level < 9;
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

  if(tmp()){
    console.log('tmp');
    // window.location.href = host+'build.php?id=27&category=3';
    // if($('#build > div.buildingWrapper > h2:contains("鋸木廠")').length >= 1){
    //   console.log('新建')
    //   $('#build > div.buildingWrapper > h2:contains("鋸木廠")').siblings('.contract.contractNew.contractWrapper').find('button').click();
    // } else {
    //   console.log('not 新建')
    //   localStorage.state = 'build';
    // }
    //////////////////////////////////////////

    console.log('升級行宮')
    localStorage.residence_level++;
    localStorage.state = 'build';
    window.location.href = host+'build.php?id=33';
  } else if(can_iron_f()){
    console.log('升級鐵礦廠')
    localStorage.iron_f_level++;
    localStorage.state = 'build';
    window.location.href = host+'build.php?id=34';
  } else if(can_main_building()){
    console.log('升級市場')
    localStorage.marke_level++;
    localStorage.state = 'build';
    window.location.href = host+'build.php?id=19';
  } else if(can_main_building()){
    console.log('升級村莊大樓')
    localStorage.main_building_level++;
    localStorage.state = 'build';
    window.location.href = host+'build.php?id=26';
  } else if(can_go_adventure()){
    adventures();
  } else if(need_to_upgrade_warehouse()) {
    upgrade_warehouse();
  } else if(need_to_upgrade_Granary()) {
    upgrade_Granary();
  } else {
    upgradeRes();
  }
}
// https://ts20.travian.tw/dorf2.php?a=34&c=f1a7fd
// https://ts20.travian.tw/dorf1.php?newdid=2581&
