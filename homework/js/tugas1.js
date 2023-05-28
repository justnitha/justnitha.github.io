function tampilkan(){
    var nama_kota=document.getElementById("form1").select1.value;
    var container = document.getElementById("container");

    if (nama_kota == "jakarta"){
        container.innerHTML = "jakarta ibu kota indonesia";
    }
    else if (nama_kota == "bali"){
        container.innerHTML = "Bali pulau dewata";
    }
    else if(nama_kota == "bandung"){
        container.innerHTML == "bandung kota kembang"
    } 
}

var id_nama = document.getElementById("nama");
var id_umur = document.getElementById("umur");
var id_tamp = document.getElementById("tampilan");
function kirim(){
    id_tamp.innerText = id_nama.value + "," + id_umur.value;
}

function changeColor() {
  // Mendapatkan elemen dengan id "target"
  var target = document.getElementById("target");

  // Menghasilkan nilai acak untuk komponen merah, hijau, dan biru (RGB)
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  // Menggabungkan komponen warna untuk mendapatkan nilai warna RGB
  var color = "rgb(" + red + ", " + green + ", " + blue + ")";

  // Mengubah warna elemen target
  target.style.backgroundColor = color;
}

// style peleng
function applyStyle() {
    var target = document.getElementById("target");
    var colorPicker = document.getElementById("colorPicker");
    var fontSizeInput = document.getElementById("fontSizeInput");
    var backgroundColorPicker = document.getElementById("backgroundColorPicker");
    var fontStyle = document.getElementById("fontStyle")

    var color = colorPicker.value;
    var fontSize = fontSizeInput.value + "px";
    var backgroundColor = backgroundColorPicker.value;
    var fontStyles = fontStyle.value;

    target.style.fontWeight = fontStyles;
    target.style.fontStyle= fontStyles;
    target.style.color = color;
    target.style.fontSize = fontSize;
    target.style.backgroundColor = backgroundColor;
}