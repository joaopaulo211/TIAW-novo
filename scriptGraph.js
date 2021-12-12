const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Valores em R$'],
        datasets: [{
            label: 'Ganhos',
            data: [250 + 230 + 225],

            backgroundColor: [
                'rgba(35, 142, 35, 0.5)',
                
            ],
            borderColor: [
                'rgba(35,142,35, 1)',
                
            ],
            borderWidth: 5
        },
        {
            label: 'Gastos',
            data: [10 + 230 + 225],
            
            backgroundColor: [
                'rgba(255, 0, 0, 0.5)',
                
            ],
            borderColor: [
                'rgba(255, 0, 0, 1)',
                
            ],
            borderWidth: 5
        },
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const pizza = document.getElementById('myPizzaChart');
const myPizzaChart = new Chart(pizza, {
    type: 'pie',
    data: {
        labels: ['Categorias'],
        datasets: [{
            label: 'Ganhos',
            data: [250 + 230 + 225],

            backgroundColor: [
                'rgba(35, 142, 35, 0.5)',
                'rgba(0, 0 , 0, 0.5)',
                'rgba(35, 142, 23, 0.5)',
                
            ],
            borderColor: [
                'rgba(35,142,35, 1)',
                
                
            ],
            borderWidth: 5
        },
        
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});