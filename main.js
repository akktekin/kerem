const yedekParca = ["Far", "Ayna", "Tampon", "Jant", "Kapi", "yan-cam", "kelecek-cam", "kaput", "balatalar"];
let keremsList = [];

// to puppercase fonksiyonu

function upperCase(urun) {
    return urun.toUpperCase();
}

// parca isimlerinden sayilari silme fonksiyonu

function deleteNumber(urun) {
    return urun.replace(/[0-9]/g, "")
}

// parca isimlerini ters yazma fonksiyonu

function flipOver(urun) {
    return urun.split("").reverse().join("");
}

// her parca basina KEREMAG_ ekleme fonksiyonu

function addName(urun) {
    const basaEkle = "KEREMAG_";
    return basaEkle.concat(urun);
}

// Parca sonuna guncel tarihi ekleme fonksiyonu

function addDate(data) {
    const tarih = new Date();
    return data.concat("_", tarih);
}

// tum fonksiyonlarla beraber listenin olusturulmasi

for (let index = 0; index < yedekParca.length; index++) {
    const element = yedekParca[index];
    const upperCaseElement = upperCase(element);
    const sayisizElement = deleteNumber(upperCaseElement);
    const tersElement = flipOver(sayisizElement);
    const baslikliElement = addName(tersElement);
    keremsList.push(addDate(baslikliElement));
}

console.log("Kerem beyin listesi: ", keremsList);