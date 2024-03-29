import React, { Component } from 'react'
import Chart from "chart.js";

export default class ChartSkills extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: ["Bootstrap", "HTML", "CSS", "JavaScript", "React", ".NET Core", "Photoshop"],
                datasets: [
                    {
                        label: "Skills",
                        data: [90, 95, 80, 70, 100, 60, 95],
                        backgroundColor: [
                            "rgb(255, 0, 255)", 
                            "#ffb503", 
                            "rgb(255, 0, 255)", 
                            "#ffb503", 
                            "rgb(255, 0, 255)",
                            "#ffb503", 
                            "rgb(255, 0, 255)",

                        ],
                        borderWidth: 0

                    }
                ]
            },
            options: {
                legend:{
                    display: false
                },
                scales: {
                    xAxes: [{
                        // ticks: { display: false },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }],
                },
                tooltips: {
                    displayColors: false,
                    
                },
                plugins: {
                    tooltip: {
                      callbacks: {
                        footer: "janeiro",
                      }
                    }
                  }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 500,
                    bottom: 0
                }
            }
            }
        );
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
