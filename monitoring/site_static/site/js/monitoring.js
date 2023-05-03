$(document).ready(function() {
  // Удаление индикатора загрузки
  $('.loading').remove();
  // Активация всплывающих подсказок
  $('[data-toggle="tooltip"]').tooltip();
  // Поворот стрелок в меню
  $('ul.nav a', '#side-menu').has('span.fa-chevron-right').click(function (e) {
    e.preventDefault();
    let $degree = $(this).find('span.fa-chevron-right');
    if ($degree.hasClass('fa-rotate-90')) {
      $degree.removeClass('fa-rotate-90');
    } else {
      $degree.addClass('fa-rotate-90');
    }
  });

  $('.round-chart').easyPieChart({
    'scaleColor': false,
    'lineWidth': 20,
    'lineCap': 'butt',
    'barColor': '#6d5cae',
    'trackColor': '#e5e9ec',
    'size': 190
  });
});