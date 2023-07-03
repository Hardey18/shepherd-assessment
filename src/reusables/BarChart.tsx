import { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }

  render() {
    return (
      <Chart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="bar"
        width={this.props.width}
        height="100%"
      />
    );
  }
}

export default BarChart;
