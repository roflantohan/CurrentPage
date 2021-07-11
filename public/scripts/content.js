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
        return rows.length;
    }else{
        return 0;
    }

}


const clearRecord = () => {
    const rows = countRecord();
    const MAX_COUNT_ALL = 10;
    const MAX_COUNT_TABLE = 2;
    if(rows > MAX_COUNT_ALL){
        const tables = document.getElementsByTagName("table");
        if(tables){
            for(let table of tables){
                const countRowsTable = table.childNodes.length;
                if(countRowsTable > MAX_COUNT_TABLE){
                    //console.log(table.childNodes[0])
                    
                }
            }
        }
    }
}

