// Mobile menu actions
var app = {
  openNav: function() {
    document.getElementById("main-nav").style.width = "100%";
  },
  closeNav: function() {
    document.getElementById("main-nav").style.width = "0%";
  },
  toggle: function(
    parent,
    target,
    childSelector = null,
    selectorToReplace = null
  ) {
    var currents = parent.querySelectorAll(`.${childSelector}`);
    for (let i = 0; i < currents.length; i++) {
      currents[i].classList.remove(`${childSelector}`);
      currents[i].classList.add(`${selectorToReplace}`);
    }
    target.classList.add(`${childSelector}`);
    target.classList.remove(`${selectorToReplace}`);
  },
  off: function(parent, childSelector = null, selectorToReplace = null) {
    var currents = parent.querySelectorAll(`.${childSelector}`);
    for (let i = 0; i < currents.length; i++) {
      currents[i].classList.remove(`${childSelector}`);
      currents[i].classList.add(`${selectorToReplace}`);
    }
  },
  selectBlock: function(blockNameId) {
    let target = document.getElementById(blockNameId);
    let parent = document.getElementById(blockNameId).parentElement;
    app.toggle(parent, target, "show", "hide");
  },
  deselectBlock: function(blockNameId) {
    let parent = document.getElementById(blockNameId).parentElement;
    app.off(parent, "show", "hide");
  },
  selectLinkIn: function(parentName, linkClass) {
    let parent = document.getElementById(parentName);
    let linkTargetObjectName;
    document.addEventListener("click", function(e) {
      if (linkTargetObjectName != undefined && linkTargetObjectName != null) {
        if (
          e.target.tagName != "A" &&
          !e.target.classList.contains(`${linkClass}`)
        ) {
          e.preventDefault();
          app.off(parent, "active");
          app.deselectBlock(linkTargetObjectName);
        }
      }
    });
    parent.addEventListener("click", function(e) {
      if (
        e.target.tagName == "A" &&
        e.target.classList.contains(`${linkClass}`)
      ) {
        e.preventDefault();
        linkTargetObjectName = e.target.dataset.linkTo;
        app.toggle(parent, e.target, "active");
        app.selectBlock(linkTargetObjectName);
      }
    });
  },
  onResize: function(min, offset) {
    let menu = document.getElementById("main-nav");
    (function() {
      window.addEventListener("resize", resizeThrottler, false);
      var resizeTimeout;
      function resizeThrottler() {
        if (!resizeTimeout) {
          resizeTimeout = setTimeout(function() {
            resizeTimeout = null;
            actualResizeHandler();
          }, 66);
        }
      }
      function actualResizeHandler() {
        if (window.innerWidth < min && window.innerWidth > min - offset) {
          menu.style.width = "0%";
        }
        if (window.innerWidth > min && window.innerWidth < min + offset) {
          menu.style.width = "100%";
        }
      }
    })();
  }
};

app.selectLinkIn("people-section-links", "people-section-link");
app.onResize(991, 40);
