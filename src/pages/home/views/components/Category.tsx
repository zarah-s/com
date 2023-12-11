interface Props {
  tag: string;
  active?: boolean;
  onClick: VoidFunction;
}
const Category = ({ tag, active, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`border-[1px] ${
        active
          ? "border-[#14C8B0] text-[#14C8B0]"
          : "border-[#E4E4E4] text-[#19191C]"
      } px-5 py-1 rounded-full whitespace-nowrap`}
    >
      {tag}
    </button>
  );
};

export default Category;
