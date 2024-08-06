import BannerHome from "@/components/banner-home/BannerHome";

export default function Home() {
  return(
    <div className="flex flex-col gap-3">
      <BannerHome />
      <div className="flex w-full justify-center flex-wrap gap-2">
        <div className="w-[400px] h-[500px] bg-pink-300"></div>
        <div className="w-[400px] h-[500px] bg-pink-300"></div>
        <div className="w-[400px] h-[500px] bg-pink-300"></div>
        <div className="w-[400px] h-[500px] bg-pink-300"></div>
        <div className="w-[400px] h-[500px] bg-pink-300"></div>
        <div className="w-[400px] h-[500px] bg-pink-300"></div>
        <div className="w-[400px] h-[500px] bg-pink-300"></div>
        <div className="w-[400px] h-[500px] bg-pink-300"></div>
        <div className="w-[400px] h-[500px] bg-pink-300"></div>
        <div className="w-[400px] h-[500px] bg-pink-300"></div>
      </div>
    </div>
  )
}