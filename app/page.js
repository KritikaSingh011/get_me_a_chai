import Image from "next/image";

export default function Home() {
  return (
    
    <div className="w-full py-15 flex flex-col items-center justify-center">
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl flex font-bold text-center text-white mb-4">
            Welcome to Get Me A Chai
            <span className="ml-3">
              <img className="w-12 rounded-full" src="/coffee-break.gif" alt="" />

            </span>
          </h1>
          <p className="text-lg text-center text-white mb-8">
            Get Me A Chai is a simple app that allows you to get funds for the clients.
          </p>
          <div className="">
            <button type="button" className="text-white bg-linear-to-br from-yellow-600 to-orange-900  hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5 w-40 mx-3">Get Started</button>
            <button type="button" className="text-white bg-linear-to-br from-yellow-600 to-orange-900  hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5 w-40 mx-3">Read More</button>
          </div>
        </div>
      </div>
      <div className="h-0.5 my-10 w-screen bg-orange-950"></div>
      <div className="container flex flex-col items-center justify-center">
        <div className="text-3xl font-bold text-white mb-6">
          Your client can buy you a chai. 
        </div>
        <div className="flex items-center justify-around mx-auto mt-5">
          <div className="flex flex-col items-center">
            <img className="w-25 rounded-full border-4 border-amber-950" src="/workspace.gif" alt="" />
            <p className=" font-bold text-white ">Fans want to help</p>
            <p className="text-white text-xs">your fans are available to support you</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-25 rounded-full border-4 border-amber-950" src="/dollar.gif" alt="" />
            <p className=" font-bold text-white ">Clients can contribute</p>
            <p className="text-white text-xs">your clients can support your endeavors</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-25 rounded-full border-4 border-amber-950" src="/discussion.gif" alt="" />
            <p className=" font-bold text-white ">Engage with your community</p>
            <p className="text-white text-xs">connect with your audience and build relationships</p>  
          </div>
        </div>
      </div>
    </div>
  );
}
