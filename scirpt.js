function sesuaikanUkuranFont(input) {
    const jumlahKarakter = input.value.length;
    
    // Asumsi lebar input adalah 40px dengan font dasar 1rem (16px)
    if (jumlahKarakter <= 2) {
        input.style.fontSize = "1rem";
    } else if (jumlahKarakter === 3) {
        input.style.fontSize = "0.8rem"; // Mengecil saat mencapai ratusan
    } else if (jumlahKarakter === 4) {
        input.style.fontSize = "0.65rem"; // Mengecil saat mencapai ribuan
    } else {
        input.style.fontSize = "0.55rem"; // Batas minimum skala agar teks tidak amblas/tidak terbaca
    }
}

document.querySelectorAll('.qtybox').forEach(box => {
    const btnMinus = box.querySelector('.minus');
    const btnPlus = box.querySelector('.plus');
    const inputQty = box.querySelector('.qty-input');

    if (btnMinus && btnPlus && inputQty) {
        // Kontrol Tombol Minus
        btnMinus.addEventListener('click', () => {
            let val = parseInt(inputQty.value) || 0;
            if (val > 0) {
                inputQty.value = val - 1;
                sesuaikanUkuranFont(inputQty); // Jalankan penskalaan
            }
        });

        // Kontrol Tombol Plus
        btnPlus.addEventListener('click', () => {
            let val = parseInt(inputQty.value) || 0;
            inputQty.value = val + 1;
            sesuaikanUkuranFont(inputQty); // Jalankan penskalaan
        });

        // Validasi Input Manual
        inputQty.addEventListener('input', () => {
            inputQty.value = inputQty.value.replace(/[^0-9]/g, '');
            sesuaikanUkuranFont(inputQty); // Jalankan penskalaan saat mengetik
        });

        // Validasi Saat Fokus Input Hilang (Blur)
        inputQty.addEventListener('blur', () => {
            if (inputQty.value === '' || parseInt(inputQty.value) < 0) {
                inputQty.value = 0;
            }
            sesuaikanUkuranFont(inputQty); // Jalankan penskalaan kembali ke standar
        });
    }
});

// Fungsi Tombol Beli
document.querySelectorAll('.bt').forEach(btnBeli => {
    btnBeli.addEventListener('click', (e) => {
        const kotakProduk = e.target.closest('.produk');
        const namaProduk = kotakProduk.querySelector('.nama-produk').innerText;
        
        const teksHarga = kotakProduk.querySelector('.harga').innerText;
        const hargaProduk = parseInt(teksHarga.replace(/[^0-9]/g, ''));
        
        const inputQty = kotakProduk.querySelector('.qty-input');
        const qty = parseInt(inputQty.value) || 0;

        if (qty < 1) {
            alert("Nilai qty harus diisi terlebih dahulu!");
            return;
        }

        let keranjang = JSON.parse(localStorage.getItem('sehatiKeranjang')) || [];
        const indexProdukAda = keranjang.findIndex(item => item.nama === namaProduk);
        
        if (indexProdukAda > -1) {
            keranjang[indexProdukAda].qty += qty;
        } else {
            keranjang.push({ nama: namaProduk, harga: hargaProduk, qty: qty });
        }

        localStorage.setItem('sehatiKeranjang', JSON.stringify(keranjang));
        
        alert(`${qty} ${namaProduk} berhasil ditambahkan ke keranjang belanja!`);
        
        inputQty.value = 0; 
        sesuaikanUkuranFont(inputQty); // Reset ukuran font ke default (1rem) setelah input kembali ke angka 0
    });
});

// ==========================================
// LOGIKA UNTUK HALAMAN KERANJANG BELANJA
// ==========================================
const bodyTabel = document.getElementById('isi-keranjang');
const teksTotalHarga = document.getElementById('total-harga');
const btnKonfirmasi = document.querySelector('.btn-konfirmasi');

function muatKeranjang() {
    if (!bodyTabel || !teksTotalHarga) return; 

    let keranjang = JSON.parse(localStorage.getItem('sehatiKeranjang')) || [];
    bodyTabel.innerHTML = '';
    let totalPembayaran = 0;

    if (keranjang.length === 0) {
        bodyTabel.innerHTML = `<tr><td colspan="6" class="empty-cart">Belum ada produk di keranjang.</td></tr>`;
        teksTotalHarga.innerText = `Total Pembayaran: Rp 0`;
        return;
    }

    keranjang.forEach((item, index) => {
        const totalHargaPerProduk = item.harga * item.qty;
        totalPembayaran += totalHargaPerProduk;

        const baris = document.createElement('tr');
        baris.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.nama}</td>
            <td>${item.qty}</td>
            <td>Rp ${item.harga.toLocaleString('id-ID')}</td>
            <td>Rp ${totalHargaPerProduk.toLocaleString('id-ID')}</td>
            <td><button class="btn-hapus" data-index="${index}">Hapus</button></td>
        `;
        bodyTabel.appendChild(baris);
    });

    teksTotalHarga.innerText = `Total Pembayaran: Rp ${totalPembayaran.toLocaleString('id-ID')}`;

    // Logika Tombol Hapus per Baris dengan Notifikasi Berhasil
    document.querySelectorAll('.btn-hapus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (confirm("Apakah anda yakin ingin menghapus produk ini?")) {
                const indexHapus = e.target.getAttribute('data-index');
                keranjang.splice(indexHapus, 1);
                localStorage.setItem('sehatiKeranjang', JSON.stringify(keranjang));
                muatKeranjang();
                
                alert("produk berhasil dihapus");
            }
        });
    });
}

if (btnKonfirmasi) {
    btnKonfirmasi.addEventListener('click', () => {
        let keranjang = JSON.parse(localStorage.getItem('sehatiKeranjang')) || [];
        
        if (keranjang.length === 0) {
            alert("Keranjang belanja Anda masih kosong!");
            return;
        }

        const nominalTotal = teksTotalHarga.innerText.replace('Total Pembayaran: ', '');
        
        if (confirm(`Apakah anda ingin melakukan checkout semua produk dengan total sebesar ${nominalTotal}?`)) {
            localStorage.removeItem('sehatiKeranjang');
            muatKeranjang();
            alert("Transaksi pembelian berhasil!");
        }
    });
}

muatKeranjang();
const inputNama = document.getElementById('input-nama');
const inputEmail = document.getElementById('input-email');
const inputTelepon = document.getElementById('input-telepon');
const inputKomentar = document.getElementById('input-komentar');
const btnKirim = document.getElementById('btn-kirim');

if (inputNama && inputEmail && inputTelepon && inputKomentar && btnKirim) {
    
    // 1. Filter Real-time: Forms Nama (Hanya Huruf & Spasi)
    inputNama.addEventListener('input', () => {
        // Regex /[^a-zA-Z\s]/g akan menghapus semua karakter selain alfabet dan spasi
        inputNama.value = inputNama.value.replace(/[^a-zA-Z\s]/g, '');
    });

    // 2. Filter Real-time: Forms Nomor Telepon (Hanya Angka)
    inputTelepon.addEventListener('input', () => {
        // Regex /[^0-9]/g akan menghapus semua karakter selain angka numerik
        inputTelepon.value = inputTelepon.value.replace(/[^0-9]/g, '');
    });

    // 3. Eksekusi Validasi saat Tombol Kirim Ditekan
    btnKirim.addEventListener('click', () => {
        const valEmail = inputEmail.value.trim();
        const valKomentar = inputKomentar.value.trim();

        // Cek jika email kosong
        if (valEmail === '') {
            alert("Isikan email terlebih dahulu");
            return; // Menghentikan proses eksekusi
        }

        // Cek format kelengkapan karakter spesifik email ('@' dan '.com')
        if (!valEmail.includes('@') || !valEmail.includes('.com')) {
            alert("Format email tidak valid. Pastikan terdapat simbol '@' dan '.com'");
            return;
        }

        // Cek jika komentar kosong
        if (valKomentar === '') {
            alert("isikan pesan anda terlebih dahulu");
            return;
        }

        // Jika semua validasi lolos, tampilkan pesan sukses
        alert(`pertanyaan telah terkirim, kami akan segera memberikan jawaban ke ${valEmail}`);
        
        // Opsional: Mereset isi form kembali menjadi kosong setelah berhasil dikirim
        document.getElementById('form-pertanyaan').reset();
    });
}