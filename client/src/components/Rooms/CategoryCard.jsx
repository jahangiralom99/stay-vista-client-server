/* eslint-disable react/prop-types */


const CategoryCard = ({ category }) => {
    const {label, icon:Icon } = category || {};
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-5 hover:text-neutral-800 transition cursor-pointer border-b-2">
            <Icon size={26}></Icon>
            <h2 className="text-sm font-medium">{label}</h2>
        </div>
    );
};

export default CategoryCard;