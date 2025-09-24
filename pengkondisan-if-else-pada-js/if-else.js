// let angka = prompt("masukan angka");

// if (angka % 2 === 0) {
//   alert(`angka ${angka} adalah bilangan genap`);
// } else if (angka === null || angka.trim() === "") {
//   alert("Input tidak valid");
// } else {
//   alert(`angka ${angka} adalah bilangan ganjil`);
// }

let input = prompt("masukan angka");

if (input === "" || input === null) {
  alert(`input kosong, tidak valid`);
} else {
  let angka = Number(input);
  if (isNaN(angka)) {
    alert("yang anda masukan tidak valid");
  } else if (angka % 2 === 0) {
    alert(`angka ${angka} adalah bilangan genap`);
  } else {
    alert(`angka ${angka} adalah bilangan ganjil`);
  }
}
