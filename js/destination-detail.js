// Get destination ID from URL
const urlParams = new URLSearchParams(window.location.search);
const destId = urlParams.get('id');

// State management
let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
let visited = JSON.parse(localStorage.getItem('visited') || '[]');

// Load destination data
$(document).ready(function() {
  if (!destId) {
    window.location.href = 'index.html';
    return;
  }

  const destination = destinations.find(d => d.id === destId);
  
  if (!destination) {
    window.location.href = 'index.html';
    return;
  }

  renderDestination(destination);
  renderRelatedDestinations(destination);
  updateWishlistButton();
  updateVisitedButton();
  
  // Hamburger menu
  $(".hamburger").on("click", function () {
    $(".nav-menu").toggleClass("active");
    $(this).toggleClass("active");
  });
  
  // Close menu when clicking nav links
  $(".nav-link").on("click", function () {
    $(".nav-menu").removeClass("active");
    $(".hamburger").removeClass("active");
  });
});

function renderDestination(dest) {
  // Title and Meta
  $('#pageTitle').text(`${dest.name} - NUSANTARA`);
  $('#breadcrumbName').text(dest.name);
  $('#detailTitle').text(dest.name);
  $('#detailLocation').html(`<i class="fas fa-map-marker-alt"></i> ${dest.location}`);
  
  // Meta tags
  $('#detailMeta').html(`
    <span class="meta-tag type"><i class="fas fa-tag"></i> ${dest.type}</span>
    <span class="meta-tag region"><i class="fas fa-map"></i> ${dest.region}</span>
  `);

  // Hero background
  $('#detailHero').css('background-image', `url('${dest.img}')`);

  // Description
  $('#detailDescription').text(dest.desc);

  // Gallery
  if (dest.gallery && dest.gallery.length > 0) {
    let galleryHTML = '';
    dest.gallery.forEach(item => {
      galleryHTML += `
        <div class="gallery-item" onclick="openLightbox('${item.img}', '${item.caption}')">
          <img src="${item.img}" alt="${item.caption}" onerror="this.src='assets/placeholder.jpg'">
          <div class="gallery-overlay">
            <i class="fas fa-search-plus"></i>
          </div>
          <p class="gallery-caption">${item.caption}</p>
        </div>
      `;
    });
    $('#detailGallery').html(galleryHTML);
  } else {
    $('#gallerySection').hide();
  }

  // History
  $('#detailHistory').html(`<p>${dest.history}</p>`);

  // Stories
  $('#detailStories').html(`<p>${dest.stories || 'No stories available.'}</p>`);

  // Activities
  if (dest.activities && dest.activities.length > 0) {
    let activitiesHTML = '';
    dest.activities.forEach(activity => {
      activitiesHTML += `<li><i class="fas fa-check-circle"></i> ${activity}</li>`;
    });
    $('#detailActivities').html(activitiesHTML);
  } else {
    $('#detailActivities').html('<li>No activities listed</li>');
  }

  // Foods
  if (dest.foods && dest.foods.length > 0) {
    let foodsHTML = '';
    dest.foods.forEach(food => {
      foodsHTML += `<li><i class="fas fa-utensils"></i> ${food}</li>`;
    });
    $('#detailFoods').html(foodsHTML);
  } else {
    $('#detailFoods').html('<li>No foods listed</li>');
  }
}

function renderRelatedDestinations(currentDest) {
  const related = destinations
    .filter(d => d.id !== currentDest.id && (d.region === currentDest.region || d.type === currentDest.type))
    .slice(0, 3);

  if (related.length === 0) {
    $('#relatedDestinations').html('<p style="color: #999; text-align: center; padding: 20px 0;">No related destinations found.</p>');
    return;
  }

  let html = '';
  related.forEach(dest => {
    html += `
      <a href="destination.html?id=${dest.id}" class="related-card">
        <img src="${dest.img}" alt="${dest.name}" onerror="this.src='assets/placeholder.jpg'">
        <div class="related-info">
          <h4>${dest.name}</h4>
          <p><i class="fas fa-map-marker-alt"></i> ${dest.location}</p>
        </div>
      </a>
    `;
  });
  $('#relatedDestinations').html(html);
}

function updateWishlistButton() {
  const isWishlisted = wishlist.includes(destId);
  const btn = $('#sidebarWishlist');
  
  if (isWishlisted) {
    btn.addClass('active').html('<i class="fas fa-heart"></i> In Wishlist');
  } else {
    btn.removeClass('active').html('<i class="fas fa-heart"></i> Add to Wishlist');
  }
}

function updateVisitedButton() {
  const isVisited = visited.includes(destId);
  const btn = $('#sidebarVisited');
  
  if (isVisited) {
    btn.addClass('active').html('<i class="fas fa-check"></i> Visited');
  } else {
    btn.removeClass('active').html('<i class="fas fa-check"></i> Mark as Visited');
  }
}

// Event handlers
$('#sidebarWishlist').on('click', function() {
  if (wishlist.includes(destId)) {
    wishlist = wishlist.filter(id => id !== destId);
  } else {
    wishlist.push(destId);
  }
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateWishlistButton();
});

$('#sidebarVisited').on('click', function() {
  if (visited.includes(destId)) {
    visited = visited.filter(id => id !== destId);
  } else {
    visited.push(destId);
  }
  localStorage.setItem('visited', JSON.stringify(visited));
  updateVisitedButton();
});

function shareDestination() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: window.location.href
    }).catch(() => {
      // Fallback if share fails
      copyToClipboard();
    });
  } else {
    copyToClipboard();
  }
}

function copyToClipboard() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert('Link copied to clipboard!');
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = url;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Link copied to clipboard!');
  });
}

function openLightbox(imgSrc, caption) {
  $('#lightboxImg').attr('src', imgSrc);
  $('#lightboxCaption').text(caption);
  $('#lightbox').addClass('active');
  $('body').css('overflow', 'hidden');
}

function closeLightbox() {
  $('#lightbox').removeClass('active');
  $('body').css('overflow', 'auto');
}

$('#lightbox').on('click', function(e) {
  if ($(e.target).is('#lightbox') || $(e.target).closest('.lightbox-close').length) {
    closeLightbox();
  }
});

$(document).on('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

function scrollToTop() {
  $('html, body').animate({ scrollTop: 0 }, 600);
}

// Show/hide back to top button
$(window).on('scroll', function() {
  if ($(window).scrollTop() > 300) {
    $('#backToTop').addClass('show');
  } else {
    $('#backToTop').removeClass('show');
  }
});