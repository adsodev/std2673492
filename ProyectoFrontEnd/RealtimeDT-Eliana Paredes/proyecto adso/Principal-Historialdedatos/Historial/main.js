const ctx = document.getElementById('mychart')
const temperatura = ['20º', '22º', '18º', '23º','24º']
const dias = [dia1, dia2, dia3, dia4,dia5]

const mychart = new Chart(ctx, {
    typer: 'bar',
    data: {
        labels: temperatura,
        datasets: [{
            label: 'dias',
            backgroundcolor: [
                rgba(255,99,132,0,2),
                rgba(54,162,235,0,2),
                rgba(255,286,86,0,2),
                rgba(74,192,192,0,2),
                rgba(153,103,255,0,2),
                rgba(255,159,64,0,2),
            ],
            bordercolor: [
                rgba(255,99,132,1),
                rgba(54,162,235,1),
                rgba(255,286,86,1),
                rgba(74,192,192,1),
                rgba(153,103,255,1),
                rgba(255,159,64,1),
            ],

            borderwidth: 1.5
        }]
    }
})