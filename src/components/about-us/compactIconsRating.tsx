import Image from "next/image";

export function CompactIconsRating() {
  const userIconsForRating = [
    "https://utfs.io/f/0c129076-43e0-423e-baf9-ce397a5767a2-hdmc02.png",
    "https://utfs.io/f/6cd5bf41-ad22-4f28-8606-b70e16cc4d99-jecvhl.png",
    "https://utfs.io/f/23a291ca-7804-40db-a6ca-712bb577479b-2fz9m2.png",
    "https://utfs.io/f/9e5cda45-71fc-449a-a470-36e881410943-8al9rk.png",
  ];

  return (
    <div className="flex w-full flex-row justify-center">
      {userIconsForRating.map((image, index) => (
        <Image key={`${image}-${index}`} src={image} alt="" className="h-[50px] w-[50px] rounded-[50%]" height={50} width={50} />
      ))}
      <div className="flex h-[50px] w-[50px] flex-col items-center justify-start pl-8">
        <h2 className="flex h-[50px] w-[50px] items-center justify-center rounded-[50%] text-center text-3xl font-bold">3K+</h2>
      </div>
    </div>
  );
}
