import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // Simulate data fetching or receiving new data
    // Replace this with your actual data fetching logic
    const newData = [
      {
        Date: "2023-04-01",
        Total_sales: 100000,
      },
      {
        Date: "2023-05-01",
        Total_sales: 130000,
      },
      {
        Date: "2023-06-01",
        Total_sales: 60000,
      },
      {
        Date: "2023-07-01",
        Total_sales: 100000,
      },
      {
        Date: "2023-08-01",
        Total_sales: 100000,
      },
      {
        Date: "2023-09-01",
        Total_sales: 200000,
      },
      // Add new data for the current month here
    ];

    // Filter data for the last 6 months
    const currentDate = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

    const filteredData = newData.filter((item) => {
      const itemDate = new Date(item.Date);
      return itemDate >= sixMonthsAgo && itemDate <= currentDate;
    });

    this.setState({ data: filteredData });
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={this.state.data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
          barSize={60}
        >
          <XAxis
            dataKey="Date"
            scale="point"
            padding={{ left: 30, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="Total_sales"
            fill="#8884d8"
            background={{ fill: "#eee" }}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
