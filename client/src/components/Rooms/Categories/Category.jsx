
import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import CategoryCard from "../CategoryCard";
import { categories } from "./Categories";


const Category = () => {
    const [params, setParams] = useSearchParams();

    const searchCategory = params.get('category');
    // console.log(searchCategory);

    return (
        <Container>
            <div className="flex mt-8 overflow-y-auto mb-8">
                {
                    categories.map((category, idx) => <CategoryCard
                        key={idx}
                        category={category}
                        searchCategory={searchCategory === category.label}
                    ></CategoryCard>)
                }
            </div>
        </Container>
    );
};

export default Category;