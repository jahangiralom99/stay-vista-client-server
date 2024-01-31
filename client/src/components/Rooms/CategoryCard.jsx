import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";

/* eslint-disable react/prop-types */
const CategoryCard = ({ category, searchCategory }) => {
  const { label, icon: Icon } = category || {};
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  console.log(searchCategory);

  const handleClickBtn = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }
    const updateQuery = { ...currentQuery, category: label };

    const url = queryString.stringifyUrl({
      url: "/",
      query: updateQuery,
    });
    navigate(url);
  };

  params.get("category");

  return (
    <div
      onClick={handleClickBtn}
      className={`flex flex-col items-center justify-center gap-2 p-5 hover:text-neutral-800 transition cursor-pointer border-b-2 ${
        searchCategory
          ? "border-b-neutral-800 text-neutral-800"
          : "border-transparent text-neutral-500"
      }`}
    >
      <Icon size={26}></Icon>
      <h2 className="text-sm font-medium">{label}</h2>
    </div>
  );
};

export default CategoryCard;
