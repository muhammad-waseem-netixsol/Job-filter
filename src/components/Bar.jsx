import React from "react";
import close from "./images/icon-remove.svg";
import useAppStore from "../app/appStore";

const Header = () => {
  const { deleteKeyword, clearAll, filterKeywords } =
    useAppStore((state) => state);
  return (
    <div className="header-container">
      <ul>
        {filterKeywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" onClick={() => deleteKeyword(key)}>
                <img src={close} alt="" />
              </button>
            </li>
          );
        })}
        <a href="/#" onClick={() => clearAll()}>
          Clear
        </a>
      </ul>
    </div>
  );
};

export default Header;
