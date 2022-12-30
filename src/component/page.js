
import list from "../data";
import Item from "./item"

import "../styles/page.css";

const Page = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Item key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Page;
