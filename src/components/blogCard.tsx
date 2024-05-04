import { Heading2 } from "./heading2";
import { TextRegular } from "./textRegular";

export function BlogCard() {
  return (
    <div>
      <div className=" flex gap-2 items-center mb-1">
        <p className=" text-sm font-medium">Shyam Sundari</p>
        <p className=" text-sm text-stone-700">{" "}Dec 4,2012</p>
      </div>
      <Heading2>
        How an ugly single-page website makes $5000 a month with affiliate
        marketing.
      </Heading2>
      <div className=" mt-2">
        <TextRegular classname=" line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, obcaecati
          debitis ducimus expedita minus nisi quidem nostrum architecto magnam
          temporibus accusantium amet sunt pariatur tenetur provident, eum
          inventore ullam eveniet?
        </TextRegular>
      </div>
    </div>
  );
}
