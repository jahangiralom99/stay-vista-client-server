import Container from "../../Shared/Container";
import CategoryCard from "../CategoryCard";
import { categories } from "./Categories";

const Category = () => {
    return (
        <Container>
            <div className="flex mt-8 overflow-y-auto mb-8">
                {
                    categories.map((category, idx) => <CategoryCard
                        key={idx}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </Container>
    );
};

export default Category;