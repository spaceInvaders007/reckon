import styled from "styled-components";
import { IndividualStockSummary } from "./IndividualStockSummary";

const Styles = styled.div`
  border: solid 1px black;
  border-radius: 6px;
  margin: 2em;
  width: 650px;
  h1 {
    padding: 0.5em;
  }
  td {
    width: 3em;
    padding-left: 3em;
  }
  th {
    width: 8em;
  }
`;

export const Summary = ({ summaryData }) => {
  return (
    <Styles>
      <h1>Summary</h1>
      <table>
        <thead>
          <th>Stock</th>
          <th>Starting</th>
          <th>Lowest</th>
          <th>Highest</th>
          <th>Current</th>
        </thead>
        <tbody>
          {summaryData.map(stock => (
            <IndividualStockSummary stock={stock} />
          ))}
        </tbody>
      </table>
    </Styles>
  );
};
