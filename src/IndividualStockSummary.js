import { useEffect, useState } from "react";

export const IndividualStockSummary = ({ stock }) => {
  const [starting, setStarting] = useState();
  const [lowest, setLowest] = useState();
  const [highest, setHighest] = useState();
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setStarting(stock.price);
    setLowest(stock.price);
    setHighest(stock.price);
  }, []);

  useEffect(() => {
    if (stock.price < lowest) {
      setLowest(stock.price);
    }
    if (stock.price > highest) {
      setHighest(stock.price);
    }
    setCurrent(stock.price);
    return;
  }, [stock]);

  return (
    <tr>
      <td className="code">{stock.code}</td>
      <td className="starting">{starting}</td>
      <td className="lowest">{lowest}</td>
      <td className="highest">{highest}</td>
      <td className="current">{current}</td>
    </tr>
  );
};
