import Crypto from "./crypto";
import { currencie } from "../Types";

function Main() {
  return (
    <main className="h-[74%] mx-[16%] flex flex-col gap-2 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {[].map((c: currencie) => {
        return <Crypto currencie={c} />;
      })}
    </main>
  );
}

export default Main;
