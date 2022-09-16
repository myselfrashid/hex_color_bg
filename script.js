document.querySelector('#submit').addEventListener('click', () => {
    let hex_num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexcode1 = "";
    let hexcode2 = "";
    let random_index = 0;

    for (let i = 0; i<6; i++){
        random_index = Math.floor(Math.random() * hex_num.length);
        hexcode1 += hex_num[random_index];
        random_index = Math.floor(Math.random() * hex_num.length);
        hexcode2 += hex_num[random_index];
    }
    document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;
    console.log(hexcode1, hexcode2);
});