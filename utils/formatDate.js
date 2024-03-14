export function formatDate(date) {
  // Membuat objek Date dari tanggal yang diberikan
  const d = new Date(date);

  // Membuat objek Intl.DateTimeFormat dengan konfigurasi untuk format tanggal tertentu
  const dtf = new Intl.DateTimeFormat("id-ID", {
    year: "numeric", // Menampilkan tahun dalam bentuk numerik (misal: 2022)
    month: "long", // Menampilkan bulan dalam bentuk panjang (misal: Januari)
    day: "2-digit", // Menampilkan tanggal dalam bentuk dua digit (misal: 01)
  });

  // Menerapkan format tanggal ke objek Date
  const [{ value: da }, , { value: mo }, , { value: ye }] =
    dtf.formatToParts(d);

  // Menggabungkan bagian-bagian tanggal (hari, bulan, tahun) dalam format yang diinginkan
  return `${da} ${mo} ${ye}`;
}
