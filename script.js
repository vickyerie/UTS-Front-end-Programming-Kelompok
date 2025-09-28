// ====== Data Destinasi ======
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
    stories: "Bali disebut Pulau Dewata karena keindahan alam dan spiritualitas Hindu. Tradisi adat Bali masih terjaga dalam kehidupan sehari-hari.",
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
    history: "Raja Ampat dihuni masyarakat adat yang hidup berdampingan dengan laut. Kawasan ini kini dilindungi untuk konservasi laut.",
    activities: [
      "Snorkeling dan diving di Misool",
      "Mendaki Wayag untuk panorama pulau",
      "Birdwatching burung Cendrawasih"
    ],
    foods: ["Papeda", "Ikan kuah kuning"],
    stories: "Raja Ampat diyakini berasal dari legenda empat raja yang lahir dari telur naga.",
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
    history: "Komodo ditemukan ilmuwan pada abad ke-20. Kawasan ini kemudian ditetapkan sebagai Taman Nasional dan Situs Warisan Dunia.",
    activities: [
      "Trekking di Pulau Komodo",
      "Mengunjungi Pantai Pink",
      "Menyelam di perairan sekitar Pulau Komodo"
    ],
    foods: ["Se'i sapi", "Jagung bose"],
    stories: "Masyarakat setempat percaya Komodo adalah saudara mereka dalam mitos asal-usul.",
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
    history: "Danau Toba terbentuk dari letusan supervulkan purba sekitar 74 ribu tahun lalu. Kini menjadi pusat budaya Batak.",
    activities: [
      "Menyeberang ke Pulau Samosir",
      "Menonton pertunjukan Sigale-gale",
      "Berendam di air panas Pangururan"
    ],
    foods: ["Arsik ikan mas", "Naniura"],
    stories: "Legenda Danau Toba bercerita tentang asal mula terbentuknya danau dari kutukan seorang ayah kepada anaknya.",
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
    history: "Bunaken ditetapkan sebagai taman laut nasional pada 1991 untuk melindungi keanekaragaman terumbu karang dan biota laut.",
    activities: [
      "Diving di spot Lekuan",
      "Snorkeling di Siladen",
      "Menikmati sunset di Manado Tua"
    ],
    foods: ["Tinutuan (Bubur Manado)", "Cakalang fufu"],
    stories: "Bunaken menjadi simbol penting konservasi laut di Indonesia.",
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
    history: "Pulau Derawan dikenal sebagai tempat konservasi penyu hijau dan habitat laut langka lainnya.",
    activities: [
      "Berenang dengan ubur-ubur di Danau Kakaban",
      "Diving bersama pari manta",
      "Menikmati pantai pasir putih"
    ],
    foods: ["Kepiting soka", "Ikan bakar Derawan"],
    stories: "Pulau Derawan masih dijaga oleh masyarakat adat yang hidup selaras dengan laut.",
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
    history: "Nama Wakatobi berasal dari gabungan 4 pulau besar: Wangi-wangi, Kaledupa, Tomia, Binongko. Kini menjadi taman nasional laut.",
    activities: [
      "Diving di Tomia",
      "Bersantai di Pulau Hoga",
      "Menjelajahi kehidupan masyarakat Bajo"
    ],
    foods: ["Kasuami", "Parende ikan"],
    stories: "Wakatobi disebut surga bawah laut karena kekayaan biota lautnya yang sangat melimpah.",
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
    history: "Budaya Toraja terkenal dengan ritual kematian Rambu Solo dan rumah adat Tongkonan yang sarat simbol spiritual.",
    activities: [
      "Mengunjungi rumah adat Tongkonan",
      "Menghadiri upacara Rambu Solo",
      "Trekking di Londa dan Kete Kesu"
    ],
    foods: ["Pa'piong", "Deppa Tori"],
    stories: "Toraja dipercaya sebagai keturunan langit, terlihat dari bentuk rumah adat Tongkonan.",
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
    history: "Banda Neira adalah pusat perdagangan pala pada abad ke-16. Meninggalkan warisan kolonial dan budaya maritim.",
    activities: [
      "Mengunjungi Benteng Belgica",
      "Snorkeling di Laut Banda",
      "Menjelajahi perkebunan pala"
    ],
    foods: ["Ikan asar", "Nasi kuning Maluku"],
    stories: "Banda Neira pernah jadi pusat perebutan rempah antara bangsa Eropa.",
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
    history: "Karimunjawa ditetapkan sebagai taman laut nasional pada 2001 untuk menjaga kelestarian biota laut.",
    activities: [
      "Island hopping ke pulau-pulau kecil",
      "Snorkeling di Tanjung Gelam",
      "Menikmati sunset di Bukit Love"
    ],
    foods: ["Ikan bakar bumbu khas", "Lontong krubyuk"],
    stories: "Nama Karimunjawa berasal dari kisah Sunan Muria yang melihat pulau ini dari jauh.",
    gallery: [
      { img: "assets/snorkeling-tanjung-gelam.jpg", caption: "Snorkeling Tanjung Gelam" },
      { img: "assets/pindang-serani.webp", caption: "Pindang Serani" },
      { img: "assets/pesta-lomban.png", caption: "Tradisi Pesta Lomban" }
    ]
  }
];

// ====== State ======
let wishlist = [];
let visited = [];

// ====== Render Destinations - New Cinematic Layout ======
function renderDestinations(list) {
  const $grid = $("#destinationsGrid");
  $grid.empty();

  if (list.length === 0) {
    $grid.html(`
      <div class="empty-state">
        <i class="fas fa-map-marked-alt"></i>
        <h4>No destinations found</h4>
        <p>Try adjusting your search or filters</p>
      </div>
    `);
    return;
  }

  $.each(list, function (_, d) {
    const isWishlisted = wishlist.includes(d.id);
    const isVisited = visited.includes(d.id);
    
    const destinationItem = `
      <div class="destination-item" data-id="${d.id}">
        <div class="destination-bg" style="background-image: url('${d.img}')"></div>
        <div class="destination-overlay"></div>
        <div class="destination-content">
          <div class="destination-meta">
            <span class="destination-type">${d.type}</span>
            <span class="destination-region">
              <i class="fas fa-map-marker-alt"></i>
              ${d.region}
            </span>
          </div>
          <h2 class="destination-title">${d.name}</h2>
          <p class="destination-location">${d.location}</p>
          <p class="destination-description">${d.desc}</p>
          <div class="destination-actions">
            <button class="action-btn primary detail-btn" data-id="${d.id}">
              <i class="fas fa-eye"></i>
              Explore
            </button>
            <button class="action-btn wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${d.id}">
              <i class="fas fa-heart"></i>
              ${isWishlisted ? 'Wishlisted' : 'Wishlist'}
            </button>
            <button class="action-btn visited-btn ${isVisited ? 'active' : ''}" data-id="${d.id}">
              <i class="fas fa-check"></i>
              ${isVisited ? 'Visited' : 'Mark Visited'}
            </button>
            <button class="action-btn edit-btn" data-id="${d.id}">
              <i class="fas fa-edit"></i>
              Edit
            </button>
            <button class="action-btn delete-btn" data-id="${d.id}">
              <i class="fas fa-trash"></i>
              Delete
            </button>
          </div>
        </div>
      </div>
    `;
    $grid.append(destinationItem);
  });

  $(".destination-item").each(function(index) {
    $(this).css({
      'animation-delay': (index * 0.1) + 's',
      'animation': 'fadeIn 0.6s ease forwards'
    });
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

// ====== Modal Functions ======
function showModal(dest) {
  const activities = dest.activities ? dest.activities.map(a => `<li>${a}</li>`).join("") : "<li>-</li>";
  const foods = dest.foods ? dest.foods.map(f => `<li>${f}</li>`).join("") : "<li>-</li>";
  const stories = dest.stories || "";
  
  // Generate gallery HTML if available
  let galleryHTML = "";
  if (dest.gallery && dest.gallery.length > 0) {
    galleryHTML = `
      <div class="modal-gallery">
        <h3>Galeri Foto</h3>
        <div class="gallery-grid">
          ${dest.gallery.map(item => `
            <div class="gallery-item">
              <img src="${item.img}" alt="${item.caption}" onerror="this.src='assets/placeholder.jpg'">
              <p class="gallery-caption">${item.caption}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  $("#modalBody").html(`
    <img src="${dest.img}" alt="${dest.name}" class="modal-hero">
    <div class="modal-info">
      <h2 class="modal-title">${dest.name}</h2>
      <p class="modal-location">
        <i class="fas fa-map-marker-alt"></i>
        ${dest.location}
      </p>
      <div class="modal-description">${dest.desc}</div>
      
      ${galleryHTML}
      
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

function openLightbox(imgSrc, caption) {
  $("#lightboxImg").attr("src", imgSrc);
  $("#lightboxCaption").text(caption);
  $("#lightbox").addClass("active");
}

function closeLightbox() {
  $("#lightbox").removeClass("active");
}

// ====== Utility Functions ======
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

// ====== Event Handlers ======
$(document).ready(function () {
  renderDestinations(destinations);

  $("#searchInput").on("input", applyFilters);
  $("#regionFilter").on("change", applyFilters);
  $("#typeFilter").on("change", applyFilters);

  $(document).on("click", ".detail-btn", function (e) {
    e.stopPropagation();
    const id = $(this).data("id");
    const dest = destinations.find(d => d.id === id);
    if (dest) showModal(dest);
  });

  $(document).on("click", ".wishlist-btn", function (e) {
    e.stopPropagation();
    const id = $(this).data("id");
    if (!wishlist.includes(id)) {
      wishlist.push(id);
      $(this).addClass("active").html('<i class="fas fa-heart"></i> Wishlisted');
    } else {
      wishlist = wishlist.filter(w => w !== id);
      $(this).removeClass("active").html('<i class="fas fa-heart"></i> Wishlist');
    }
  });

  $(document).on("click", ".visited-btn", function (e) {
    e.stopPropagation();
    const id = $(this).data("id");
    if (!visited.includes(id)) {
      visited.push(id);
      $(this).addClass("active").html('<i class="fas fa-check"></i> Visited');
    } else {
      visited = visited.filter(v => v !== id);
      $(this).removeClass("active").html('<i class="fas fa-check"></i> Mark Visited');
    }
  });

  $(document).on("click", ".delete-btn", function (e) {
    e.stopPropagation();
    const id = $(this).data("id");
    if (confirm("Are you sure you want to delete this destination?")) {
      destinations = destinations.filter(d => d.id !== id);
      applyFilters();
    }
  });

  $(document).on("click", ".edit-btn", function (e) {
    e.stopPropagation();
    const id = $(this).data("id");
    const dest = destinations.find(d => d.id === id);
    if (dest) openEditModal(dest);
  });

  $(document).on("click", ".destination-item", function (e) {
    if (!$(e.target).closest("button").length) {
      const id = $(this).data("id");
      const dest = destinations.find(d => d.id === id);
      if (dest) showModal(dest);
    }
  });

  $(document).on("click", ".modal-close", function () {
    closeModal();
    closeAddModal();
    closeEditModal();
  });

  $(document).on("click", ".modal-overlay", function (e) {
    if ($(e.target).hasClass("modal-overlay")) {
      closeModal();
      closeAddModal();
      closeEditModal();
    }
  });

  // Gallery image click event
  $(document).on("click", ".gallery-item img", function() {
    const imgSrc = $(this).attr("src");
    const caption = $(this).closest(".gallery-item").find(".gallery-caption").text();
    openLightbox(imgSrc, caption);
  });

  // Close lightbox on background click
  $("#lightbox").on("click", function(e) {
    if ($(e.target).is("#lightbox")) {
      closeLightbox();
    }
  });

  $("#addDestinationForm").on("submit", function (e) {
    e.preventDefault();
    const newDest = {
      id: Date.now().toString(),
      name: $("#destName").val(),
      location: $("#destLocation").val(),
      region: $("#destRegion").val(),
      type: $("#destType").val(),
      img: "assets/" + $("#destImageUrl").val(),
      desc: $("#destDescription").val(),
      history: $("#destHistory").val(),
      activities: [],
      foods: [],
      stories: ""
    };
    destinations.push(newDest);
    renderDestinations(destinations);
    closeAddModal();
    this.reset();
  });

  $("#editDestinationForm").on("submit", function (e) {
    e.preventDefault();
    const id = $("#editDestId").val();
    const index = destinations.findIndex(d => d.id === id);
    if (index !== -1) {
      destinations[index] = {
        ...destinations[index],
        name: $("#editDestName").val(),
        location: $("#editDestLocation").val(),
        region: $("#editDestRegion").val(),
        type: $("#editDestType").val(),
        img: "assets/" + $("#editDestImageUrl").val(),
        desc: $("#editDestDescription").val(),
        history: $("#editDestHistory").val()
      };
      renderDestinations(destinations);
      closeEditModal();
    }
  });

  $(".hamburger").on("click", function () {
    $(".nav-menu").toggleClass("active");
    $(this).toggleClass("active");
  });

  $(".nav-link").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");

    $(".nav-link").removeClass("active");
    $(this).addClass("active");

    if (target === "#home") {
      $("html, body").animate({ scrollTop: $("#home").offset().top }, 500);
    } else if (target === "#destinations") {
      $("html, body").animate({ scrollTop: $("#destinations").offset().top }, 500);
      filterDestinations("all");
    } else if (target === "#about") {
      scrollToAbout();
    }

    $(".nav-menu").removeClass("active");
    $(".hamburger").removeClass("active");
  });

  $(window).on("scroll", function () {
    const scrollPos = $(document).scrollTop();

    const homeTop = $("#home").offset().top - 100;
    const destTop = $("#destinations").offset().top - 100;
    const aboutTop = $("#about").offset().top - 100;

    $(".nav-link").removeClass("active");

    if (scrollPos >= aboutTop) {
      $(".nav-link[href='#about']").addClass("active");
    } else if (scrollPos >= destTop) {
      $(".nav-link[href='#destinations']").addClass("active");
    } else if (scrollPos >= homeTop) {
      $(".nav-link[href='#home']").addClass("active");
    }
  });

  window.addEventListener("scroll", handleScrollAnimations);
  window.addEventListener("load", handleScrollAnimations);

  $(document).on("keydown", function(e) {
    if (e.key === "Escape") {
      closeModal();
      closeAddModal();
      closeEditModal();
    }
  });
});