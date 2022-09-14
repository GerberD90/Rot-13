
function rot13(str) {

    const alfabeto = ["A", "B", "C",
        "D", "E", "F",
        "G", "H", "I",
        "J", "K", "L",
        "M", "N", "O",
        "P", "Q", "R", "S",
        "T", "U", "V",
        "W", "Y", "X", "Z",
        " ", "!", "?", "."]

    const encrypt = ["N", "O", "P",
        "Q", "R", "S",
        "T", "U", "V",
        "W", "X", "Y",
        "Z", "A", "B",
        "C", "D", "E", "F",
        "G", "H", "I",
        "J", "L", "K", "M",
        " ", "!", "?", "."]

    function strToarr(string) {
        string = string.toUpperCase();
        let arr = []
        for (let i = 0; i < string.length; i++) {
            arr.push(string[i])
        }

        return arr
    }

    function coletaIndex(arr) {
        let index = []
        for (let i = 0; i < arr.length; i++) {
            if (encrypt.includes(arr[i]))
                index.push(encrypt.indexOf(arr[i]))
        }
        return index
    }

    function descrypt(arr) {
        let x = coletaIndex(arr)
        let saida = []
        for (let i = 0; i < x.length; i++) {
            saida.push(alfabeto[x[i]])
        }

        return String(saida).replaceAll(",", "")

    }

    let query = strToarr(str);
    return descrypt(query)

}
