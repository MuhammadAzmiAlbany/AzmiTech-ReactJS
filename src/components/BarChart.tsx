// src/components/MonthlyRevenueBar.tsx
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
    TooltipItem
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Mocking your color set for the example
const c = { soft: 'rgba(59, 130, 246, 0.5)', accent: '#3b82f6', grid: '#e2e8f0', label: '#64748b' };

export default function MonthlyRevenueBar() {
    const options: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: c.accent,
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 10,
                // cornerRadius is technically handled via 'boxPadding' or 'usePointStyle' in modern v4, 
                // but we will keep standard styling clean here.
                callbacks: {
                    // Properly typed using TooltipItem
                    label: (context: TooltipItem<'bar'>) => ` $${context.parsed.y}k`
                }
            }
        },
        scales: {
            x: {
                grid: { color: c.grid },
                ticks: { color: c.label, font: { family: 'DM Mono', size: 10 } }
            },
            y: {
                grid: { color: c.grid },
                ticks: {
                    color: c.label,
                    font: { family: 'DM Mono', size: 10 },
                    // Safely type the tick callback
                    callback: (tickValue: number | string) => `$${tickValue}k`
                }
            }
        }
    };

    const data: ChartData<'bar'> = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Revenue ($k)',
            data: [42, 55, 48, 61, 70, 65, 78, 82, 74, 89, 94, 102],
            backgroundColor: c.soft,
            borderColor: c.accent,
            borderWidth: 2,
            borderRadius: 6,
            borderSkipped: false
        }]
    };

    return (
        <div style={{ height: '300px', width: '100%' }}>
            <Bar data={data} options={options} />
        </div>
    );
}