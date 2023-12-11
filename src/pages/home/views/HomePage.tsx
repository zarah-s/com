import { useState } from "react";
import Category from "./components/Category";
import Tab from "./components/Tab";
import HomePageController from "../controller/HomePageController";

const HomePage = () => {
  const [currentSubCategory, setCurrentSubCategory] = useState<number>(0);
  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const homeController = HomePageController;
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-1 border-r-[1px]  border-r-[#E4E4E4] h-full min-h-[calc(100vh-100px)]">
          <div className=" mt-5">
            {homeController.categories.map((category, index) => {
              return (
                <Tab
                  key={index}
                  name={category}
                  onClick={() => {
                    if (currentCategory === index) return;
                    setCurrentCategory(index);
                  }}
                  active={index === currentCategory}
                />
              );
            })}
          </div>
        </div>
        <div className="col-span-8">
          <div className="">
            <div className="border-b-[1px] border-b-[#E4E4E4]">
              <div className="py-2 px-5">
                <span className="text-[#14C8B0] font-[500] text-sm">
                  Pyde /{" "}
                </span>
                <span className="text-[#828487] font-[500] text-sm">
                  {homeController.categories[currentCategory]}{" "}
                </span>
              </div>
            </div>
            <div className="border-b-[1px] border-b-[#E4E4E4]">
              <div className="">
                <div className="flex items-center justify-between">
                  <div className="flex p-5 gap-2 border-r-[1px]  border-r-[#E4E4E4] items-center ">
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
                      {homeController
                        .filterSubcategoriesBasedOfCategory(
                          homeController.categories[currentCategory]
                        )
                        .map((sbCategory, index) => {
                          return (
                            <Category
                              onClick={() => {
                                setCurrentSubCategory(index);
                              }}
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
