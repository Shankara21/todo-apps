import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "@/components/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Login />
      {/* <svg
        width="50px"
        height="50px"
        viewBox="0 0 1024 1024"
        class="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M379.733333 386.133333l-157.866666 155.733334-89.6-87.466667L85.333333 501.333333l136.533334 136.533334 204.8-204.8zM379.733333 108.8l-157.866666 155.733333-89.6-87.466666L85.333333 224l136.533334 136.533333L426.666667 155.733333zM379.733333 663.466667l-157.866666 155.733333-89.6-87.466667L85.333333 778.666667l136.533334 136.533333 204.8-204.8z"
          fill="#3F51B5"
        />
        <path
          d="M512 469.333333h426.666667v85.333334H512zM512 192h426.666667v85.333333H512zM512 746.666667h426.666667v85.333333H512z"
          fill="#90CAF9"
        />
      </svg> */}
    </>
  );
}
