import { MouseEvent, useState } from "react";
import Like from "./Like";
import "./ListGroup.scss";
// import "bootstrap/dist/css/bootstrap.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // items = [];

  //   Bootstrap like classes added for the sake of mosh
  return (
    <>
      <h2>{heading}</h2>
      {!items.length && (
        <>
          <p className="text-red-500">No items found</p>
        </>
      )}
      <ul className="list-group mt-5">
        {items.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={(e) => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {city} <Like onClick={() => console.log("Heart Clicked")} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
