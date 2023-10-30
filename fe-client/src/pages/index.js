import Layout from "@/components/Layout/layout";
import LeftSide from "@/components/ElementIndex/leftSide";
import RightSide from "@/components/ElementIndex/rightSide";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Layout>
        <div className="w-full h-screen flex justify-between ">
          <LeftSide />
          <RightSide />
        </div>
      </Layout>
    </div>
  )


}
