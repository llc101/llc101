import { Guides } from "../utils/guides";
import Item from "./Item";

function ListItems({ guides }) {
  return (
    <div className="py-8">
      {guides.map((guide, index) => (
        <Item key={index} guide={guide} />
      ))}
    </div>
  );
}

ListItems.defaultProps = {
  guides: Guides,
};

export default ListItems;
