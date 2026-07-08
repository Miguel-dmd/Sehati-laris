import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nama: '', email: '', telepon: '', komentar: '' })

  const handleNama = (e) => {
    setForm({ ...form, nama: e.target.value.replace(/[^a-zA-Z\s]/g, '') })
  }
  const handleTelepon = (e) => {
    setForm({ ...form, telepon: e.target.value.replace(/[^0-9]/g, '') })
  }

  const handleKirim = () => {
    if (!form.email) { alert('Isikan email terlebih dahulu'); return }
    if (!form.email.includes('@') || !form.email.includes('.com')) {
      alert("Format email tidak valid. Pastikan terdapat simbol '@' dan '.com'"); return
    }
    if (!form.komentar) { alert('Isikan pesan anda terlebih dahulu'); return }
    alert(`Pertanyaan telah terkirim, kami akan segera memberikan jawaban ke ${form.email}`)
    setForm({ nama: '', email: '', telepon: '', komentar: '' })
  }

  return (
    <main>
      <div
        className="bg-cover bg-center h-64"
        style={{ backgroundImage: "url('/ciken.jpg')" }}
      />

      <div className="text-center px-4 py-10">
        <h2 className="text-2xl font-semibold text-primary-dark mb-6">
          Ada Pertanyaan? Kami Siap Bantu
        </h2>
        <form onSubmit={(e) => { e.preventDefault(); handleKirim() }} className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Masukkan Nama"
            value={form.nama}
            onChange={handleNama}
            className="w-full text-center p-3 rounded-md border border-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Masukkan E-mail*"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full text-center p-3 rounded-md border border-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            placeholder="Nomor telepon"
            value={form.telepon}
            onChange={handleTelepon}
            className="w-full text-center p-3 rounded-md border border-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Komentar"
            value={form.komentar}
            onChange={(e) => setForm({ ...form, komentar: e.target.value })}
            rows="5"
            className="w-full p-3 rounded-md border border-text-dark resize-none focus:outline-none focus:ring-2 focus:ring-primary text-left"
          />
          <button
            type="submit"
            className="border-2 border-text-dark rounded-md h-11 w-40 text-text-dark hover:border-[3.5px] transition font-semibold"
          >
            Kirim
          </button>
        </form>
      </div>
    </main>
  )
}