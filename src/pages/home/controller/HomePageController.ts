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
            "image": "https://pixabay.com/get/ge16aec3e66d301201fcddeca27de3d133b6d3920f19ecfc8ae09cfc3cd307ef0327cfc39acf78777e40db0dcbff4640d8a72fadc2f9c3eabfbceb465ec2843e0_1280.jpg",
            "name": "kitchen, real estate, interior design",
            "subcategory": "appliances",
            "id": "2964",
            price: 52050
        },
        {
            "image": "https://pixabay.com/get/g21010d6564d40fbaa188842a1b0a371b08f954f30cdf01ecb26243a94d3582047160c8055e406ea89f4faf660a1e0e0b5ddfbc259eb4a3db80733b7afba3610e_1280.jpg",
            "name": "kitchen, real estate, interior design",
            "subcategory": "appliances",
            "id": "390",
            price: 78149
        },
        {
            "image": "https://pixabay.com/get/g3c26ade2dbaf93677cede8e0a6b5326d53ac36f3c215d020ff0b5ceaafdd0e03d5d119043a299db6fe128d4c0de51e0d_1280.jpg",
            "name": "electric iron, household appliances, home appliances",
            "subcategory": "appliances",
            "id": "5972",
            price: 74670
        },
        {
            "image": "https://pixabay.com/get/g3973e1fab52979b8e73f9716def5cf904242ebd2cd450e0cbe5ebd4f79ae12ca9551d17ba452738ab2892844a6e7f7111a013ba9ecd00833609ccd5768fb0f3f_1280.jpg",
            "name": "stove, kitchen, cooker",
            "subcategory": "appliances",
            "id": "2882",
            price: 17212
        },
        {
            "image": "https://pixabay.com/get/g15c80eb0eace95296544767f77c0ee7bcd7ba81805406c8942f7b03e5bd3742ac840b31c1ea9d88171c4bdf9f1302c58_1280.jpg",
            "name": "shaver, household appliances, home appliances",
            "subcategory": "appliances",
            "id": "8827",
            price: 84878
        },
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
            "image": "https://pixabay.com/get/g332c190710cb0e594352606be5ff3664386d991a8faa2e92831ecb64acc8cd3a035bcad71e206e527b9f99e75b173cd2f6df56456f61d07a1477c53d5df504c6_1280.jpg",
            "name": "kitchen, real estate, interior design",
            "subcategory": "appliances",
            "id": "3902",
            price: 65667
        },
        {
            "image": "https://pixabay.com/get/gf4d87722b38d8b2adf6a5ade1878dfdbeb7e12f097939aa251ebb55fed0c8c05627a9747341367daad001fec5250df5a838c4a9fabbf76df611eef703a6a764e_1280.jpg",
            "name": "kitchen, real estate, interior design",
            "subcategory": "appliances",
            "id": "7202",
            price: 80054
        },
        {
            "image": "https://pixabay.com/get/g16e9d92acc6160aa6374afc1a25df00a65b548baad95c88dd5a1cdb8b9d7645bb9be7ebad9feda22b9d33bdc6eae995b_1280.jpg",
            "name": "electric iron, household appliances, home appliances",
            "subcategory": "appliances",
            "id": "915",
            price: 87466
        },
        {
            "image": "https://pixabay.com/get/ga19232cc8ddea1dcbb362a62ee52851d943568509b9765a35a8ca7d22277df6aaf0dac5ef9b9c749f21ef9b25bd7036d4c362aefc420086cc186e3a7dcdaca84_1280.jpg",
            "name": "stove, kitchen, cooker",
            "subcategory": "appliances",
            "id": "3096",
            price: 76595
        },
        {
            "image": "https://pixabay.com/get/ga754b88e8427c8b4e3f8670dc593526eb402921b92336223bd2287daadae697d828fb4e4345bd60f4a02a56778be21c1_1280.jpg",
            "name": "shaver, household appliances, home appliances",
            "subcategory": "appliances",
            "id": "6853",
            price: 69280
        },
        {
            "image": "https://pixabay.com/get/gf7405d8f6678cea1773314dcf578a0eff681e6b09ec685271e7fc9ab8d3c2950a700afaac997a52fbe089e6f2ac7bf7b_1280.jpg",
            "name": "bread machine, household appliances, home appliances",
            "subcategory": "appliances",
            "id": "3587",
            price: 60301
        },
        {
            "image": "https://pixabay.com/get/g2d5958641de740b7e0129baf7b4b776665c71f1cf7fd2989fc052dbb628a7db29757fb303286bf360ce98a11d5aaadab_1280.jpg",
            "name": "electric iron, household appliances, home appliances",
            "subcategory": "appliances",
            "id": "7698",
            price: 4113
        },
        {
            "image": "https://pixabay.com/get/g99d2ce6e815595b16f5e1d0447c819d0dc11361f62de52b8f4f674e7cfb42e18e4521ddac2de553225524edded6507c06a0317144e463433de475562976b99fa_1280.jpg",
            "name": "dishwasher, kitchen utensils, washing",
            "subcategory": "appliances",
            "id": "7424",
            price: 29460
        },
        {
            "image": "https://pixabay.com/get/g59423f49e6ff462d39823916dd33e7ae91ec792c62fa47049ae029af8054afae9140f0c93182a52c6f17b8fb4b13b9c6aa30e842622e3c4f29eaa3dbaefdeee6_1280.jpg",
            "name": "refrigerator, fridge, cold storage",
            "subcategory": "appliances",
            "id": "8934",
            price: 21701
        },
        {
            "image": "https://pixabay.com/get/g6ffe59262b975c0a7020c58311cf04979cdccae07bbb89258a344dad84eb0bc953d8ba2dc7c0927f4a00267eb4966b50_1280.jpg",
            "name": "bread machine, household appliances, home appliances",
            "subcategory": "appliances",
            "id": "345",
            price: 56146
        },
        {
            "image": "https://pixabay.com/get/gc9782903b496da107f11a462f0cda59ef8fa0c9452b356cec9a6f8fddec56a8c67f35220f18b60c9e78515f70add308c7d639b8d33fd3c58f064278d12d2e7f9_1280.jpg",
            "name": "accessory, appliance, breakfast",
            "subcategory": "appliances",
            "id": "431",
            price: 97478
        },
        {
            "image": "https://pixabay.com/get/g5118fde8411cb7de1a43c96837042b713b21b870253af2a0912349613462b63c95cc34ff7bb878ee67410f3407d7cafea3dbba8c3a55f3b79f238330d0c8b272_1280.jpg",
            "name": "accessory, appliance, chef",
            "subcategory": "appliances",
            "id": "8204",
            price: 45927
        },
        {
            "image": "https://pixabay.com/get/gd856a3ef8379eb71f2a1fe8da258540f20e4b8652fb69fdce58b202339b07ae9b1a2ec16b661ac0afa317578a8e923145219af11da1a1d90fe41b867109ce407_1280.jpg",
            "name": "cling, attach, to back up",
            "subcategory": "appliances",
            "id": "622",
            price: 54627
        },
        {
            "image": "https://pixabay.com/get/g1c97cf4b3eede0351e3687433d10199f1f9f2993de96e60b55df048ce21ca6c72c3a217f889e324f84c06986c562d584ceb1efbf4291612dd558a76d071e2624_1280.jpg",
            "name": "outlet, electricity, electric",
            "subcategory": "appliances",
            "id": "8504",
            price: 99857
        },
        {
            "image": "https://pixabay.com/get/g3740ebada30c0c7556c75cea1e4c28d3499c69233dd9457a0bce0347b4b596af366f4d93ae367b7694d1fca1fddc8a71_1280.jpg",
            "name": "son-mother machine, household appliances, home appliances",
            "subcategory": "appliances",
            "id": "6413",
            price: 96147
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
            "image": "https://pixabay.com/get/g128b858ccdf42ea9c9c9a33e4b47acfcb4561660567fd14103a01db971ed02656fbf8f176dd18d5df00402a9d958ef618f90fa099fa78e14eccfd3d153f69627_1280.jpg",
            "name": "woman, waterfall, forest",
            "subcategory": "appliances",
            "id": "5129",
            "price": 70081
        },
        {
            "image": "https://pixabay.com/get/g5fe68877406c0e8279bc208b4863166fb3537037378aeac53d9d8dfa9d47fc2209c261a601bad21851485e2003d512f4b5a157ecb1456d4e9e78efc5be392493_1280.jpg",
            "name": "adult, bald, beard",
            "subcategory": "appliances",
            "id": "3060",
            "price": 27374
        },
        {
            "image": "https://pixabay.com/get/g5f2ecb0cc81cc91ba9a2a3cf2ca06591c4ef8ce2114a2a4acc753c176f2e25cc242fa2f4ed9691919def4bbc31d4f8bd42a2a5cc094e01012845d783458f14cd_1280.jpg",
            "name": "woman, chinese hanfu, hanfu",
            "subcategory": "appliances",
            "id": "134",
            "price": 88839
        },
        {
            "image": "https://pixabay.com/get/g68acf6f58bd9d0540270b7b0ee812115a0917ac98d0b6eefb42e2aa6e17bd6c2e275abd7b04e7392169291364b9f3cc264bbd3b064ec0724afca8c20a21f065f_1280.jpg",
            "name": "hangers, clothing, shopping",
            "subcategory": "appliances",
            "id": "5326",
            "price": 83822
        },
        {
            "image": "https://pixabay.com/get/ge15b44be82fb2665750b36e10dddce7bf8e1ca3a2f43c374c164a7178aac79b2184ccb9026dfb82f1f8fe4cb06b556b7aca2ffb06b22dadec82ce9f5770b1e5a_1280.jpg",
            "name": "tying hair, woman, hands",
            "subcategory": "appliances",
            "id": "4234",
            "price": 48173
        },
        {
            "image": "https://pixabay.com/get/gae2580a3c2854aa9c6de6896aec324ac0688c20acd99a564e0b28cc23e7d7676e102418384abb904c41d86b98f2a430569812a45334627a265d196dbe67dca43_1280.jpg",
            "name": "girl, curly hair, woman",
            "subcategory": "appliances",
            "id": "8368",
            "price": 3154
        },
        {
            "image": "https://pixabay.com/get/g6f6df0b85a959caed62867da94cb8cf7e0ded83a83d06229a4afb9d25a5620a5f623ba5994ebb8bbfbfa27a7756b9519b5e2f65276feed86cf21332b70c9e42d_1280.jpg",
            "name": "smart watch, apple, wrist",
            "subcategory": "appliances",
            "id": "193",
            "price": 1004
        },
        {
            "image": "https://pixabay.com/get/g13a25a110376ae137084fac1f493f1bf250587f4847dbf18224dcdd3476723dcba6bbaa926bb4cce686626022811135b02fa571e358a238b15a17c9c53b6c60e_1280.jpg",
            "name": "athlete, runner, sprint",
            "subcategory": "appliances",
            "id": "2164",
            "price": 24190
        },
        {
            "image": "https://pixabay.com/get/ga1ddaab19854786212abb04df570a49292685a5a73e3b25adb92b2158c0955cafdf40d1eaeedbb006550a00236a07444bbcda2beb2327fe2555b06a26a0b3997_1280.jpg",
            "name": "girl, portrait, model",
            "subcategory": "appliances",
            "id": "6692",
            "price": 43840
        },
        {
            "image": "https://pixabay.com/get/g0b9d29cafd2418084f46b211fe557e0d86c420ad7589e49f206ec0f7155bb8ed863c7fef63398409042bd65244e54eba74c69f5cf1b04dc3999503390f579900_1280.jpg",
            "name": "woman, beauty, fashion",
            "subcategory": "appliances",
            "id": "1118",
            "price": 97827
        },
        {
            "image": "https://pixabay.com/get/gae4ef84219399c73ef89bbbebe35db4555903e32def50b193990cbc210f0c65836ef34a87985e14989b10c38d96f56b6b6e9b5cd0ed52f821aefeeb148ebee66_1280.jpg",
            "name": "fabric, jeans, texture",
            "subcategory": "appliances",
            "id": "8858",
            "price": 96208
        },


        {
            "image": "https://pixabay.com/get/g0c5166aefa5be21445d95576ff083a05b15fc47d832845f603c8f2a03c3fb94b1c38c7bb6bed215fbbff6ceabc0902b1339f4f90ec039f014c939ae1eda7636e_1280.jpg",
            "name": "spaghetti, tomatoes, basil",
            "subcategory": "food",
            "id": "1132",
            "price": 44724
        },
        {
            "image": "https://pixabay.com/get/g75f48a50af2f74c57d3128c0aefa4d5ef98e52817d73c864d0b8327dcc4cbed62de0be23452c4ce610e65ade3044a7c4_1280.jpg",
            "name": "berries, 4k wallpaper 1920x1080, desktop backgrounds",
            "subcategory": "food",
            "id": "5973",
            "price": 17416
        },
        {
            "image": "https://pixabay.com/get/g33c96163afcbfe71622acdd98ab624f74227a8b923c1362a8eaf66ab69c427561031be6edc6162ad417e2a7b80498b627fc61e6454b5b26af8c1a72adf61b729_1280.jpg",
            "name": "vegetables, basket, vegetable basket",
            "subcategory": "food",
            "id": "1908",
            "price": 45022
        },
        {
            "image": "https://pixabay.com/get/g04fba6dcb64020f5379406857dbd967e615aae3c49ae21a120a637e2e902a7c1462f285decc82026e5ba7ae6d68baa39d519f5616a0f75872f6475d6fa052ff4_1280.jpg",
            "name": "ice cream, dessert, food",
            "subcategory": "food",
            "id": "8428",
            "price": 65050
        },
        {
            "image": "https://pixabay.com/get/g38a44ad2a636265365a1b18851947829d6ea64ffe458304abfa94760cd265f9f454dbfbbe296e0235453a5626f051a2c451ec3380a1684bb1a5fefed1d663a7a_1280.jpg",
            "name": "watermelon, berry, fruit",
            "subcategory": "food",
            "id": "3645",
            "price": 81082
        },
        {
            "image": "https://pixabay.com/get/gd296fb7dda7b48e4e4f6ea8bd0baaa29d8edca4e291672807f119096e4c4c2504bdb96ccbcd84d492f39ddb82aaa08bdafeedf5e7d3ea42684d0681edd9c7629_1280.jpg",
            "name": "salad, fruit, berry",
            "subcategory": "food",
            "id": "2034",
            "price": 76881
        },
        {
            "image": "https://pixabay.com/get/g8031f7c40091daf4cfe2b8a5a0e6f874d9a16ee2270ac51956b90c3335b8ecbbb1c041a837fa985df56c9a74055b2ff8f6925055408c58ea9d97764b41bcf4d4_1280.jpg",
            "name": "vegetables, fruits, food",
            "subcategory": "food",
            "id": "6305",
            "price": 91385
        },
        {
            "image": "https://pixabay.com/get/gd54e6a40b5edc8151c8715d80a8c1fd933617594faaf19b631e007f57bc11d16cf6d97bad8a13b4828fb6f7694543f7d07ff183ac905afe96d4262b008a2a793_1280.jpg",
            "name": "food, dishes, meals",
            "subcategory": "food",
            "id": "8189",
            "price": 17439
        },
        {
            "image": "https://pixabay.com/get/g92df613170a8f8e02b0fd873588d18f4ec5d23cc77ff1fd230b3ab4cf2bb6efb9d73f81e69107e2bd6889e8788fdf6e1fc2191e4315fcf9dacaf1666e5c4a512_1280.jpg",
            "name": "raspberries, fresh, bowl",
            "subcategory": "food",
            "id": "2282",
            "price": 2681
        },
        {
            "image": "https://pixabay.com/get/gc21b235ac93bc3b990fb4cd7b776c66ceea7d728ce8b14c38a74e71fb7e15721c96af06d59bd82eeeaf2a44bb7696cbfc1b6aa54538594b3a6c2aa34bb4567d3_1280.jpg",
            "name": "macarons, raspberries, pastries",
            "subcategory": "food",
            "id": "9358",
            "price": 8266
        },
        {
            "image": "https://pixabay.com/get/gf188ffa4f25d0e6e20bf76803d1ad3469390ed3baa83e15737681a17f9187b3d5ebe20e765650e32552fbe09b4719d88572ddfde1ae7fac16c9f02f6880e3d82_1280.jpg",
            "name": "oranges, citrus fruits, fruits",
            "subcategory": "food",
            "id": "5018",
            "price": 99065
        },
        {
            "image": "https://pixabay.com/get/g701c027f42da73372ca8ae7eabdf79ad647efbb3da669b4056443bba1c8bd2996218f84af3faa17d894572ee6294de3cbfc81efe4a940d6f70b12dfe594129eb_1280.jpg",
            "name": "meal, salad, cucumbers",
            "subcategory": "food",
            "id": "6809",
            "price": 43796
        },
        {
            "image": "https://pixabay.com/get/gc43d721e783bccfc6cc2b83364268931d6b3fbe261b15dbb9e4c92bc5a7221c37133bf9c54ee84ab690fd9ea554168b18cb8c8cb8fc30648665c184b239e47c2_1280.jpg",
            "name": "cookies, walnuts, cinnamon sticks",
            "subcategory": "food",
            "id": "532",
            "price": 68759
        },
        {
            "image": "https://pixabay.com/get/gcec50d7d2bd629787370d3cf22dc5ae701c4df2c7bf3a0f4b23df45a8efa64f60e8d83ea81b2178db555a231f72ae00261100ae4e10d9f88313057ff4746c03a_1280.jpg",
            "name": "olive oil, olives, food",
            "subcategory": "food",
            "id": "1747",
            "price": 78208
        },
        {
            "image": "https://pixabay.com/get/g35a1850f2bcf1379ccb27c118d86c451701788f88c77986c4352d0ebaeeeddbe554855bf047f3da837bb504d4a900678d72852dbc1559bb8b3a21c90c97d30b5_1280.jpg",
            "name": "salmon, fish, seafood",
            "subcategory": "food",
            "id": "287",
            "price": 47579
        }
        ,
        {
            "image": "https://pixabay.com/get/g05a77a6eac4ef83173f1cdb9b0a7c2125ae3db900ec8d989435d03248e725fdc03e6ce2fb01fa9b104dcc30bf2dbb306d4e381f2430fb9cdb56a8b67964b10ae_1280.jpg",
            "name": "couple, together, holding hands",
            "subcategory": "appliances",
            "id": "9185",
            "price": 51626
        },
        {
            "image": "https://pixabay.com/get/gd482ab87385c33e8c1e1c09402e22b70ffdc04a2a2d056414d5191c7f0001b82943290de7cc1e81b52369f16eab1e330f1f218cd18b2ee7557f57779261df4a3_1280.jpg",
            "name": "smart watch, apple, wrist",
            "subcategory": "appliances",
            "id": "6772",
            "price": 33276
        },
        {
            "image": "https://pixabay.com/get/g0f71d488d5844eac0e48ef0631590386723eb5676f5916117bb4414b04a561b0224a93f103f09b3af3620b07e3440d90213f4010e01febff56cb920b01379c6d_1280.jpg",
            "name": "old man, beard, portrait",
            "subcategory": "appliances",
            "id": "3005",
            "price": 49783
        },
        {
            "image": "https://pixabay.com/get/gd7dd38c9c2a6683a9c53fa5321b25af01a4227028b318437e0f159ef08854ceca421fcb363350aad6a4e46c85db45e1478dd2c5ca6087a29224318a0b52a54df_1280.jpg",
            "name": "groom, beard, bow tie",
            "subcategory": "appliances",
            "id": "2346",
            "price": 28246
        }
        ,
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