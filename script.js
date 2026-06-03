// ===== DATA SOAL (20 BUTIR) =====
const SOAL=[
  {soal:"Apa yang dimaksud dengan tanah longsor?",pilihan:["Pergerakan massa tanah atau batuan menuruni lereng akibat gaya gravitasi","Banjir yang terjadi di dataran tinggi","Gempa bumi yang terjadi di pegunungan","Angin kencang yang merobohkan pohon"],jawaban:0,pembahasan:"Tanah longsor adalah pergerakan massa tanah atau batuan menuruni lereng akibat gaya gravitasi, terutama dipicu oleh curah hujan tinggi atau gempa bumi."},
  {soal:"Manakah tanda-tanda awal yang paling menunjukkan akan terjadi longsor?",pilihan:["Cuaca cerah dan angin sepoi-sepoi","Munculnya retakan di tanah dan pohon yang miring","Suhu udara yang tiba-tiba menurun","Burung-burung berkumpul di satu tempat"],jawaban:1,pembahasan:"Tanda awal longsor meliputi: retakan di tanah, pohon atau tiang miring, suara gemuruh dari dalam tanah, dan air sumur yang tiba-tiba keruh."},
  {soal:"Apa tindakan paling tepat saat terjadi longsor?",pilihan:["Berlari ke arah longsor untuk melihat dari dekat","Segera menyelamatkan barang berharga terlebih dahulu","Segera menjauh ke tempat yang lebih tinggi dan aman","Tetap di dalam rumah dan kunci pintu"],jawaban:2,pembahasan:"Saat longsor terjadi, prioritas utama adalah keselamatan jiwa. Segera menjauh menuju tempat lebih tinggi dan aman, jangan buang waktu untuk mengambil barang."},
  {soal:"Upaya mitigasi sebelum longsor yang paling efektif adalah...",pilihan:["Membangun rumah di tepi jurang","Melakukan penghijauan dan penanaman pohon berakar kuat di lereng","Menebang pohon di pegunungan","Membuat saluran air langsung menuju lereng"],jawaban:1,pembahasan:"Penghijauan dan penanaman pohon berakar kuat di lereng memperkuat struktur tanah, mengikat partikel tanah, dan mengurangi risiko longsor secara signifikan."},
  {soal:"Yang harus dilakukan setelah longsor terjadi adalah...",pilihan:["Langsung kembali ke rumah yang terdampak","Melaporkan kejadian kepada BPBD atau pihak berwenang","Mengabaikan kejadian dan melanjutkan aktivitas","Menggali area longsor sendirian tanpa peralatan"],jawaban:1,pembahasan:"Setelah longsor, segera laporkan ke BPBD untuk mendapatkan penanganan, bantuan, dan penilaian keamanan yang tepat. Jangan kembali ke area terdampak sebelum dinyatakan aman."},
  {soal:"Jenis longsor yang terjadi ketika massa tanah bergerak melengkung mengikuti bidang gelincir disebut...",pilihan:["Longsoran translasi","Longsoran rotasi","Aliran bahan rombakan","Runtuhan batuan"],jawaban:1,pembahasan:"Longsoran rotasi terjadi saat massa tanah bergerak melengkung mengikuti bidang gelincir berbentuk cekung. Berbeda dengan longsoran translasi yang bergerak di bidang datar."},
  {soal:"Faktor alam utama yang paling sering memicu terjadinya longsor di Indonesia adalah...",pilihan:["Angin topan","Curah hujan tinggi dalam waktu lama","Gempa bumi berskala rendah","Perubahan suhu yang drastis"],jawaban:1,pembahasan:"Curah hujan tinggi dalam waktu lama adalah pemicu utama longsor di Indonesia. Air hujan meresap ke dalam tanah, meningkatkan berat dan mengurangi kekuatan geser tanah."},
  {soal:"Apakah yang dimaksud dengan terasering dalam upaya pencegahan longsor?",pilihan:["Pembuatan sumur resapan di lereng","Pembuatan teras bertingkat di lahan miring untuk mengurangi kecepatan air","Pemasangan jaring baja di lereng berbahaya","Pembangunan tembok penahan di bawah lereng"],jawaban:1,pembahasan:"Terasering adalah pembuatan teras-teras bertingkat pada lahan miring. Cara ini memperlambat aliran air hujan, mengurangi erosi, dan memperkuat stabilitas lereng."},
  {soal:"Nomor telepon darurat BPBD Kabupaten Pacitan yang benar adalah...",pilihan:["(0357) 886164","(021) 500-454","117","119"],jawaban:0,pembahasan:"Nomor darurat BPBD Kabupaten Pacitan adalah (0357) 886164. Simpan nomor ini dan hubungi segera bila terjadi bencana atau menemukan tanda-tanda longsor."},
  {soal:"Tas darurat (go-bag) untuk menghadapi bencana sebaiknya berisi...",pilihan:["Hanya uang tunai dan perhiasan","Dokumen penting, obat-obatan, air minum, pakaian, senter, dan uang tunai","Hanya makanan selama 7 hari","Peralatan memasak lengkap"],jawaban:1,pembahasan:"Tas darurat sebaiknya berisi: dokumen penting (KTP, KK), obat-obatan, air minum minimal 3 hari, pakaian ganti, senter dan baterai cadangan, P3K, dan uang tunai secukupnya."},
  {soal:"Mengapa daerah Pacitan termasuk wilayah dengan risiko longsor tinggi?",pilihan:["Karena berada di tepi pantai","Karena topografi berbukit dan curah hujan yang cukup tinggi","Karena dekat dengan gunung berapi aktif","Karena padat penduduk di perkotaan"],jawaban:1,pembahasan:"Kabupaten Pacitan memiliki topografi berbukit-bukit dengan kemiringan lereng yang cukup curam dan curah hujan yang tinggi, menjadikannya daerah rawan longsor."},
  {soal:"Tindakan yang TIDAK boleh dilakukan saat proses evakuasi longsor adalah...",pilihan:["Membantu lansia dan anak-anak untuk evakuasi","Mengikuti jalur evakuasi yang telah ditentukan","Kembali ke dalam rumah untuk mengambil barang","Menghubungi BPBD atau pihak berwenang"],jawaban:2,pembahasan:"Kembali ke rumah untuk mengambil barang saat evakuasi sangat berbahaya karena dapat menyebabkan tertimbun material longsor. Keselamatan jiwa selalu diutamakan."},
  {soal:"Longsor susulan paling sering terjadi...",pilihan:["Sebulan setelah longsor pertama","Beberapa jam atau hari setelah longsor pertama","Setahun kemudian di tempat yang sama","Tidak pernah terjadi longsor susulan"],jawaban:1,pembahasan:"Longsor susulan sangat umum terjadi beberapa jam hingga beberapa hari setelah longsor pertama karena tanah di sekitarnya sudah dalam kondisi jenuh air dan tidak stabil."},
  {soal:"Apa fungsi utama akar pohon dalam mencegah longsor?",pilihan:["Menyerap sinar matahari agar tanah tidak panas","Mengikat partikel tanah sehingga tanah lebih kuat dan tidak mudah longsor","Menghasilkan oksigen untuk udara segar","Memperindah pemandangan lereng"],jawaban:1,pembahasan:"Akar pohon berfungsi sebagai jangkar alami yang mengikat partikel-partikel tanah bersama-sama, meningkatkan stabilitas lereng dan mencegah terjadinya longsor."},
  {soal:"Saat kamu mendengar suara gemuruh dari arah bukit, tindakan pertama yang harus dilakukan adalah...",pilihan:["Berlari ke bukit untuk melihat sumber suara","Menunggu informasi dari tetangga terlebih dahulu","Segera berlari menjauh ke area terbuka yang lebih tinggi dan aman","Mengambil foto untuk diunggah ke media sosial"],jawaban:2,pembahasan:"Suara gemuruh dari bukit bisa menjadi tanda longsor akan terjadi. Tindakan pertama adalah segera berlari menjauh ke area terbuka yang lebih tinggi tanpa menunggu konfirmasi."},
  {soal:"Dampak longsor terhadap lingkungan yang paling sering terjadi adalah...",pilihan:["Meningkatnya kesuburan tanah di daerah yang terdampak","Pendangkalan sungai akibat material longsor dan kerusakan ekosistem","Bertambahnya luas lahan pertanian produktif","Menurunnya suhu udara di sekitar area longsor"],jawaban:1,pembahasan:"Longsor menyebabkan material tanah terbawa ke sungai sehingga mengakibatkan pendangkalan, pencemaran air, dan kerusakan ekosistem di sepanjang aliran sungai."},
  {soal:"Sistem peringatan dini longsor yang paling sederhana dan dapat dilakukan masyarakat adalah...",pilihan:["Memasang radar cuaca sendiri","Membangun menara pengawas baja","Mengamati tanda-tanda alam seperti retakan tanah, suara gemuruh, dan pergerakan tanah","Membeli aplikasi deteksi longsor berbayar"],jawaban:2,pembahasan:"Sistem peringatan dini sederhana melibatkan pengamatan langsung terhadap tanda-tanda alam seperti retakan tanah, suara gemuruh, pohon yang miring, dan air yang tiba-tiba keruh."},
  {soal:"Longsor yang terjadi akibat aliran material tanah bercampur air yang mengalir deras disebut...",pilihan:["Longsoran translasi","Longsoran rotasi","Aliran bahan rombakan (debris flow)","Runtuhan batuan bebas"],jawaban:2,pembahasan:"Aliran bahan rombakan (debris flow) adalah jenis longsor di mana material tanah, pasir, dan batuan bercampur air mengalir deras seperti arus sungai, sangat berbahaya karena kecepatan dan jangkauannya."},
  {soal:"Mengapa tidak boleh membangun rumah di daerah lereng yang curam?",pilihan:["Karena pemandangannya kurang bagus","Karena lereng curam memiliki risiko tinggi terjadi longsor yang dapat membahayakan jiwa","Karena tidak ada jaringan listrik di lereng","Karena harga tanah di lereng sangat mahal"],jawaban:1,pembahasan:"Lereng yang curam (lebih dari 30 derajat) sangat rentan longsor, terutama saat hujan deras. Membangun di sana berisiko tinggi terhadap keselamatan jiwa dan harta benda."},
  {soal:"Kegiatan manusia yang paling banyak berkontribusi meningkatkan risiko longsor adalah...",pilihan:["Menanam padi di sawah","Penebangan hutan dan alih fungsi lahan di lereng secara tidak terencana","Membangun jalan di dataran rendah","Menangkap ikan di sungai"],jawaban:1,pembahasan:"Penebangan hutan dan alih fungsi lahan di lereng menghilangkan penutup vegetasi yang melindungi tanah dari erosi dan longsor. Ini merupakan faktor manusia terbesar penyebab longsor."}
];

// ===== DATA KUIS KESIAPSIAGAAN (20 BUTIR) =====
const KUIS=[
  {pertanyaan:"Apakah kamu tahu lokasi titik kumpul evakuasi di sekitar rumahmu?",pilihan:["Ya, saya tahu persis lokasinya","Saya tahu kira-kira, tapi tidak yakin","Tidak, saya tidak tahu sama sekali"],skor:[2,1,0]},
  {pertanyaan:"Apakah di rumahmu tersedia perlengkapan darurat (senter, P3K, air minum)?",pilihan:["Ya, selalu siap tersedia dan lengkap","Sebagian ada, sebagian tidak","Tidak ada sama sekali"],skor:[2,1,0]},
  {pertanyaan:"Apakah kamu bisa mengenali tanda-tanda awal akan terjadinya longsor?",pilihan:["Ya, saya bisa mengenali dengan baik","Sedikit tahu, tapi tidak begitu yakin","Tidak, saya tidak bisa mengenali sama sekali"],skor:[2,1,0]},
  {pertanyaan:"Apakah kamu hafal nomor darurat BPBD Pacitan atau BNPB Jawa Timur?",pilihan:["Ya, saya hafal nomornya","Tahu ada nomornya, tapi tidak hafal","Tidak tahu sama sekali"],skor:[2,1,0]},
  {pertanyaan:"Jika terjadi longsor, apakah kamu tahu jalur evakuasi dari rumahmu?",pilihan:["Ya, saya sudah tahu jalurnya dengan jelas","Tahu kira-kira, tapi belum pernah dicoba","Tidak, saya belum pernah memikirkannya"],skor:[2,1,0]},
  {pertanyaan:"Apakah keluargamu sudah pernah mendiskusikan rencana darurat jika terjadi bencana?",pilihan:["Ya, kami sudah punya rencana yang jelas","Pernah dibahas sekilas, belum rencana lengkap","Belum pernah sama sekali"],skor:[2,1,0]},
  {pertanyaan:"Seberapa sering kamu memperhatikan kondisi lereng atau tanah di sekitar rumahmu?",pilihan:["Rutin memperhatikan, terutama saat musim hujan","Kadang-kadang memperhatikan","Tidak pernah memperhatikan"],skor:[2,1,0]},
  {pertanyaan:"Apakah kamu tahu cara melindungi diri jika tertimbun material longsor?",pilihan:["Ya, saya tahu caranya","Tahu sedikit, tapi tidak yakin benar","Tidak tahu sama sekali"],skor:[2,1,0]},
  {pertanyaan:"Apakah di sekitar rumahmu terdapat pohon berakar kuat yang membantu mencegah longsor?",pilihan:["Ya, banyak pohon besar berakar kuat","Ada beberapa, tapi tidak banyak","Tidak ada sama sekali"],skor:[2,1,0]},
  {pertanyaan:"Apakah kamu pernah mengikuti simulasi atau pelatihan bencana yang diselenggarakan sekolah/BPBD?",pilihan:["Ya, pernah lebih dari sekali","Pernah sekali","Belum pernah sama sekali"],skor:[2,1,0]},
  {pertanyaan:"Apakah kamu tahu lokasi kantor BPBD atau pos pengungsian terdekat dari rumahmu?",pilihan:["Ya, saya tahu lokasinya","Tahu kira-kira daerahnya","Tidak tahu sama sekali"],skor:[2,1,0]},
  {pertanyaan:"Jika kamu melihat retakan di tanah di dekat rumah, apa yang kamu lakukan?",pilihan:["Segera melaporkan ke kepala desa dan BPBD","Memberitahu anggota keluarga saja","Mengabaikannya karena dianggap biasa"],skor:[2,1,0]},
  {pertanyaan:"Apakah kamu tahu cara pertolongan pertama pada kecelakaan (P3K) dasar?",pilihan:["Ya, saya menguasainya","Tahu sedikit, belum mahir","Tidak tahu sama sekali"],skor:[2,1,0]},
  {pertanyaan:"Apakah rumahmu memiliki pintu darurat atau jalur keluar alternatif jika pintu utama terhalang?",pilihan:["Ya, ada dan semua anggota keluarga tahu","Ada, tapi tidak semua tahu","Tidak ada jalur alternatif"],skor:[2,1,0]},
  {pertanyaan:"Apakah dokumen penting keluargamu (KTP, KK, sertifikat) disimpan di tempat yang mudah dibawa saat evakuasi?",pilihan:["Ya, tersimpan rapi dan mudah diambil","Sebagian tersimpan dengan baik","Tidak, tersebar dan sulit dicari saat darurat"],skor:[2,1,0]},
  {pertanyaan:"Seberapa sering kamu mencari informasi tentang cuaca dan peringatan dini bencana?",pilihan:["Rutin, terutama saat musim hujan","Kadang-kadang jika ingat","Tidak pernah mencari informasi tersebut"],skor:[2,1,0]},
  {pertanyaan:"Apakah kamu tahu nomor Instagram resmi BPBD Pacitan untuk informasi kebencanaan?",pilihan:["Ya, saya sudah mengikutinya","Tahu ada akunnya, tapi belum follow","Tidak tahu sama sekali"],skor:[2,1,0]},
  {pertanyaan:"Jika ada peringatan hujan lebat dari BMKG, apa tindakanmu?",pilihan:["Segera meningkatkan kewaspadaan dan siapkan tas darurat","Memantau situasi dan siap-siap jika diperlukan","Mengabaikannya dan beraktivitas seperti biasa"],skor:[2,1,0]},
  {pertanyaan:"Apakah kamu mengetahui fungsi dan peran BPBD dalam penanggulangan bencana?",pilihan:["Ya, saya paham peran dan fungsinya","Tahu sekilas, tidak terlalu paham","Tidak tahu sama sekali"],skor:[2,1,0]},
  {pertanyaan:"Apakah seluruh anggota keluargamu sudah mendapatkan informasi cara mitigasi bencana longsor?",pilihan:["Ya, semua sudah tahu dan memahami","Sebagian sudah tahu","Belum ada yang mendapat informasi tersebut"],skor:[2,1,0]}
];

let soalIndex=0,skorSoal=0,soalSelesai=false,kuisJawaban={};

// ===== TOAST =====
function showToast(msg,dur=2500){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),dur);
}

// ===== NAVIGASI =====
function bukaMenu(){
  sembunyikanSemua();
  document.getElementById('hal-menu').classList.add('aktif');
  document.getElementById('bottom-nav').classList.add('show');
}
function kembali(){bukaMenu()}
function sembunyikanSemua(){document.querySelectorAll('.halaman').forEach(h=>h.classList.remove('aktif'))}

const WARNA={
  longsor:'linear-gradient(135deg,#A32D2D,#E24B4A)',
  mitigasi:'linear-gradient(135deg,#0F6E56,#1D9E75)',
  simulasi:'linear-gradient(135deg,#185FA5,#378ADD)',
  latihan:'linear-gradient(135deg,#854F0B,#EF9F27)',
  kuis:'linear-gradient(135deg,#3C3489,#9F77DD)',
  tips:'linear-gradient(135deg,#993556,#D4537E)',
  bpbd:'linear-gradient(135deg,#0D47A1,#1976D2)',
  tentang:'linear-gradient(135deg,#444441,#888780)',
};
const JUDUL={
  longsor:'⛰️ Bencana Longsor',mitigasi:'🛡️ Mitigasi Longsor',
  simulasi:'🎬 Simulasi & Skenario',latihan:'📝 Latihan Soal',
  kuis:'✅ Cek Kesiapsiagaan',tips:'💡 Tips Aman',
  bpbd:'🏛️ BPBD Pacitan',tentang:'ℹ️ Tentang Media'
};

function bukaKonten(tipe){
  sembunyikanSemua();
  const hal=document.getElementById('hal-konten');
  hal.classList.add('aktif');
  document.getElementById('bottom-nav').classList.add('show');
  document.getElementById('konten-topbar').style.background=WARNA[tipe]||'#1D9E75';
  document.getElementById('konten-judul').textContent=JUDUL[tipe]||'';
  const body=document.getElementById('konten-body');
  body.scrollTop=0;
  if(tipe==='longsor') body.innerHTML=kontenLongsor();
  else if(tipe==='mitigasi') body.innerHTML=kontenMitigasi();
  else if(tipe==='simulasi') body.innerHTML=kontenSimulasi();
  else if(tipe==='latihan'){soalIndex=0;skorSoal=0;soalSelesai=false;body.innerHTML=renderSoal()}
  else if(tipe==='kuis'){kuisJawaban={};body.innerHTML=kontenKuis()}
  else if(tipe==='tips') body.innerHTML=kontenTips();
  else if(tipe==='bpbd') body.innerHTML=kontenBpbd();
  else if(tipe==='tentang') body.innerHTML=kontenTentang();
}

// ===== SUBMENU NAVIGASI =====
function kontenLongsor(){return`<div class="submenu-list pb-nav">
  <div style="background:var(--merah-muda);border-radius:14px;padding:1rem;margin-bottom:0.5rem;font-size:0.85rem;color:#7A1F1F;line-height:1.6">
    🔴 <strong>Selamat datang di materi Bencana Longsor!</strong><br>Pilih topik di bawah ini untuk mulai belajar. Ketuk setiap kartu untuk membuka materi lengkap.
  </div>
  <div class="submenu-item" style="background:#fff5f5;border-color:#E24B4A" onclick="bukaDetail('longsor-apa')">
    <div class="si-icon">❓</div><div><div class="si-title">Apa Itu Longsor?</div><div class="si-desc">Pengertian dan jenis-jenis tanah longsor</div></div><div class="si-arrow">›</div>
  </div>
  <div class="submenu-item" style="background:#fff5f5;border-color:#E24B4A" onclick="bukaDetail('longsor-penyebab')">
    <div class="si-icon">🌧️</div><div><div class="si-title">Penyebab Longsor</div><div class="si-desc">Faktor alam dan faktor manusia</div></div><div class="si-arrow">›</div>
  </div>
  <div class="submenu-item" style="background:#fff5f5;border-color:#E24B4A" onclick="bukaDetail('longsor-dampak')">
    <div class="si-icon">💥</div><div><div class="si-title">Dampak Longsor</div><div class="si-desc">Terhadap manusia, lingkungan & fasilitas</div></div><div class="si-arrow">›</div>
  </div>
  <div class="submenu-item" style="background:#fff5f5;border-color:#E24B4A" onclick="bukaDetail('longsor-tanda')">
    <div class="si-icon">🔍</div><div><div class="si-title">Tanda-tanda Longsor</div><div class="si-desc">Kenali ciri-ciri sebelum terjadi longsor</div></div><div class="si-arrow">›</div>
  </div>
  <div class="submenu-item" style="background:#fff5f5;border-color:#E24B4A" onclick="bukaDetail('longsor-data')">
    <div class="si-icon">📊</div><div><div class="si-title">Data & Fakta Longsor</div><div class="si-desc">Statistik bencana longsor di Indonesia</div></div><div class="si-arrow">›</div>
  </div>
</div>`}

function kontenMitigasi(){return`<div class="submenu-list pb-nav">
  <div style="background:var(--hijau-muda);border-radius:14px;padding:1rem;margin-bottom:0.5rem;font-size:0.85rem;color:var(--hijau-tua);line-height:1.6">
    🟢 <strong>Materi Mitigasi Longsor</strong><br>Mitigasi adalah serangkaian upaya untuk mengurangi risiko bencana. Pelajari tiga fase penting di bawah ini.
  </div>
  <div class="submenu-item" style="background:#f0fdf6;border-color:#1D9E75" onclick="bukaDetail('mit-sebelum')">
    <div class="si-icon">🔍</div><div><div class="si-title">Sebelum Longsor</div><div class="si-desc">Pencegahan dan kesiapsiagaan</div></div><div class="si-arrow">›</div>
  </div>
  <div class="submenu-item" style="background:#f0fdf6;border-color:#1D9E75" onclick="bukaDetail('mit-saat')">
    <div class="si-icon">🚨</div><div><div class="si-title">Saat Longsor</div><div class="si-desc">Tindakan darurat dan evakuasi</div></div><div class="si-arrow">›</div>
  </div>
  <div class="submenu-item" style="background:#f0fdf6;border-color:#1D9E75" onclick="bukaDetail('mit-sesudah')">
    <div class="si-icon">🔄</div><div><div class="si-title">Sesudah Longsor</div><div class="si-desc">Langkah pemulihan pascabencana</div></div><div class="si-arrow">›</div>
  </div>
  <div class="submenu-item" style="background:#f0fdf6;border-color:#1D9E75" onclick="bukaDetail('mit-tasbencana')">
    <div class="si-icon">🎒</div><div><div class="si-title">Tas Siaga Bencana</div><div class="si-desc">Isi dan cara menyiapkan tas darurat</div></div><div class="si-arrow">›</div>
  </div>
  <div class="submenu-item" style="background:#f0fdf6;border-color:#1D9E75" onclick="bukaDetail('mit-jalur')">
    <div class="si-icon">🗺️</div><div><div class="si-title">Jalur Evakuasi</div><div class="si-desc">Cara membuat rencana evakuasi keluarga</div></div><div class="si-arrow">›</div>
  </div>
</div>`}

// ===== SIMULASI & SKENARIO =====
function kontenSimulasi(){return`<div class="detail-section pb-nav">
  <h2>🎬 Video Simulasi Longsor</h2>
  <p>Tonton video berikut untuk memahami proses terjadinya longsor dan cara penyelamatan diri yang benar.</p>
  <div style="background:#f0f4ff;border-radius:14px;padding:1.2rem;margin-bottom:1rem;border:1.5px solid #B5D4F4">
    <div style="font-weight:800;color:#185FA5;margin-bottom:0.4rem;font-size:0.95rem">🎥 Apa Itu Tanah Longsor?</div>
    <div style="font-size:0.82rem;color:#378ADD;margin-bottom:0.8rem">Proses terjadinya tanah longsor</div>
    <div onclick="window.open('https://youtu.be/Gw8_drgDCfU','_blank')" style="cursor:pointer;background:#000;border-radius:10px;position:relative;overflow:hidden;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center">
      <img src="https://img.youtube.com/vi/Gw8_drgDCfU/hqdefault.jpg" style="width:100%;height:100%;object-fit:cover;opacity:0.85;border-radius:10px" onerror="this.style.display='none'">
      <div style="position:absolute;background:rgba(255,0,0,0.9);border-radius:50%;width:56px;height:56px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.4)">     
        <div style="width:0;height:0;border-top:12px solid transparent;border-bottom:12px solid transparent;border-left:20px solid white;margin-left:4px"></div>     
      </div>
    </div>
    <button onclick="window.open('https://youtu.be/Gw8_drgDCfU','_blank')" style="margin-top:0.7rem;width:100%;background:linear-gradient(135deg,#FF0000,#cc0000);color:white;border:none;border-radius:10px;padding:0.7rem;font-size:0.88rem;font-weight:700;cursor:pointer;font-family:inherit">▶ Tonton di YouTube</button>         
  </div>
  <div style="background:#f0f4ff;border-radius:14px;padding:1.2rem;margin-bottom:1rem;border:1.5px solid #B5D4F4">
    <div style="font-weight:800;color:#185FA5;margin-bottom:0.5rem;font-size:0.95rem">🎥 Teknologi Drainase</div>
    <div style="font-size:0.82rem;color:#378ADD;margin-bottom:0.8rem">Prosedur teknologi drainase pencegahan longsor</div>
    <div onclick="window.open('https://youtu.be/ngvSiyMgBUE','_blank')" style="cursor:pointer;background:#000;border-radius:10px;position:relative;overflow:hidden;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center">
      <img src="https://img.youtube.com/vi/ngvSiyMgBUE/hqdefault.jpg" style="width:100%;height:100%;object-fit:cover;opacity:0.85;border-radius:10px" onerror="this.style.display='none'">
      <div style="position:absolute;background:rgba(255,0,0,0.9);border-radius:50%;width:56px;height:56px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.4)">
        <div style="width:0;height:0;border-top:12px solid transparent;border-bottom:12px solid transparent;border-left:20px solid white;margin-left:4px"></div>
      </div>
    </div>
    <button onclick="window.open('https://youtu.be/ngvSiyMgBUE','_blank')" style="margin-top:0.7rem;width:100%;background:linear-gradient(135deg,#FF0000,#cc0000);color:white;border:none;border-radius:10px;padding:0.7rem;font-size:0.88rem;font-weight:700;cursor:pointer;font-family:inherit">▶ Tonton di YouTube</button>    
  </div>
  <div style="background:#f0f4ff;border-radius:14px;padding:1.2rem;margin-bottom:1.5rem;border:1.5px solid #B5D4F4">
    <div style="font-weight:800;color:#185FA5;margin-bottom:0.5rem;font-size:0.95rem">🎥 Tips Aman Saat Longsor</div>
    <div style="font-size:0.82rem;color:#378ADD;margin-bottom:0.8rem">Prosedur evakuasi saat longsor</div>
    <div onclick="window.open('https://youtu.be/Ae-tAlNi7PM','_blank')" style="cursor:pointer;background:#000;border-radius:10px;position:relative;overflow:hidden;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center">
      <img src="https://img.youtube.com/vi/Ae-tAlNi7PM/hqdefault.jpg" style="width:100%;height:100%;object-fit:cover;opacity:0.85;border-radius:10px" onerror="this.style.display='none'">
        <div style="position:absolute;background:rgba(255,0,0,0.9);border-radius:50%;width:56px;height:56px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.4)">
        <div style="width:0;height:0;border-top:12px solid transparent;border-bottom:12px solid transparent;border-left:20px solid white;margin-left:4px"></div>
      </div>
    </div>
    <button onclick="window.open('https://youtu.be/Ae-tAlNi7PM','_blank')" style="margin-top:0.7rem;width:100%;background:linear-gradient(135deg,#FF0000,#cc0000);color:white;border:none;border-radius:10px;padding:0.7rem;font-size:0.88rem;font-weight:700;cursor:pointer;font-family:inherit">▶ Tonton di YouTube</button>
  </div>
  <h2>🧩 Latihan Skenario Interaktif</h2>
  <p style="margin-bottom:1rem">Pilih tindakan yang paling tepat dalam situasi berikut ini!</p>
  
  <div class="skenario-card">
    <div class="skenario-q">🌧️ <strong>Skenario 1:</strong> Hujan deras sudah turun selama 3 jam tanpa henti. Kamu mendengar suara gemuruh dari arah bukit di belakang rumah. Apa yang kamu lakukan?</div>
    <div class="skenario-opts">
      <button class="skenario-opt" onclick="jawabSkenario(this,'tepat','✅ Benar! Suara gemuruh dari bukit saat hujan deras adalah tanda longsor. Segera ajak keluarga ke tempat aman tanpa menunggu konfirmasi.')">A. Segera ajak keluarga keluar dan menjauh ke tempat yang lebih tinggi</button>
      <button class="skenario-opt" onclick="jawabSkenario(this,'kurang','❌ Ini berbahaya. Tunggu informasi bisa membuang waktu berharga. Saat ada tanda bahaya, prioritas adalah segera menyelamatkan diri.')">B. Tunggu informasi dari kepala desa terlebih dahulu</button>
      <button class="skenario-opt" onclick="jawabSkenario(this,'kurang','❌ Ini salah. Mengambil barang membuang waktu dan bisa berakibat fatal. Jiwa jauh lebih berharga dari barang.')">C. Kumpulkan barang berharga dulu sebelum keluar</button>
    </div>
    <div class="skenario-feedback"></div>
  </div>

  <div class="skenario-card">
    <div class="skenario-q">🔍 <strong>Skenario 2:</strong> Saat bermain di sekitar rumah, kamu menemukan retakan besar di tanah dekat lereng. Retakan itu tampak baru dan memanjang sekitar 2 meter. Apa yang kamu lakukan?</div>
    <div class="skenario-opts">
      <button class="skenario-opt" onclick="jawabSkenario(this,'kurang','❌ Mengisi retakan sendiri tidak cukup dan bahkan bisa berbahaya. Retakan tanah adalah tanda serius yang butuh penanganan profesional.')">A. Mengisi retakan dengan tanah sendiri agar tidak melebar</button>
      <button class="skenario-opt" onclick="jawabSkenario(this,'tepat','✅ Benar! Retakan di lereng adalah tanda longsor akan terjadi. Segera laporkan ke orang dewasa, kepala desa, dan BPBD agar bisa segera ditangani.')">B. Segera lapor ke orang tua, kepala desa, dan BPBD</button>
      <button class="skenario-opt" onclick="jawabSkenario(this,'kurang','❌ Mengabaikan retakan bisa berakibat fatal. Retakan tanah adalah tanda peringatan serius yang harus segera dilaporkan.')">C. Mengabaikannya karena mungkin hanya retakan biasa</button>
    </div>
    <div class="skenario-feedback"></div>
  </div>

  <div class="skenario-card">
    <div class="skenario-q">🌊 <strong>Skenario 3:</strong> Longsor baru saja terjadi dan kamu berhasil selamat. Tetanggamu ingin segera kembali ke rumahnya untuk mengambil barang. Apa yang kamu lakukan?</div>
    <div class="skenario-opts">
      <button class="skenario-opt" onclick="jawabSkenario(this,'kurang','❌ Menemaninya ke rumah berbahaya karena longsor susulan bisa terjadi kapan saja. Keselamatan harus diprioritaskan.')">A. Menemaninya agar tidak sendirian</button>
      <button class="skenario-opt" onclick="jawabSkenario(this,'tepat','✅ Benar! Mencegah tetangga kembali dan memintanya menunggu pernyataan aman dari BPBD adalah tindakan yang tepat. Longsor susulan sangat berbahaya.')">B. Mencegahnya dan mengingatkan tentang risiko longsor susulan, tunggu izin BPBD</button>
      <button class="skenario-opt" onclick="jawabSkenario(this,'kurang','❌ Membiarkan orang lain masuk ke zona bahaya tanpa peringatan bukan tindakan yang tepat. Kita punya tanggung jawab untuk saling mengingatkan.')">C. Membiarkannya saja karena itu keputusannya sendiri</button>
    </div>
    <div class="skenario-feedback"></div>
  </div>
</div>`}

function jawabSkenario(btn, tipe, pesan){
  const card=btn.closest('.skenario-card');
  const opts=card.querySelectorAll('.skenario-opt');
  opts.forEach(b=>b.disabled=true);
  btn.classList.add(tipe);
  const fb=card.querySelector('.skenario-feedback');
  fb.className='skenario-feedback show '+(tipe==='tepat'?'feedback-box benar':'feedback-box salah');
  fb.textContent=pesan;
  showToast(tipe==='tepat'?'✅ Jawaban Tepat!':'❌ Kurang Tepat, coba lagi!');
}

// ===== LATIHAN SOAL 20 BUTIR =====
function renderSoal(){
  const s=SOAL[soalIndex];
  const pct=Math.round((soalIndex/SOAL.length)*100);
  return`<div class="soal-container pb-nav">
    <div class="soal-progress">
      <div style="display:flex;justify-content:space-between;font-size:0.8rem;color:#888;font-weight:600">
        <span>Soal ${soalIndex+1} dari ${SOAL.length}</span><span>${pct}%</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div style="background:var(--kuning-muda);border-radius:12px;padding:0.7rem 1rem;margin-bottom:1rem;font-size:0.82rem;color:#633806;font-weight:600">
      🏆 Skor saat ini: ${skorSoal} poin | Tersisa: ${SOAL.length-soalIndex} soal
    </div>
    <div class="soal-teks">${s.soal}</div>
    <div class="pilihan-list" id="pilihan-list">
      ${s.pilihan.map((p,i)=>`<button class="pilihan-btn" onclick="jawab(${i})">${String.fromCharCode(65+i)}. ${p}</button>`).join('')}
    </div>
    <div class="feedback-box" id="feedback-box"></div>
    <button class="btn-next" id="btn-next" onclick="soalBerikut()">${soalIndex<SOAL.length-1?'Soal Berikutnya →':'Lihat Hasil 🎉'}</button>
  </div>`
}

function jawab(idx){
  if(soalSelesai)return;
  soalSelesai=true;
  const s=SOAL[soalIndex];
  const btns=document.querySelectorAll('.pilihan-btn');
  btns.forEach(b=>b.disabled=true);
  btns[idx].classList.add(idx===s.jawaban?'benar':'salah');
  if(idx!==s.jawaban)btns[s.jawaban].classList.add('benar');
  if(idx===s.jawaban){skorSoal++;showToast('✅ Benar! +1 poin');}
  else{showToast('❌ Kurang tepat, pelajari pembahasannya!');}
  const fb=document.getElementById('feedback-box');
  fb.className='feedback-box show '+(idx===s.jawaban?'benar':'salah');
  fb.innerHTML=(idx===s.jawaban?'✅ <strong>Benar!</strong> ':'❌ <strong>Kurang tepat.</strong> ')+s.pembahasan;
  document.getElementById('btn-next').classList.add('show');
}

function soalBerikut(){
  if(soalIndex<SOAL.length-1){soalIndex++;soalSelesai=false;document.getElementById('konten-body').innerHTML=renderSoal()}
  else{
    const pct=Math.round((skorSoal/SOAL.length)*100);
    const icon=pct>=80?'🏆':pct>=60?'👍':'📚';
    const pesan=pct>=80?'Luar biasa! Kamu sangat paham mitigasi bencana longsor. Pertahankan prestasimu!':pct>=60?'Bagus! Kamu sudah cukup paham. Terus tingkatkan dengan membaca materi lebih dalam.':'Jangan menyerah! Baca kembali semua materi dan coba lagi ya.';
    const grade=pct>=90?'A':pct>=80?'B':pct>=70?'C':pct>=60?'D':'E';
    document.getElementById('konten-body').innerHTML=`<div class="hasil-box pb-nav">
      <div class="hasil-icon">${icon}</div>
      <div class="hasil-skor">${skorSoal}/${SOAL.length}</div>
      <div style="display:inline-block;background:${pct>=80?'var(--hijau-muda)':pct>=60?'var(--kuning-muda)':'var(--merah-muda)'};color:${pct>=80?'var(--hijau-tua)':pct>=60?'#633806':'#7A1F1F'};border-radius:50px;padding:6px 20px;font-weight:800;font-size:1rem;margin-bottom:0.5rem">Nilai: ${pct}% — Grade ${grade}</div>
      <div style="background:#f8f8f8;border-radius:14px;padding:1rem;margin:1rem 0;font-size:0.9rem;color:#444;line-height:1.6">${pesan}</div>
      <div style="display:flex;gap:0.8rem;justify-content:center;flex-wrap:wrap">
        <button class="btn-ulangi" onclick="bukaKonten('latihan')">🔄 Ulangi Latihan</button>
        <button class="btn-ulangi" style="background:linear-gradient(135deg,#185FA5,#378ADD)" onclick="bukaKonten('longsor')">📖 Baca Materi</button>
      </div>
    </div>`;
  }
}

// ===== KUIS KESIAPSIAGAAN 20 BUTIR =====
function kontenKuis(){return`<div class="pb-nav">
  <div class="kuis-intro">
    <div style="font-size:3.5rem;margin-bottom:0.8rem">✅</div>
    <h2>Cek Kesiapsiagaanmu!</h2>
    <p>Jawab <strong>20 pertanyaan</strong> berikut dengan <em>jujur</em> untuk mengetahui seberapa siap kamu menghadapi bencana longsor. Tidak ada jawaban benar atau salah, ini adalah penilaian dirimu sendiri.</p>
  </div>
  ${KUIS.map((k,i)=>`<div class="kuis-item">
    <div class="kuis-pertanyaan">${i+1}. ${k.pertanyaan}</div>
    <div class="kuis-pilihan">
      ${k.pilihan.map((p,j)=>`<button class="kuis-btn" id="kuis-${i}-${j}" onclick="pilihKuis(${i},${j})">${p}</button>`).join('')}
    </div>
  </div>`).join('')}
  <button class="btn-lihat-hasil" id="btn-hasil-kuis" onclick="lihatHasilKuis()">Lihat Hasil Kesiapsiagaanku 🎯</button>
  <div class="hasil-kuis" id="hasil-kuis"></div>
</div>`}

function pilihKuis(si,pi){
  document.querySelectorAll(`[id^="kuis-${si}-"]`).forEach(b=>b.classList.remove('dipilih'));
  document.getElementById(`kuis-${si}-${pi}`).classList.add('dipilih');
  kuisJawaban[si]=pi;
  const jml=Object.keys(kuisJawaban).length;
  const sisa=KUIS.length-jml;
  showToast(sisa===0?'✅ Semua terjawab! Lihat hasil yuk!':`📋 ${jml}/${KUIS.length} terjawab`);
  if(jml===KUIS.length)document.getElementById('btn-hasil-kuis').classList.add('show');
}

function lihatHasilKuis(){
  const skor=Object.values(kuisJawaban).reduce((a,v,i)=>a+KUIS[i].skor[v],0);
  const maxSkor=KUIS.length*2;
  const pct=Math.round((skor/maxSkor)*100);
  let level,warna,pesan,rekomendasi;
  if(pct>=75){
    level='Siaga Tinggi 🏆';warna='level-tinggi';
    pesan='Hebat! Kamu sudah sangat siap menghadapi bencana longsor!';
    rekomendasi='Pertahankan kesiapanmu dan bantu edukasi orang-orang di sekitarmu. Kamu bisa menjadi agen perubahan dalam mitigasi bencana di komunitasmu!';
  }else if(pct>=50){
    level='Siaga Sedang 👍';warna='level-sedang';
    pesan='Kamu cukup siap, namun masih ada yang perlu ditingkatkan.';
    rekomendasi='Lengkapi tas darurat, pelajari jalur evakuasi, dan simpan nomor BPBD Pacitan: (0357) 886164. Diskusikan rencana darurat bersama keluarga segera!';
  }else{
    level='Siaga Rendah 📚';warna='level-rendah';
    pesan='Perlu peningkatan kesiapsiagaan yang lebih serius.';
    rekomendasi='Mulai sekarang: (1) Pelajari tanda-tanda longsor, (2) Tentukan jalur evakuasi keluarga, (3) Siapkan tas darurat, (4) Simpan nomor BPBD Pacitan: (0357) 886164.';
  }
  
  // Analisis per kategori
  const analisis=[
    {label:'Pengetahuan & Identifikasi Risiko',indeks:[2,6,10,16],icon:'🧠'},
    {label:'Kesiapan Perlengkapan',indeks:[1,9,14,15],icon:'🎒'},
    {label:'Rencana Evakuasi',indeks:[0,4,5,13],icon:'🗺️'},
    {label:'Jaringan & Informasi',indeks:[3,8,11,17],icon:'📡'},
    {label:'Pengetahuan BPBD',indeks:[7,12,16,18,19],icon:'🏛️'},
  ];
  
  const analisisHtml=analisis.map(a=>{
    const jmlSkor=a.indeks.reduce((s,i)=>{
      if(kuisJawaban[i]!==undefined) return s+KUIS[i].skor[kuisJawaban[i]];
      return s;
    },0);
    const maxA=a.indeks.length*2;
    const pctA=Math.round((jmlSkor/maxA)*100);
    const wA=pctA>=70?'var(--hijau)':pctA>=40?'var(--kuning)':'var(--merah)';
    return`<div style="margin-bottom:0.8rem">
      <div style="display:flex;justify-content:space-between;font-size:0.8rem;font-weight:700;margin-bottom:4px">
        <span>${a.icon} ${a.label}</span><span style="color:${wA}">${pctA}%</span>
      </div>
      <div style="background:#e8e8e8;border-radius:50px;height:8px;overflow:hidden">
        <div style="width:${pctA}%;background:${wA};height:8px;border-radius:50px;transition:width 1s ease"></div>
      </div>
    </div>`;
  }).join('');
  
  document.getElementById('hasil-kuis').innerHTML=`
    <div style="font-size:4rem;margin-bottom:1rem">${pct>=75?'🏆':pct>=50?'👍':'📚'}</div>
    <span class="level-badge ${warna}">${level}</span>
    <div style="font-size:2.5rem;font-weight:900;margin:0.8rem 0;background:linear-gradient(135deg,#3C3489,#9F77DD);-webkit-background-clip:text;-webkit-text-fill-color:transparent">${pct}%</div>
    <div style="font-size:0.9rem;font-weight:700;color:#444;margin-bottom:0.5rem">${pesan}</div>
    <div style="font-size:0.85rem;color:#666;line-height:1.6;margin-bottom:1.5rem;background:#f8f8f8;border-radius:14px;padding:1rem;text-align:left">${rekomendasi}</div>
    <div style="background:white;border-radius:14px;padding:1.2rem;margin-bottom:1.5rem;text-align:left;border:1.5px solid #e8e8e8">
      <div style="font-size:0.88rem;font-weight:800;margin-bottom:1rem;color:var(--teks)">📊 Analisis Per Kategori:</div>
      ${analisisHtml}
    </div>
    <div style="display:flex;gap:0.8rem;justify-content:center;flex-wrap:wrap">
      <button class="btn-ulangi" style="background:linear-gradient(135deg,#3C3489,#9F77DD);box-shadow:0 4px 16px rgba(159,119,221,0.4)" onclick="bukaKonten('kuis')">🔄 Coba Lagi</button>
      <button class="btn-ulangi" onclick="bukaKonten('mitigasi')">📖 Pelajari Mitigasi</button>
    </div>`;
  document.getElementById('hasil-kuis').classList.add('show');
  document.getElementById('btn-hasil-kuis').style.display='none';
  setTimeout(()=>document.getElementById('hasil-kuis').scrollIntoView({behavior:'smooth'}),100);
}

// ===== TIPS =====
function kontenTips(){
  const tips=[
    {icon:'🔍',judul:'Tips Sebelum Longsor',warna:'#1D9E75',isi:['Kenali tanda-tanda awal longsor: retakan tanah, pohon miring, suara gemuruh dari bawah tanah','Pelajari jalur evakuasi dan lokasi titik kumpul di sekitar rumah dan sekolahmu','Siapkan tas darurat: KTP/KK, obat-obatan, air minum minimal 3 hari, pakaian, senter, P3K, uang tunai','Lakukan penghijauan dan tanam pohon berakar kuat (mahoni, jati, bambu) di lereng sekitar rumah','Hindari membangun di area lereng curam, tepi jurang, atau bantaran sungai','Buat saluran drainase yang baik agar air hujan mengalir jauh dari lereng','Perhatikan kondisi lereng terutama saat dan setelah hujan deras','Simpan nomor darurat BPBD Pacitan: (0357) 886164 dan BNPB Jawa Timur: 0318550222','Ikuti akun Instagram resmi BPBD Pacitan untuk update informasi kebencanaan','Ikuti simulasi bencana yang diselenggarakan BPBD atau sekolah']},
    {icon:'🚨',judul:'Tips Saat Longsor',warna:'#E24B4A',isi:['Jangan panik, tetap tenang dan berpikir jernih agar keputusanmu tepat','Segera menjauh dari area longsor menuju tempat lebih tinggi dan terbuka','Jangan kembali untuk mengambil barang, keselamatan jiwa lebih utama dari apapun','Hindari menyeberangi jembatan atau aliran sungai yang meluap akibat material longsor','Jauhkan diri dari lereng, pohon besar, dan tiang listrik yang bisa roboh','Hubungi BPBD Pacitan (0357) 886164 sesegera mungkin setelah berada di tempat aman','Bantu orang lanjut usia, anak-anak, ibu hamil, dan penyandang disabilitas untuk evakuasi','Gunakan jalur evakuasi yang sudah ditentukan, hindari jalan yang melewati lereng','Jika tertimbun, lindungi kepala dengan tangan dan ciptakan ruang udara','Beri sinyal kepada tim penyelamat dengan berteriak atau memukul benda keras']},
    {icon:'🔄',judul:'Tips Sesudah Longsor',warna:'#378ADD',isi:['Jangan kembali ke rumah sebelum ada pernyataan aman dari BPBD atau pihak berwenang','Laporkan kerusakan, korban, dan lokasi terdampak kepada BPBD atau aparat setempat','Waspadai longsor susulan, area yang baru longsor masih sangat rawan beberapa hari ke depan','Bersihkan lumpur dan material longsor secara gotong royong bersama warga','Dapatkan bantuan psikologis/konseling jika mengalami trauma setelah bencana','Periksa kondisi struktural bangunan sebelum kembali dihuni','Dokumentasikan kerusakan dengan foto untuk keperluan bantuan dan rekonstruksi','Ikuti arahan dan informasi resmi dari pemerintah, BPBD, dan instansi terkait','Rehabilitasi lereng yang longsor dengan penghijauan kembali setelah dinyatakan aman','Evaluasi kesiapsiagaan keluarga dan perbaiki rencana darurat untuk masa depan']},
    {icon:'🎒',judul:'Isi Tas Siaga Bencana',warna:'#EF9F27',isi:['📄 Dokumen: KTP, KK, Akta Kelahiran, BPJS/KIS (simpan dalam plastik kedap air)','💊 Obat-obatan: obat rutin, P3K (perban, antiseptik, paracetamol, oralit)','💧 Air minum: minimal 3 liter per orang untuk 3 hari','🍱 Makanan darurat: roti kering, biskuit, abon, makanan kaleng ringan','🔦 Senter + baterai cadangan, pluit/peluit untuk sinyal','👕 Pakaian ganti 2 stel, jas hujan, selimut darurat','💰 Uang tunai secukupnya dalam pecahan kecil','📱 Power bank yang terisi penuh, charger handphone','📋 Catatan nomor penting: BPBD pacitan (0357) 886164, BNPB Jawa Timur 0318550222, keluarga, dokter','🗺️ Peta jalur evakuasi setempat (cetak dan simpan dalam plastik)']}
  ];
  return`<div class="detail-section pb-nav">
    ${tips.map((t,i)=>`<div class="tips-card">
      <div class="tips-header" onclick="toggleTips(this)" style="color:${t.warna}">
        <span style="font-size:1.5rem">${t.icon}</span> ${t.judul}
        <span class="tips-chevron">▼</span>
      </div>
      <div class="tips-body${i===0?' show':''}">
        <ul>${t.isi.map(x=>`<li>${x}</li>`).join('')}</ul>
      </div>
    </div>`).join('')}
  </div>`
}
function toggleTips(el){
  const body=el.nextElementSibling;
  const ch=el.querySelector('.tips-chevron');
  body.classList.toggle('show');
  ch.classList.toggle('open');
}

// ===== BPBD PACITAN =====
function kontenBpbd(){return`<div class="pb-nav" style="background:white">
  <div class="bpbd-hero">
    <div class="bpbd-logo">🏛️</div>
    <h2>BPBD Kabupaten Pacitan</h2>
    <p>Badan Penanggulangan Bencana Daerah<br>Kabupaten Pacitan, Jawa Timur</p>
  </div>
  
  <div class="bpbd-section-title">📞 Kontak Darurat</div>
  
  <div class="bpbd-contact-card" onclick="teleponBPBD()">
    <div class="bpbd-cc-icon">📞</div>
    <div style="flex:1">
      <div class="bpbd-cc-label">Nomor Telepon Darurat</div>
      <div class="bpbd-cc-val">(0357) 886164</div>
      <div class="bpbd-cc-sub">Tersedia saat jam kerja & darurat bencana</div>
    </div>
    <button class="bpbd-cc-action" onclick="event.stopPropagation();teleponBPBD()">📞 Hubungi</button>
  </div>
  
  <div class="bpbd-contact-card" onclick="bukaInstagram()">
    <div class="bpbd-cc-icon" style="background:linear-gradient(135deg,#E1306C,#833AB4,#405DE6)">📸</div>
    <div style="flex:1">
      <div class="bpbd-cc-label">Instagram Resmi</div>
      <div class="bpbd-cc-val">@bpbd_pacitan</div>
      <div class="bpbd-cc-sub">Info kebencanaan, peringatan dini & kegiatan</div>
    </div>
    <button class="bpbd-cc-action" style="background:linear-gradient(135deg,#E1306C,#833AB4)" onclick="event.stopPropagation();bukaInstagram()">📸 Follow</button>
  </div>
  
  <div class="bpbd-contact-card" onclick="bnpbHubungi()">
    <div class="bpbd-cc-icon" style="background:linear-gradient(135deg,#d32f2f,#e53935)">🆘</div>
    <div style="flex:1">
      <div class="bpbd-cc-label">BNPB Jawa Timur</div>
      <div class="bpbd-cc-val">0318550222</div>
      <div class="bpbd-cc-sub">Hotline Bencana 24 Jam</div>
    </div>
    <button class="bpbd-cc-action" style="background:#d32f2f" onclick="event.stopPropagation();bnpbHubungi()">📞 0318550222</button>
  </div>

  <div class="bpbd-section-title">📍 Alamat Kantor</div>
  
  <div class="bpbd-contact-card" style="cursor:default">
    <div class="bpbd-cc-icon" style="background:linear-gradient(135deg,#388E3C,#43A047)">📍</div>
    <div>
      <div class="bpbd-cc-label">Alamat Lengkap</div>
      <div class="bpbd-cc-val" style="font-size:0.88rem;line-height:1.5">Jl. Dewi Sartika No.19,<br>Kabupaten Pacitan<br></div>
    </div>
  </div>
  
  <div class="bpbd-map-wrap">
    <div style="font-size:1.5rem;margin-bottom:0.5rem">🗺️</div>
    <div style="font-weight:700;color:#1565C0;margin-bottom:0.3rem;font-size:0.9rem">Lokasi Kantor BPBD Pacitan</div>
    <div style="font-size:0.8rem;color:#5F5E5A;margin-bottom:0.8rem">Klik tombol di bawah untuk membuka peta</div>
    <button onclick="bukaPeta()" style="background:linear-gradient(135deg,#1565C0,#1976D2);color:white;border:none;border-radius:12px;padding:0.7rem 1.5rem;font-size:0.88rem;font-weight:700;cursor:pointer;font-family:inherit">🗺️ Buka di Google Maps</button>
  </div>

  <div class="bpbd-section-title">ℹ️ Tentang BPBD</div>
  
  <div style="padding:0 1.5rem 1rem">
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:#1565C0">
        <span>🎯</span> Tugas & Fungsi BPBD
        <span class="acc-chevron">▼</span>
      </div>
      <div class="accordion-body show">
        <p>BPBD (Badan Penanggulangan Bencana Daerah) adalah lembaga pemerintah daerah yang bertanggung jawab dalam penyelenggaraan penanggulangan bencana di tingkat kabupaten/kota.</p>
        <ul>
          <li>Menetapkan pedoman dan pengarahan penanganan bencana daerah</li>
          <li>Menyusun, menetapkan, dan menginformasikan peta rawan bencana</li>
          <li>Melaksanakan penyelenggaraan penanggulangan bencana daerah</li>
          <li>Melaporkan penyelenggaraan penanggulangan bencana kepada bupati</li>
          <li>Mengendalikan pengumpulan dan penyaluran uang dan barang</li>
          <li>Mempertanggungjawabkan penggunaan anggaran bencana daerah</li>
        </ul>
      </div>
    </div>
    
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:#1565C0">
        <span>📋</span> Tiga Fase Penanggulangan Bencana
        <span class="acc-chevron">▼</span>
      </div>
      <div class="accordion-body">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot" style="background:var(--hijau-muda)">🔍</div>
            <div class="timeline-content">
              <h3 style="color:var(--hijau-tua)">Pra Bencana</h3>
              <p>Pencegahan, mitigasi, kesiapsiagaan, peringatan dini</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot" style="background:var(--merah-muda)">🚨</div>
            <div class="timeline-content">
              <h3 style="color:var(--merah)">Tanggap Darurat</h3>
              <p>Penyelamatan, evakuasi, pemenuhan kebutuhan dasar pengungsi</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot" style="background:var(--biru-muda)">🔄</div>
            <div class="timeline-content">
              <h3 style="color:var(--biru)">Pasca Bencana</h3>
              <p>Rehabilitasi dan rekonstruksi wilayah terdampak bencana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:#1565C0">
        <span>📱</span> Cara Melaporkan Bencana
        <span class="acc-chevron">▼</span>
      </div>
      <div class="accordion-body">
        <p>Jika kamu menemukan tanda-tanda bencana atau kejadian bencana, segera laporkan melalui:</p>
        <ul>
          <li>📞 Telepon: (0357) 886164</li>
          <li>📱 Hotline BNPB Jawa Timur: 0318550222</li>
          <li>📸 Instagram: @bpbd_pacitan</li>
          <li>🏛️ Datang langsung ke kantor BPBD Pacitan</li>
          <li>🏘️ Lapor ke kepala desa/RT/RW setempat</li>
        </ul>
        <p style="margin-top:0.5rem">Informasi yang perlu disampaikan: lokasi kejadian, jenis bencana, perkiraan korban, dan kerusakan yang terjadi.</p>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:#1565C0">
        <span>🏔️</span> Kebencanaan di Pacitan
        <span class="acc-chevron">▼</span>
      </div>
      <div class="accordion-body">
        <p>Kabupaten Pacitan termasuk dalam daerah rawan bencana karena kondisi geografisnya:</p>
        <ul>
          <li>Sekitar <strong>70%</strong> wilayah Pacitan berupa perbukitan dan pegunungan</li>
          <li>Rawan bencana: longsor, banjir bandang, gempa bumi, dan tsunami</li>
          <li>Bencana longsor paling sering terjadi di musim hujan (Oktober–April)</li>
          <li>Kecamatan paling rawan longsor: Pringkuku, Donorojo, Punung, Nawangan</li>
          <li>BPBD Pacitan aktif melakukan sosialisasi dan pelatihan mitigasi bencana</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="bpbd-section-title">🔖 Layanan Unggulan</div>
  <div class="bpbd-tag-list">
    <span class="bpbd-tag">🗺️ Peta Rawan Bencana</span>
    <span class="bpbd-tag">⚠️ Peringatan Dini</span>
    <span class="bpbd-tag">🎓 Pelatihan Mitigasi</span>
    <span class="bpbd-tag">🚁 Tim SAR</span>
    <span class="bpbd-tag">🏕️ Posko Pengungsian</span>
    <span class="bpbd-tag">💊 Bantuan Darurat</span>
    <span class="bpbd-tag">🏗️ Rekonstruksi</span>
    <span class="bpbd-tag">📊 Data Bencana</span>
  </div>
</div>`}

function teleponBPBD(){
  showToast('📞 Menghubungi BPBD Pacitan...',2000);
  setTimeout(()=>window.location.href='tel:0357886164',500);
}
function bukaInstagram(){
  showToast('📸 Membuka Instagram BPBD Pacitan...',2000);
  setTimeout(()=>window.open('https://www.instagram.com/bpbd_pacitan','_blank'),500);
}
function bnpbHubungi(){
  showToast('🆘 Menghubungi BNPB Jawa Timur...',2000);
  setTimeout(()=>window.location.href='tel:0318550222',500);
}
function bukaPeta(){
  showToast('🗺️ Membuka Google Maps...',2000);
  setTimeout(()=>window.open('https://maps.google.com/?q=BPBD+Kabupaten+Pacitan+Jawa+Timur','_blank'),500);
}

function toggleAcc(el){
  const body=el.nextElementSibling;
  const ch=el.querySelector('.acc-chevron');
  body.classList.toggle('show');
  ch.classList.toggle('open');
}

// ===== TENTANG =====
function kontenTentang(){return`<div class="tentang-section pb-nav">
  <div class="tentang-hero">
    <div class="t-icon">🏔️</div>
    <h2>Media Pembelajaran Mitigasi Bencana Longsor</h2>
    <p>Media pembelajaran interaktif berbasis web untuk meningkatkan pemahaman dan kesiapsiagaan siswa terhadap mitigasi bencana longsor di Kabupaten Pacitan.</p>
  </div>
  <div class="info-row"><div class="ir-icon">👤</div><div><div class="ir-label">Pengembang</div><div class="ir-val">Farhan Alfarisi</div></div></div>
  <div class="info-row"><div class="ir-icon">🏫</div><div><div class="ir-label">Institusi</div><div class="ir-val">STKIP PGRI Pacitan</div></div></div>
  <div class="info-row"><div class="ir-icon">📍</div><div><div class="ir-label">Lokasi Penelitian</div><div class="ir-val">SMP Negeri 1 Pringkuku, Pacitan</div></div></div>
  <div class="info-row"><div class="ir-icon">🛠️</div><div><div class="ir-label">Teknologi</div><div class="ir-val">HTML5, CSS3, JavaScript</div></div></div>
  <div class="info-row"><div class="ir-icon">🎯</div><div><div class="ir-label">Tujuan</div><div class="ir-val">Meningkatkan pemahaman mitigasi bencana longsor siswa kelas VIII</div></div></div>
  <div class="info-row"><div class="ir-icon">📦</div><div><div class="ir-label">Versi</div><div class="ir-val">2.0 Edisi Interaktif</div></div></div>
  <div class="info-box bpbd" style="margin-top:0.5rem">
    🏛️ <strong>BPBD Kabupaten Pacitan:</strong> (0357) 886164<br>
    📸 <strong>Instagram:</strong> @bpbd_pacitan<br>
    🆘 <strong>BNPB Jawa Timur:</strong> 0318550222
  </div>
  <div class="info-box hijau">
    📝 <strong>Fitur dalam media ini:</strong><br>
    ✅ Materi lengkap bencana & mitigasi longsor<br>
    ✅ 20 butir latihan soal interaktif dengan pembahasan<br>
    ✅ 20 cek kesiapsiagaan dengan analisis per kategori<br>
    ✅ Skenario interaktif simulasi bencana<br>
    ✅ Informasi lengkap BPBD Pacitan<br>
    ✅ Tips dan panduan praktis keselamatan
  </div>
</div>`}

// ===== DETAIL PAGES =====
const DETAIL={
  'longsor-apa':{judul:'❓ Apa Itu Longsor?',html:`<div class="detail-section pb-nav">
    <h2>Pengertian Tanah Longsor</h2>
    <p>Tanah longsor adalah peristiwa geologi berupa perpindahan massa tanah, batuan, atau material campuran menuruni lereng akibat pengaruh gaya gravitasi. Longsor bisa terjadi tiba-tiba maupun perlahan tergantung kondisi lereng dan pemicunya.</p>
    <div class="info-box merah">⚠️ <strong>Pacitan Rawan Longsor!</strong> Kabupaten Pacitan termasuk wilayah dengan risiko longsor tinggi karena topografi berbukit-bukit dengan kemiringan lereng curam dan curah hujan yang cukup tinggi.</div>
    <h2>Jenis-Jenis Longsor</h2>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--merah)"><span>🔴</span> Longsoran Translasi <span class="acc-chevron">▼</span></div>
      <div class="accordion-body show">
        <p>Massa tanah atau batuan bergerak di sepanjang bidang gelincir berbentuk rata atau bergelombang landai. Jenis ini paling umum terjadi di Indonesia.</p>
        <p><strong>Ciri khas:</strong> Material bergerak secara sejajar dengan lereng, membentuk gundukan di bagian bawah.</p>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--merah)"><span>🔴</span> Longsoran Rotasi <span class="acc-chevron">▼</span></div>
      <div class="accordion-body">
        <p>Massa tanah bergerak melengkung mengikuti bidang gelincir berbentuk cekung seperti sendok. Bidang gelincir berbentuk lengkung.</p>
        <p><strong>Ciri khas:</strong> Tanah di bagian atas menjadi miring ke belakang (retrogresif), membentuk cekungan.</p>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--merah)"><span>🔴</span> Aliran Bahan Rombakan <span class="acc-chevron">▼</span></div>
      <div class="accordion-body">
        <p>Material tanah bercampur air mengalir deras seperti aliran sungai. Sangat berbahaya karena kecepatan tinggi dan jangkauan jauh.</p>
        <p><strong>Ciri khas:</strong> Bergerak cepat, dapat mencapai kecepatan 100 km/jam pada lereng curam, membawa bongkahan batu besar.</p>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--merah)"><span>🔴</span> Runtuhan Batuan <span class="acc-chevron">▼</span></div>
      <div class="accordion-body">
        <p>Batuan atau material jatuh bebas dari tebing yang sangat curam atau vertikal. Terjadi karena erosi, pelapukan, atau gempa bumi.</p>
        <p><strong>Ciri khas:</strong> Batuan jatuh bebas, sangat berbahaya di daerah tebing kapur seperti di beberapa wilayah Pacitan.</p>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--merah)"><span>🔴</span> Rayapan Tanah <span class="acc-chevron">▼</span></div>
      <div class="accordion-body">
        <p>Gerakan massa tanah yang sangat lambat (milimeter per tahun) dan biasanya tidak disadari. Ditandai dengan pohon yang condong, tiang yang miring, atau dinding yang retak.</p>
        <p><strong>Ciri khas:</strong> Gerakan sangat lambat namun berkelanjutan, sering menjadi tanda awal longsor besar.</p>
      </div>
    </div>
    <h2>Fakta Menarik tentang Longsor</h2>
    <div class="fact-flip-wrap">
      <div class="fact-flip" onclick="revealFact(this)">
        <div class="fact-flip-icon">📊</div>
        <div class="fact-flip-q">Berapa persen wilayah Indonesia rawan longsor?</div>
        <div class="fact-flip-a">Sekitar 40% wilayah Indonesia berpotensi mengalami longsor, dengan lebih dari 5.000 kejadian per tahun.</div>
        <div class="fact-flip-hint">Ketuk untuk lihat jawaban 👆</div>
      </div>
      <div class="fact-flip" onclick="revealFact(this)">
        <div class="fact-flip-icon">⚡</div>
        <div class="fact-flip-q">Seberapa cepat longsor bisa bergerak?</div>
        <div class="fact-flip-a">Debris flow bisa mencapai 100 km/jam! Bahkan longsoran "lambat" bisa 5–10 meter per menit.</div>
        <div class="fact-flip-hint">Ketuk untuk lihat jawaban 👆</div>
      </div>
      <div class="fact-flip" onclick="revealFact(this)">
        <div class="fact-flip-icon">🌧️</div>
        <div class="fact-flip-q">Berapa curah hujan yang memicu longsor?</div>
        <div class="fact-flip-a">Hujan ≥70 mm/hari atau ≥2.500 mm/tahun dapat memicu longsor di daerah lereng rawan.</div>
        <div class="fact-flip-hint">Ketuk untuk lihat jawaban 👆</div>
      </div>
      <div class="fact-flip" onclick="revealFact(this)">
        <div class="fact-flip-icon">🌳</div>
        <div class="fact-flip-q">Pohon bisa mencegah longsor?</div>
        <div class="fact-flip-a">Ya! Akar pohon besar dapat menembus tanah hingga 5 meter, mengikat dan memperkuat struktur lereng secara signifikan.</div>
        <div class="fact-flip-hint">Ketuk untuk lihat jawaban 👆</div>
      </div>
    </div>
  </div>`},
  
  'longsor-penyebab':{judul:'🌧️ Penyebab Longsor',html:`<div class="detail-section pb-nav">
    <h2>Faktor Alam</h2>
    <ul>
      <li><strong>Curah hujan tinggi</strong> dalam waktu lama yang meresap ke dalam tanah hingga jenuh</li>
      <li><strong>Kemiringan lereng curam</strong> (lebih dari 30 derajat) yang meningkatkan gaya gravitasi</li>
      <li><strong>Jenis tanah yang rentan</strong> seperti lempung, pasir, dan tanah vulkanik yang mudah jenuh air</li>
      <li><strong>Gempa bumi</strong> yang mengguncang dan melemahkan struktur tanah di lereng</li>
      <li><strong>Aliran sungai</strong> yang mengikis dan menggerus bagian bawah lereng (undercutting)</li>
      <li><strong>Letusan gunung berapi</strong> yang melemahkan material lereng dengan abu dan lahar</li>
    </ul>
    <div class="info-box kuning">🌧️ <strong>Di Pacitan:</strong> Curah hujan tahunan rata-rata mencapai 2.000–3.000 mm, dengan puncak musim hujan Oktober–April. Curah hujan inilah pemicu utama longsor di Pacitan.</div>
    <h2>Faktor Manusia</h2>
    <ul>
      <li><strong>Penebangan hutan liar</strong> (illegal logging) di daerah lereng yang menghilangkan vegetasi pengikat tanah</li>
      <li><strong>Pembangunan sembarangan</strong> di kawasan lereng tanpa memperhatikan daya dukung tanah</li>
      <li><strong>Pertanian tanpa terasering</strong> di lereng yang mempercepat erosi dan aliran permukaan</li>
      <li><strong>Penggalian tanah</strong> di bagian bawah lereng untuk bangunan atau tambang</li>
      <li><strong>Saluran irigasi bocor</strong> yang menambah beban air pada tanah lereng</li>
      <li><strong>Timbunan sampah</strong> di lereng yang menambah beban dan menghalangi drainase alami</li>
      <li><strong>Getaran dari kendaraan berat</strong> atau sprengsel yang melewati lereng tidak stabil</li>
    </ul>
    <h2>Interaksi Faktor</h2>
    <p>Longsor paling berbahaya terjadi ketika <strong>faktor alam dan manusia bergabung</strong>. Contohnya: hutan yang sudah gundul (faktor manusia) ditambah curah hujan ekstrem (faktor alam), kombinasi ini melipatgandakan risiko longsor secara drastis.</p>
    <div class="info-box biru">💡 <strong>Fakta:</strong> Penelitian BNPB menunjukkan bahwa 60-70% longsor di Indonesia diperparah oleh aktivitas manusia, terutama deforestasi dan perubahan penggunaan lahan.</div>
  </div>`},
  
  'longsor-dampak':{judul:'💥 Dampak Longsor',html:`<div class="detail-section pb-nav">
    <h2>Dampak terhadap Manusia</h2>
    <ul>
      <li>Korban jiwa dan luka-luka akibat tertimpa material longsor</li>
      <li>Kehilangan tempat tinggal dan seluruh harta benda</li>
      <li>Gangguan psikologis (trauma, PTSD) pada korban dan masyarakat sekitar</li>
      <li>Terganggunya aktivitas sehari-hari, sekolah, dan pekerjaan</li>
      <li>Kehilangan mata pencaharian bagi petani dan peternak</li>
    </ul>
    <div class="info-box merah">⚠️ <strong>Data BNPB:</strong> Longsor adalah salah satu bencana alam dengan jumlah korban jiwa terbanyak di Indonesia. Rata-rata 200–500 orang meninggal akibat longsor setiap tahunnya.</div>
    <h2>Dampak terhadap Lingkungan</h2>
    <ul>
      <li>Kerusakan lahan pertanian, perkebunan, dan hutan yang susah dipulihkan</li>
      <li>Pendangkalan dan pencemaran sungai akibat material longsor</li>
      <li>Kerusakan ekosistem hutan beserta habitat satwa liar</li>
      <li>Perubahan morfologi lereng yang permanen</li>
      <li>Erosi tanah subur yang menyebabkan lahan menjadi tandus</li>
    </ul>
    <h2>Dampak terhadap Fasilitas Umum</h2>
    <ul>
      <li>Kerusakan jalan dan jembatan yang memutus akses transportasi</li>
      <li>Terganggunya jaringan listrik, air bersih, dan telekomunikasi</li>
      <li>Kerusakan fasilitas pendidikan, kesehatan, dan peribadatan</li>
      <li>Kerugian ekonomi yang sangat besar bagi daerah terdampak</li>
    </ul>
    <h2>Dampak Jangka Panjang</h2>
    <p>Selain dampak langsung, longsor juga meninggalkan dampak jangka panjang berupa penurunan kualitas tanah, risiko banjir di musim hujan akibat perubahan drainase alami, trauma psikologis yang berkepanjangan, dan kemiskinan akibat hilangnya aset masyarakat.</p>
  </div>`},
  
  'longsor-tanda':{judul:'🔍 Tanda-Tanda Longsor',html:`<div class="detail-section pb-nav">
    <div class="info-box merah">🚨 <strong>PENTING!</strong> Mengenali tanda-tanda longsor bisa menyelamatkan nyawa. Pelajari dan ingat tanda-tanda berikut dengan baik!</div>
    <h2>Tanda-Tanda Fisik di Sekitar Lereng</h2>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--merah)"><span>🔴</span> Retakan di Tanah <span class="acc-chevron">▼</span></div>
      <div class="accordion-body show"><p>Munculnya retakan baru atau melebarnya retakan lama di tanah sekitar lereng. Retakan berbentuk melengkung atau sejajar tepi lereng adalah tanda sangat bahaya!</p><p>Lakukan: Segera laporkan ke kepala desa dan BPBD, jangan mendekati area retakan.</p></div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--merah)"><span>🔴</span> Pohon atau Tiang Miring <span class="acc-chevron">▼</span></div>
      <div class="accordion-body"><p>Pohon, tiang listrik, atau pagar yang tiba-tiba menjadi miring atau condong, terutama jika sebelumnya tegak mengindikasikan tanah di sekitarnya sedang bergerak.</p></div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--merah)"><span>🔴</span> Suara Gemuruh atau Derik <span class="acc-chevron">▼</span></div>
      <div class="accordion-body"><p>Suara gemuruh, derik kayu, atau bunyi batu-batuan yang saling bergesekan dari dalam lereng atau bukit. Tanda ini sangat serius, segera evakuasi!</p></div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--merah)"><span>🔴</span> Air Sumur Tiba-tiba Keruh <span class="acc-chevron">▼</span></div>
      <div class="accordion-body"><p>Air sumur atau mata air yang tiba-tiba menjadi keruh atau berlumpur tanpa sebab jelas. Ini bisa mengindikasikan pergerakan tanah di sekitar sumber air.</p></div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--merah)"><span>🔴</span> Mata Air Baru di Lereng <span class="acc-chevron">▼</span></div>
      <div class="accordion-body"><p>Munculnya mata air, rembesan, atau basahnya area lereng yang sebelumnya kering. Ini tanda tanah sudah jenuh air dan tidak stabil.</p></div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--kuning)"><span>🟡</span> Hujan Lebat Berkepanjangan <span class="acc-chevron">▼</span></div>
      <div class="accordion-body"><p>Hujan lebat yang berlangsung lebih dari 2-3 jam secara terus-menerus, terutama di daerah lereng. Tingkatkan kewaspadaan dan pantau kondisi lereng sekitar.</p></div>
    </div>
    <h2>Apa yang Harus Dilakukan?</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot" style="background:#FAEEDA">👀</div>
        <div class="timeline-content"><h3>Amati</h3><p>Perhatikan tanda-tanda fisik di sekitar lereng, terutama saat hujan deras</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot" style="background:#FCEBEB">📢</div>
        <div class="timeline-content"><h3>Laporkan</h3><p>Segera laporkan ke kepala desa, BPBD Pacitan (0357) 886164, atau BNPB Jawa Timur 0318550222</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot" style="background:var(--merah-muda)">🏃</div>
        <div class="timeline-content"><h3>Evakuasi</h3><p>Jika tanda sudah sangat jelas, segera evakuasi tanpa menunggu perintah</p></div>
      </div>
    </div>
  </div>`},
  
  'longsor-data':{judul:'📊 Data & Fakta Longsor',html:`<div class="detail-section pb-nav">
    <h2>Fakta Longsor di Indonesia</h2>
    <div class="info-box biru">📊 Indonesia menempati urutan ke-3 dunia untuk kejadian longsor terbanyak, setelah China dan Brazil.</div>
    <ul>
      <li>Rata-rata <strong>2.000–4.000 kejadian longsor per tahun</strong> di seluruh Indonesia</li>
      <li>Sekitar <strong>40% wilayah Indonesia</strong> berada di zona rawan longsor</li>
      <li>Longsor terjadi di <strong>34 provinsi</strong> di Indonesia</li>
      <li>Provinsi Jawa Barat, Jawa Tengah, dan Jawa Timur adalah yang paling sering terdampak</li>
      <li>Musim hujan (Oktober–April) adalah periode risiko tertinggi</li>
    </ul>
    <h2>Fakta Longsor di Pacitan</h2>
    <ul>
      <li>Pacitan termasuk dalam <strong>10 kabupaten paling rawan bencana</strong> di Jawa Timur</li>
      <li>Sekitar <strong>70% wilayah Pacitan</strong> merupakan perbukitan dan pegunungan</li>
      <li>Kecamatan paling rawan: Pringkuku, Donorojo, Punung, Nawangan, dan Arjosari</li>
      <li>Longsor paling sering terjadi di <strong>Januari–Maret</strong> (puncak musim hujan)</li>
      <li>Jenis longsor terbanyak: longsoran translasi dan aliran bahan rombakan</li>
    </ul>
    <h2>Kerugian Akibat Longsor</h2>
    <p>Selain korban jiwa, longsor menyebabkan kerugian ekonomi yang sangat besar:</p>
    <ul>
      <li>Kerusakan infrastruktur jalan dan jembatan senilai miliaran rupiah</li>
      <li>Kehilangan lahan pertanian produktif seluas hektaran</li>
      <li>Biaya relokasi dan rekonstruksi permukiman warga terdampak</li>
      <li>Penurunan aktivitas ekonomi daerah selama pemulihan pasca bencana</li>
    </ul>
    <div class="info-box hijau">💡 <strong>Kabar baik:</strong> Dengan pendidikan dan kesiapsiagaan yang baik, risiko korban jiwa akibat longsor dapat dikurangi hingga 70%!</div>
  </div>`},
  
  'mit-sebelum':{judul:'🔍 Mitigasi Sebelum Longsor',html:`<div class="detail-section pb-nav">
    <span class="fase-badge" style="background:#E1F5EE;color:#0F6E56">Fase: Pra-Bencana</span>
    <h2>Upaya Pencegahan Struktural</h2>
    <p>Pencegahan struktural adalah upaya fisik untuk mengurangi risiko longsor melalui pembangunan dan rekayasa teknik.</p>
    <ul>
      <li><strong>Penanaman pohon berakar kuat</strong> (mahoni, jati, akasia, bambu) di lereng untuk mengikat tanah</li>
      <li><strong>Pembuatan terasering</strong> pada lahan pertanian di lereng untuk memperlambat aliran air</li>
      <li><strong>Pembangunan drainase yang baik</strong> agar air hujan mengalir terkendali, tidak menjenuhkan lereng</li>
      <li><strong>Pemasangan tembok penahan</strong> di bagian bawah lereng yang rawan runtuh</li>
      <li><strong>Tidak membangun di tepi jurang</strong> atau lereng dengan kemiringan lebih dari 30 derajat</li>
    </ul>
    <div class="info-box hijau">🌱 <strong>Penghijauan adalah investasi terbaik!</strong> Satu pohon besar dengan akar kuat dapat menahan tekanan tanah setara beberapa ton. Mulai tanam pohon hari ini di sekitar rumahmu.</div>
    <h2>Upaya Kesiapsiagaan</h2>
    <ul>
      <li>Kenali dan hafalkan tanda-tanda awal longsor di sekitar tempat tinggal</li>
      <li>Pelajari jalur evakuasi dan tentukan titik kumpul keluarga yang aman</li>
      <li>Siapkan tas darurat dengan isi yang lengkap (lihat menu Tips Aman)</li>
      <li>Ikuti pelatihan simulasi bencana yang diselenggarakan BPBD Pacitan</li>
      <li>Simpan nomor darurat: BPBD Pacitan (0357) 886164 dan BNPB Jawa Timur 0318550222</li>
      <li>Pantau informasi cuaca dan peringatan dini dari BMKG secara rutin</li>
      <li>Follow Instagram @bpbd_pacitan untuk update informasi kebencanaan</li>
    </ul>
    <h2>Peran Aktif dalam Komunitas</h2>
    <ul>
      <li>Ikut aktif dalam program Desa Tangguh Bencana (Destana)</li>
      <li>Bantu sosialisasi tanda-tanda longsor kepada tetangga dan komunitas</li>
      <li>Laporkan tanda-tanda bahaya longsor yang ditemukan kepada BPBD</li>
      <li>Dukung program penghijauan di lingkungan sekitar lereng</li>
    </ul>
  </div>`},
  
  'mit-saat':{judul:'🚨 Mitigasi Saat Longsor',html:`<div class="detail-section pb-nav">
    <span class="fase-badge" style="background:#FCEBEB;color:#A32D2D">Fase: Saat Bencana</span>
    <div class="info-box merah">🚨 <strong>PRIORITAS UTAMA: KESELAMATAN JIWA!</strong><br>Jangan buang waktu untuk menyelamatkan barang. Satu menit pertama sangat menentukan keselamatan.</div>
    <h2>Langkah Evakuasi (Urutan Wajib)</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot" style="background:var(--hijau-muda)">1️⃣</div>
        <div class="timeline-content"><h3>Tetap Tenang</h3><p>Jangan panik. Panik menyebabkan keputusan buruk. Tarik napas dalam dan berpikir jernih.</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot" style="background:var(--kuning-muda)">2️⃣</div>
        <div class="timeline-content"><h3>Segera Keluar</h3><p>Tinggalkan bangunan segera jika terdengar suara gemuruh atau merasakan getaran dari lereng.</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot" style="background:var(--merah-muda)">3️⃣</div>
        <div class="timeline-content"><h3>Menjauh ke Tempat Tinggi</h3><p>Lari menuju area yang lebih tinggi, terbuka, dan jauh dari aliran material longsor.</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot" style="background:var(--biru-muda)">4️⃣</div>
        <div class="timeline-content"><h3>Ikuti Jalur Evakuasi</h3><p>Gunakan jalur evakuasi yang sudah direncanakan. Jangan lewati jembatan atau area sungai.</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot" style="background:var(--hijau-muda)">5️⃣</div>
        <div class="timeline-content"><h3>Bantu Orang Lain</h3><p>Bantu lansia, anak-anak, ibu hamil, dan penyandang disabilitas untuk evakuasi bersama.</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot" style="background:var(--kuning-muda)">6️⃣</div>
        <div class="timeline-content"><h3>Hubungi Pihak Berwenang</h3><p>Setelah aman, segera hubungi BPBD Pacitan (0357) 886164 atau BNPB Jawa Timur 0318550222.</p></div>
      </div>
    </div>
    <h2>Yang Harus DIHINDARI</h2>
    <ul>
      <li>❌ Jangan kembali ke dalam rumah untuk mengambil barang apapun</li>
      <li>❌ Jangan menyeberangi jembatan atau sungai yang meluap</li>
      <li>❌ Jangan mendekati area longsor untuk melihat atau dokumentasi</li>
      <li>❌ Jangan berlindung di bawah pohon besar atau tiang listrik</li>
      <li>❌ Jangan lewati jalur yang melewati lereng atau tepi jurang</li>
    </ul>
    <h2>Jika Tertimbun Material Longsor</h2>
    <ul>
      <li>Lindungi kepala dan wajah dengan kedua tangan</li>
      <li>Ciptakan ruang di depan wajah untuk bernapas dengan mendorong tanah</li>
      <li>Berteriak keras atau pukul benda keras untuk memberi sinyal posisimu</li>
      <li>Hemat energi dan tunggu tim penyelamat</li>
    </ul>
  </div>`},
  
  'mit-sesudah':{judul:'🔄 Mitigasi Sesudah Longsor',html:`<div class="detail-section pb-nav">
    <span class="fase-badge" style="background:#E6F1FB;color:#185FA5">Fase: Pasca-Bencana</span>
    <div class="info-box biru">⚠️ <strong>Waspadai Longsor Susulan!</strong> Area yang baru longsor masih sangat rawan beberapa hari ke depan. Jangan kembali sebelum dinyatakan aman oleh BPBD.</div>
    <h2>Langkah Pertama (0-24 jam)</h2>
    <ul>
      <li>Tetap di tempat evakuasi hingga ada pernyataan aman dari pihak berwenang</li>
      <li>Jangan kembali ke rumah sebelum mendapat izin dari BPBD atau aparat desa</li>
      <li>Laporkan korban dan kerusakan kepada BPBD atau aparat desa segera</li>
      <li>Berikan pertolongan pertama kepada korban yang membutuhkan</li>
      <li>Catat dan dokumentasikan kerusakan untuk keperluan bantuan</li>
    </ul>
    <h2>Fase Pemulihan (1-30 hari)</h2>
    <ul>
      <li>Bergotong royong membersihkan lumpur dan material longsor bersama warga</li>
      <li>Periksa kondisi struktural bangunan oleh ahli sebelum kembali dihuni</li>
      <li>Dapatkan layanan psikososial/konseling jika mengalami trauma psikologis</li>
      <li>Ikuti program rehabilitasi dan rekonstruksi dari pemerintah dan BPBD</li>
      <li>Perbaiki saluran drainase yang rusak agar tidak memperparah kondisi tanah</li>
    </ul>
    <h2>Fase Rekonstruksi dan Mitigasi Ulang (1-12 bulan)</h2>
    <ul>
      <li>Lakukan reboisasi (penghijauan ulang) di area yang terdampak longsor</li>
      <li>Perbaiki atau bangun kembali infrastruktur yang rusak secara lebih tahan bencana</li>
      <li>Evaluasi dan perbarui jalur evakuasi berdasarkan pengalaman bencana yang terjadi</li>
      <li>Ikuti program pemulihan ekonomi untuk membantu masyarakat terdampak</li>
      <li>Laporkan ke BPBD jika ada tanda-tanda longsor baru di area yang berbeda</li>
    </ul>
  </div>`},
  
  'mit-tasbencana':{judul:'🎒 Tas Siaga Bencana',html:`<div class="detail-section pb-nav">
    <div class="info-box kuning">🎒 <strong>Tas Siaga Bencana (Go-Bag)</strong> adalah tas yang selalu siap dibawa saat evakuasi darurat. Siapkan sekarang, sebelum bencana terjadi!</div>
    <h2>Isi Wajib Tas Siaga</h2>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:#E24B4A"><span>📄</span> Dokumen Penting <span class="acc-chevron">▼</span></div>
      <div class="accordion-body show"><ul><li>KTP/SIM asli dan fotokopi dalam plastik kedap air</li><li>Kartu Keluarga (KK) asli dan fotokopi</li><li>Akta Kelahiran (terutama anak-anak)</li><li>BPJS Kesehatan / KIS dan kartu asuransi lain</li><li>Buku rekening bank (fotokopi)</li><li>Sertifikat tanah (fotokopi dalam plastik)</li></ul></div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:#E24B4A"><span>💊</span> Obat-obatan & P3K <span class="acc-chevron">▼</span></div>
      <div class="accordion-body"><ul><li>Obat-obatan rutin (jika ada penyakit kronis)</li><li>Paracetamol / Ibuprofen (pereda demam & nyeri)</li><li>Oralit (pencegahan dehidrasi)</li><li>Perban dan pembalut luka</li><li>Antiseptik (betadine, alkohol 70%)</li><li>Plester dan gunting kecil</li><li>Obat tetes mata</li></ul></div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:#378ADD"><span>💧</span> Air & Makanan <span class="acc-chevron">▼</span></div>
      <div class="accordion-body"><ul><li>Air minum dalam botol: minimal 3 liter/orang untuk 3 hari</li><li>Tablet purifikasi air sebagai cadangan</li><li>Roti kering, biskuit, atau crackers</li><li>Makanan kaleng ringan dengan sendok plastik</li><li>Makanan khusus bayi jika ada (susu formula, bubur bayi)</li></ul></div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:#EF9F27"><span>🔦</span> Peralatan Darurat <span class="acc-chevron">▼</span></div>
      <div class="accordion-body"><ul><li>Senter + baterai cadangan (minimal 2 set)</li><li>Peluit / pluit untuk sinyal darurat</li><li>Korek api atau lighter dalam wadah kedap air</li><li>Tali nilon minimal 5 meter</li><li>Poncho / jas hujan lipat</li><li>Selimut darurat (emergency blanket)</li><li>Pisau lipat kecil serbaguna</li></ul></div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:#9F77DD"><span>📱</span> Komunikasi & Informasi <span class="acc-chevron">▼</span></div>
      <div class="accordion-body"><ul><li>Handphone yang selalu terisi daya</li><li>Power bank dengan kapasitas minimal 10.000 mAh</li><li>Charger handphone</li><li>Catatan nomor penting: BPBD (0357) 886164, BNPB Jawa Timur 0318550222, keluarga, dokter</li><li>Peta jalur evakuasi yang dicetak (jangan hanya di HP)</li><li>Radio baterai kecil untuk informasi darurat</li></ul></div>
    </div>
    <h2>Tips Penyimpanan Tas Siaga</h2>
    <ul>
      <li>Simpan di tempat yang mudah dijangkau, dekat pintu keluar</li>
      <li>Pastikan semua anggota keluarga tahu lokasi tas siaga</li>
      <li>Periksa dan perbarui isi tas setiap 6 bulan sekali</li>
      <li>Ganti makanan dan obat yang hampir kadaluarsa</li>
      <li>Gunakan tas yang kuat, tahan air, dan nyaman dipanggul</li>
    </ul>
  </div>`},
  
  'mit-jalur':{judul:'🗺️ Jalur Evakuasi',html:`<div class="detail-section pb-nav">
    <div class="info-box hijau">🗺️ <strong>Rencana Evakuasi Keluarga</strong> adalah dokumen penting yang wajib dimiliki setiap keluarga yang tinggal di daerah rawan bencana.</div>
    <h2>Langkah Membuat Rencana Evakuasi</h2>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--hijau)"><span>1️⃣</span> Kenali Bahaya di Sekitar Rumah <span class="acc-chevron">▼</span></div>
      <div class="accordion-body show"><p>Identifikasi potensi bahaya: lereng curam di dekat rumah, sungai yang bisa meluap, pohon besar yang bisa tumbang, dan jalur material longsor yang mungkin terjadi.</p></div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--hijau)"><span>2️⃣</span> Tentukan Titik Kumpul <span class="acc-chevron">▼</span></div>
      <div class="accordion-body"><p>Pilih minimal 2 titik kumpul keluarga: satu di dekat rumah (halaman depan) dan satu di lokasi yang lebih jauh dan aman (balai desa, sekolah, atau tempat tinggi yang tidak terancam longsor).</p></div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--hijau)"><span>3️⃣</span> Tentukan Jalur Evakuasi <span class="acc-chevron">▼</span></div>
      <div class="accordion-body"><p>Tentukan minimal 2 jalur evakuasi yang berbeda. Jalur utama dan jalur alternatif jika jalur utama terhalang. Pastikan jalur menjauh dari lereng, sungai, dan pohon besar.</p></div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--hijau)"><span>4️⃣</span> Tetapkan Peran Anggota Keluarga <span class="acc-chevron">▼</span></div>
      <div class="accordion-body"><p>Siapa yang bertanggung jawab membawa tas darurat? Siapa yang menggendong balita? Siapa yang membantu lansia? Tentukan peran masing-masing agar evakuasi berjalan tertib dan cepat.</p></div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)" style="color:var(--hijau)"><span>5️⃣</span> Latihan Rutin <span class="acc-chevron">▼</span></div>
      <div class="accordion-body"><p>Lakukan simulasi evakuasi keluarga minimal 2 kali setahun, terutama menjelang musim hujan. Simulasi membuat anggota keluarga terlatih bertindak cepat saat bencana sungguhan terjadi.</p></div>
    </div>
    <h2>Nomor Penting yang Harus Tersimpan</h2>
    <div style="background:var(--bpbd-muda);border-radius:14px;padding:1rem;border:1.5px solid var(--bpbd)">
      <div style="font-size:0.85rem;font-weight:700;color:var(--bpbd-tua);margin-bottom:0.8rem">📞 Nomor Darurat:</div>
      <div style="font-size:0.9rem;color:var(--bpbd-tua);line-height:2">
        🏛️ BPBD Pacitan: <strong>(0357) 886164</strong><br>
        🆘 BNPB Jawa Timur: <strong>0318550222</strong><br>
        🚑 Ambulans: <strong>118</strong><br>
        🚒 Pemadam Kebakaran: <strong>113</strong><br>
        👮 Polisi: <strong>110</strong>
      </div>
    </div>
  </div>`}
};

function bukaDetail(id){
  const d=DETAIL[id];if(!d)return;
  document.getElementById('konten-judul').textContent=d.judul;
  document.getElementById('konten-body').innerHTML=d.html;
  document.getElementById('konten-body').scrollTop=0;
}

function revealFact(el){
  el.classList.toggle('revealed');
  showToast(el.classList.contains('revealed')?'💡 Fakta terungkap!':'👆 Ketuk lagi untuk sembunyikan');
}
