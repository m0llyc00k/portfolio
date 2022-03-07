{"changed":true,"filter":false,"title":"main.js","tooltip":"/assets/js/main.js","value":"/**\n* Template Name: MyPortfolio - v4.7.0\n* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/\n* Author: BootstrapMade.com\n* License: https://bootstrapmade.com/license/\n*/\n(function() {\n  \"use strict\";\n\n  /**\n   * Easy selector helper function\n   */\n  const select = (el, all = false) => {\n    el = el.trim()\n    if (all) {\n      return [...document.querySelectorAll(el)]\n    } else {\n      return document.querySelector(el)\n    }\n  }\n\n  /**\n   * Easy event listener function\n   */\n  const on = (type, el, listener, all = false) => {\n    let selectEl = select(el, all)\n    if (selectEl) {\n      if (all) {\n        selectEl.forEach(e => e.addEventListener(type, listener))\n      } else {\n        selectEl.addEventListener(type, listener)\n      }\n    }\n  }\n\n  /**\n   * Easy on scroll event listener \n   */\n  const onscroll = (el, listener) => {\n    el.addEventListener('scroll', listener)\n  }\n\n  /**\n   * burgerMenu\n   */\n  const burgerMenu = select('.burger')\n  on('click', '.burger', function(e) {\n    burgerMenu.classList.toggle('active');\n  })\n\n  /**\n   * Porfolio isotope and filter\n   */\n  window.addEventListener('load', () => {\n    let portfolioContainer = select('#portfolio-grid');\n    if (portfolioContainer) {\n      let portfolioIsotope = new Isotope(portfolioContainer, {\n        itemSelector: '.item',\n      });\n\n      let portfolioFilters = select('#filters a', true);\n\n      on('click', '#filters a', function(e) {\n        e.preventDefault();\n        portfolioFilters.forEach(function(el) {\n          el.classList.remove('active');\n        });\n        this.classList.add('active');\n\n        portfolioIsotope.arrange({\n          filter: this.getAttribute('data-filter')\n        });\n        portfolioIsotope.on('arrangeComplete', function() {\n          AOS.refresh()\n        });\n      }, true);\n    }\n\n  });\n\n  /**\n   * Testimonials slider\n   */\n  new Swiper('.testimonials-slider', {\n    speed: 600,\n    loop: true,\n    autoplay: {\n      delay: 5000,\n      disableOnInteraction: false\n    },\n    slidesPerView: 'auto',\n    pagination: {\n      el: '.swiper-pagination',\n      type: 'bullets',\n      clickable: true\n    }\n  });\n\n  /**\n   * Animation on scroll\n   */\n  window.addEventListener('load', () => {\n    AOS.init({\n      duration: 1000,\n      easing: 'ease-in-out',\n      once: true,\n      mirror: false\n    })\n  });\n\n})()","undoManager":{"mark":-2,"position":-1,"stack":[]},"ace":{"folds":[],"scrolltop":1782,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":92,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1646685278356}