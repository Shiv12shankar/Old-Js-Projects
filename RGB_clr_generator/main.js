var r = document.getElementById("redValue");
var g = document.getElementById("greenValue");
var b = document.getElementById("blueValue");

var rs = document.getElementById("redslider");
var gs = document.getElementById("greenslider");
var bs = document.getElementById("blueslider");

var copybtn = document.getElementById("copyButton");
var colorbox = document.getElementById("color-box");
var inputTypeRGB = document.getElementById("inputType");

rs.addEventListener('input',updtColor);
gs.addEventListener('input',updtColor);
bs.addEventListener('input',updtColor);
copybtn.addEventListener('click',copyButton)

function updtColor(){
    var rv = rs.value;
    var gv = gs.value;
    var bv = bs.value;

    r.innerHTML = rv;
    g.innerHTML = gv;
    b.innerHTML = bv;

    inputTypeRGB.innerHTML = "rgb("+rv+","+gv+","+bv+")";

    const rgbColor = "rgb("+rv+","+gv+","+bv+")";
    colorbox.style.backgroundColor = rgbColor;
    return rgbColor
}
updtColor()

function copyButton(){
    var rv = rs.value;
    var gv = gs.value;
    var bv = bs.value;
    const rgbColor = "rgb("+rv+","+gv+","+bv+")";

    navigator.clipboard.writeText(rgbColor)
    .then(()=>{
        alert("The RGB values copied to Clipboard: "+rgbColor);
    })
    .catch((error)=>{
        console.error("Failed to copy RGB values",error);
    });
}