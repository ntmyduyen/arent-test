import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, Tooltip, Legend, LineElement, PointElement, LinearScale, Title } from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
ChartJS.defaults.color = "#fff";

const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            display: false
        },
        x: {
            border: {
                display: false
            },
            grid: {
                color: "#777777"
            },
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
}

const Graph = ({ options = defaultOptions, data }) => {
    return (
        <Line type='line' data={data} options={options} />
    )
}
export default Graph