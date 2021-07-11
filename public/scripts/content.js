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