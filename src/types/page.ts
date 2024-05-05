import { IBlogCard } from "./components";

export type TBlogCardListItem = Exclude<IBlogCard, "author"> & {
  author: {
    username: string;
  };
};

export type TBlogCardList = Array<TBlogCardListItem>;
