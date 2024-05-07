import { AvatarVariant, IAvatar } from "../types";

export function Avatar({ variant, nameInitial }: IAvatar) {
  let size = "h-8";
  // let fontSize = ""
  switch (variant) {
    case AvatarVariant.small:
      size = "h-6  text-sm";
      break;
    case AvatarVariant.medium:
      size = "h-8 text-base";
      break;
    case AvatarVariant.large:
      size = "h-16 text-lg";
      break;

    default:
      size;
  }
  return (
    <div
      className={`${size} aspect-square rounded-full bg-green-300 flex items-center justify-center`}
    >
      <button>{nameInitial}</button>
    </div>
  );
}
