(function () {
  "use strict";

  /* ===== PROJECT DATA ===== */
  var projects = [
    {
      name: "Sanofi",
      location: "Shanghai",
      images: [
        "assets/images/projects/Sanofi, Shanghai/saf_cd_1.jpg",
        "assets/images/projects/Sanofi, Shanghai/saf_cd_2.jpg",
        "assets/images/projects/Sanofi, Shanghai/saf_cd_3.jpg",
        "assets/images/projects/Sanofi, Shanghai/saf_cd_4.jpg",
        "assets/images/projects/Sanofi, Shanghai/saf_cd_5.jpg",
        "assets/images/projects/Sanofi, Shanghai/saf_cd_6.jpg",
        "assets/images/projects/Sanofi, Shanghai/saf_cd_7.jpg",
      ],
    },
    {
      name: "DFS",
      location: "Shanghai",
      images: [
        "assets/images/projects/DFS, Shanghai/dfs_sh_1.jpg",
        "assets/images/projects/DFS, Shanghai/dfs_sh_2.jpg",
        "assets/images/projects/DFS, Shanghai/dfs_sh_3.jpg",
        "assets/images/projects/DFS, Shanghai/dfs_sh_4.jpg",
        "assets/images/projects/DFS, Shanghai/dfs_sh_5.jpg",
        "assets/images/projects/DFS, Shanghai/dfs_sh_6.jpg",
      ],
    },
    {
      name: "CBRE",
      location: "Wuhan",
      images: [
        "assets/images/projects/CBRE, Wuhan/cbre_wh_1.jpg",
        "assets/images/projects/CBRE, Wuhan/cbre_wh_2.jpg",
        "assets/images/projects/CBRE, Wuhan/cbre_wh_3.jpg",
        "assets/images/projects/CBRE, Wuhan/cbre_wh_4.jpg",
        "assets/images/projects/CBRE, Wuhan/cbre_wh_5.jpg",
        "assets/images/projects/CBRE, Wuhan/cbre_wh_6.jpg",
      ],
    },
    {
      name: "Alibaba",
      location: "Wuhan",
      images: [
        "assets/images/projects/Alibaba, Wuhan/ali_wh_1.jpg",
        "assets/images/projects/Alibaba, Wuhan/ali_wh_2.jpg",
        "assets/images/projects/Alibaba, Wuhan/ali_wh_3.jpg",
        "assets/images/projects/Alibaba, Wuhan/ali_wh_4.jpg",
      ],
    },
    {
      name: "Pivotal Software",
      location: "Beijing",
      images: [
        "assets/images/projects/Pivotal Software, Beijing/piv_01.jpg",
        "assets/images/projects/Pivotal Software, Beijing/piv_02.jpg",
        "assets/images/projects/Pivotal Software, Beijing/piv_03.jpg",
        "assets/images/projects/Pivotal Software, Beijing/piv_04.jpg",
        "assets/images/projects/Pivotal Software, Beijing/piv_05.jpg",
        "assets/images/projects/Pivotal Software, Beijing/piv_06.jpg",
        "assets/images/projects/Pivotal Software, Beijing/piv_07.jpg",
      ],
    },
    {
      name: "MSFT Beijing Telesales",
      location: "Beijing",
      images: [
        "assets/images/projects/MSFT Beijing Telesales, Beijing/msft_01.jpg",
        "assets/images/projects/MSFT Beijing Telesales, Beijing/msft_02.jpg",
        "assets/images/projects/MSFT Beijing Telesales, Beijing/msft_03.jpg",
        "assets/images/projects/MSFT Beijing Telesales, Beijing/msft_04.jpg",
        "assets/images/projects/MSFT Beijing Telesales, Beijing/msft_05.jpg",
        "assets/images/projects/MSFT Beijing Telesales, Beijing/msft_06.jpg",
        "assets/images/projects/MSFT Beijing Telesales, Beijing/msft_07.jpg",
        "assets/images/projects/MSFT Beijing Telesales, Beijing/msft_08.jpg",
        "assets/images/projects/MSFT Beijing Telesales, Beijing/msft_09.jpg",
      ],
    },
    {
      name: "Dell EMC",
      location: "Beijing",
      images: [
        "assets/images/projects/Dell EMC, Beijing/dell_01.jpg",
        "assets/images/projects/Dell EMC, Beijing/dell_02.jpg",
        "assets/images/projects/Dell EMC, Beijing/dell_03.jpg",
        "assets/images/projects/Dell EMC, Beijing/dell_04.jpg",
        "assets/images/projects/Dell EMC, Beijing/dell_05.jpg",
        "assets/images/projects/Dell EMC, Beijing/dell_06.jpg",
        "assets/images/projects/Dell EMC, Beijing/dell_07.jpg",
        "assets/images/projects/Dell EMC, Beijing/dell_08.jpg",
      ],
    },
    {
      name: "Legend Holdings",
      location: "Beijing",
      images: [
        "assets/images/projects/Legend Holdings, Beijing/hi_01.jpg",
        "assets/images/projects/Legend Holdings, Beijing/hi_02.jpg",
        "assets/images/projects/Legend Holdings, Beijing/hi_03.jpg",
        "assets/images/projects/Legend Holdings, Beijing/hi_04.jpg",
        "assets/images/projects/Legend Holdings, Beijing/hi_05.jpg",
        "assets/images/projects/Legend Holdings, Beijing/hi_06.jpg",
        "assets/images/projects/Legend Holdings, Beijing/hl_07.jpg",
        "assets/images/projects/Legend Holdings, Beijing/hl_08.jpg",
      ],
    },
    {
      name: "Bayer China",
      location: "Beijing",
      images: [
        "assets/images/projects/Bayer China, Beijing/bay-01.jpg",
        "assets/images/projects/Bayer China, Beijing/bay-02.jpg",
        "assets/images/projects/Bayer China, Beijing/bay-03.jpg",
        "assets/images/projects/Bayer China, Beijing/bay-04.jpg",
        "assets/images/projects/Bayer China, Beijing/bay-05.jpg",
        "assets/images/projects/Bayer China, Beijing/bay-06.jpg",
        "assets/images/projects/Bayer China, Beijing/bay-07.jpg",
      ],
    },
    {
      name: "Darice",
      location: "Hong Kong",
      images: [
        "assets/images/projects/Darice, Hong Kong/dar_1.jpg",
        "assets/images/projects/Darice, Hong Kong/dar_2.jpg",
        "assets/images/projects/Darice, Hong Kong/dar_3.jpg",
        "assets/images/projects/Darice, Hong Kong/dar_4.jpg",
      ],
    },
    {
      name: "Safilo Far East",
      location: "Hong Kong",
      images: [
        "assets/images/projects/Safilo Far East, Hong Kong/saf-01.jpg",
        "assets/images/projects/Safilo Far East, Hong Kong/saf-02.jpg",
        "assets/images/projects/Safilo Far East, Hong Kong/saf-03.jpg",
        "assets/images/projects/Safilo Far East, Hong Kong/saf-04.jpg",
        "assets/images/projects/Safilo Far East, Hong Kong/saf-05.jpg",
      ],
    },
    {
      name: "American Club",
      location: "Hong Kong",
      images: [
        "assets/images/projects/American Club, Hong Kong/Am-1.jpg",
        "assets/images/projects/American Club, Hong Kong/Am-2.jpg",
        "assets/images/projects/American Club, Hong Kong/Am-3.jpg",
        "assets/images/projects/American Club, Hong Kong/Am-4.jpg",
        "assets/images/projects/American Club, Hong Kong/Am-5.jpg",
      ],
    },
    {
      name: "Shure Asia",
      location: "Hong Kong",
      images: [
        "assets/images/projects/Shure Asia, Hong Kong/Shu-01.jpg",
        "assets/images/projects/Shure Asia, Hong Kong/Shu-02.jpg",
        "assets/images/projects/Shure Asia, Hong Kong/Shu-03.jpg",
        "assets/images/projects/Shure Asia, Hong Kong/Shu-04.jpg",
        "assets/images/projects/Shure Asia, Hong Kong/Shu-05.jpg",
        "assets/images/projects/Shure Asia, Hong Kong/Shu-06.jpg",
      ],
    },
    {
      name: "VMware",
      location: "Hong Kong",
      images: [
        "assets/images/projects/VMware, Hong Kong/VM-01.jpg",
        "assets/images/projects/VMware, Hong Kong/VM-02.jpg",
        "assets/images/projects/VMware, Hong Kong/VM-03.jpg",
        "assets/images/projects/VMware, Hong Kong/VM-04.jpg",
        "assets/images/projects/VMware, Hong Kong/VM-05.jpg",
      ],
    },
    {
      name: "Haymarket Media",
      location: "Hong Kong",
      images: [
        "assets/images/projects/Haymarket Media, Hong Kong/hmk-01.jpg",
        "assets/images/projects/Haymarket Media, Hong Kong/hmk-02.jpg",
        "assets/images/projects/Haymarket Media, Hong Kong/hmk-03.jpg",
        "assets/images/projects/Haymarket Media, Hong Kong/hmk-04.jpg",
        "assets/images/projects/Haymarket Media, Hong Kong/hmk-05.jpg",
      ],
    },
    {
      name: "Confidential Financial Institution",
      location: "Hong Kong",
      images: [
        "assets/images/projects/Confidential financial institution B, Hong Kong/BL1_01.jpg",
        "assets/images/projects/Confidential financial institution B, Hong Kong/BL1_02.jpg",
        "assets/images/projects/Confidential financial institution B, Hong Kong/BL1_03.jpg",
        "assets/images/projects/Confidential financial institution B, Hong Kong/BL1_04.jpg",
        "assets/images/projects/Confidential financial institution B, Hong Kong/BL1_05.jpg",
      ],
    },
    {
      name: "Confidential Financial Institution",
      location: "Hong Kong",
      images: [
        "assets/images/projects/Confidential financial institution A, Hong Kong/CFI_L28_01.jpg",
        "assets/images/projects/Confidential financial institution A, Hong Kong/CFI_L28_02.jpg",
        "assets/images/projects/Confidential financial institution A, Hong Kong/CFI_L28_03.jpg",
        "assets/images/projects/Confidential financial institution A, Hong Kong/CFI_L28_04.jpg",
        "assets/images/projects/Confidential financial institution A, Hong Kong/CFI_L28_05.jpg",
      ],
    },
    {
      name: "HongKong Land",
      location: "Hong Kong",
      images: [
        "assets/images/projects/HongKong Land, Hong Kong/HKL_01.jpg",
        "assets/images/projects/HongKong Land, Hong Kong/HKL_02.jpg",
        "assets/images/projects/HongKong Land, Hong Kong/HKL_03.jpg",
        "assets/images/projects/HongKong Land, Hong Kong/HKL_04.jpg",
        "assets/images/projects/HongKong Land, Hong Kong/HKL_05.jpg",
        "assets/images/projects/HongKong Land, Hong Kong/HKL_06.jpg",
      ],
    },
    {
      name: "BRG",
      location: "Hong Kong",
      images: [
        "assets/images/projects/BRG, Hong Kong/brg_01.jpg",
        "assets/images/projects/BRG, Hong Kong/brg_02.jpg",
        "assets/images/projects/BRG, Hong Kong/brg_03.jpg",
        "assets/images/projects/BRG, Hong Kong/brg_04.jpg",
        "assets/images/projects/BRG, Hong Kong/brg_07.jpg",
      ],
    },
  ];

  /* ===== MOBILE NAV ===== */
  var toggle = document.querySelector(".navbar__toggle");
  var navLinks = document.querySelector(".navbar__links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".navbar")) {
        navLinks.classList.remove("open");
      }
    });
  }

  /* ===== PROJECT GRID RENDERING ===== */
  var grid = document.querySelector(".project-grid");

  if (grid) {
    projects.forEach(function (project, index) {
      var card = document.createElement("div");
      card.className = "project-card";
      card.setAttribute("data-location", project.location);
      card.setAttribute("data-index", index);

      card.innerHTML =
        '<img class="project-card__img" src="' +
        project.images[0] +
        '" alt="' +
        project.name +
        " interior design project in " +
        project.location +
        '" loading="lazy">' +
        '<div class="project-card__info">' +
        '<div class="project-card__name">' +
        project.name +
        "</div>" +
        '<div class="project-card__location">' +
        project.location +
        "</div>" +
        "</div>";

      grid.appendChild(card);
    });
  }

  /* ===== FILTER ===== */
  var filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");

      var filter = btn.getAttribute("data-filter");
      var cards = document.querySelectorAll(".project-card");

      cards.forEach(function (card) {
        if (filter === "All" || card.getAttribute("data-location") === filter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  /* ===== LIGHTBOX ===== */
  var lightbox = document.querySelector(".lightbox");
  var lightboxImg = document.querySelector(".lightbox__img");
  var lightboxClose = document.querySelector(".lightbox__close");
  var lightboxPrev = document.querySelector(".lightbox__nav--prev");
  var lightboxNext = document.querySelector(".lightbox__nav--next");
  var lightboxCounter = document.querySelector(".lightbox__counter");
  var lightboxCaption = document.querySelector(".lightbox__caption");

  var currentProject = null;
  var currentIndex = 0;

  function openLightbox(projectIndex, imageIndex) {
    currentProject = projects[projectIndex];
    currentIndex = imageIndex || 0;
    updateLightboxImage();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    currentProject = null;
  }

  function updateLightboxImage() {
    if (!currentProject) return;
    lightboxImg.src = currentProject.images[currentIndex];
    lightboxCounter.textContent =
      currentIndex + 1 + " / " + currentProject.images.length;
    lightboxCaption.textContent =
      currentProject.name + " — " + currentProject.location;
  }

  function nextImage() {
    if (!currentProject) return;
    currentIndex = (currentIndex + 1) % currentProject.images.length;
    updateLightboxImage();
  }

  function prevImage() {
    if (!currentProject) return;
    currentIndex =
      (currentIndex - 1 + currentProject.images.length) %
      currentProject.images.length;
    updateLightboxImage();
  }

  /* Click on project card */
  document.addEventListener("click", function (e) {
    var card = e.target.closest(".project-card");
    if (card) {
      var index = parseInt(card.getAttribute("data-index"), 10);
      openLightbox(index, 0);
    }
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener("click", nextImage);
  if (lightboxPrev) lightboxPrev.addEventListener("click", prevImage);

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (!lightbox || !lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });

  /* ===== HERO SLIDESHOW ===== */
  var slides = document.querySelectorAll(".hero__slide");

  if (slides.length > 1) {
    var currentSlide = 0;

    setInterval(function () {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 4000);
  }
})();
