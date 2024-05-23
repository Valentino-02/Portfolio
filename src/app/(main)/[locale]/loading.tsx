import { AiOutlineLoading } from "react-icons/ai";

export default async function Loading() {
  return (
    <div className="flex gap-2 text-2xl font-black tracking-widest text-main-pink">
      <AiOutlineLoading className=" animate-spin" />
      <h1>Loading...</h1>
    </div>
  );
}
