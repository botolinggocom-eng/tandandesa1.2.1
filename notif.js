// ===== MODULE NOTIF UNIVERSAL =====
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// fungsi kirim notif
export function kirimNotif(db, { desa, jenis, bulan, tahun }) {

  const waktu = new Date().toLocaleString();

  push(ref(db, "notifikasi"), {
    desa: desa,
    jenis: jenis,
    bulan: bulan,
    tahun: tahun,
    waktu: waktu
  });

}