// src/components/UserGrowthLine.tsx
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler, // Required for the 'fill: true' property under line charts
    ChartData,
    ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register 'Filler' to allow gradients underneath the line
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const c = { soft: 'rgba(59, 130, 246, 0.5)', accent: '#3b82f6', grid: '#e2e8f0', label: '#64748b' };

export default function UserGrowthLine() {
    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: c.accent,
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 10,
            }
        },
        scales: {
            x: {
                grid: { color: c.grid },
                ticks: { color: c.label, font: { family: 'DM Mono', size: 10 } }
            },
            y: {
                grid: { color: c.grid },
                ticks: { color: c.label, font: { family: 'DM Mono', size: 10 } }
            }
        }
    };

    const data: ChartData<'line'> = {
        labels: ['Wk1', 'Wk2', 'Wk3', 'Wk4', 'Wk5', 'Wk6', 'Wk7', 'Wk8', 'Wk9', 'Wk10', 'Wk11', 'Wk12'],
        datasets: [{
            label: 'New Users',
            data: [210, 240, 195, 310, 280, 360, 390, 420, 405, 470, 510, 550],
            fill: true,
            // THE REACT WAY TO DO GRADIENTS:
            backgroundColor: (context) => {
                const chart = context.chart;
                const { ctx, chartArea } = chart;
                
                // Prevent errors before the chart has fully initialized its dimensions
                if (!chartArea) return null;

                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                gradient.addColorStop(0, c.soft);
                gradient.addColorStop(1, 'rgba(0,0,0,0)');
                return gradient;
            },
            borderColor: c.accent,
            borderWidth: 2.5,
            pointBackgroundColor: c.accent,
            pointRadius: 3,
            pointHoverRadius: 5,
            tension: 0.42
        }]
    };

    return (
        <div style={{ height: '300px', width: '100%' }}>
            <Line data={data} options={options} />
        </div>
    );
}