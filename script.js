// MENANGKAP SEMUA ELEMENT (DOM)
const btnEnter = document.querySelector(".btn-enter");
const perintah = document.querySelector(".command-input");
const inputNumber = document.querySelectorAll(".input-number");
const jumlah = document.querySelector(".input-jumlah");

// KETIKA TOMBOL ENTER DI-KLIK
btnEnter.addEventListener("click", () => {
  // Destructuring element input angka
  const [angkaPertama, angkaKedua] = inputNumber;

  // CEK JIKA USER TIDAK MEMASUKKAN ANGKA
  if (angkaPertama.value === "" || angkaKedua.value === "") {
    alert("KESALAHAN MEMASUKAN ANGKA");
    perintah.value = "";
  } else {
    const result = calculate(
      perintah.value.toLowerCase(),
      parseInt(angkaPertama.value),
      parseInt(angkaKedua.value)
    );
    result === undefined
      ? alert("KESALAHAN MEMASUKAN PERINTAH")
      : (jumlah.value = result);
  }
  perintah.value = "";
});

calculate = (command, ...a) => {
  switch (command) {
    case "tambah":
      return a.reduce((a, b) => a + b);
    case "kurang":
      return a.reduce((a, b) => a - b);
    case "kali":
      return a.reduce((a, b) => a * b);
    case "bagi":
      return a.reduce((a, b) => a / b);
    default:
      break;
  }
};
