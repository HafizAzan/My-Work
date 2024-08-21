import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useQuery } from "react-query";
import { DashboardService } from "../../services/Dashboard.service";
import { Spin } from "antd";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const labels = [
  "Post Count",
  "Comment Counts",
  "Users Count",
  "Category Count",
];

function Dashboard() {
  const { data: dashboardData, isLoading: loaderDashboard } = useQuery(
    "dashboard",
    () => DashboardService.getDashBaord()
  );
  const {
    category_count = 0,
    comment_count = 0,
    post_count = 0,
    user_count = 0,
  } = dashboardData?.data?.results ?? {};
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [post_count, comment_count, user_count, category_count],
        backgroundColor: "purple",
      },
    ],
  };

  return (
    <Spin spinning={loaderDashboard}>
      <h1>DashBoard</h1>
      <Bar options={options} data={data} />
    </Spin>
  );
}

export default Dashboard;
