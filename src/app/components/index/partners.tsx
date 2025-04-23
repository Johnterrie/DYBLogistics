import Image from "next/image";
function Partners() {
  return (
    <>
      <section className="w-full flex flex-col items-center gap-5 mt-12">
        <h2 className="text-xl text-dark-gray font-semibold opacity-[44%]">
          Partnered With
        </h2>
        <div className="flex items-center justify-evenly">
          <Image
            alt="fedEx"
            src={"/images/partnered.svg"}
            width={650}
            height={650}
          />
        </div>
      </section>
    </>
  );
}

export default Partners;
