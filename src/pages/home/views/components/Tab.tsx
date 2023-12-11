interface Props {
  name: String;
  active?: boolean;
  onClick: VoidFunction;
}
const Tab = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.active && "bg-[#14C8B0]"} px-2 py-3 my-2 w-full`}
    >
      <p
        className={`text-xs font-[500] ${
          props.active ? "text-white" : "text-[#828487]"
        } `}
      >
        {props.name}
      </p>
    </button>
  );
};

export default Tab;
