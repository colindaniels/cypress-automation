function getList(id) {
    var BIG_LIST = []
    document.getElementById(id).getElementsByTagName('li').forEach((e, i) => {(BIG_LIST.push(e.textContent))})
    return JSON.stringify(BIG_LIST, null, 4)
}