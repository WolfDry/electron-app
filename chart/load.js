async function getData(){
    var url = "http://localhost:8080/chart";

    const response = await fetch(url)
    const dataRes = await response.json()
    return dataRes
}

async function load(){
    const data = await getData()

    Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Pizza par flavor',
        align: 'center'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
        valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
        }
    },
    series: [{
        name: 'Base',
        colorByPoint: true,
        data
    }]
    });
}

function getSubtitle() {
const totalNumber = 10000;
const number = 999
return `<span style="font-size: 80px">${number}</span>
    <br>
    <span style="font-size: 22px">
    Total: <b> ${totalNumber}</b> TWh
    </span>`;
}