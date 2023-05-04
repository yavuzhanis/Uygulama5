
// let sayi = prompt("Lütfen 1 ile 5 arasında Bir SaYI giriniz:")
// switch (sayi) {
//     case "1":
//         console.log("Girilen sayı 1 dir ");
//         break;
//     case "2":
//         console.log("Girilen sayı 2 dir ");
//         break;
//     case "3":
//         console.log("Girilen sayı 3 dir ");
//         break;
//     case "4":
//         console.log("Girilen sayı 4 dir ");
//         break;
//     case "5":
//         console.log("Girilen sayı 5 dir ");
//         break;
//     default:
//         console.log("Girilen sayı 1 ile 5 arasında olmalıdır.");
//         break;
// }   
// mantık else if ile aynı switch direkt if default da else diyebiliriz.
//2 defa çalıştırdığında eğer ki break koymaz isen bi alttaki kod satırına seker 
//break koymanın mantığı kodlar arası sekme yaşanmaması .
let yeniSatir = "\r\n";
let metın = "1-Pazartesi" + yeniSatir
    + "2-Salı" + yeniSatir
    + "3-Çarşamba" + yeniSatir
    + "4-perşembe" + yeniSatir
    + "5-cuma" + yeniSatir
    + "6-cumartesi" + yeniSatir
    + "7-Pazar" + yeniSatir
    + "Lütfen bir seçim yapınız:";

let deger = prompt(metın);
switch (deger) {
    case "1":
        console.log("Pazartesi");
        break;
    case "2":
        console.log("Salı");
        break;
    case "3":
        console.log("Çarşamba");
        break;
    case "4":
        console.log("Perşembe");
        break;
    case "5":
        console.log("Cuma");
        break;
    case "6":
        console.log("Cumartesi");
        break;
    case "7":
        console.log("Pazar");
        break;
    default:
        console.log("Lütfen Geçerli Bir değer giriniz:")
    break;
}