// ====== State ======
let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
let visited = JSON.parse(localStorage.getItem('visited') || '[]');

// ====== Render Destinations ======
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
            <a href="destination.html?id=${d.id}" class="action-btn primary detail-btn">
              <i class="fas fa-eye"></i>
              Explore
            </a>
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
function openAddModal() {
  $("#addDestinationModal").addClass("active");
  $("body").css("overflow", "hidden");
}

function closeAddModal() {
  $("#addDestinationModal").removeClass("active");
  $("body").css("overflow", "auto");
  $("#addDestinationForm")[0].reset();
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
  $("body").css("overflow", "hidden");
}

function closeEditModal() {
  $("#editDestinationModal").removeClass("active");
  $("body").css("overflow", "auto");
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
  // Initial render
  renderDestinations(destinations);

  // Search & Filter
  $("#searchInput").on("input", applyFilters);
  $("#regionFilter").on("change", applyFilters);
  $("#typeFilter").on("change", applyFilters);

  // Wishlist Button
  $(document).on("click", ".wishlist-btn", function (e) {
    e.stopPropagation();
    e.preventDefault();
    const id = $(this).data("id");
    
    if (!wishlist.includes(id)) {
      wishlist.push(id);
    } else {
      wishlist = wishlist.filter(w => w !== id);
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    const currentView = $(".toggle-btn.active").data("view") || "all";
    filterDestinations(currentView);
  });

  // Visited Button
  $(document).on("click", ".visited-btn", function (e) {
    e.stopPropagation();
    e.preventDefault();
    const id = $(this).data("id");
    
    if (!visited.includes(id)) {
      visited.push(id);
    } else {
      visited = visited.filter(v => v !== id);
    }
    
    localStorage.setItem('visited', JSON.stringify(visited));
    
    const currentView = $(".toggle-btn.active").data("view") || "all";
    filterDestinations(currentView);
  });

  // Delete Button
  $(document).on("click", ".delete-btn", function (e) {
    e.stopPropagation();
    e.preventDefault();
    
    const id = $(this).data("id");
    const dest = destinations.find(d => d.id === id);
    
    if (!dest) {
      alert("Destination not found!");
      return;
    }
    
    if (confirm(`Are you sure you want to delete "${dest.name}"?`)) {
      const indexToRemove = destinations.findIndex(d => d.id === id);
      if (indexToRemove !== -1) {
        destinations.splice(indexToRemove, 1);
      }
      
      applyFilters();
      alert(`"${dest.name}" has been deleted!`);
    }
  });

  // Edit Button
  $(document).on("click", ".edit-btn", function (e) {
    e.stopPropagation();
    e.preventDefault();
    const id = $(this).data("id");
    const dest = destinations.find(d => d.id === id);
    if (dest) {
      openEditModal(dest);
    }
  });

  // Modal Close Buttons
  $(document).on("click", ".modal-close", function () {
    closeAddModal();
    closeEditModal();
  });

  // Click outside modal to close
  $(document).on("click", ".modal-overlay", function (e) {
    if ($(e.target).hasClass("modal-overlay")) {
      closeAddModal();
      closeEditModal();
    }
  });

  // Add Destination Form
  $("#addDestinationForm").on("submit", function (e) {
    e.preventDefault();
    
    const nameVal = $("#destName").val().trim();
    const locationVal = $("#destLocation").val().trim();
    const regionVal = $("#destRegion").val();
    const typeVal = $("#destType").val();
    const imageVal = $("#destImageUrl").val().trim();
    const descVal = $("#destDescription").val().trim();
    const historyVal = $("#destHistory").val().trim();
    
    if (!nameVal || !locationVal || !regionVal || !typeVal) {
      alert("Please fill all required fields!");
      return;
    }
    
    const newDest = {
      id: "new_" + Date.now(),
      name: nameVal,
      location: locationVal,
      region: regionVal,
      type: typeVal,
      img: imageVal ? "assets/" + imageVal : "assets/placeholder.jpg",
      desc: descVal || "No description available.",
      history: historyVal || "No history available.",
      activities: [],
      foods: [],
      stories: "",
      gallery: []
    };
    
    destinations.push(newDest);
    renderDestinations(destinations);
    closeAddModal();
    
    alert(`"${newDest.name}" has been added successfully!`);
    
    setTimeout(() => {
      $("html, body").animate({ 
        scrollTop: $(document).height() 
      }, 800);
    }, 200);
  });

  // Edit Destination Form
  $("#editDestinationForm").on("submit", function (e) {
    e.preventDefault();
    
    const id = $("#editDestId").val();
    const index = destinations.findIndex(d => d.id === id);
    
    if (index === -1) {
      alert("Error: Destination not found!");
      return;
    }
    
    const oldName = destinations[index].name;
    
    destinations[index].name = $("#editDestName").val().trim();
    destinations[index].location = $("#editDestLocation").val().trim();
    destinations[index].region = $("#editDestRegion").val();
    destinations[index].type = $("#editDestType").val();
    destinations[index].img = "assets/" + $("#editDestImageUrl").val().trim();
    destinations[index].desc = $("#editDestDescription").val().trim();
    destinations[index].history = $("#editDestHistory").val().trim();
    
    renderDestinations(destinations);
    closeEditModal();
    
    alert(`"${oldName}" has been updated successfully!`);
  });

  // Hamburger Menu
  $(".hamburger").on("click", function () {
    $(".nav-menu").toggleClass("active");
    $(this).toggleClass("active");
  });

  // Navigation Links
  $(".nav-link").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");

    $(".nav-link").removeClass("active");
    $(this).addClass("active");

    if (target === "index.html#home" || target === "#home") {
      $("html, body").animate({ scrollTop: $("#home").offset().top }, 500);
    } else if (target === "index.html#destinations" || target === "#destinations") {
      scrollToDestinations();
    } else if (target === "index.html#about" || target === "#about") {
      scrollToAbout();
    }

    $(".nav-menu").removeClass("active");
    $(".hamburger").removeClass("active");
  });

  // Scroll Active Nav
  $(window).on("scroll", function () {
    const scrollPos = $(document).scrollTop();

    if ($("#home").length) {
      const homeTop = $("#home").offset().top - 100;
      const destTop = $("#destinations").offset().top - 100;
      const aboutTop = $("#about").offset().top - 100;

      $(".nav-link").removeClass("active");

      if (scrollPos >= aboutTop) {
        $(".nav-link[href='#about'], .nav-link[href='index.html#about']").addClass("active");
      } else if (scrollPos >= destTop) {
        $(".nav-link[href='#destinations'], .nav-link[href='index.html#destinations']").addClass("active");
      } else if (scrollPos >= homeTop) {
        $(".nav-link[href='#home'], .nav-link[href='index.html#home']").addClass("active");
      }
    }
  });

  // Scroll Animations
  window.addEventListener("scroll", handleScrollAnimations);
  window.addEventListener("load", handleScrollAnimations);

  // ESC key to close modals
  $(document).on("keydown", function(e) {
    if (e.key === "Escape") {
      closeAddModal();
      closeEditModal();
    }
  });
});