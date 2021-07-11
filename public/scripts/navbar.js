const SPORT = ['FIFA', 'Table Tennis', 'Big Tennis', 'NHL', 'NBA']


const BM = [
  {
    sport: "FIFA",
    BM: ["Bet365", "Bet365Pre", "BetVictor", "FonBet", "Fortuna", "PSK", "MarathonBet", "Parimatch", "TipSport", "WinLine", "WilliamHill", "LigaStavok", "Olimp"]
  },
  {
    sport: "Table Tennis",
    BM: ["Bet365", "Bet365Pre", "BetCity", "BetLive", "FonBet", "Fortuna", "PSK", "MarathonBet", "Parimatch", "TotoGaming", "WinLine", "BetVictor", "BaltBet", "LigaStavok", "Olimp"]
  },
  {
    sport: "Big Tennis",
    BM: ["PariMatch", "BetCity", "BetVictor", "PSK", "Fortuna", "BetLive"]
  },
  {
    sport: "NHL",
    BM: ["PariMatch", "MarathoBet", "FonBet", "TipSport", "PSK", "Fortuna", "BetLive", "WinLine"]
  },
  {
    sport: "NBA",
    BM: ["PariMatch", "Bet365", "Bet365Pre", "BetVictor", "PSK", "Fortuna", "BetLive", "WinLine"]
  },
]

const changeBM = () => {
  const selectBM = document.getElementById("bm");
  const selectSport = document.getElementById("sport");
  const allTables = document.getElementsByTagName("table")
  if(allTables){
    for(let table of allTables){
      table.style.display = "none"
    }
  }
  
  if(selectSport &&  selectBM){
    const bm = selectBM.options[selectBM.selectedIndex].innerText;
    const sport = selectSport.options[selectSport.selectedIndex].innerText;
    if(bm === 'All'){
      const tables = document.getElementsByClassName(sport);
      for(let table of tables){
        table.style.display = "table-cell"
      }
    }else{
      const table = document.getElementsByClassName(`${sport} ${bm}`)
      if(table){
        table[0].style.display = "table-cell"
      }
    }
  }
}

const changeSport = () => {
  const selectBM = document.getElementById("bm");
  const selectSport = document.getElementById("sport");

  if(selectSport){
    const sport = selectSport.options[selectSport.selectedIndex].innerText;
    if(selectBM){
      selectBM.innerHTML = "<option selected >All</option>";
      BM.map(bm => {
        if(bm.sport === sport){
          bm.BM.map(elem => {
            const option = document.createElement("option");
            option.innerText = elem
            selectBM.appendChild(option)
          })
        }
      })
    }
  }
}

const loader = () => {
  const selectSport = document.getElementById("sport");
  if(selectSport){
    SPORT.map(sport => {
      const option = document.createElement("option")
      option.innerText = sport;
      selectSport.appendChild(option)
    })
  }
  const content = document.getElementById("content");
  if(content){
    BM.map(obj => {
      obj.BM.map(elem => {
        const table = document.createElement("table");
        table.setAttribute("class", `${obj.sport} ${elem}`)
        table.innerHTML = `<tr><th>${elem}</th></tr>`
        table.style.display = "none"
        content.appendChild(table)
      })
    })
  }
}

const upPage = () => {
  window.scrollBy(0, 0)
}

window.onload = loader;
document.getElementById("sport").addEventListener("change", changeSport)
document.getElementById("sport").addEventListener("change", changeBM)
document.getElementById("bm").addEventListener("change", changeBM)
