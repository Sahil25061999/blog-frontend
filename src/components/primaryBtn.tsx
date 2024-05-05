interface IPrimaryBtn {
  btnText: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  classname?: string;
}
export function PrimaryBtn({ btnText, onClick, classname }: IPrimaryBtn) {
  return (
    <button
      onClick={onClick}
      className={` bg-stone-900 px-4 py-3 text-stone-50 rounded-full ${classname}`}
    >
      <p>{btnText}</p>
    </button>
  );
}
