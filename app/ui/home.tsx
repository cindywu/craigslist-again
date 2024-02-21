import LeftNav from "./left-nav";
import Main from "./main";
export default function Home(): JSX.Element {
  return (
    <div className="flex gap-2 p-2">
      <LeftNav />
      <Main />
    </div>
  );
}
