import { Link } from "react-router-dom";

const Subcategory = ({ category }) => {
  return (
    <div>
      {category.map((sub) => (
        <p key={sub.id}>
          <Link to={`/subcategories/${sub.name}`}>{sub.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default Subcategory;
