function build(){
  console.log("build");

  if(!window.location.pathname.match(/build\.php/)){
    localStorage.state = 'idle';
  }

  var upgrade_btn = $('#build .section1 > button.green:not(.gold)');
  // $('.buildingWrapper').has('h2:contains("市場")').find('button')
  if(upgrade_btn.length < 1 && window.location.search!=="" && window.location.search.match(/\?id=(\d+)/)[1]>18){
    if(window.location.search.match(/\?id=(\d+)/)[1]=="21"){ // 倉庫
      upgrade_btn = $('.buildingWrapper').has('h2:contains("倉庫")').find('button.green:not(.gold)');
    } else if(window.location.search.match(/\?id=(\d+)/)[1]=="20"){ // 穀倉
      upgrade_btn = $('.buildingWrapper').has('h2:contains("穀倉")').find('button.green:not(.gold)');
    } else if(window.location.search.match(/\?id=(\d+)/)[1]=="19"){ // 市場
      upgrade_btn = $('.buildingWrapper').has('h2:contains("市場")').find('button.green:not(.gold)');
    }else {
      // upgrade_btn = $('#build .section1 > button.green:not(.gold)');
    }
  }

  if(upgrade_btn.length >= 1){
    localStorage.state = 'idle';
    console.log('click build');
    upgrade_btn.click();
  } else {
    console.log('not click build');
  }
}
