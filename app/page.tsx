import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-cols bg-white  justify-between p-5">
      <div className=" w-full max-w-5xl  justify-between font-mono text-sm">
        {/* <Image
          className="w-24 h-24 rounded-full"
          src="https://example.com/image.jpg"
          alt="Profile Picture"
          width={50}
          height={50}
        /> */}
        <h1 className="text-3xl text-black font-bold">Welcome to WeebWatch!</h1>
        <p className="text-lg text-black mb-5">
          A web streaming plateform for tracking & watching your favorite anime
          characters.
        </p>
        <a
          href="https://github.com/akakakak/weeb-watch"
          className=" self-center text-sm px-4 py-2  bg-blue-600 hover:bg-blue-700 rounded-md"
        >
          View on GitHub
        </a>
      </div>
    </main>
  );
}
