// code your solution here

function superbowlWin(record) {
    const isWin = item => item.result === 'W'
    const founditem = record.find(isWin)
    if (founditem) {return founditem.year}
    else {return founditem}
}