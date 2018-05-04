
  function idle() {
    if(!window.location.pathname.match(/dorf1/)){
      window.location.pathname='/'+Server+'/dorf1.php';
    } else {
      if(hero_adventure_count()>1 && jQuery('#movements .mov').length<1 && jQuery('#sidebarBoxHero > div.sidebarBoxInnerBox > div.innerBox.content > div.heroStatusMessage').text().trim()=='In home village') {
        localStorage.state = 'hero_adventure';
        window.location.pathname='/'+Server+'/hero_adventure.php';
      } else {
        // localStorage.state = 'trainTroops';
        // window.location.href = "http://www.fightlands.biz/"+Server+"/build.php?id=28"; // 28 // 32
        localStorage.state = 'attack';
        window.location.href = "http://www.fightlands.biz/"+Server+"/a2b.php";
      }
    }
  }
