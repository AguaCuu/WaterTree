import React from 'react';
import { Bar } from 'react-chartjs-2'; // Importar el componente de gráfico de barras
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios para Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraficoLluvia = () => {
  // Datos estáticos para el gráfico
  const datos = [
    { "fecha": "2024-01", "lluvia": 18.2 },
    { "fecha": "2024-02", "lluvia": 20.5 },
    { "fecha": "2024-03", "lluvia": 15.1 },
    { "fecha": "2024-04", "lluvia": 10.7 },
    { "fecha": "2024-05", "lluvia": 12.3 },
    { "fecha": "2024-06", "lluvia": 25.0 },
    { "fecha": "2024-07", "lluvia": 50.0 },
    { "fecha": "2024-08", "lluvia": 35.3 },
    { "fecha": "2024-09", "lluvia": 28.1 },
    { "fecha": "2024-10", "lluvia": 22.4 }
  ];
  
  

  // Preparar los datos para el gráfico en el formato esperado
  const datosGrafico = {
    labels: datos.map(entry => entry.fecha), // Las etiquetas son los campos 'fecha'
    datasets: [
      {
        label: 'Lluvia (mm)',
        data: datos.map(entry => entry.lluvia), // Los datos son el campo 'lluvia'
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color de fondo
        borderColor: 'rgba(75, 192, 192, 1)', // Color del borde
        borderWidth: 1, // Ancho del borde
      },
    ],
  };

  const opciones = {
    responsive: true, // Hacer el gráfico sensible a tamaños de pantalla
    scales: {
      x: {
        beginAtZero: true, // Asegurar que el eje X empiece en cero
      },
      y: {
        beginAtZero: true, // Asegurar que el eje Y empiece en cero
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Lluvia Diaria',
      },
      tooltip: {
        enabled: true, // Habilitar las herramientas emergentes (tooltips)
      },
    },
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <h2>Lluvia en el año 2024</h2>
      <Bar data={datosGrafico} options={opciones} />
    </div>
  );
};

export default GraficoLluvia;
