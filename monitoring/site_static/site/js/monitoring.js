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

  // Линейная диаграмма
  // $('.stacked-area', '#ration-stock').highcharts({
  //   // Общие настройки диаграммы
  //   chart: {
  //     // Тип серии диаграммы (может быть любым из plotOptions или series)
  //     type: 'area'
  //   },
  //   // Основной заголовок
  //   title: {
  //     // Текст заголовка
  //     text: ''
  //   },
  //   // Настройки оси X (обычно горизонтальная)
  //   xAxis: {
  //     // Разрешить ли десятичные дроби по этой оси?
  //     allowDecimals: false,
  //     // Метки оси показывают число или категорию для каждого деления
  //     labels: {
  //       // Функция обратного вызова JS для форматирования метки. Значение задается this.value
  //       // Дополнительные свойства - axis, chart, isFirst, isLast
  //       // Значение formatter по умолчанию можно вызвать this.axis.defaultLabelFormatter.call(this) внутри функции
  //       formatter: function() {
  //         return this.value; // чистое, не отформатированное число года
  //       }
  //     }
  //   },
  //   // Настройки оси Y (обычно вертикальная)
  //   yAxis: {
  //     // Заголовк оси, показываемый рядом с линией оси
  //     title: {
  //       // Текст заголовка
  //       text: 'Ration stock'
  //     },
  //     // Метки оси показывают число или категорию для каждого деления
  //     labels: {
  //       // см. выше для оси X
  //       formatter: function() {
  //         return this.value / 1000 + 'k';
  //       }
  //     }
  //   },
  //   // Всплывающие подсказки
  //   tooltip: {
  //     // HTML-форматирование вывода
  //     pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br>warheads in {point.x}'
  //   },
  //   // объект-оболочка для каждого типа конфигурации серии
  //   plotOptions: {
  //     // Тип площади
  //     area: {
  //       // Определяет начальное значение по оси X, если оно не указано в серии
  //       pointStart: 100,
  //       // Варианты точечных маркеров линейных рядов. Свойства fillColor, lineColor, lineWidth и др. определяют внешний вид маркеров
  //       marker: {
  //         // Включение или отключение маркера точки. Если undefined, то маркеры скрыты, если точки расположены плотно, и показаны в другом случае
  //         enabled: false,
  //         // Предопределенная форма или символ для маркера (circle, square, diamond, triangle, triangle-down)
  //         // Кроме этого можно добавить символ из картинки (url(graphic.png))
  //         symbol: 'circle',
  //         // Радиус точечного маркера
  //         radius: 2,
  //         // Состояния отдельной точки маркера
  //         states: {
  //           // Состояние при наведении курсора на маркер точки
  //           hover: {
  //             // Включение/отключение маркера точки
  //             enabled: true
  //           }
  //         }
  //       }
  //     }
  //   },
  //   // Описание серий и данных для них для каждого типа в API
  //   series: [{
  //     // Имя серии, показываемое в легенде и всплывающих подсказках
  //     name: 'Doge ration stock',
  //     // Массив данных точек для серии
  //     data: [null, null, null, null, null, 6, 11, 32, 110, 369, 640,
  //           1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
  //           27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
  //           26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
  //           24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
  //           22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
  //           10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104],
  //     // Основной цвет серии. В линейной серии относится к линии и точечным маркерам
  //     color: '#1bc98e'
  //   },
  //   {
  //     name: 'Evil cat stock',
  //     data: [null, null, null, null, null, null, null, null, null, null,
  //           5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
  //           4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
  //           15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
  //           33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
  //           35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
  //           21000, 20000, 19000, 18000, 17000, 16000],
  //     color: '#676f84'
  //   }]
  // });

  // Получение ссылки на элемент canvas в DOM
  // const $grafica = document.querySelector("#grafica");
  // // Tags - это метки, которые идут по оси X.
  // const tags = ["Январь", "Февраль", "Март", "Апрель"]
  // // У нас может быть несколько наборов данных. Давайте начнем с одного
  // const dataSales2020 = {
  //     label: "Продажи за месяц",
  //     data: [5000, 1500, 8000, 5102], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
  //     backgroundColor: 'rgba(54, 162, 235, 0.2)', // Цвет фона
  //     borderColor: 'rgba(54, 162, 235, 1)', // Цвет границ
  //     borderWidth: 1,// Толщина границ
  // };
  // var riceData = {
  //   labels : ["Январь", "Февраль", "Март", "Апрель"],
  //   datasets : [
  //     {
  //       label: "Продажи за месяц",
  //       data: [5000, 1500, 8000, 5102], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
  //       backgroundColor: 'rgba(54, 162, 235, 0.2)', // Цвет фона
  //       borderColor: 'rgba(54, 162, 235, 1)', // Цвет границ
  //       borderWidth: 1,// Толщина границ
  //     }
  //   ]
  // };
  // new Chart($grafica).Line(riceData);
  // new Chart($grafica, {
  //     type: 'line',// Тип графики
  //     data: {
  //         labels: tags,
  //         datasets: [
  //             dataSales2020,
  //             // Больше данных здесь....
  //         ]
  //     },
  //     options: {
  //         scales: {
  //             yAxes: [{
  //                 ticks: {
  //                     beginAtZero: true
  //                 }
  //             }],
  //         },
  //     }
  // });

  // function requestData() {
  //   $.ajax({
  //       url: '/cpu/materials/',
  //       type: "GET",
  //       dataType: "json",
  //       // data : {username : "demo"},
  //       success: function(data) {
  //           console.log(data);
  //           // chart.addSeries({
  //           //   name: "mentions",
  //           //   data: data.month_mentions_graphic
  //           // });
  //       },
  //       cache: false
  //   });
  // }
  // requestData();
  // console.log('start testing');
  // var bardata = JSON.parse("{{ barchart|safe }}");
  // console.log(bardata);
  // new Chart(document.getElementById("barchart"), bardata);
});