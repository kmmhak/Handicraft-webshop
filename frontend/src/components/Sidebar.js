import Subcategory from "./Subcategory";
import Category from "./Category";

const Sidebar = () => {
  const categories = [
    {
      id: 1,
      name: "Fabrics",
      subcategory: [
        { id: 1, name: "Stretch" },
        { id: 2, name: "College" },
      ],
    },
    {
      id: 2,
      name: "Yarns",
      subcategory: [
        { id: 3, name: "Wool" },
        { id: 4, name: "Cotton" },
      ],
    },
    {
      id: 3,
      name: "Bobbin lace",
      subcategory: [
        { id: 5, name: "Bobbin pillows" },
        { id: 6, name: "Bobbins" },
      ],
    },
    {
      id: 4,
      name: "Hobby crafts",
      subcategory: [
        { id: 7, name: "Card supplies" },
        { id: 8, name: "Decorations" },
      ],
    },
  ];

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Category category={category} />
            <Subcategory category={category.subcategory} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
