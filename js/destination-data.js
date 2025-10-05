// Data Destination
const destinations = [
  {
    id: "bali",
    name: "Bali",
    location: "Pulau Bali",
    region: "Bali",
    type: "Cultural",
    img: "assets/bali.jpg",
    desc: "Pulau Dewata dengan pura, pantai, dan budaya Hindu yang unik.",
    history: "Bali punya jejak panjang sejak abad ke-8 saat Hindu masuk lewat Jawa, membentuk dasar agama dan adat yang masih kuat hingga kini. Pura-pura megah seperti Besakih jadi simbol spiritual sekaligus pusat kegiatan masyarakat. Pada masa Majapahit, Bali jadi tempat pelarian bangsawan Jawa sehingga budaya Hindu makin kokoh di sini. Abad ke-16, pengaruh Eropa mulai masuk lewat kolonial Belanda yang menjadikan Bali sebagai pusat wisata eksotis. Seiring berjalannya waktu, Bali tak hanya bertahan dengan tradisi, tapi juga berkembang sebagai ikon pariwisata dunia. Seni tari, ukiran, hingga arsitektur tradisional tetap hidup meskipun modernisasi terus terjadi. Pariwisata internasional makin kencang setelah 1920-an saat wisatawan Barat kagum dengan keindahan dan budaya unik Bali. Setelah kemerdekaan, Bali semakin kokoh menjadi destinasi utama di Indonesia. Hingga kini, pulau ini dikenal sebagai Pulau Dewata dengan keseimbangan antara spiritualitas, seni, dan alam.",
    activities: [
      "Mengunjungi Pura Besakih dan Tanah Lot",
      "Menonton Tari Kecak di Uluwatu",
      "Berselancar di Pantai Kuta",
      "Menjelajahi Tegallalang Rice Terrace"
    ],
    foods: ["Ayam Betutu", "Babi Guling", "Lawar"],
    stories: "Cerita rakyat Bali kental dengan mitologi, seperti kisah Barong melawan Rangda yang melambangkan keseimbangan hidup. Tradisi Ngaben, yaitu pembakaran jenazah, dianggap sebagai jalan roh menuju kebebasan. Tari Kecak lahir dari kisah Ramayana dan kini jadi tontonan populer wisatawan. Selain itu, masyarakat Bali masih memegang teguh konsep Tri Hita Karana, keseimbangan antara Tuhan, manusia, dan alam. Budaya ini bikin Bali tetap hidup dan relevan meski arus globalisasi deras.",
    gallery: [
      { img: "assets/bali-pura.jpg", caption: "Pura Besakih" },
      { img: "assets/ayam-bali.jpg", caption: "Ayam Betutu khas Bali" },
      { img: "assets/bali-dance.jpg", caption: "Tari Kecak di Uluwatu" }
    ]
  },
  {
    id: "rajaampat",
    name: "Raja Ampat",
    location: "Papua Barat",
    region: "Papua",
    type: "Island",
    img: "assets/rajaampat.jpg",
    desc: "Surga bawah laut dengan keanekaragaman hayati tertinggi di dunia.",
    history: "Raja Ampat punya sejarah panjang yang erat dengan Kesultanan Tidore sejak abad ke-15, di mana wilayah ini dulunya termasuk dalam kekuasaan mereka. Nama 'Raja Ampat' berasal dari legenda empat raja yang memerintah pulau utama: Waigeo, Batanta, Salawati, dan Misool. Sejak dahulu, masyarakat lokal sudah hidup dari laut, jadi nelayan dan pelaut ulung yang terbiasa mengarungi Samudra Pasifik. Pada masa kolonial, Belanda masuk untuk menguasai jalur perdagangan rempah-rempah di Papua Barat. Meski begitu, kehidupan adat masyarakat tetap berjalan kuat dengan tradisi turun-temurun. Setelah kemerdekaan Indonesia, Raja Ampat resmi masuk ke dalam Provinsi Papua Barat. Baru pada awal 2000-an, Raja Ampat mulai dikenal dunia berkat penelitian ilmuwan tentang kekayaan biota lautnya. Kawasan ini kemudian ditetapkan sebagai salah satu pusat keanekaragaman laut terbesar di dunia. Sejarah modern Raja Ampat lebih banyak dikaitkan dengan konservasi dan pariwisata berkelanjutan. Kini, Raja Ampat menjadi simbol keindahan laut Indonesia sekaligus contoh sukses menjaga alam tanpa kehilangan budaya.",
    activities: [
      "Snorkeling dan diving di Misool",
      "Mendaki Wayag untuk panorama pulau",
      "Birdwatching burung Cendrawasih"
    ],
    foods: ["Papeda", "Ikan kuah kuning"],
    stories: "Legenda rakyat menyebutkan empat telur naga yang menetas jadi raja di pulau utama, inilah asal nama Raja Ampat. Masyarakat setempat percaya laut adalah ibu yang memberi kehidupan. Tarian tradisional Suling Tambur masih dimainkan untuk menyambut tamu dan perayaan. Ada cerita tentang hiu berjalan, spesies unik yang cuma ada di Raja Ampat. Hingga kini, masyarakat hidup harmonis dengan laut, menjaga warisan untuk generasi berikutnya.",
    gallery: [
      { img: "assets/rajaampat-diving.jpg", caption: "Diving di perairan Raja Ampat" },
      { img: "assets/papeda.jpg", caption: "Papeda" },
      { img: "assets/rajaampat-underwater.jpg", caption: "Keindahan laut Raja Ampat" }
    ]
  },
  {
    id: "komodo",
    name: "Taman Nasional Komodo",
    location: "Nusa Tenggara Timur",
    region: "NTT",
    type: "Island",
    img: "assets/komodo.jpg",
    desc: "Habitat asli kadal purba Komodo dengan panorama pulau menawan.",
    history: "Taman Nasional Komodo berdiri tahun 1980 untuk melindungi habitat komodo, reptil purba yang cuma ada di Indonesia. Sebelum itu, sejak awal abad ke-20, komodo sudah menarik perhatian dunia setelah ekspedisi Belanda menemukan spesies ini. Pulau Komodo, Rinca, dan Padar jadi kawasan utama konservasi, sementara pulau kecil lain ikut dilindungi. Tahun 1991, UNESCO menetapkannya sebagai Situs Warisan Dunia karena nilai biologisnya yang luar biasa. Sejak dulu masyarakat lokal sudah hidup berdampingan dengan komodo, bahkan punya legenda tentang naga raksasa saudara manusia. Di era kolonial, komodo sempat diburu dan populasinya menurun drastis. Setelah Indonesia merdeka, perlindungan semakin diperkuat lewat aturan ketat. Pada awal 2000-an, Taman Nasional Komodo masuk daftar New 7 Wonders of Nature. Wisatawan mulai berdatangan untuk melihat komodo, pantai, dan bawah laut yang eksotis. Kini taman nasional ini jadi ikon konservasi global sekaligus destinasi wisata kelas dunia. Sejarahnya menggambarkan bagaimana satwa purba bisa bertahan hingga zaman modern berkat usaha manusia.",
    activities: [
      "Trekking di Pulau Komodo",
      "Mengunjungi Pantai Pink",
      "Menyelam di perairan sekitar Pulau Komodo"
    ],
    foods: ["Se'i sapi", "Jagung bose"],
    stories: "Legenda lokal bercerita tentang Putri Naga yang melahirkan dua anak: seorang manusia dan seekor komodo, menandakan ikatan sakral manusia dengan reptil ini. Warga percaya komodo adalah 'saudara tua' yang harus dihormati. Setiap ritual adat, mereka selalu menyertakan simbol naga sebagai perlindungan. Wisatawan sering kagum dengan kisah mistis ini yang bikin pengalaman makin berkesan. Sampai sekarang, legenda itu masih hidup di tengah masyarakat sekitar Komodo.",
    gallery: [
      { img: "assets/komodo-dragon.jpg", caption: "Komodo di habitat aslinya" },
      { img: "assets/komodo-pink.jpg", caption: "Pantai Pink yang eksotis" },
      { img: "assets/komodo-island.jpg", caption: "Pemandangan Pulau Komodo" }
    ]
  },
  {
    id: "toba",
    name: "Danau Toba",
    location: "Sumatera Utara",
    region: "Sumatera",
    type: "Lake",
    img: "assets/toba.jpg",
    desc: "Danau vulkanik terbesar di dunia dengan Pulau Samosir di tengahnya.",
    history: "Danau Toba terbentuk sekitar 74.000 tahun lalu akibat letusan supervulkanik terbesar dalam sejarah bumi. Letusan ini menciptakan kaldera raksasa yang kemudian terisi air dan membentuk danau vulkanik. Sejak ribuan tahun lalu, kawasan Toba dihuni oleh suku Batak dengan budaya yang kaya dan unik. Pulau Samosir di tengah danau jadi pusat kehidupan masyarakat Batak. Pada masa lalu, kerajaan-kerajaan kecil Batak berkembang dengan adat yang sangat kuat. Saat era kolonial Belanda, kawasan Toba mulai diperkenalkan ke dunia luar. Kekristenan masuk melalui misi Jerman pada abad ke-19, meninggalkan pengaruh besar hingga kini. Danau Toba juga jadi saksi perjuangan rakyat Batak melawan penjajahan. Setelah Indonesia merdeka, Toba berkembang sebagai kawasan wisata dan budaya. Kini, Danau Toba masuk dalam daftar destinasi super prioritas Indonesia yang dipromosikan secara global. Sejarahnya mencerminkan perpaduan kekuatan alam dan identitas budaya Batak yang bertahan sepanjang zaman.",
    activities: [
      "Menyeberang ke Pulau Samosir",
      "Menonton pertunjukan Sigale-gale",
      "Berendam di air panas Pangururan"
    ],
    foods: ["Arsik ikan mas", "Naniura"],
    stories: "Legenda Danau Toba menceritakan seorang pemuda menikahi putri jelmaan ikan. Dari pernikahan itu lahirlah seorang anak yang akhirnya membuka rahasia asal ibunya. Murka sang ibu membuat air meluap dan menenggelamkan lembah, membentuk Danau Toba. Pulau Samosir dipercaya sebagai tempat asal keturunan mereka. Kisah ini jadi dongeng turun-temurun yang masih hidup di hati masyarakat Batak.",
    gallery: [
      { img: "assets/toba-samosir.jpg", caption: "Pulau Samosir dari ketinggian" },
      { img: "assets/toba-house.jpg", caption: "Rumah adat Batak" },
      { img: "assets/toba-sigale.jpg", caption: "Pertunjukan Sigale-gale" }
    ]
  },
  {
    id: "bunaken",
    name: "Bunaken",
    location: "Sulawesi Utara",
    region: "Sulawesi",
    type: "Beach",
    img: "assets/bunaken.jpg",
    desc: "Taman laut tropis dengan terumbu karang spektakuler.",
    history: "Bunaken mulai dikenal sejak abad ke-19 ketika Belanda menjadikan Manado sebagai pusat perdagangan di Sulawesi Utara. Masyarakat lokal Minahasa sejak dulu hidup dari laut, jadi nelayan sekaligus pelaut yang tangguh. Bunaken sendiri berkembang sebagai perkampungan kecil dengan budaya pesisir yang kental. Pada 1975, kawasan Bunaken mulai diperhatikan karena keindahan terumbu karangnya yang luar biasa. Tahun 1991, pemerintah Indonesia meresmikan Taman Nasional Bunaken untuk melindungi ekosistem lautnya. Kawasan ini punya lebih dari 390 spesies terumbu karang dan ratusan jenis ikan tropis. Sejak itu, Bunaken jadi salah satu destinasi diving favorit dunia. Konservasi laut terus digalakkan agar keindahan bawah lautnya tetap terjaga. Masyarakat sekitar juga diajak terlibat aktif dalam menjaga lingkungan laut. Kini, Bunaken jadi simbol kekayaan laut Indonesia sekaligus contoh pariwisata berkelanjutan. Sejarahnya merekam transformasi dari desa nelayan biasa menjadi destinasi kelas dunia.",
    activities: [
      "Diving di spot Lekuan",
      "Snorkeling di Siladen",
      "Menikmati sunset di Manado Tua"
    ],
    foods: ["Tinutuan (Bubur Manado)", "Cakalang fufu"],
    stories: "Legenda setempat menyebut Bunaken berasal dari kata 'Wunakeng' yang berarti tempat tinggal. Ada juga cerita rakyat tentang seorang putri laut yang menjaga karang Bunaken. Warga percaya laut adalah sumber kehidupan yang harus dihormati. Setiap upacara adat, masyarakat Minahasa selalu menyertakan doa untuk laut. Kisah-kisah ini masih diceritakan ke anak-anak sebagai pengingat untuk menjaga alam.",
    gallery: [
      { img: "assets/divingspot-lekuan.jpg", caption: "Diving spot Lekuan" },
      { img: "assets/bubur-manado.jpg", caption: "Tinutuan (Bubur Manado)" },
      { img: "assets/tari-kabasaran.jpg", caption: "Tari Kabasaran" }
    ]
  },
  {
    id: "derawan",
    name: "Pulau Derawan",
    location: "Kalimantan Timur",
    region: "Kalimantan",
    type: "Island",
    img: "assets/derawan.jpg",
    desc: "Pulau tropis dengan pantai pasir putih dan penyu laut.",
    history: "Kepulauan Derawan di Kalimantan Timur sejak lama dihuni masyarakat pesisir yang hidup dari laut. Nama Derawan sendiri berasal dari cerita lisan lokal yang diwariskan turun-temurun. Pada masa lalu, kepulauan ini jadi jalur penting bagi pedagang Bugis dan Dayak dalam berlayar. Perairannya dikenal kaya akan ikan, penyu, dan terumbu karang yang jadi sumber penghidupan. Saat era kolonial Belanda, kawasan ini kurang tersentuh karena dianggap jauh dari pusat perdagangan utama. Namun, kehidupan tradisional masyarakat tetap berjalan dengan adat dan budaya pesisir. Baru pada akhir abad ke-20, keindahan Derawan mulai dikenal wisatawan, terutama karena penyu hijau yang bersarang di pantainya. Tahun 1990-an, kawasan ini masuk dalam daftar konservasi penting karena ekosistem lautnya yang unik. Seiring waktu, Derawan berkembang jadi destinasi diving kelas dunia. Kini, sejarah Derawan ditandai oleh transisi dari desa nelayan sederhana menjadi destinasi wisata bahari terkenal.",
    activities: [
      "Berenang dengan ubur-ubur di Danau Kakaban",
      "Diving bersama pari manta",
      "Menikmati pantai pasir putih"
    ],
    foods: ["Kepiting soka", "Ikan bakar Derawan"],
    stories: "Legenda setempat bercerita tentang seorang putri yang menghilang di laut dan diyakini menjelma jadi penyu penjaga Derawan. Warga percaya penyu adalah simbol keberuntungan dan keseimbangan hidup. Setiap kali penyu bertelur, masyarakat menganggap itu sebagai tanda berkah. Cerita rakyat ini membuat penyu dihormati dan dilindungi hingga sekarang. Kisah tersebut jadi identitas budaya yang memperkuat hubungan manusia dengan laut.",
    gallery: [
      { img: "assets/danau-kakaban.jpg", caption: "Danau Kakaban" },
      { img: "assets/kepiting-soka.jpg", caption: "Kepiting Soka" },
      { img: "assets/tari-igal.jpg", caption: "Tari Dalling dan Igal" }
    ]
  },
  {
    id: "wakatobi",
    name: "Wakatobi",
    location: "Sulawesi Tenggara",
    region: "Sulawesi",
    type: "Beach",
    img: "assets/wakatobi.jpeg",
    desc: "Destinasi diving kelas dunia dengan keanekaragaman karang.",
    history: "Wakatobi adalah singkatan dari empat pulau utama: Wangi-Wangi, Kaledupa, Tomia, dan Binongko. Sejak ratusan tahun lalu, wilayah ini jadi pusat kehidupan masyarakat Bajo yang dikenal sebagai pengembara laut. Mereka hidup berpindah-pindah di atas perahu dan menjadikan laut sebagai rumah sejati. Pada masa Kesultanan Buton, Wakatobi masuk dalam wilayah kekuasaan dan jadi jalur perdagangan penting. Kehidupan adat pesisir tetap terjaga meski pengaruh luar mulai masuk. Tahun 1996, kawasan ini ditetapkan sebagai Taman Nasional Laut karena keanekaragaman hayati yang sangat tinggi. Wakatobi punya lebih dari 750 jenis karang, menjadikannya surga bagi peneliti dan penyelam dunia. Setelah 2000-an, pariwisata berkembang pesat seiring promosi ke mancanegara. Konservasi dan wisata berkelanjutan jadi kunci menjaga keseimbangan alam dan ekonomi warga. Kini, Wakatobi dikenal sebagai salah satu pusat ekowisata laut terbaik dunia. Sejarahnya menggambarkan hubungan erat manusia laut dengan warisan alam yang menakjubkan.",
    activities: [
      "Diving di Tomia",
      "Bersantai di Pulau Hoga",
      "Menjelajahi kehidupan masyarakat Bajo"
    ],
    foods: ["Kasuami", "Parende ikan"],
    stories: "Orang Bajo punya cerita bahwa mereka keturunan manusia laut yang tak bisa jauh dari samudra. Legenda menyebut roh laut selalu melindungi para nelayan dalam pelayaran panjang. Tarian Lariangi dan ritual adat masih dimainkan untuk menghormati laut. Warga percaya karang dan ikan adalah titipan leluhur yang harus dijaga. Kisah-kisah ini bikin Wakatobi bukan cuma indah, tapi juga penuh makna spiritual.",
    gallery: [
      { img: "assets/diving-tomia.jpg", caption: "Diving di Tomia" },
      { img: "assets/kasuami.jpg", caption: "Kasuami" },
      { img: "assets/upacara-wakatobi.jpg", caption: "Acara adat (Bidadari Mandi)" }
    ]
  },
  {
    id: "toraja",
    name: "Tana Toraja",
    location: "Sulawesi Selatan",
    region: "Sulawesi",
    type: "Cultural",
    img: "assets/toraja.jpg",
    desc: "Daerah adat dengan rumah Tongkonan dan upacara pemakaman unik.",
    history: "Toraja di Sulawesi Selatan punya sejarah panjang yang kental dengan tradisi adat dan spiritualitas. Dulu masyarakat Toraja hidup di daerah pegunungan dengan sistem sosial yang ketat. Rumah adat mereka, Tongkonan, udah jadi simbol budaya sejak ratusan tahun lalu. Kepercayaan animisme mereka kemudian bercampur dengan pengaruh Kristen yang dibawa misionaris Belanda. Upacara pemakaman jadi pusat budaya Toraja, di mana ritualnya bisa berlangsung berhari-hari bahkan berminggu. Mayat sering disimpan lama di rumah sebelum dimakamkan, sebagai bentuk penghormatan terakhir. Patung tau-tau di tebing batu jadi ciri khas unik Toraja. Meski zaman modern masuk, adat ini masih terus dilestarikan. Pariwisata makin mengangkat nama Toraja ke dunia internasional. Sampai sekarang, Toraja tetap jadi simbol harmoni antara budaya, adat, dan kehidupan modern.",
    activities: [
      "Mengunjungi rumah adat Tongkonan",
      "Menghadiri upacara Rambu Solo",
      "Trekking di Londa dan Kete Kesu"
    ],
    foods: ["Pa'piong", "Deppa Tori"],
    stories: "Bayangin ikut upacara Rambu Solo, di mana seluruh kampung kumpul buat mengantar orang meninggal dengan penuh hormat. Ada kerbau yang dikorbankan, musik tradisional, dan tarian khas. Turis asing sampai bengong liat tradisi seunik ini. Rasanya kayak masuk ke dunia lain yang penuh makna. Toraja bukan cuma wisata, tapi juga pengalaman spiritual.",
    gallery: [
      { img: "assets/rumah-adat-tongkonan.jpg", caption: "Rumah adat Tongkonan" },
      { img: "assets/deppa-tori.jpg", caption: "Makanan khas (Deppa Tori)" },
      { img: "assets/ritual-manene.jpg", caption: "Ritual Ma'nene" }
    ]
  },
  {
    id: "banda",
    name: "Banda Neira",
    location: "Maluku",
    region: "Maluku",
    type: "Cultural",
    img: "assets/banda.jpg",
    desc: "Pulau rempah bersejarah dengan benteng kolonial dan laut indah.",
    history: "Banda Neira, bagian dari Kepulauan Banda di Maluku, dulu disebut 'pulau rempah' karena jadi satu-satunya penghasil pala di dunia. Sejak abad ke-15, pedagang Arab, India, dan Cina sudah datang untuk membeli pala dan fuli. Ketika Portugis tiba di abad ke-16, mereka gagal menguasai Banda, hingga akhirnya Belanda mengambil alih dengan VOC. Periode kolonial penuh tragedi, termasuk pembantaian penduduk Banda pada 1621 oleh Jan Pieterszoon Coen demi monopoli pala. Pulau-pulau Banda kemudian diisi dengan pekerja budak dari berbagai daerah. Pada abad ke-19, Inggris sempat menguasai Banda dan menukar Pulau Run dengan Manhattan lewat Perjanjian Breda. Meski penuh konflik, Banda tetap jadi pusat perdagangan internasional. Setelah Indonesia merdeka, Banda Neira mulai dikenal bukan hanya karena rempah, tapi juga sejarah panjangnya. Kini, Banda Neira jadi destinasi wisata sejarah dan bahari, menyimpan peninggalan kolonial dan kisah perjuangan rakyatnya. Sejarah Banda adalah cerminan betapa rempah-rempah bisa mengubah jalannya dunia.",
    activities: [
      "Mengunjungi Benteng Belgica",
      "Snorkeling di Laut Banda",
      "Menjelajahi perkebunan pala"
    ],
    foods: ["Ikan asar", "Nasi kuning Maluku"],
    stories: "Cerita rakyat Banda menyebut pala adalah 'emas' yang ditanam leluhur sebagai berkah. Banyak kisah mistis tentang pohon pala tua yang dianggap keramat dan dijaga roh penjaga pulau. Warga percaya aroma pala bisa menolak bala dan membawa rezeki. Tarian Cakalele masih dimainkan untuk mengenang perjuangan melawan penjajah. Legenda dan tradisi ini bikin Banda Neira punya jiwa yang tak bisa dipisahkan dari rempah.",
    gallery: [
      { img: "assets/benteng-belgica.jpg", caption: "Benteng Belgica" },
      { img: "assets/rumah-budaya-banda-neira.jpg", caption: "Rumah Budaya Banda Neira" },
      { img: "assets/pala-banda-neira.jpg", caption: "Perkebunan Pala" }
    ]
  },
  {
    id: "karimunjawa",
    name: "Karimunjawa",
    location: "Jawa Tengah",
    region: "Jawa",
    type: "Island",
    img: "assets/karimunjawa.jpg",
    desc: "Kepulauan dengan pantai tropis dan snorkeling menawan.",
    history: "Karimunjawa awalnya hanya pulau kecil terpencil di Laut Jawa. Sunan Nyamplungan disebut sebagai tokoh yang menyebarkan Islam di wilayah ini. Nama Karimunjawa berasal dari 'kremun-kremun' atau samar terlihat dari daratan. Pada masa kolonial, beberapa orang diasingkan ke pulau ini. Masyarakatnya hidup sebagai nelayan dengan tradisi bahari yang kental. Abad ke-20, pemerintah menetapkannya sebagai taman nasional laut. Tujuannya melindungi terumbu karang dan biota laut yang beragam. Sejak itu, pariwisata bahari perlahan berkembang di Karimunjawa. Kini pulau ini dikenal sebagai surga snorkeling dan diving. Keindahannya membuat Karimunjawa dijuluki Maldives-nya Indonesia.",
    activities: [
      "Island hopping ke pulau-pulau kecil",
      "Snorkeling di Tanjung Gelam",
      "Menikmati sunset di Bukit Love"
    ],
    foods: ["Ikan bakar bumbu khas", "Lontong krubyuk"],
    stories: "Legenda Sunan Nyamplungan masih jadi identitas masyarakat Karimunjawa. Penduduk percaya nama pulau berasal dari pandangan samar dari Jawa. Budaya bahari tetap jadi bagian hidup sehari-hari. Gotong royong jadi kearifan lokal yang dijaga. Wisatawan datang untuk alam sekaligus keramahan penduduknya.",
    gallery: [
      { img: "assets/snorkeling-tanjung-gelam.jpg", caption: "Snorkeling Tanjung Gelam" },
      { img: "assets/pindang-serani.webp", caption: "Pindang Serani" },
      { img: "assets/pesta-lomban.png", caption: "Tradisi Pesta Lomban" } 
    ]
  },
  {
    id: "belitung",
    name: "Belitung",
    location: "Kepulauan Bangka Belitung",
    region: "Sumatera",
    type: "Beach",
    img:"assets/belitung.jpg",
    desc: "Belitung terkenal dengan pantai berpasir putih dan bebatuan granit raksasa.",
    history: "Belitung sejak lama dikenal sebagai pulau penghasil timah, bahkan sejak masa kolonial Belanda di abad ke-19. Sebelum itu, masyarakat Melayu Belitung sudah hidup dari laut, pertanian, dan perdagangan kecil. Pada era VOC, pulau ini mulai diperhatikan karena posisinya strategis di jalur pelayaran. Tahun 1851, perusahaan tambang timah Belanda resmi beroperasi dan membawa banyak pekerja dari Jawa dan Cina. Kehadiran tambang mengubah wajah Belitung jadi pusat industri timah penting di Asia Tenggara. Setelah kemerdekaan Indonesia, PT Timah mengambil alih tambang dan menjadi tulang punggung ekonomi daerah. Meski begitu, eksploitasi tambang juga meninggalkan kerusakan lingkungan. Baru setelah tahun 2000-an, pariwisata Belitung mulai berkembang pesat, apalagi setelah film Laskar Pelangi tahun 2008 yang bikin nama Belitung mendunia. Pulau ini kini dikenal dengan pantai berpasir putih dan batu granit raksasnya. Sejarah Belitung mencerminkan perjalanan dari pulau tambang ke destinasi wisata kelas dunia.",
    foods: ["Mie Belitung", "Gangan Ikan", "Kue Cucur", "Lempah Kuning"],
    activities: [
      "Snorkeling di Pulau Lengkuas",
      "Island hopping ke pulau-pulau kecil",
      "Menjelajahi bebatuan granit raksasa",
      "Mengunjungi replika SD Laskar Pelangi",
      "Wisata kuliner khas Belitung"
    ],
    stories: "Legenda setempat menyebut Belitung berasal dari kata 'Belitong,' sejenis siput laut yang banyak ditemukan di sana. Ada cerita rakyat tentang Batu Garuda, formasi batu granit yang dianggap jelmaan burung mistis. Warga juga punya mitos tentang danau Kaolin yang dipercaya menyimpan energi magis. Kisah Laskar Pelangi kini jadi cerita modern yang mengangkat harga diri orang Belitung. Tradisi dan legenda itu bikin pulau ini bukan sekadar indah, tapi juga penuh makna.",
    gallery: [
      { img: "assets/baripat-baregong.webp", caption:"Baripat Baregong"},
      { img: "assets/lempah-kuning.webp", caption:"Lempah Kuning"},
      { img: "assets/buang-jung.webp", caption:"Buang Jung"}
    ]
  },
  {
    id: "pulau-weh",
    name: "Pulau Weh",
    location: "Sabang, Aceh",
    region: "Sumatera",
    type: "Island",
    img: "assets/pulau-weh.jpg",
    desc: "Pulau Weh dikenal dengan spot diving indah dan kehidupan bawah laut yang kaya.",
    history: "Pulau Weh adalah pulau vulkanik kecil di ujung barat Indonesia, terbentuk dari letusan gunung purba ribuan tahun lalu. Sejak dulu, pulau ini dihuni masyarakat Aceh yang hidup dari laut dan perdagangan. Karena lokasinya strategis di jalur Selat Malaka, Pulau Weh sering disinggahi pedagang dari India, Arab, dan Eropa. Saat era kolonial Belanda, Pulau Weh dijadikan lokasi pelabuhan batu bara untuk kapal uap internasional. Jepang kemudian menduduki pulau ini saat Perang Dunia II dan membangun banyak benteng pertahanan. Setelah kemerdekaan Indonesia, Pulau Weh tetap dianggap kawasan penting karena posisinya sebagai gerbang barat Nusantara. Tahun 1960-an, pemerintah menetapkan sebagian wilayah Pulau Weh sebagai cagar alam laut untuk melindungi ekosistemnya. Seiring waktu, Pulau Weh dikenal luas dengan keindahan bawah laut dan pantainya. Kini, pulau ini jadi destinasi wisata bahari dengan spot diving kelas dunia seperti Iboih dan Rubiah. Sejarah Pulau Weh adalah gabungan kisah alam, perdagangan, dan peran strategis di jalur internasional.",
    foods: ["Mie Aceh", "Ikan Bakar Sabang", "Kari Kambing", "Kopi Ulee Kareng"],
    activities: [
      "Snorkeling di Iboih",
      "Menyelam di Taman Laut Rubiah",
      "Mengunjungi Tugu Nol Kilometer Indonesia",
      "Menikmati sunset di Pantai Gapang",
      "Jelajah kuliner khas Aceh"
    ],
    stories: "Masyarakat setempat percaya laut di sekitar Pulau Weh dijaga roh leluhur yang melindungi para nelayan. Ada legenda tentang seekor naga laut yang menjelma jadi bukit di pulau itu. Pulau Rubiah diyakini dinamai dari seorang perempuan saleh yang makamnya masih diziarahi hingga kini. Tugu Kilometer Nol sering dianggap sakral sebagai simbol awal Indonesia. Kisah-kisah ini bikin Pulau Weh punya daya tarik spiritual selain keindahan alamnya.",
    gallery: [
      { img: "assets/lhok-ie-meulee.jpeg", caption:"Lhok Ie Meulee"},
      { img: "assets/sate-gurita.webp", caption:"Sate Gurita"},
      { img: "assets/pantai-tapak-gajah.jpg", caption:"Pantai Tapak Gajah"}
    ]
  },
  {
    id: "sumba",
    name: "Sumba",
    location: "Nusa Tenggara Timur",
    region: "Nusa Tenggara",
    type: "Island",
    img: "assets/sumba.jpg",
    desc: "Sumba punya savana luas, pantai eksotis, dan tradisi adat unik.",
    history: "Pulau Sumba sudah dihuni sejak ribuan tahun lalu oleh masyarakat yang hidup dalam sistem adat kuat. Tradisi megalitik berkembang pesat, terlihat dari banyaknya kubur batu besar yang masih bisa dilihat sampai sekarang. Pada masa kerajaan, Sumba terkenal sebagai penghasil kuda tangguh yang diperdagangkan hingga ke luar negeri. Belanda mulai masuk ke Sumba pada abad ke-19, tapi pengaruh adat tetap lebih dominan dibanding kolonial. Setelah kemerdekaan Indonesia, Sumba tetap menjaga tradisi uniknya meski modernisasi mulai masuk. Hingga kini, budaya Marapu sebagai kepercayaan asli masih dianut sebagian masyarakat. Pulau ini juga terkenal dengan kain tenun ikat yang dibuat dengan teknik rumit turun-temurun. Ritual adat seperti Pasola, perang adat dengan menunggang kuda, menjadi ikon budaya Sumba. Di era modern, Sumba mulai dikenal dunia lewat keindahan alamnya seperti pantai dan bukit savana. Sejarah panjang Sumba mencerminkan perpaduan antara tradisi, kepercayaan, dan daya tahan masyarakatnya menghadapi perubahan zaman.",
    foods: ["Kaledo Sumba", "Palu mara", "Jagung bose", "Kacang mete goreng"],
    activities: [
      "Menyaksikan festival Pasola",
      "Menjelajahi padang savana",
      "Berenang di Air Terjun Lapopu",
      "Bersantai di Pantai Walakiri",
      "Membeli kain tenun ikat khas Sumba"
    ],
    stories: "Legenda Marapu dipercaya sebagai roh leluhur yang selalu menjaga keseimbangan alam dan manusia. Pasola bukan sekadar hiburan, tapi ritual persembahan untuk kesuburan tanah. Kisah kuda Sumba yang gagah sering dianggap titipan dari dewa laut. Tenun ikat dipercaya punya kekuatan simbolik, setiap motif melambangkan doa dan harapan. Cerita-cerita ini bikin Sumba nggak cuma indah, tapi juga sarat makna spiritual.",
    gallery: [
      { img: "assets/kain-tenun-sumba.jpg", caption:"Kain Tenun Sumba"},
      { img: "assets/kambing-bakar.webp", caption:"Kambing Bakar"},
      { img: "assets/uma-bokulu.jpg", caption:"Uma Bokulu"}
    ]
  },
  {
    id: "halmahera",
    name: "Halmahera",
    location: "Maluku Utara",
    region: "Maluku",
    type: "Island",
    img: "assets/halmahera.jpg",
    desc: "Halmahera dikenal dengan hutan tropis, pantai cantik, dan sejarah rempah.",
    history: "Halmahera adalah pulau terbesar di Maluku Utara yang sejak lama jadi pusat perdagangan rempah. Sejak abad ke-14, wilayah ini berada di bawah pengaruh Kesultanan Ternate dan Tidore. Rempah-rempah seperti cengkeh bikin Halmahera jadi rebutan bangsa asing. Portugis datang pertama kali pada abad ke-16, disusul oleh Spanyol, lalu Belanda yang akhirnya berkuasa. Pada masa kolonial, masyarakat Halmahera mengalami kerja paksa dan eksploitasi cengkeh. Meski begitu, adat dan kepercayaan lokal tetap bertahan di pedalaman. Pulau ini juga jadi lokasi penting saat Perang Dunia II karena dijadikan basis militer Jepang. Setelah Indonesia merdeka, Halmahera perlahan bangkit dengan mengandalkan hasil bumi dan laut. Kekayaan alamnya, mulai dari hutan tropis, pantai, sampai tambang, bikin Halmahera dikenal luas. Kini, Halmahera berkembang sebagai destinasi ekowisata dengan daya tarik budaya dan sejarah panjang rempahnya.",
    foods: ["Papeda", "Ikan kuah kuning", "Sagu bakar", "Kopi Halmahera"],
    activities: [
      "Snorkeling di perairan Halmahera",
      "Mengunjungi benteng peninggalan kolonial",
      "Menjelajah hutan tropis",
      "Mendaki gunung berapi",
      "Wisata kuliner sagu dan ikan"
    ],
    stories: "Masyarakat percaya gunung-gunung di Halmahera dihuni roh leluhur yang menjaga alam. Ada kisah tentang danau yang tercipta dari air mata seorang putri yang kehilangan cintanya. Tarian Cakalele melambangkan keberanian dan semangat perang orang Maluku. Lagu-lagu tradisional seperti yang dinyanyikan dengan tifa dipercaya bisa memanggil semangat nenek moyang. Kisah-kisah ini bikin Halmahera punya aura magis di balik sejarah rempahnya.",
    gallery: [
      { img: "assets/saloi.jpg", caption:"Saloi"},
      { img: "assets/ikan-woku.jpg", caption:"Ikan Woku"},
      { img: "assets/rumah-sasadu.jpg", caption:"Rumah Sasadu"}
    ]
  },
  {
    id: "mentawai",
    name: "Mentawai",
    location: "Sumatera Barat",
    region: "Sumatera",
    type: "Island",
    img: "assets/mentawai.jpg",
    desc: "Mentawai populer sebagai surga surfing kelas dunia dengan budaya asli kuat.",
    history: "Kepulauan Mentawai sudah dihuni sejak ribuan tahun lalu oleh masyarakat asli yang hidup selaras dengan alam. Mereka punya sistem adat kuat yang berpusat pada rumah tradisional bernama Uma. Orang Mentawai menjaga tradisi tato tubuh sebagai simbol status, identitas, dan kepercayaan. Saat kolonial Belanda masuk, banyak wilayah Mentawai dijadikan area perkebunan, tapi adat tetap bertahan di pedalaman. Misi Kristen mulai masuk abad ke-20, namun banyak masyarakat tetap menjaga kepercayaan animisme Arat Sabulungan. Setelah Indonesia merdeka, modernisasi perlahan masuk, tapi budaya tradisional masih kokoh. Pada 1990-an, Mentawai mulai dikenal dunia karena ombaknya yang jadi surganya peselancar internasional. Bencana gempa dan tsunami beberapa kali melanda, tapi masyarakat tetap bangkit dengan semangat kebersamaan. Kini, Mentawai jadi ikon wisata budaya dan surfing kelas dunia. Sejarah panjangnya adalah kisah tentang ketahanan budaya dan keterhubungan dengan alam.",
    foods: ["Sagu lempeng", "Ikan asap", "Ubi rebus", "Daun keladi masak"],
    activities: [
      "Surfing di ombak kelas dunia",
      "Mengunjungi desa tradisional Mentawai",
      "Belajar membuat tato tradisional",
      "Trekking di hutan hujan",
      "Mencicipi kuliner khas suku Mentawai"
    ],
    stories: "Legenda setempat bercerita tentang roh hutan yang menjaga hewan buruan dan hasil bumi. Tato di tubuh masyarakat dipercaya menghubungkan mereka dengan roh leluhur. Kisah Uma sebagai rumah adat dianggap pusat kehidupan sosial dan spiritual. Ombak Mentawai punya mitos sebagai 'hadiah laut' yang dijaga dewa samudra. Cerita-cerita ini bikin Mentawai bukan cuma eksotis, tapi juga sarat filosofi hidup.",
    gallery: [
      { img: "assets/sikerei.webp", caption:"Sikerei"},
      { img: "assets/batra.jpeg", caption:"Batra"},
      { img: "assets/mentawai-surfing.webp", caption:"Mentawai Surfing"}
    ]
  },
  {
    id: "flores",
    name: "Flores",
    location: "Nusa Tenggara Timur",
    region: "Nusa Tenggara",
    type: "Island",
    img: "assets/flores.jpg",
    desc: "Flores terkenal dengan Danau Kelimutu, Komodo, dan budaya Katoliknya.",
    history: "Pulau Flores punya sejarah panjang sejak era kolonial Portugis abad ke-16 yang ngasih nama 'Cabo de Flores' karena pesisirnya penuh bunga. Sejak itu, Flores jadi basis penyebaran Katolik dan sampai sekarang masih jadi salah satu pulau dengan mayoritas penduduk Katolik di Indonesia. Pada masa perdagangan, Flores dikenal lewat komoditas cendana dan hasil alam lain yang ditukar dengan barang impor. Kolonial Belanda kemudian masuk, meski pengaruh Portugis masih kuat, terutama di bagian timur pulau. Saat Perang Dunia II, tentara Jepang sempat menduduki wilayah ini dan meninggalkan peninggalan sejarah. Setelah kemerdekaan Indonesia, Flores makin dikenal karena kekayaan budaya dan alamnya. Di beberapa daerah, masih banyak tradisi adat yang hidup berdampingan dengan kepercayaan Katolik. Tahun 1990-an, pariwisata mulai berkembang pesat terutama karena Labuan Bajo sebagai pintu ke Taman Nasional Komodo. Gunung Kelimutu dengan tiga danau ajaibnya juga jadi simbol unik dari sejarah alam Flores. Kini, Flores bukan cuma dikenal di Indonesia, tapi juga dunia lewat perpaduan budaya, agama, dan keindahan alamnya.",
    foods: ["Jagung bose", "Se'i daging sapi", "Rumpu rampe", "Kopi Flores Bajawa"],
    activities: [
      "Menyaksikan sunrise di Danau Kelimutu",
      "Mengunjungi Taman Nasional Komodo",
      "Menjelajahi kampung adat Wae Rebo",
      "Snorkeling di Labuan Bajo",
      "Mencicipi kopi khas Flores"
    ],
    stories: "Kisah paling terkenal dari Flores adalah legenda tiga danau Kelimutu yang warnanya selalu berubah sesuai arwah leluhur. Desa Wae Rebo juga punya cerita magis dengan rumah adat berbentuk kerucut yang katanya dijaga roh penjaga. Tradisi perang cambuk caci masih jadi tontonan seru yang dianggap sebagai simbol keberanian dan persaudaraan. Di banyak desa, masyarakat masih menjaga tradisi tenun ikat yang diwariskan turun-temurun.",
    gallery: [
      { img: "assets/rumah-adat-wae-rebo.jpg", caption:"Rumah Adat Wae Rebo"},
      { img: "assets/sayur-rumpu-rampe.webp", caption:"Sayur Rumpu Rampe"},
      { img: "assets/kain-tenun-songke.jpeg", caption:"Kain Tenun Songke"}
    ]
  },
  {
    id: "kepulauan-seribu",
    name: "Kepulauan Seribu",
    location: "DKI Jakarta",
    region: "Jawa",
    type: "Archipelago",
    img: "assets/kepulauan-seribu.jpg",
    desc: "Kepulauan Seribu jadi destinasi dekat Jakarta dengan pulau kecil nan indah.",
    history: "Kepulauan Seribu udah dikenal sejak masa kolonial VOC abad ke-17 sebagai jalur perdagangan dan pertahanan laut Batavia. Pulau-pulau kecilnya sering dipakai buat benteng, karantina, sampai tempat pengasingan tahanan politik. Pulau Onrust adalah yang paling bersejarah, dulu jadi galangan kapal VOC dan sempat diserang armada Inggris. Selain itu, Belanda juga bikin rumah sakit karantina di sana buat penyakit menular. Pas masa kemerdekaan, Kepulauan Seribu sempat jadi titik penting pertahanan Jakarta dari laut. Tahun 1970-an, pemerintah mulai ngebuka pulau-pulau di sini buat pariwisata dan konservasi. Sebagian pulau dijadikan taman nasional laut dengan fokus ke perlindungan terumbu karang. Seiring waktu, Kepulauan Seribu berkembang jadi destinasi wisata favorit warga Jakarta. Meski deket ibu kota, sejarah panjang kolonialnya masih bisa ditemuin di sisa bangunan tua dan kuburan Belanda di beberapa pulau. Sampai sekarang, wilayah ini masih jadi kombinasi unik antara peninggalan sejarah dan wisata bahari modern.",
    foods: ["Kerak telor ala pesisir", "Ikan bakar khas nelayan", "Sambal kecap cumi", "Es kelapa muda segar"],
    activities: [
      "Snorkeling di Pulau Pramuka",
      "Menjelajahi Pulau Tidung dengan sepeda",
      "Mengunjungi pulau bersejarah Onrust",
      "Diving melihat terumbu karang",
      "Mencicipi seafood segar"
    ],
    stories: "Ada cerita mistis di Pulau Onrust, katanya arwah para tahanan politik dan korban penyakit masih gentayangan. Pulau Kelor juga sering dikaitin sama legenda benteng Martello yang angker tapi ikonik. Pulau Pramuka punya kisah sukses jadi pusat konservasi penyu sisik yang hampir punah. Sementara Pulau Tidung populer karena Jembatan Cinta yang dipercaya bawa hoki buat pasangan. Semua kisah itu bikin Kepulauan Seribu punya aura beda, gabungan antara sejarah kelam, budaya lokal, dan cerita romantis.",
    gallery: [
      { img: "assets/Pulau-Tidung.jpeg", caption:"Pulau Tidung"},
      { img: "assets/pepes-ikan.jpg", caption:"Pepes Ikan"},
      { img: "assets/pulau-odrust.jpg", caption:"Pulau Odrust"}
    ]
  },  
  {
    id: "danau-sentarum",
    name: "Danau Sentarum",
    location: "Kapuas Hulu, Kalimantan Barat",
    region: "Kalimantan",
    type: "Lake & National Park",
    img: "assets/danau-sentarum.jpeg",
    desc: "Danau Sentarum adalah ekosistem rawa unik dengan keanekaragaman hayati tinggi.",
    history: "Danau Sentarum di Kapuas Hulu, Kalimantan Barat, udah ada sejak ribuan tahun lalu sebagai bagian dari sistem sungai Kapuas. Wilayah ini unik karena berupa danau musiman yang berubah jadi rawa luas pas musim hujan, terus surut lagi pas kemarau. Sejak lama, masyarakat Dayak dan Melayu udah tinggal di sekitar danau, hidup dari ikan, hutan, dan hasil alam. Pas era kolonial Belanda, kawasan ini jarang tersentuh karena aksesnya susah, tapi tetap jadi jalur dagang tradisional. Tahun 1982, Danau Sentarum ditetapkan sebagai Suaka Margasatwa karena punya keanekaragaman hayati luar biasa. Terus, tahun 1999 statusnya naik jadi Taman Nasional Danau Sentarum, dengan fokus perlindungan ikan air tawar dan hutan rawa gambut. Tempat ini dikenal sebagai habitat penting ikan arwana super red yang bernilai tinggi. Selain itu, banyak spesies endemik, termasuk burung langka dan orangutan yang bergantung pada ekosistem danau. Pemerintah dan LSM sering turun tangan buat ngejaga kawasan ini dari ancaman illegal logging dan perburuan. Sampai sekarang, Danau Sentarum jadi contoh penting harmonisasi antara manusia, air, dan hutan di jantung Kalimantan.",
    foods: ["Ikan asap Danau Sentarum", "Sayur umbut rotan", "Tempoyak ikan", "Lemang khas Dayak"],
    activities: [
      "Menjelajahi rumah panggung terapung",
      "Naik perahu keliling danau",
      "Menyaksikan keindahan burung endemik",
      "Mencoba kuliner khas ikan asap",
      "Belajar budaya Dayak lokal"
    ],
    stories: "Ada cerita rakyat tentang naga raksasa penjaga air yang dipercaya tinggal di kedalaman Danau Sentarum. Masyarakat juga percaya, kalau air tiba-tiba keruh padahal nggak hujan, itu tandanya roh leluhur lagi marah. Di musim tertentu, nelayan suka bikin upacara syukuran biar hasil tangkapan ikan melimpah. Ada pula kisah mistis tentang cahaya misterius di malam hari yang katanya berasal dari roh penunggu danau. Semua cerita ini bikin Sentarum punya aura magis selain nilai ekologinya.",
    gallery: [
      { img: "assets/ikan-tapah.jpg", caption:"Ikan Tapah"},
      { img: "assets/festival-danau-sentarum.jpg", caption:"Festival Danau Sentarum"},
      { img: "assets/tempoyak-ikan.jpg", caption:"Tempoyak Ikan"}
    ]
  },
  {
    id: "nias",
    name: "Nias",
    location: "Sumatera Utara",
    region: "Sumatera",
    type: "Island",
    img: "assets/nias.jpg",
    desc: "Nias dikenal dengan tradisi lompat batu dan ombak besar untuk surfing.",
    history: "Pulau Nias di Sumatera Utara udah dihuni sejak ribuan tahun lalu oleh masyarakat asli yang dikenal sebagai Ono Niha. Mereka hidup dengan sistem adat kuat dan desa berbenteng buat bertahan dari serangan. Pada masa lampau, Nias terkenal dengan tradisi perang antar kampung yang keras. Tradisi itu bikin muncul budaya rumah adat besar dari kayu keras yang tahan lama. Sejak abad ke-17, pedagang asing datang ke Nias buat dagang budak dan hasil bumi. Pas masa kolonial, Belanda masuk dan menaklukkan Nias, sekaligus menghapus perbudakan. Abad ke-19, misionaris Jerman bawa agama Kristen yang berkembang pesat sampai sekarang. Tradisi lompat batu lahir dari latihan perang pemuda Nias dan jadi ikon budaya. Tahun 2005, gempa besar mengguncang Nias, ngerusak banyak infrastruktur dan desa adat. Meski begitu, masyarakat bangkit lagi, dan sekarang Nias dikenal dunia lewat ombak surfing Sorake-Lagundri dan budaya yang masih terjaga.",
    foods: ["Babi Guling Nias", "Lehedalo Nifange", "Gowi Nifufu", "Sakudu Nifange"],
    activities: [
      "Surfing di Sorake dan Lagundri",
      "Menonton tradisi lompat batu",
      "Mengunjungi desa adat Bawömataluo",
      "Mencicipi kuliner khas Nias",
      "Menikmati tarian perang tradisional"
    ],
    stories: "Legenda lokal bilang, lompat batu dulunya jadi syarat wajib biar pemuda dianggap dewasa dan siap perang. Banyak cerita tentang rumah adat besar yang diyakini punya roh pelindung keluarga. Tradisi tarian perang sering dianggap bukan cuma hiburan, tapi doa keberanian. Surfing Nias melegenda sejak peselancar asing nemuin ombaknya di 1970-an. Semua cerita ini bikin Nias dipandang sebagai pulau keberanian, keuletan, dan kebanggaan budaya.",
    gallery: [
      { img: "assets/tradisi-lompat-batu-(Fahombo).png", caption:"Tradisi Lompat Batu (Fahombo)"},
      { img: "assets/gowi-nifufu.jpg", caption:"Gowi Nifufu"},
      { img: "assets/tari-faluaya.jpg", caption:"Tari Faluaya"}
    ]
  }
];

// Export data untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { destinations };
}