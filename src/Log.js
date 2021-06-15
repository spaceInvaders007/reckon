import styled from "styled-components";

const Styles = styled.div`
  padding: 1em;
  border: solid 1px black;
  border-radius: 6px;
  margin: 2em;
  height: 800px;
  overflow: auto;
  width: 500px;
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  button {
    height: 3em;
    align-self: center;
  }
  .log {
    margin-bottom: 1em;
  }
  ul {
    list-style-type: none;
  }
`;

export const Log = ({ data, pauseLog, logData }) => {
  return (
    <Styles>
      <div className="header">
        <h1>Log</h1>
        <button onClick={pauseLog}>{logData ? "Pause Log" : "Resume"}</button>
      </div>
      <ul>
        {data.map(groups => (
          <div className="log">
            Updates for {groups[3].lastUpdate}
            {groups
              .filter(g => g.code)
              .map(stocks => (
                <div>
                  <li>
                    {stocks.code}: ${stocks.price}
                  </li>
                </div>
              ))}
          </div>
        ))}
      </ul>
    </Styles>
  );
};
