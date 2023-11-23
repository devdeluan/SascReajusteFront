import React from "react";
import ReactApexChart from "react-apexcharts";

import "./style.dash.css";

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const chartOptionsLine = {
    // Define your chart options here
    chart: {
      type: "line",
      background: "#4d4d4d",
      fontFamily: "JetBrains Mono",
      foreColor: "#fff",
      width: "100%",
    },

    series: [
      {
        name: "Label 1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 35, 54, 100],
        color: "#CF4B83",
      },
      {
        name: "Label 2",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        color: "#01B574",
      },
      {
        name: "Label 3",
        data: [50, 20, 75, 82, 93, 111, 122, 200, 100, 20, 50, 35],
        color: "#bcbcbc",
      },
    ],

    xaxis: {
      categories: [
        "jan",
        "fev",
        "mar",
        "abr",
        "mai",
        "jun",
        "jul",
        "ago",
        "set",
        "out",
        "nov",
        "dez",
      ],
    },

    markers: {
      size: 5,
    },

    grid: {
      row: {
        colors: ["#333333", "transparent"],
        opacity: 0.5,
      },
      column: {
        colors: ["#191919"],
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },

    legend: {
      position: "top",
    },

    title: {
      text: "Line Chart",
      align: "center",
      margin: 25,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "JetBrains Mono",
        color: "#fff",
      },
    },
  };

  const chartOptionsDonut = {
    // Define your chart options here
    chart: {
      type: "donut",
      background: "#4d4d4d",
      fontFamily: "JetBrains Mono",
      foreColor: "#fff",
      width: "100%",
    },

    series: [44, 55],
    labels: ["Apple", "Mango"],
    colors: ["#01B574", "#CF4B83"],

    legend: {
      position: "bottom",
    },

    title: {
      text: "Donut Chart",
      align: "center",
      margin: 25,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "JetBrains Mono",
        color: "#fff",
      },
    },
  };

  const chartOptionsColumn = {
    // Define your chart options here
    chart: {
      type: "bar",
      background: "#4d4d4d",
      fontFamily: "JetBrains Mono",
      foreColor: "#fff",
      width: "100%",
    },

    series: [
      {
        data: [
          {
            x: "category 1",
            y: 10,
          },
          {
            x: "category 2",
            y: 18,
          },
          {
            x: "category 3",
            y: 13,
          },
          {
            x: "category 4",
            y: 25,
          },
          {
            x: "category 5",
            y: 16,
          },
        ],

        color: "#01B574",
      },
    ],

    grid: {
      row: {
        colors: ["#333333", "transparent"],
        opacity: 0.5,
      },
      column: {
        colors: ["#191919"],
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },

    legend: {
      position: "bottom",
    },

    title: {
      text: "Column Chart",
      align: "center",
      margin: 25,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "JetBrains Mono",
        color: "#fff",
      },
    },
  };

  const chartOptionsBar = {
    // Define your chart options here
    chart: {
      type: "bar",
      background: "#4d4d4d",
      fontFamily: "JetBrains Mono",
      foreColor: "#fff",
      width: "100%",
    },

    plotOptions: {
      bar: {
        horizontal: true,
      },
    },

    series: [
      {
        data: [
          {
            x: "category a",
            y: 20,
          },
          {
            x: "category b",
            y: 36,
          },
          {
            x: "category c",
            y: 26,
          },
          {
            x: "category d",
            y: 16,
          },
          {
            x: "category e",
            y: 6,
          },
        ],

        color: "#CF4B83",
      },
    ],

    grid: {
      row: {
        colors: ["#333333", "transparent"],
        opacity: 0.5,
      },
      column: {
        colors: ["#191919"],
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },

    title: {
      text: "Bar Chart",
      align: "center",
      margin: 25,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "JetBrains Mono",
        color: "#fff",
      },
    },
  };

  const chartOptionsDonut2 = {
    // Define your chart options here
    chart: {
      type: "donut",
      background: "#4d4d4d",
      fontFamily: "JetBrains Mono",
      foreColor: "#fff",
      width: "100%",
    },

    series: [55, 44],
    labels: ["Apple", "Mango"],
    colors: ["#01B574", "#CF4B83"],

    legend: {
      position: "bottom",
    },

    title: {
      text: "Donut2 Chart",
      align: "center",
      margin: 25,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "JetBrains Mono",
        color: "#fff",
      },
    },
  };

  return (
    <main id="dash">
      <section className="secaoGrafico">
        <div className="graficoLine grafico">
          <ReactApexChart
            options={chartOptionsLine}
            series={chartOptionsLine.series}
            type="line"
            // height={350}
            // width={1000}
          />
        </div>
        <div className="graficoDonut grafico">
          <ReactApexChart
            options={chartOptionsDonut}
            series={chartOptionsDonut.series}
            type="donut"
            // height={350}
            // width={1000}
          />
        </div>
        <div className="graficoColumn grafico">
          <ReactApexChart
            options={chartOptionsColumn}
            series={chartOptionsColumn.series}
            type="bar"
            // height={350}
            // width={1000}
          />
        </div>

        <div className="graficoBar grafico">
          <ReactApexChart
            options={chartOptionsBar}
            series={chartOptionsBar.series}
            type="bar"
            // height={350}
            // width={1000}
          />
        </div>
        <div className="graficoDonut2 grafico">
          <ReactApexChart
            options={chartOptionsDonut2}
            series={chartOptionsDonut2.series}
            type="donut"
            // height={350}
            // width={1000}
          />
        </div>
      </section>
    </main>
  );
};

export default MyComponent;
