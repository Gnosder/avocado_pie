    // Reading in data...complete.
    d3.csv('assets/data/avocado_c/avocadoData.csv').then(function (avoData) {})
    // })
    // })
    // Global Variables
    var dates = []
    var avgprice = []
    var ttlvol = []
    var hasssm = []
    var hasslg = []
    var hassxl = []
    var hassall = []
    var ttlbags = []
    var smbags = []
    var lgbags = []
    var xlbags = []
    var yr = []

    // Build a getData();...complete.
    async function getData() {
        const response = await fetch('data/avocado_cleaned.csv')
        const data = await response.text()

        const table = data.split('\n').slice(1)
        table.forEach(row => {
            const columns = row.split(',')

            var date = columns[0]
            dates.push(date)
            var averagePrice = columns[1];
            avgprice.sort().push(averagePrice)
            var totalVolume = columns[2];
            ttlvol.push(totalVolume)
            var hassSmall = columns[3];
            hasssm.sort().push(hassSmall)
            var hassLarge = columns[4];
            hasslg.sort().push(hassLarge)
            var hassAllSizes = columns[5];
            hassall.push(hassAllSizes)
            var totalBags = columns[6];
            ttlbags.push(totalBags)
            var smallBags = columns[7];
            smbags.push(smallBags)
            var largeBags = columns[8];
            lgbags.push(largeBags)
            var xLargeBags = columns[9];
            xlbags.push(xLargeBags)
            var year = columns[11];
            yr.sort().push(year)
        })
    }
    // Charting the universe...complete.
    chartIt();
    async function chartIt() {
        await getData();
        var ctx = document.getElementById('chartjs');
        var chartjs = new Chart(ctx, {
            type: 'line',
            data: {
                labels: avgprice,
                datasets: [{
                        label: 'Total Volume',
                        data: ttlvol,
                        backgroundColor: 'rgba(57, 66, 16, .5)',
                        // borderColor: 'rgba(255, 255, 255, 1)',
                        borderWidth: 1,
                        showLine: false,
                        responsive: true,
                        maintainAspectRatio: false
                    },
                    {
                        label: 'Hass Small',
                        data: hasssm,
                        backgroundColor: 'rgba(213, 48, 48, 1)',
                        // borderColor: 'rgba(255, 255, 255, 1)',
                        borderWidth: 1,
                        showLine: false,
                        responsive: true,
                        maintainAspectRatio: false
                    },
                    {
                        label: 'Hass Large',
                        data: hasslg,
                        backgroundColor: 'rgba(41, 125, 188, 1)',
                        // borderColor: 'rgba(255, 255, 255, 1)',
                        borderWidth: 1,
                        showLine: false,
                        responsive: true,
                        maintainAspectRatio: false
                    },
                ],

            },
            options: {
                title: {
                    display: true,
                    fontSize: 18,
                    text: 'Hass Avocado Unit Sales Volume By Average Unit Sales Price in $USD, Years: 2015-2018'
                },
                scales: {
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }
