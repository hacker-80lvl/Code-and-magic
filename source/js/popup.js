(function() {
  var setup = document.querySelector(".setup");
  var setupOpen = document.querySelector(".setup-open");
  var setupClose = setup.querySelector(".setup-close");

  var onPopupEscPress = function(evt) {
    if (evt.keyCode === 27) {
      closePopup();
    }
  };

  var openPopup = function() {
    setup.classList.remove("hidden");
    document.addEventListener("keydown", onPopupEscPress);
  };

  var closePopup = function() {
    setup.classList.add("hidden");
    document.removeEventListener("keydown", onPopupEscPress);
  };

  setupOpen.addEventListener("click", function() {
    openPopup();
  });

  setupOpen.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 13) openPopup();
  });

  setupClose.addEventListener("click", function() {
    closePopup();
  });

  setupClose.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 13) closePopup();
  });
})();
