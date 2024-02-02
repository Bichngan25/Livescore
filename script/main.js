$(document).ready(function () {
  // Filter tab
  const $filterTabItem = $(".filter-tab__item");
  const $filterDropdownList = $(".filter-dropdown__list");
  const $filterDropdownSelected = $(".filter-dropdown__selected");

  $filterTabItem.click(function () {
    $filterTabItem.removeClass("active");
    $(this).addClass("active");
  });

  // Dropdown
  $filterDropdownList.hide();

  $filterDropdownSelected.click(function () {
    $filterDropdownList.toggle();
  });

  $filterDropdownList.find("li").click(function () {
    $filterDropdownList.hide();
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".filter-dropdown").length) {
      $filterDropdownList.hide();
    }
  });
});

// Darkmode
  var toggleSwitch = $('.toggle-switch input[type="checkbox"]');
  var currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    $('html').attr('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      toggleSwitch.prop('checked', true);
    }
  }

  toggleSwitch.on('change', function() {
    if ($(this).is(':checked')) {
      $('html').attr('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      $('html').attr('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
