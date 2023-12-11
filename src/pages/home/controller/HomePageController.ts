import { ProductProps } from "../../../interfaces/ProductProps";
import { SubCategoryProps } from "../../../interfaces/SubCategoryProps";

class HomePageController {
    categories: string[] = ["Appliances", "Wears", "Food"];

    subCategories: SubCategoryProps[] = [
        {
            name: "Television",
            category: "Appliances",
        },
        {
            name: "Home",
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
            name: "Native",
            category: "Wears",
        },
        {
            name: "South South",
            category: "Wears",
        },
        {
            name: "Watches ",
            category: "Wears",
        },
        {
            name: "Sun glass",
            category: "Wears",
        },
        {
            name: "Breakfast",
            category: "Food",
        },
        {
            name: "Noodles",
            category: "Food",
        },
        {
            name: "Baked",
            category: "Food",
        },

        {
            name: "Cream",
            category: "Food",
        },
    ];



    products: ProductProps[] = [
        {
            subcategory: "Cream",
            id: Math.floor(Math.random() * 9999).toString(),
            image: "https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_640.jpg",
            name: "Ice-cream",
            price: 100,

        },
        {
            subcategory: "Home",
            id: Math.floor(Math.random() * 9999).toString(),
            image: "https://cdn.pixabay.com/photo/2017/08/22/10/47/washing-machine-2668472_640.jpg",
            name: "Washing Machine",
            price: 100,

        },
        {
            subcategory: "Home",
            id: Math.floor(Math.random() * 9999).toString(),
            image: "https://cdn.pixabay.com/photo/2011/03/01/03/55/iron-5112_640.jpg",
            name: "Electric Iron",
            price: 100,

        },
        {
            subcategory: "Home",
            id: Math.floor(Math.random() * 9999).toString(),
            image: "https://cdn.pixabay.com/photo/2015/03/03/18/39/vacuum-cleaner-657719_640.jpg",
            name: "Vacuum Cleaner",
            price: 100,

        },
        {
            subcategory: "Home",
            id: Math.floor(Math.random() * 9999).toString(),
            image: "https://cdn.pixabay.com/photo/2011/12/05/14/51/blender-10935_640.jpg",
            name: "Blender",
            price: 100,

        },
        {
            subcategory: "Home",
            id: Math.floor(Math.random() * 9999).toString(),
            image: "https://cdn.pixabay.com/photo/2014/08/08/21/32/food-mixer-413737_640.jpg",
            name: "Whisk",
            price: 100,

        },
        // {
        //     subcategory: "Home",
        //     id: Math.floor(Math.random() * 9999).toString(),
        //     image: "https://cdn.pixabay.com/photo/2011/03/01/03/55/iron-5112_640.jpg",
        //     name: "Electric Iron",
        //     price: 100,

        // },
        // {
        //     subcategory: "Home",
        //     id: Math.floor(Math.random() * 9999).toString(),
        //     image: "https://cdn.pixabay.com/photo/2011/03/01/03/55/iron-5112_640.jpg",
        //     name: "Electric Iron",
        //     price: 100,

        // },
        // {
        //     subcategory: "Home",
        //     id: Math.floor(Math.random() * 9999).toString(),
        //     image: "https://cdn.pixabay.com/photo/2011/03/01/03/55/iron-5112_640.jpg",
        //     name: "Electric Iron",
        //     price: 100,

        // },
        // {
        //     subcategory: "Home",
        //     id: Math.floor(Math.random() * 9999).toString(),
        //     image: "https://cdn.pixabay.com/photo/2011/03/01/03/55/iron-5112_640.jpg",
        //     name: "Electric Iron",
        //     price: 100,

        // },
        // {
        //     subcategory: "Home",
        //     id: Math.floor(Math.random() * 9999).toString(),
        //     image: "https://cdn.pixabay.com/photo/2011/03/01/03/55/iron-5112_640.jpg",
        //     name: "Electric Iron",
        //     price: 100,

        // },
        // {
        //     subcategory: "Home",
        //     id: Math.floor(Math.random() * 9999).toString(),
        //     image: "https://cdn.pixabay.com/photo/2011/03/01/03/55/iron-5112_640.jpg",
        //     name: "Electric Iron",
        //     price: 100,

        // },
        // {
        //     subcategory: "Home",
        //     id: Math.floor(Math.random() * 9999).toString(),
        //     image: "https://cdn.pixabay.com/photo/2011/03/01/03/55/iron-5112_640.jpg",
        //     name: "Electric Iron",
        //     price: 100,

        // },
        // {
        //     subcategory: "Home",
        //     id: Math.floor(Math.random() * 9999).toString(),
        //     image: "https://cdn.pixabay.com/photo/2011/03/01/03/55/iron-5112_640.jpg",
        //     name: "Electric Iron",
        //     price: 100,

        // },

    ]

    filterSubcategoriesBasedOfCategory(category: string): SubCategoryProps[] {
        const filters = this.subCategories.filter(filter => filter.category.toLowerCase() === category.toLowerCase());
        return filters;
    }

}


export default new HomePageController()