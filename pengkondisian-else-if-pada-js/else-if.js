<<<<<<< HEAD
let input = prompt("Masukkan angka ");
let angka = Number(input);

if (input === "") {
  alert(`input tidak boleh kosong`);
} else if (isNaN(angka)) {
  alert(`yang anda masukan bukanlah angka`);
} else if (angka < 0) {
  alert(`angka tidak boleh negatif`);
} else if (angka % 2 === 0) {
  alert(`angka ${angka} adalah bilangan genap`);
} else {
  alert(`angka ${angka} adalah bilangan ganjil`);
}

setTimeout(() => {
  location.reload();
}, 300);
