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