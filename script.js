let destinations = [
  {
    id: "bali",
    name: "Bali",
    location: "Pulau Bali",
    region: "Bali",
    type: "Cultural",
    img: "assets/bali.jpg",
    desc: "Pulau Dewata dengan pura, pantai, dan budaya Hindu yang unik.",
    history: "Bali menjadi pusat kebudayaan Hindu sejak abad ke-8. Tradisi, tari, pura, dan seni tetap terjaga hingga kini.",
    activities: [
      "Mengunjungi Pura Besakih dan Tanah Lot",
      "Menonton Tari Kecak di Uluwatu",
      "Berselancar di Pantai Kuta",
      "Menjelajahi Tegallalang Rice Terrace"
    ],
    foods: ["Ayam Betutu", "Babi Guling", "Lawar"],
    stories: "Bali disebut Pulau Dewata karena keindahan alam dan spiritualitas Hindu. Tradisi adat Bali masih terjaga dalam kehidupan sehari-hari."
  },
  {
    id: "rajaampat",
    name: "Raja Ampat",
    location: "Papua Barat",
    region: "Papua",
    type: "Island",
    img: "assets/rajaampat.jpg",
    desc: "Surga bawah laut dengan keanekaragaman hayati tertinggi di dunia.",
    history: "Raja Ampat dihuni masyarakat adat yang hidup berdampingan dengan laut. Kawasan ini kini dilindungi untuk konservasi laut.",
    activities: [
      "Snorkeling dan diving di Misool",
      "Mendaki Wayag untuk panorama pulau",
      "Birdwatching burung Cendrawasih"
    ],
    foods: ["Papeda", "Ikan kuah kuning"],
    stories: "Raja Ampat diyakini berasal dari legenda empat raja yang lahir dari telur naga."
  },
  {
    id: "komodo",
    name: "Taman Nasional Komodo",
    location: "Nusa Tenggara Timur",
    region: "NTT",
    type: "Island",
    img: "assets/komodo.jpg",
    desc: "Habitat asli kadal purba Komodo dengan panorama pulau menawan.",
    history: "Komodo ditemukan ilmuwan pada abad ke-20. Kawasan ini kemudian ditetapkan sebagai Taman Nasional dan Situs Warisan Dunia.",
    activities: [
      "Trekking di Pulau Komodo",
      "Mengunjungi Pantai Pink",
      "Menyelam di perairan sekitar Pulau Komodo"
    ],
    foods: ["Se'i sapi", "Jagung bose"],
    stories: "Masyarakat setempat percaya Komodo adalah saudara mereka dalam mitos asal-usul."
  },
  {
    id: "toba",
    name: "Danau Toba",
    location: "Sumatera Utara",
    region: "Sumatera",
    type: "Lake",
    img: "assets/toba.jpg",
    desc: "Danau vulkanik terbesar di dunia dengan Pulau Samosir di tengahnya.",
    history: "Danau Toba terbentuk dari letusan supervulkan purba sekitar 74 ribu tahun lalu. Kini menjadi pusat budaya Batak.",
    activities: [
      "Menyeberang ke Pulau Samosir",
      "Menonton pertunjukan Sigale-gale",
      "Berendam di air panas Pangururan"
    ],
    foods: ["Arsik ikan mas", "Naniura"],
    stories: "Legenda Danau Toba bercerita tentang asal mula terbentuknya danau dari kutukan seorang ayah kepada anaknya."
  },
  {
    id: "bunaken",
    name: "Bunaken",
    location: "Sulawesi Utara",
    region: "Sulawesi",
    type: "Beach",
    img: "assets/bunaken.jpg",
    desc: "Taman laut tropis dengan terumbu karang spektakuler.",
    history: "Bunaken ditetapkan sebagai taman laut nasional pada 1991 untuk melindungi keanekaragaman terumbu karang dan biota laut.",
    activities: [
      "Diving di spot Lekuan",
      "Snorkeling di Siladen",
      "Menikmati sunset di Manado Tua"
    ],
    foods: ["Tinutuan (bubur Manado)", "Cakalang fufu"],
    stories: "Bunaken menjadi simbol penting konservasi laut di Indonesia."
  },
  {
    id: "derawan",
    name: "Pulau Derawan",
    location: "Kalimantan Timur",
    region: "Kalimantan",
    type: "Island",
    img: "assets/derawan.jpg",
    desc: "Pulau tropis dengan pantai pasir putih dan penyu laut.",
    history: "Pulau Derawan dikenal sebagai tempat konservasi penyu hijau dan habitat laut langka lainnya.",
    activities: [
      "Berenang dengan ubur-ubur di Danau Kakaban",
      "Diving bersama pari manta",
      "Menikmati pantai pasir putih"
    ],
    foods: ["Kepiting soka", "Ikan bakar Derawan"],
    stories: "Pulau Derawan masih dijaga oleh masyarakat adat yang hidup selaras dengan laut."
  },
  {
    id: "wakatobi",
    name: "Wakatobi",
    location: "Sulawesi Tenggara",
    region: "Sulawesi",
    type: "Beach",
    img: "assets/wakatobi.jpeg",
    desc: "Destinasi diving kelas dunia dengan keanekaragaman karang.",
    history: "Nama Wakatobi berasal dari gabungan 4 pulau besar: Wangi-wangi, Kaledupa, Tomia, Binongko. Kini menjadi taman nasional laut.",
    activities: [
      "Diving di Tomia",
      "Bersantai di Pulau Hoga",
      "Menjelajahi kehidupan masyarakat Bajo"
    ],
    foods: ["Kasuami", "Parende ikan"],
    stories: "Wakatobi disebut surga bawah laut karena kekayaan biota lautnya yang sangat melimpah."
  },
  {
    id: "toraja",
    name: "Tana Toraja",
    location: "Sulawesi Selatan",
    region: "Sulawesi",
    type: "Cultural",
    img: "assets/toraja.jpg",
    desc: "Daerah adat dengan rumah Tongkonan dan upacara pemakaman unik.",
    history: "Budaya Toraja terkenal dengan ritual kematian Rambu Solo dan rumah adat Tongkonan yang sarat simbol spiritual.",
    activities: [
      "Mengunjungi rumah adat Tongkonan",
      "Menghadiri upacara Rambu Solo",
      "Trekking di Londa dan Kete Kesu"
    ],
    foods: ["Pa'piong", "Deppa Tori"],
    stories: "Toraja dipercaya sebagai keturunan langit, terlihat dari bentuk rumah adat Tongkonan."
  },
  {
    id: "banda",
    name: "Banda Neira",
    location: "Maluku",
    region: "Maluku",
    type: "Cultural",
    img: "assets/banda.jpg",
    desc: "Pulau rempah bersejarah dengan benteng kolonial dan laut indah.",
    history: "Banda Neira adalah pusat perdagangan pala pada abad ke-16. Meninggalkan warisan kolonial dan budaya maritim.",
    activities: [
      "Mengunjungi Benteng Belgica",
      "Snorkeling di Laut Banda",
      "Menjelajahi perkebunan pala"
    ],
    foods: ["Ikan asar", "Nasi kuning Maluku"],
    stories: "Banda Neira pernah jadi pusat perebutan rempah antara bangsa Eropa."
  },
  {
    id: "karimunjawa",
    name: "Karimunjawa",
    location: "Jawa Tengah",
    region: "Jawa",
    type: "Island",
    img: "assets/karimunjawa.jpg",
    desc: "Kepulauan dengan pantai tropis dan snorkeling menawan.",
    history: "Karimunjawa ditetapkan sebagai taman laut nasional pada 2001 untuk menjaga kelestarian biota laut.",
    activities: [
      "Island hopping ke pulau-pulau kecil",
      "Snorkeling di Tanjung Gelam",
      "Menikmati sunset di Bukit Love"
    ],
    foods: ["Ikan bakar bumbu khas", "Lontong krubyuk"],
    stories: "Nama Karimunjawa berasal dari kisah Sunan Muria yang melihat pulau ini dari jauh."
  }
];

// ====== State ======
let wishlist = [];
let visited = [];

// ====== Render Cards ======
function renderDestinations(list) {
  const $grid = $("#destinationsGrid");
  $grid.empty();

  if (list.length === 0) {
    $grid.html("<p>Tidak ada destinasi ditemukan.</p>");
    return;
  }

  $.each(list, function (_, d) {
    const card = `
      <div class="card">
        <img src="${d.img}" alt="${d.name}">
        <h3>${d.name}</h3>
        <p class="location">${d.location}</p>
        <p class="desc">${d.desc}</p>
        <div class="actions">
          <button class="btn detail-btn" data-id="${d.id}">Detail</button>
          <button class="btn wishlist-btn" data-id="${d.id}">Wishlist</button>
          <button class="btn visited-btn" data-id="${d.id}">Visited</button>
          <button class="btn edit-btn" data-id="${d.id}">Edit</button>
          <button class="btn delete-btn" data-id="${d.id}">Hapus</button>
        </div>
      </div>
    `;
    $grid.append(card);
  });
}

// ====== Filters & Search ======
function applyFilters() {
  const keyword = $("#searchInput").val().toLowerCase();
  const region = $("#regionFilter").val();
  const type = $("#typeFilter").val();

  const filtered = destinations.filter(d => {
    const matchKeyword = d.name.toLowerCase().includes(keyword) || d.location.toLowerCase().includes(keyword);
    const matchRegion = !region || d.region === region;
    const matchType = !type || d.type === type;
    return matchKeyword && matchRegion && matchType;
  });

  renderDestinations(filtered);
}

function resetFilters() {
  $("#searchInput").val("");
  $("#regionFilter").val("");
  $("#typeFilter").val("");
  renderDestinations(destinations);
}

// ====== View Toggle ======
function filterDestinations(view) {
  if (view === "all") {
    renderDestinations(destinations);
  } else if (view === "wishlist") {
    const filtered = destinations.filter(d => wishlist.includes(d.id));
    renderDestinations(filtered);
  } else if (view === "visited") {
    const filtered = destinations.filter(d => visited.includes(d.id));
    renderDestinations(filtered);
  }

  $(".toggle-btn").removeClass("active");
  $(`.toggle-btn[data-view="${view}"]`).addClass("active");
}

// ====== Modal ======
function showModal(dest) {
  const activities = dest.activities ? dest.activities.map(a => `<li>${a}</li>`).join("") : "<li>-</li>";
  const foods = dest.foods ? dest.foods.map(f => `<li>${f}</li>`).join("") : "<li>-</li>";
  const stories = dest.stories || "";

  $("#modalBody").html(`
    <img src="${dest.img}" alt="${dest.name}" class="modal-hero">
    <div class="modal-info">
      <h2 class="modal-title">${dest.name}</h2>
      <p class="modal-location">${dest.location}</p>
      <div class="modal-description">${dest.desc}</div>
      <div class="modal-history">
        <h3>Sejarah</h3>
        <p>${dest.history}</p>
      </div>
      <div class="modal-activities">
        <h3>Aktivitas</h3>
        <ul>${activities}</ul>
      </div>
      <div class="modal-foods">
        <h3>Makanan Khas</h3>
        <ul>${foods}</ul>
      </div>
      <div class="modal-stories">
        <h3>Cerita & Budaya</h3>
        <p>${stories}</p>
      </div>
    </div>
  `);
  $("#destinationModal").addClass("active");
}

function scrollToDestinations() {
  const $dest = $("#destinations");
  if ($dest.length) {
    if (typeof filterDestinations === "function") {
      filterDestinations("all");
    }
    $("html, body").animate({ scrollTop: $dest.offset().top }, 600);
    $dest.addClass("pulse-highlight");
    setTimeout(() => $dest.removeClass("pulse-highlight"), 1200);
  }
}

function scrollToAbout() {
  const $about = $("#about");
  if ($about.length) {
    $("html, body").animate({ scrollTop: $about.offset().top }, 600);
    $about.addClass("pulse-highlight");
    setTimeout(() => $about.removeClass("pulse-highlight"), 1200);
  }
}

function handleScrollAnimations() {
  const fadeEls = document.querySelectorAll(".fade-in");
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimations);
window.addEventListener("load", handleScrollAnimations);

function closeModal() {
  $("#destinationModal").removeClass("active");
}

function openAddModal() {
  $("#addDestinationModal").addClass("active");
}

function closeAddModal() {
  $("#addDestinationModal").removeClass("active");
}

function openEditModal(dest) {
  $("#editDestId").val(dest.id);
  $("#editDestName").val(dest.name);
  $("#editDestLocation").val(dest.location);
  $("#editDestRegion").val(dest.region);
  $("#editDestType").val(dest.type);
  $("#editDestDescription").val(dest.desc);
  $("#editDestHistory").val(dest.history);
  $("#editDestImageUrl").val(dest.img.replace("assets/", ""));
  $("#editDestinationModal").addClass("active");
}

function closeEditModal() {
  $("#editDestinationModal").removeClass("active");
}