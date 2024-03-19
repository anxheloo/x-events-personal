document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var lines = document.querySelectorAll(".line");
    lines.forEach(function (line) {
      line.classList.add("fade-out-element");
    });
  }, 3000);

  setTimeout(function () {
    var elementOne = document.querySelectorAll(".elementOne");

    elementOne.forEach(function (elementOne) {
      elementOne.classList.add("enlargeElementOne");
    });
  }, 5000);

  setTimeout(function () {
    var elementTwo = document.querySelectorAll(".elementTwo");

    elementTwo.forEach(function (elementTwo) {
      elementTwo.classList.add("enlargeElementTwo");
    });
  }, 5000);

  setTimeout(function () {
    var secondPage = document.querySelectorAll(".secondHomePage");

    secondPage.forEach(function (secondPage) {
      secondPage.classList.remove("hidden");
    });
  }, 6000);
});

$(document).ready(function () {
  jQuery("#button-mobile").click(function () {
    jQuery("#mobile-menu-2").toggle();
    if (jQuery("#mobile-menu-2").is(":visible")) {
      jQuery("#mobile-menu-2").css("display", "flex");
    }
  });

  var current = location.pathname;
  $("#mobile-menu-2 a").each(function () {
    var $this = $(this);
    // if the current path is like this link, make it active
    if (current.includes($this.attr("id"))) {
      $this.addClass("underscore");
    }
  });

  $(".profilebutton").on("click", function () {
    var currentFilter = $(".logInfo").css("filter");
    $(".accountReg").toggle();
    if (window.innerWidth <= 1023) {
      $(".eventshome").toggle();
    }
    if (currentFilter === "none") {
      $(".logInfo").css("filter", "blur(15px)");
    } else {
      $(".logInfo").css("filter", "none");
    }
  });

  const toggleShowPassword = () => {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  const eyeIcon = document.getElementById("eye-icon-container");
  if (eyeIcon) {
    eyeIcon.addEventListener("click", toggleShowPassword);
  }
});
