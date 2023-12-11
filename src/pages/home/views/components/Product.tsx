import { ProductProps } from "../../../../interfaces/ProductProps";

interface Props {
  product: ProductProps;
  onClick: VoidFunction;
}
const Product = ({ product, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="shadow rounded-lg cursor-pointer bg-white p-2"
    >
      <img
        src={product.image}
        loading="lazy"
        crossOrigin="anonymous"
        className="rounded-lg h-36 w-full object-cover"
        alt={product.name}
      />
      <div className="mt-3">
        <p className="text-[#19191C] font-[600] text-center">{product.name}</p>
        <p className="text-[#14C8B0] font-[600] text-center text-sm">
          ₦ {product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Product;
