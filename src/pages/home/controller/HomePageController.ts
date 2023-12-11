import { SubCategoryProps } from "../../../interfaces/SubCategoryProps";

class HomePageController {
    categories = ["Appliances", "Wears", "Food"];

    subCategories = [
        {
            name: "Television",
            category: "Appliances",
        },
        {
            name: "Decoder",
            category: "Appliances",
        },
        {
            name: "Refridgerator",
            category: "Appliances",
        },
        {
            name: "Microwave",
            category: "Appliances",
        },
        {
            name: "Agbada",
            category: "Wears",
        },
        {
            name: "Kaftan",
            category: "Wears",
        },
        {
            name: "Rolex ",
            category: "Wears",
        },
        {
            name: "Sun glass",
            category: "Wears",
        },
        {
            name: "French Fries",
            category: "Food",
        },
        {
            name: "Pizza",
            category: "Food",
        },
        {
            name: "Omlette",
            category: "Food",
        },
    ];

    filterSubcategoriesBasedOfCategory(category: string): SubCategoryProps[] {
        const filters = this.subCategories.filter(filter => filter.category.toLowerCase() === category.toLowerCase());
        return filters;
    }

}


export default new HomePageController()