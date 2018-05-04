function hero_adventure_count() {
  return parseInt(jQuery('#sidebarBoxHero .speechBubbleContent').text());
}
// console.log(jQuery('#movements .mov').length);
// console.log(hero_adventure_count());

function hero_adventure() {
  if(window.location.pathname.match(/hero_adventure/)){
    // window.location.pathname='/'+Server+'/hero_adventure.php';
    // jQuery('a.gotoAdventure').click();
    window.location.href = "http://www.fightlands.biz/"+Server+"/"+jQuery('a.gotoAdventure:eq(0)').attr('href');
  } else {
    localStorage.state = "idle";
    if(jQuery('#btn_ok > div > div.button-content').click().length>=1){
      jQuery('#btn_ok > div > div.button-content').click();
    } else {
      // 需要復活 未實作

    }
  }
}
