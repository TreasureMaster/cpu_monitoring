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


function setChart(data, canvas_item){
    var portfolioDates = data.loads.map(e=>new Date(e.created_at));
    var absolutPositionValues = data.loads.map(e=>e.value);

    var $chart = $(canvas_item);
    var barChartHome = new Chart($chart, {
        type: 'line',
        options: {
            scales: {
                x: {
                  ticks: {
                    min: new Date(data.starts_at),
                    max: new Date(data.ends_at)
                  },
                  display: false
                },
                y: {
                  ticks: {
                    min: 0,
                    max: 100,
                    callback: function(value) {
                      return value + "%"
                  },
                    stepSize: 5
                    // format: { style: 'percent' }
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Percentage"
                  },
                  // display: false
                },
            },
            legend: { display: false }
        },
        data: {
            labels: portfolioDates,
            datasets: [
                {
                    label: "Временные точки",
                    backgroundColor: [  '#EF8C99' ],
                    //borderColor: [  '#75787c'],
                    //borderWidth: 3.3,
                    data: absolutPositionValues
                }
            ]
        }
    })
}

$.ajax({
    method: "GET",
    url: '/cpu/moments/',
    success: function(data){
        setChart(data, '#chart1');
    },
    error: function(error_data){
        console.log("Endpoint GET request error");
    }
})
$.ajax({
    method: "GET",
    url: '/cpu/average/',
    success: function(data){
        setChart(data, '#chart2');
    },
    error: function(error_data){
        console.log("Endpoint GET request error");
    }
})
});