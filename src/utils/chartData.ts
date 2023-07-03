export const barChartDataDailyTraffic = [
    {
        name: "Latest quiz score",
        data: [95, 80, 51, 51, 45, 45, 52, 80]
    }
];

export const barChartOptionsDailyTraffic = {
    chart: {
        toolbar: {
            show: false
        }
    },
    tooltip: {
        style: {
            fontSize: "12px",
            fontFamily: undefined
        },
        onDatasetHover: {
            style: {
                fontSize: "12px",
                fontFamily: undefined
            }
        },
        theme: "light"
    },
    xaxis: {
        categories: ["Bio", "Phy", "Che", "Eco", "Eng", "Bus", "Sci", "Lit"],
        show: false,
        labels: {
            show: true,
            style: {
                colors: "#A3AED0",
                fontSize: "14px",
                fontWeight: "500"
            }
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        categories: ["0%", "35%", "Che", "Eco", "Eng", "Bus", "Sci"],
        show: true,
        color: "black",
        labels: {
            show: true,
            style: {
                colors: "#CBD5E0",
                fontSize: "14px",
                fontWeight: "500"
            }
        }
    },
    grid: {
        show: false,
        strokeDashArray: 5,
        yaxis: {
            lines: {
                show: true
            }
        },
        xaxis: {
            lines: {
                show: false
            }
        }
    },
    fill: {
        type: "light",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "#4318FF",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "rgba(67, 24, 255, 1)",
                        opacity: 0.28
                    }
                ]
            ]
        }
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        bar: {
            columnWidth: "14px"
        }
    }
};
