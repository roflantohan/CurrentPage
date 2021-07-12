const addRecord = (record) => {
    const table = document.getElementsByClassName(`${record.sport} ${record.bm}`)
    if(table[0]){
        const date = `${record.day}-${record.month}-${record.year}`
        const time = `${record.hour}:${record.minute}:${record.second}`
        const match = `${record.player1} - ${record.player2}`
        const text = date + " " + time + " " + match
        const elem = document.createElement("tr")
        elem.innerHTML = `<td>${text}</td>`;
        const header = table[0].childNodes[0]
        header.insertAdjacentHTML("afterEnd", elem.innerHTML)
    }
}


const countRecord = () => {
    const rows = document.getElementsByTagName(`td`);
    const counter = document.getElementById("count");

    if(rows && counter){
        counter.innerText = rows.length;
        if(rows.length > 8000){
            counter.style.color = "red"
        }
        return rows.length;
    }else{
        return 0;
    }

}

const clearRecord = () => {
    const rows = countRecord();
    const MAX_COUNT_ALL = 10000;
    const MAX_COUNT_TABLE = 100;
    if(rows > MAX_COUNT_ALL){
        console.log(1)
        const tables = document.getElementsByTagName("table");
        if(tables){
            for(let table of tables){
                const countRowsTable = table.childNodes.length;
                if(countRowsTable > MAX_COUNT_TABLE){
                    for(let i = table.childNodes.length-1; i > MAX_COUNT_TABLE; i--){
                        table.removeChild(table.childNodes[i])
                    }
                }
            }
        }
    }
    countRecord();
}

const addSpace = () => {
    const tables = document.getElementsByTagName("table");
    if(tables){
        for(let table of tables){
            if(table.childNodes[1]){
                const empty = table.childNodes[1];
                if(empty.innerText.indexOf("-/-") === -1){
                    const elem = document.createElement("tr")
                    elem.innerHTML = `<td>-/-</td>`;
                    const header = table.childNodes[0]
                    header.insertAdjacentHTML("afterEnd", elem.innerHTML)
                    header.insertAdjacentHTML("afterEnd", elem.innerHTML)
                }
            }
            
            
        }
        
    }
}

