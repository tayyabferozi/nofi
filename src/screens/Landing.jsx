import React, { useEffect } from "react";
// import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
import { Link } from "react-scroll";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Roadmap from "../components/Roadmap";
import Token from "../components/Token";

// ChartJS.register(ArcElement, Tooltip);

const data = {
  datasets: [
    {
      data: [9, 4.66, 3.33, 15.66, 67.35],
      backgroundColor: ["#f3545d", "#fdaf4b", "#1d7af3", "#34e4ef", "#e80ae5"],
      borderWidth: 2,
      borderColor: "#1f0e9c",
    },
  ],

  labels: [
    "Founders",
    "Research & Development",
    "Investors",
    "Pre Sales",
    "Public ICO",
  ],
};
// {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

const Landing = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    // script1.src = "./assets/js/chart.min.js";
    script1.async = true;
    document.body.appendChild(script1);
  }, []);

  return (
    <div id="page-top" class="homepage work-zoom one-page" data-spy="scroll">
      <Preloader />

      <div id="current" class="main">
        <Header />
        <Banner />
        <Token />
        <Roadmap />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
