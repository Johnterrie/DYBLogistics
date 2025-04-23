import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <>
      <footer className="w-full bg-secondary text-background p-3 md:p-5 relative overflow-x-hidden">
        <div className="flex flex-col items-center md:items-start gap-8 max-container">
          {/* links and newa */}
          <h2 className="hidden md:block text-[30px] font-semibold font-montreal">
            Subscribe to our newsletter
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-lg md:hidden font-semibold font-montreal">
                Subscribe to our newsletter
              </h2>
              <label
                htmlFor="newsletter"
                className="w-full max-w-[80%] md:max-w-fit bg-background rounded-3xl flex items-center gap-4 md:gap-8 p-1"
              >
                <input
                  type="text"
                  placeholder="Email address"
                  className=" p-2 w-full transparent text-sm focus:outline-none text-gray-dark placeholder:text-gray-dark placeholder:opacity-[67%]"
                />
                <button className="hidden md:block btn-large">Subscribe</button>
                <button className="btn-small md:hidden">Subscribe</button>
              </label>
            </div>

            {/* link-grid */}
            <div className="grid grid-cols-4 gap-8">
              <div className="flex flex-col items-center md:items-start gap-2">
                <h2 className="text-[14px] md:text-[22px] font-[600] md:font-[700] mb-1">
                  Products
                </h2>
                <Link href={"/shipping"} className="footer-link">
                  Shipping
                </Link>
                <Link href={"/tracking"} className="footer-link">
                  Tracking
                </Link>
              </div>
              <div className="flex flex-col items-center md:items-start gap-2">
                <h2 className="text-[14px] md:text-[22px] font-[600] md:font-[700] mb-1">
                  Company
                </h2>
                <Link href={"/contact-us"} className="footer-link">
                  Contact us
                </Link>
              </div>
              <div className="flex flex-col items-center md:items-start gap-2">
                <h2 className="text-[14px] md:text-[22px] font-[600] md:font-[700] mb-1">
                  Resources
                </h2>
                <Link href={"#faq"} className="footer-link">
                  FAQs
                </Link>
              </div>
              <div className="flex flex-col items-center md:items-start gap-2">
                <h2 className="text-[14px] md:text-[22px] font-[600] md:font-[700] mb-1">
                  Legal
                </h2>
                <Link href={"/privacy-policy"} className="footer-link">
                  Privacy policy
                </Link>
                <Link href={"/terms-and-conditions"} className="footer-link">
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* divide */}
        <div className="bg-[#4B4B4B80] w-screen h-[1px] absolute bottom-[30%] left-0" />

        {/* socials */}
        <div className="max-container mt-4 flex">
          <div className="mx-auto md:mx-0 md:ml-auto mt-4 flex flex-col items-center gap-2">
            <h2 className="">Follow us</h2>
            <div className="flex items-center gap-2">
              <Link href={"/facebook"}>
                <Image
                  alt="facebook icon"
                  src={"/icons/facebook-icon.svg"}
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={"/linkedin"}>
                <Image
                  alt="linkedin icon"
                  src={"/icons/linkedin-icon.svg"}
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={"/twitter"}>
                <Image
                  alt="twitter icon"
                  src={"/icons/twitter-icon.svg"}
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={"/instagram"}>
                <Image
                  alt="instagram icon"
                  src={"/icons/instagram-icon.svg"}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
