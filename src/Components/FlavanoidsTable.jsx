import { data } from "./Config";
import { calculateMean, calculateMedian, calculateMode } from "../commonFunc";
function Flavanoids({ title }) {
  // Dynamic header of table
  let tableHeaderData = [];
  data.map((item) => {
    return !!item.Alcohol && tableHeaderData.push(item.Alcohol);
  });
  tableHeaderData = tableHeaderData.filter(
    (ele, index) => tableHeaderData.indexOf(ele) === index
  );
  // calculate class wise Mean,Median,Mode
  const calculateFlavanoids = () => {
    const class1Flavanoids = [];
    const class2Flavanoids = [];
    const class3Flavanoids = [];

    data.forEach((item) => {
      if (item.Alcohol === 1) {
        class1Flavanoids.push(parseFloat(item.Flavanoids));
        return class1Flavanoids;
      } else if (item.Alcohol === 2) {
        class2Flavanoids.push(parseFloat(item.Flavanoids));
        return class2Flavanoids;
      } else {
        class3Flavanoids.push(parseFloat(item.Flavanoids));
        return class3Flavanoids;
      }
    });
    // store calculated data in tableData
    const tableData = {
      Class1: {
        Mean: calculateMean(class1Flavanoids),
        Median: calculateMedian(class1Flavanoids),
        Mode: calculateMode(class1Flavanoids),
      },
      Class2: {
        Mean: calculateMean(class2Flavanoids),
        Median: calculateMedian(class2Flavanoids),
        Mode: calculateMode(class2Flavanoids),
      },
      Class3: {
        Mean: calculateMean(class3Flavanoids),
        Median: calculateMedian(class3Flavanoids),
        Mode: calculateMode(class3Flavanoids),
      },
    };
    return tableData;
  };
  const tableData = calculateFlavanoids();
  return (
    <div>
      <h2>{title} Table</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {tableHeaderData.map((item) => (
              <th>Class {item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title} Mean</td>
            <td>{tableData.Class1.Mean.toFixed(3)}</td>
            <td>{tableData.Class2.Mean.toFixed(3)}</td>
            <td>{tableData.Class3.Mean.toFixed(3)}</td>
          </tr>
          <tr>
            <td>{title} Median</td>
            <td>{tableData.Class1.Median.toFixed(3)}</td>
            <td>{tableData.Class2.Median.toFixed(3)}</td>
            <td>{tableData.Class3.Median.toFixed(3)}</td>
          </tr>
          <tr>
            <td>{title} Mode</td>
            <td>{parseFloat(tableData.Class1.Mode).toFixed(3)}</td>
            <td>{parseFloat(tableData.Class2.Mode).toFixed(3)}</td>
            <td>{parseFloat(tableData.Class3.Mode).toFixed(3)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Flavanoids;
