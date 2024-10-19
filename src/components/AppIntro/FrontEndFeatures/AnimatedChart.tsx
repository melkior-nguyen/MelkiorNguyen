import { Line } from "react-chartjs-2";
import { Chart as Chartjs, Filler, Legend } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Legend
);

const createGradient = () => {
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) return;
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, "rgba(159, 162, 168,0.1)");
  gradient.addColorStop(1, "rgba(159, 162, 168, 0)");

  console.log(gradient);

  return gradient;
};

const AnimatedChart = () => {
  const data = {
    labels: Array.from({ length: 8 }, (_, i) => {
      return i + 1;
    }),
    datasets: [
      {
        label: "Melkior data set",
        data: [50, 60, 55, 65, 55, 70, 60, 75],
        fill: true,
        backgroundColor: createGradient(),
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        borderColor: "#9fa2a8",
        tension: 0.5,
      },
    ],
  };
  const option = {
    scales: {
      x: {
        grid: {
          display: true, // Tắt lưới dọc (trục y)
          color: "rgba(255,255,255,0.1)",
        },
      },
      y: {
        grid: {
          display: true,
          color: "rgba(255,255,255,0.1)",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  return (
    <>
      <div className="flex-1 flex justify-center items-center">
        <Line data={data} options={option}/>
      </div>
      <div className="text-base text-center">details</div>
    </>
  );
};

export default AnimatedChart;
