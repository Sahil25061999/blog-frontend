import { LoadingSpinner } from "./loadingSpinner";

interface IPrimaryBtn {
  btnText: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  classname?: string;
  loading?: boolean;
}
export function PrimaryBtn({
  btnText,
  onClick,
  classname,
  loading = false,
}: IPrimaryBtn) {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className={` bg-stone-900 px-4 py-3 text-stone-50 rounded-full flex justify-center text-center ${classname}`}
    >
      {loading ? <LoadingSpinner /> : <p>{btnText}</p>}
    </button>
  );
}
