function chartjs() {    
    // Reading in data...complete.
    d3.json('/avocadoData').then(function (avoData) {

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
    console.log(avoData);
    // Build a getData();...complete.
    async function getData(avoData) {
        const response = await fetch('/avocadoData')
        response = avoData;
        // const data = await response.text();
            console.log(response);
        const table = data.split('\n').slice(1)
        table.forEach(row => {
            const columns = row.split(',')

            var Date = columns[0]
            dates.push(Date)
            var Average_price = columns[1]; 
            avgprice.sort().push(Average_price)
            var Total_volume = columns[2];
            ttlvol.push(Total_volume)
            var PLU4046 = columns[3];
            hasssm.sort().push(PLU4046)
            var PLU4225 = columns[4];
            hasslg.sort().push(PLU4225)
            var PLU4770 = columns[5];
            hassall.push(PLU4770)
            var Total_bags = columns[6];
            ttlbags.push(Total_bags)
            var Small_bags = columns[7];
            smbags.push(Small_bags)
            var Larg_bags = columns[8];
            lgbags.push(Larg_bags)
            var XLarge_bags = columns[9];
            xlbags.push(XLarge_bags)
            var Year = columns[11];
            yr.sort().push(Year)
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
})}