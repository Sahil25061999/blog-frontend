import { Navbar } from "./navbar";

interface ILayout {
  children: React.ReactNode;
  showNav?: boolean;
}

export function Layout({ children, showNav = true }: ILayout) {
  return (
    <div className="  w-[min(1300px,calc(100%-2rem))] h-full mx-auto">
      {showNav ? <Navbar /> : null}
      <div className="h-full  py-8 ">{children}</div>
    </div>
  );
}
