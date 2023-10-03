import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const initialData = [
    // Year one============
      {
        Date: '2023-01-01',
        Users: 2000,
      },
      {
        Date: '2023-02-01',
        Users: 3000,
      },
      {
        Date: '2023-03-01',
        Users: 2000,
      },
      {
        Date: '2023-04-01',
        Users: 2000,
      },
      {
        Date: '2023-05-01',
        Users: 2000,
      },
      {
        Date: '2023-06-01',
        Users: 2000,
      },
      {
        Date: '2023-07-01',
        Users: 4000,
      },
      {
        Date: '2023-08-01',
        Users: 53000,
      },
      {
        Date: '2023-09-01',
        Users: 1000,
      },
      {
        Date: '2023-10-01',
        Users: 2300,
      },
      {
        Date: '2023-11-01',
        Users: 5000,
      },
      {
        Date: '2023-12-01',
        Users: 40000,
      },
    // Year ============
      {
        Date: '2024-01-01',
        Users: 2000,
      },
      {
        Date: '2024-02-01',
        Users: 4000,
      },
      {
        Date: '2024-03-01',
        Users: 2000,
      },
      {
        Date: '2024-04-01',
        Users: 2000,
      },
      {
        Date: '2024-05-01',
        Users: 2000,
      },
      {
        Date: '2024-06-01',
        Users: 2000,
      },
      {
        Date: '2024-07-01',
        Users: 4000,
      },
      {
        Date: '2024-08-01',
        Users: 54000,
      },
      {
        Date: '2024-09-01',
        Users: 1000,
      },
      {
        Date: '2024-10-01',
        Users: 2400,
      },
      {
        Date: '2024-11-01',
        Users: 5000,
      },
      {
        Date: '2024-12-01',
        Users: 40000,
      },
    
    ];

export default class UsersChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: initialData,
      filterYear: '2023',
      filterMonth: '01',
      filterDay: '01',
      viewLevel: 'year', // Default to year-level view
    };
  }

  handleFilterChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleViewLevelChange = (event) => {
    this.setState({ viewLevel: event.target.value });
  };

  getFilteredDataForOption = () => {
    const { filterYear, filterMonth, filterDay, viewLevel } = this.state;
    return initialData.filter((entry) => {
      const entryDate = entry.Date.split('-');
      const entryYear = entryDate[0];
      const entryMonth = entryDate[1];
      const entryDay = entryDate[2];
      if (viewLevel === 'year') {
        return entryYear === filterYear;
      } else if (viewLevel === 'month') {
        return entryYear === filterYear && entryMonth === filterMonth;
      } else if (viewLevel === 'day') {
        return entryYear === filterYear && entryMonth === filterMonth && entryDay === filterDay;
      }
      return true; // Default to showing all data if view level is not recognized
    });
  };

  render() {
    return (
      <div>
    <div className='UserAnalyticFilter'>
    <select
          name="filterYear"
          onChange={this.handleFilterChange}
          value={this.state.filterYear}
        >
           {/* Add filter options for available years */}
           <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
          <option value="2031">2031</option>
          <option value="2032">2032</option>
          <option value="2033">2033</option>
          <option value="2034">2034</option>
        </select>
        <select
          name="filterMonth"
          onChange={this.handleFilterChange}
          value={this.state.filterMonth}
        >
          {/* Add filter options for months */}
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select
          name="filterDay"
          onChange={this.handleFilterChange}
          value={this.state.filterDay}
        >
          {/* Add filter options for days */}
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <select
          name="viewLevel"
          onChange={this.handleViewLevelChange}
          value={this.state.viewLevel}
        >
          <option value="year">Year</option>
          <option value="month">Month</option>
          <option value="day">Day</option>
        </select>
    </div>
       
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            width={500}
            height={300}
            data={this.getFilteredDataForOption()}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="Date" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="Users" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
