import { data } from "./Config";
import { calculateMean, calculateMedian, calculateMode } from "../commonFunc";
import { useEffect, useState } from "react";
function Gamma({ title }) {
  const [updatedData, setUpdatedData] = useState();
  let tableHeaderData = [];
  useEffect(() => {
    addGammaProperty();
  }, []);

  // Add Gamma property in data
  const addGammaProperty = () => {
    const dataSet = data.map((item) => {
      item.Gamma = ((item.Ash * item.Hue) / item.Magnesium).toFixed(3);
      return item;
    });
    setUpdatedData(dataSet);
  };

  // Find header of table
  data.map((item) => {
    return !!item.Alcohol && tableHeaderData.push(item.Alcohol);
  });
  tableHeaderData = tableHeaderData.filter(
    (ele, index) => tableHeaderData.indexOf(ele) === index
  );

  // calculate class wise Mean, Median, Mode
  const calculateGamma = () => {
    const class1Gamma = [];
    const class2Gamma = [];
    const class3Gamma = [];

    !!updatedData &&
      updatedData.forEach((item) => {
        if (item.Alcohol === 1) {
          class1Gamma.push(parseFloat(item.Gamma));
          return class1Gamma;
        } else if (item.Alcohol === 2) {
          class2Gamma.push(parseFloat(item.Gamma));
          return class2Gamma;
        } else {
          class3Gamma.push(parseFloat(item.Gamma));
          return class3Gamma;
        }
      });
    //store calculated data in tableData
    const tableData = {
      Class1: {
        Mean: calculateMean(class1Gamma),
        Median: calculateMedian(class1Gamma),
        Mode: calculateMode(class1Gamma),
      },
      Class2: {
        Mean: calculateMean(class2Gamma),
        Median: calculateMedian(class2Gamma),
        Mode: calculateMode(class2Gamma),
      },
      Class3: {
        Mean: calculateMean(class3Gamma),
        Median: calculateMedian(class3Gamma),
        Mode: calculateMode(class3Gamma),
      },
    };
    return tableData;
  };
  // call func
  const tableData = calculateGamma();
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
export default Gamma;
