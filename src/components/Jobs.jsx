import React, { useEffect, useState } from "react";
import Job from "./Job";
import useAppStore from "../app/appStore";

const Jobs = () => {
  // console.log(data);
  const [filteredData, setfilteredData] = useState([]);

  const { addFilterKeywords, filterKeywords } = useAppStore((state) => state);
  const data = useAppStore((state) => state.data);

  const modifiedData = () => {
    if (filterKeywords) {
      const newData = data.filter((d) => {
        return filterKeywords.every((key) => {
          return (
            d.role === key ||
            d.level === key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });
      setfilteredData(newData);
    } else {
      setfilteredData(data);
    }
  };

  useEffect(() => {
    modifiedData();
    // SearchFunc();
  }, [filterKeywords]);

  return (
    <div className="jobs">
      {filteredData.map((d) => {
        return <Job key={d.id} data={d} setkeywords={addFilterKeywords} />;
      })}
    </div>
  );
};

export default Jobs;
