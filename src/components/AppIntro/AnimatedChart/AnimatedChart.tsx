import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { Chart as Chartjs, Filler, Legend } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { FaChartGantt } from "react-icons/fa6";
import { useMemo } from "react";
Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Legend
);

interface AnimatedDayTimeProps {
  delay: number;
}

const createGradient = () => {
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) return;
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, "#fff");
  gradient.addColorStop(1, "#000");

  return gradient;
};

const AnimatedChart = ({ delay }: AnimatedDayTimeProps) => {
  const data = useMemo(
    () => ({
      labels: Array.from({ length: 8 }, (_, i) => {
        return i + 1;
      }),
      datasets: [
        {
          label: "Melkior data set",
          data: [50, 60, 52, 67, 55, 65, 60, 75],
          fill: true,
          backgroundColor: createGradient(),
          pointBorderColor: "transparent",
          pointBackgroundColor: "transparent",
          borderColor: "transparent",
          tension: 0.5,
        },
      ],
    }),
    []
  );
  const option = useMemo(
    () => ({
      scales: {
        x: {
          grid: {
            display: true, // Tắt lưới dọc (trục y)
            color: "rgba(255,255,255,0.1)",
          },
          ticks: {
            color: "#eee",
          },
        },
        y: {
          grid: {
            display: true,
            color: "rgba(255,255,255,0.1)",
          },
          ticks: {
            color: "#eee",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    }),
    []
  );
  return (
    <motion.div
      className="h-full flex flex-col justify-between"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay,
      }}
    >
      <div className="flex-1 flex justify-center items-center">
        <Line data={data} options={option} height={120} />
      </div>
      <div className="flex justify-between items-center text-appGrayFocus">
        <FaChartGantt size={16} />
        <span className="text-sm">&#x2022; Data Visualization</span>
      </div>
    </motion.div>
  );
};

export default AnimatedChart;
