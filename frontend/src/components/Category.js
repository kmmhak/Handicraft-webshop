import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return <Link to={`/categories/${category.name}`}>{category.name}</Link>;
};

export default Category;
