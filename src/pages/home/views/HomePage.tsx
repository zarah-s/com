import { useState } from "react";
import Category from "./components/Category";

const HomePage = () => {
  const categories = ["Appliances", "Wears", "Food"];
  const [currentSubCategory, setCurrentSubCategory] = useState<number>(0);

  const subCategories = [
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

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-1 border-r-[1px]  border-r-[#E4E4E4] h-full min-h-[calc(100vh-100px)]">
          <div className="flex items-center px-3 justify-center flex-col mt-5">
            {/* General Category here */}
          </div>
        </div>
        <div className="col-span-8">
          <div className="">
            <div className="border-b-[1px] border-b-[#E4E4E4]">
              <div className="py-2 px-5">
                <span className="text-[#14C8B0] font-[500] text-sm">
                  Pyde /{" "}
                </span>
                <span className="text-[#828487] font-[500] text-sm">Food </span>
              </div>
            </div>
            <div className="border-b-[1px] border-b-[#E4E4E4]">
              <div className="">
                <div className="flex items-center justify-between">
                  <div className="flex p-5 gap-2 border-r-[1px]  border-r-[#E4E4E4] items-center ">
                    {/* <Assets.Search /> */}
                    <input
                      type="text"
                      placeholder="Search product..."
                      className="outline-none border-none placeholder:text-[#C2C2C2]"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="overflow-x-auto">
                    <div className="flex items-center gap-5 flex-nowrap">
                      {subCategories.map((sbCategory, index) => {
                        return (
                          <Category
                            onClick={() => {}}
                            active={currentSubCategory === index}
                            tag={sbCategory.name}
                            key={index}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
