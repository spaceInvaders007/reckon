import { useEffect, useState } from "react";
import { Log } from "./Log";
import { Summary } from "./Summary";
import styled from "styled-components";
import moment from "moment";

const Styles = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const [data, setData] = useState([]);
  const [logData, setLogData] = useState(true);
  const [summaryData, setSummaryData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("https://join.reckon.com/stock-pricing")
        .then(result => result.json())
        .then(jsonData => {
          const tempArray = [
            {
              code: "AFAIK",
              price: jsonData.filter(d => d.code === "AFAIK")[0]?.price
            },
            {
              code: "AKA",
              price: jsonData.filter(d => d.code === "AKA")[0]?.price
            },
            {
              code: "CAD",
              price: jsonData.filter(d => d.code === "CAD")[0]?.price
            },
            {
              lastUpdate: `${moment().format("YYYY-MM-DD")} ${moment().format(
                "LTS"
              )}`
            }
          ];
          if (logData) {
            setData(prevState => [...prevState, tempArray]);
          }
          setSummaryData(tempArray.filter(d => !d.lastUpdate));
        });
    };
    const interval = setInterval(() => getData(), 2000);
    return () => {
      clearInterval(interval);
    };
  }, [data, logData]);

  const pauseLog = () => {
    setLogData(!logData);
  };

  return (
    <Styles>
      <Log data={data} pauseLog={pauseLog} logData={logData} />
      <Summary summaryData={summaryData} />
    </Styles>
  );
}

export default App;
