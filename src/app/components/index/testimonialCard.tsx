import Image from "next/image";
import { StaticImageData } from "next/image";

interface TestimonialCardProps {
  imageUrl: string | StaticImageData;
  userName: string;
  location: string;
  rating?: string | StaticImageData;
  testimonial: string;
  customStyle?: string;
}
function TestimonialCard({
  imageUrl,
  userName,
  location,
  rating = "/icons/5star.svg",
  testimonial,
  customStyle,
}: TestimonialCardProps) {
  return (
    <>
      <div
        className={`bg-[#faf9f9] w-full max-w-[450px] rounded-3xl p-3 md:px-5 md:py-8 flex gap-3 ${
          customStyle !== "" && customStyle
        }`}
      >
        <Image
          alt="user-review"
          src={imageUrl}
          width={50}
          height={50}
          className="object-cover h-fit rounded-full"
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-bold capitalize">
              {userName}{" "}
              <span className="text-gray-dark opacity-[67%]">{location}</span>
            </span>
            {rating && (
              <Image alt="rating" src={rating} width={100} height={100} />
            )}
          </div>
          <p className="text-sm leading-[22px] text-gray-dark opacity-[67%]">
            {`"${testimonial}"`}
          </p>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
