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
        {
            subcategory: "Baked",
            id: Math.floor(Math.random() * 9999).toString(),
            image: "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_640.jpg",
            name: "Pan Cake",
            price: 100,

        },
        {
            subcategory: "Baked",
            id: Math.floor(Math.random() * 9999).toString(),
            image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_640.jpg",
            name: "Burger",
            price: 100,

        },
        {
            subcategory: "Breakfast",
            id: Math.floor(Math.random() * 9999).toString(),
            image: "https://cdn.pixabay.com/photo/2015/07/12/14/26/coffee-842020_640.jpg",
            name: "Tea",
            price: 100,

        },
        {
            subcategory: "Breakfast",
            id: Math.floor(Math.random() * 9999).toString(),
            image: "https://cdn.pixabay.com/photo/2018/01/31/09/57/coffee-3120750_640.jpg",
            name: "Coffee",
            price: 100,

        },
        {
            subcategory: "Wears",
            id: Math.floor(Math.random() * 9999).toString(),
            image: "https://cdn.pixabay.com/photo/2017/06/20/21/33/couple-2424928_640.jpg",
            name: "Couple Match",
            price: 100,

        },
        {
            subcategory: "Wears",
            id: Math.floor(Math.random() * 9999).toString(),
            image: "https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559_640.jpg",
            name: "Wrist watch",
            price: 100,

        },
        {
            subcategory: "Wears",
            id: Math.floor(Math.random() * 9999).toString(),
            image: "https://cdn.pixabay.com/photo/2020/06/03/14/53/fashion-5255195_640.jpg",
            name: "Indian",
            price: 100,

        },
        {
            subcategory: "Wears",
            id: Math.floor(Math.random() * 9999).toString(),
            image: "https://cdn.pixabay.com/photo/2014/04/03/11/38/sunglasses-312051_640.png",
            name: "Dark Shades",
            price: 100,

        },

    ]

    filterSubcategoriesBasedOfCategory(category: string): SubCategoryProps[] {
        const filters = this.subCategories.filter(filter => filter.category.toLowerCase() === category.toLowerCase());
        return filters;
    }

}


export default new HomePageController()