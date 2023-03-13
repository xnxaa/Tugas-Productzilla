// 1
function persegipanjang(p, l) {
    const luas = p*l;
    return luas;
  }

  const p1 = 35,
  l1 = 20;

  const total1 = persegipanjang(p1,l1);

  console.log('luas persegi panjang berikut = ', total1);


// 2
function belanja(apel, jeruk, semangka) {
    const barang = apel > 1 && jeruk > 1 || semangka > 1;

    return barang;

}
const apelRina = 3,
      jerukRina = 4;

const barangRina = belanja(apelRina, jerukRina);

console.log('Total belanja Rina ialah apel sebanyak', apelRina, 'buah, dan jeruk sebanyak', jerukRina, 'buah.');


// 3
function diskon(harga) {
    const total = harga-(harga*20/100);
    
    return total;
}
const harga = 400000

const totalharga = diskon(harga);

console.log('Total harga terpotong diskon =', totalharga);


// 4
function hewan(nama) {
    const identitas = nama;

    return identitas;
}

const namahewan1 = 'Monyet';
const namahewan2 = 'Sapi';

const identitas1 = hewan(namahewan1);
const identitas2 = hewan(namahewan2);

console.log('Nama Hewan 1 =', identitas1, ', Nama Hewan 2 =', identitas2); 


//  5
function totalbelanja (baju, celana) {
    const total = baju + celana;

    return total;
}

const bajuAnton = 2*300000,
      celanaAnton = 3*100000;

const totalbelanjaAnton = totalbelanja(bajuAnton, celanaAnton);

console.log('Total Belanja =', totalbelanjaAnton);


// 6
function selamat(nama) {
    return nama;
}
console.log(selamat('Selamat malam Veey!'));


// 7
function angka(b1,b2) {
    return b1/b2;
}
console.log(angka(30,2));


// 8
function pertambahan(a1,a2) {
    return a1+a2;
}
console.log(pertambahan(276,776));


// 9
function namabulan(nama) {
    const bulan = nama;

    return bulan;
}

const bulan1 = 'Januari ';
const bulan2 = 'Maret ';
const bulan3 = 'Mei ';
const bulan4 = 'Juli ';
const bulan5 = 'Agustus ';
const bulan6 = 'Oktober ';
const bulan7 = 'Desember ';

const namabulan1 = namabulan(bulan1 + bulan2 + bulan3 + bulan4 + bulan5 + bulan6 + bulan7);

console.log('Nama bulan yang terdiri dari 31 hari =', namabulan1); 


// 10
function segitiga(a, t) {
    const luas = a*t/2;
    return luas;
  }

  const a = 50,
  t = 40;

  const totalsegitiga = segitiga(a,t);

  console.log('luas segitiga berikut = ', totalsegitiga);


// 11
function mahasiswa(nama, nim, jurusan) {
    const data = nama && nim && jurusan;

    return data;
}

const namamahasiswa = 'Maria';
const nimmahasiswa = '2002145';
const jurusanmahasiswa = 'Biologi';

const data1 = mahasiswa(namamahasiswa, nimmahasiswa, jurusanmahasiswa);

console.log('Nama =', namamahasiswa, ', Nim =', nimmahasiswa, ', jurusan =', jurusanmahasiswa);


// 12
function namahari(nama) {
    const hari = nama;

    return hari;
}

const hari1 = 'Minggu ';
const hari2 = 'Senin ';
const hari3 = 'Selasa ';
const hari4 = 'Rabu ';
const hari5 = 'Kamis ';
const hari6 = 'Jumat ';
const hari7 = 'Sabtu ';

const namahari1 = namahari(hari2 + hari3 + hari4 + hari5 + hari6);
const namahari2 = namahari(hari7 + hari1);

console.log('Nama hari kerja =', namahari1, ', nama hari libur =', namahari2); 


// 13
function warung(pecel, rawon, air) {
    const menu = pecel + rawon + air;

    return menu;

}
const totalpecel = 3*10000,
      totalrawon = 4*15000,
      totalair = 7*2000;

const totalpesanan = warung(totalpecel, totalrawon, totalair);

console.log('Total pesanan sebanyak', totalpesanan);


// 14
function koma(k1, k2, k3) {
    const jumlahkoma = k1*k2*k3;
    return jumlahkoma;
}

const jumlahk1 = 0.5,
      jumlahk2 = 2.5,
      jumlahk3 = 3.1;

const totalkoma = koma(jumlahk1,jumlahk2, jumlahk3);

console.log('Total =', totalkoma);


// 15
function perhitungan(a, b, c) {
    const hitung = ((a*b) +c)/2;
    return hitung;
}

const hitungA = 20,
      hitungB = 40,
      hitungC = 10;

const hitungjumlah = perhitungan(hitungA, hitungB, hitungC);

console.log('Total =', hitungjumlah);


// 16
function namalengkap(nama) {
    const biodata = nama;

    return biodata;
}

const namadepan = 'ALia';
const namabelakang = 'Amelia';

const biodata1 = namalengkap(namadepan, namabelakang);

console.log('Nama =', namadepan, namabelakang); 


// 17
function persegi(s) {
    const luas = s*s;
    return luas;
  }

  const s = 30;

  const totalpersegi = persegi(s);

  console.log('luas persegi berikut = ', totalpersegi);


// 18
function pagi(daerah) {
    return "Selamat Pagi " + daerah;
}

var salam = pagi("Jawa Tengah");
console.log(salam);


// 19
function lulus (nilai1, nilai2) {
        const lulus = (nilai1 + nilai2)/2 > 70;

        return lulus;
}

const nilai1 = 90,
      nilai2 = 30;

const lulussekolah = lulus(nilai1,nilai2);

console.log('Siswa Tersebut Lulus?', lulussekolah);


// 20
function sewa(harga, jam) {
    const hargasewa = harga*jam;
    
    return hargasewa;
}
const hargasewa1 = 40000,
      jamsewa1 = 3;

const totalsewa = sewa(hargasewa1, jamsewa1);

console.log('Total harga sewa selama 3 jam =', totalsewa);

