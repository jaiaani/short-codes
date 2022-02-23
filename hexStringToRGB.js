// transorma hexadecimal em um objeto retornando seus valores em rgb

function hexToRgb(hex){
    const r = [hex[1], hex[2]].join('')
    const g = [hex[3], hex[4]].join('')
    const b = [hex[5], hex[6]].join('')
    let rgbObj = {
        r : parseInt(r, 16),
        g : parseInt(g, 16),
        b: parseInt(b, 16)
    }
    console.log(rgbObj)
}

hexToRgb('#ffcc00')