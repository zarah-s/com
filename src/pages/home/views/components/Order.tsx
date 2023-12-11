import { OrderProps } from "../../../../interfaces/OrderProps";

interface Props {
  order: OrderProps;
  onSubtract: VoidFunction;
  onAdd: VoidFunction;
  onDelete: VoidFunction;
}
const Order = ({ order, onAdd, onDelete, onSubtract }: Props) => {
  return (
    <div className="flex items-center justify-between my-5">
      <div className="flex items-center gap-3">
        <img
          src={order.product.image}
          className="w-20 object-cover h-20 rounded-lg"
          alt=""
        />
        <div className="">
          <h5 className="text-[#19191C] font-[600] text-sm">
            {order.product.name}
          </h5>
          <small className="text-[#9C9C9C] text-xs">Price</small>
          <p className="text-[#14C8B0] text-xs font-[500]">
            ₦ {order.product.price.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <button
          onClick={onDelete}
          className="border-[1px] border-[#FF284F] p-2 rounded"
        ></button>
        <div className="flex items-center gap-2 mt-3">
          <button
            onClick={onSubtract}
            className="bg-[#E4E4E4] w-7 h-7 rounded-full flex items-center justify-center"
          >
            -
          </button>
          <p className="text-sm">{order.quantity}</p>
          <button
            onClick={onAdd}
            className="bg-[#19191C] text-white w-7 h-7 rounded-full flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
