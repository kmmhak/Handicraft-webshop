import Subcategory from "./Subcategory";
import Category from "./Category";

const Sidebar = () => {
  const categories = [
    {
      id: 1,
      name: "kankaat",
      subcategory: [
        { id: 1, name: "trikoot" },
        { id: 2, name: "colleget" },
      ],
    },
    {
      id: 2,
      name: "langat",
      subcategory: [
        { id: 3, name: "villalangat" },
        { id: 4, name: "puuvillalangat" },
      ],
    },
    {
      id: 3,
      name: "nyplaystarvikkeet",
      subcategory: [
        { id: 5, name: "nyplaystyynyt" },
        { id: 6, name: "nypylat" },
      ],
    },
    {
      id: 4,
      name: "askartelu",
      subcategory: [
        { id: 7, name: "kortit" },
        { id: 8, name: "koristeet" },
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
