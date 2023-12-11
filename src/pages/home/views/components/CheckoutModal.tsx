import Popup from "reactjs-popup";
import { OrderProps } from "../../../../interfaces/OrderProps";
import { useState } from "react";
interface Props {
  open: boolean;
  setConfirmModal: Function;
  orders: OrderProps[];
  onSubmit: VoidFunction;
}
const CheckoutModal = ({ open, setConfirmModal, orders, onSubmit }: Props) => {
  const [couponCode, setCouponCode] = useState("");
  const code = "WEB3BRIDGECOHORTx";
  return (
    <Popup
      modal
      open={open}
      closeOnDocumentClick={false}
      onClose={() => {
        setConfirmModal(false);
      }}
    >
      <div className="bg-white shadow-2xl rounded-lg p-5 overflow-y-auto h-[calc(100vh-20vh)]">
        <div className="flex flex-col justify-between h-full">
          <div className="">
            <div className="">
              <h2 className="text-[#19191C] text-center font-[600] text-lg">
                Order confirmation
              </h2>
              <p className="text-[#828487] text-center">
                Please confirm the order below to completed payment
              </p>
            </div>

            <div className="relative overflow-x-auto my-10">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      ITEM NAME
                    </th>
                    <th scope="col" className="px-6 py-3">
                      QTY
                    </th>
                    <th scope="col" className="px-6 py-3">
                      PRICE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      SUBTOTAL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => {
                    return (
                      <tr key={index} className="bg-white border-b ">
                        <td className="px-6 py-4">{order.product.name}</td>
                        <td className="px-6 py-4">{order.quantity}</td>
                        <td className="px-6 py-4">
                          {order.product.price.toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          ₦{" "}
                          {(
                            order.product.price * order.quantity
                          ).toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="grid-cols-2 grid gap-20">
              <div className="">
                <div className="bg-[#F8F9FD] border-[1px] border-[#E4E4E4] p-2">
                  <h3 className="font-[500] text-lg">Notes</h3>
                  <p className="text-[#828487] text-sm">
                    You get 10% discount on coupon code
                  </p>
                </div>
                <div className="">
                  <input
                    type="text"
                    className="border-[#ccc] border-[1px] p-2 mt-3 rounded outline-none text-sm placeholder:text-[#C2C2C2]"
                    name=""
                    onChange={(e) => setCouponCode(e.target.value.trim())}
                    placeholder="Input Coupon code"
                    id=""
                  />
                </div>
                <small
                  className={
                    couponCode
                      ? couponCode === code
                        ? "text-[#14C8B0]"
                        : "text-red-500"
                      : ""
                  }
                >
                  {couponCode
                    ? couponCode === code
                      ? "Correct Code"
                      : "Invalid coupon code"
                    : null}
                </small>
              </div>
              <div className="">
                <div className="flex items-center my-5 justify-between">
                  <p className="text-[#828487] text-xs">Total</p>
                  <p className="text-[#14C8B0] text-xs font-[600]">
                    ₦{" "}
                    {orders.length
                      ? couponCode === code
                        ? (
                            orders
                              .map((mp) => mp.product.price * mp.quantity)
                              .reduce((a, b) => a + b) -
                            (orders
                              .map((mp) => mp.product.price * mp.quantity)
                              .reduce((a, b) => a + b, 0) *
                              40) /
                              100
                          ).toLocaleString()
                        : orders
                            .map((mp) => mp.product.price * mp.quantity)
                            .reduce((a, b) => a + b, 0)
                            .toLocaleString()
                      : 0}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  items-center justify-between">
            <div className=""></div>
            <div className="flex items-center gap-5">
              <button
                onClick={() => {
                  setConfirmModal(false);
                }}
                className="border-[#14C8B0] border-[1px] w-full py-2 px-4 rounded-full text-[#14C8B0]"
              >
                Cancel
              </button>
              <button
                form="form"
                type="button"
                onClick={onSubmit}
                className="bg-[#14C8B0] w-full py-2 px-4 rounded-full text-white"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default CheckoutModal;
