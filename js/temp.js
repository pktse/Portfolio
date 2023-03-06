window.onscroll = function() {scrollFunction()};

function archive() {
    var archiveButtonTemp = document.getElementById("archiveButton");
    var archiveImages = document.getElementsByClassName("archive");
    if (archiveButtonTemp.innerText == "Show Archived Projects"){
        for(i2 = 0; i2 < archiveImages.length; i2++) {
            archiveImages[i2].style.display= "block";
        }
        archiveButtonTemp.innerText = "Hide Archived Projects"
    }
    else {
        for(i2 = 0; i2 < archiveImages.length; i2++) {
            archiveImages[i2].style.display= "none";
        }
        archiveButtonTemp.innerText = "Show Archived Projects"
    }
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "3vh 0vh 0vw 3vw";
    document.getElementById("logo").style.fontSize = "2vw";
    document.getElementById("navbar-right").style.paddingLeft = "60vw";
    document.getElementById("text").style.fontSize = "0vw";
    // document.getElementById("text").style.display= "none";
    var images = document.getElementsByClassName("social-media-icon");
    for(i1 = 0; i1 < images.length; i1++) {
        images[i1].style.display= "none";
      }
  } else {
    document.getElementById("navbar").style.padding = "50vh 10vw";
    document.getElementById("logo").style.fontSize = "5vw";
    document.getElementById("navbar-right").style.paddingLeft = "30vw";
    document.getElementById("text").style.fontSize = "2vw";
    // document.getElementById("text").style.display= "block";
    var images = document.getElementsByClassName("social-media-icon");
    for(i1 = 0; i1 < images.length; i1++) {
        images[i1].style.display= "block";
      }
  }
}


var links = document.getElementsByClassName("hover-underline-animation");
for (var z = 0; z < links.length; z++) {
links[z].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
  
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })

let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }


  window.addEventListener('load', () => {
    var temp = ".filter-recent"
    if (document.title == "Art") {
      temp = "*"
    }
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        filter: temp
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });
  

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();