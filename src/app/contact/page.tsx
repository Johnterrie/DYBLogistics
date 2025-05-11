import Link from "next/link";
import Image from "next/image";

import whatsappIcon from "../../../public/icons/whatsapp-icon.svg";
import locationIcon from "../../../public/icons/location-icon.svg";
import emailIcon from "../../../public/icons/email-icon.svg";
import ContactUsForm from "../components/contact/ContactUsForm";

const navLinks = [
  { name: "FAQs", href: "" },
  { name: "Socials", href: "" },
  { name: "Send Message", href: "" },
];

const contactDetails = [
  { content: "example@email.com", icon: emailIcon },
  { content: "Click to chat with us on Whatsapp", icon: whatsappIcon },
  { content: "1234 Main Street, Cityville, Country", icon: locationIcon },
];

const Contact = () => {
  return (
    <div className="px-[22px]">
      <h3 className="text-center font-bold text-[20px] md:text-[45px] leading-6 md:mt-[40px]">
        Support Center
      </h3>
      <ul className=" flex flex-col justify-start md:justify-center md:flex-row md:gap-[80px] gap-[50px] mt-[45px] md:mt-[80px] mb-[50px] md:mb-[120px] ">
        {navLinks.map((link) => (
          <li className="  " key={link.name}>
            <Link
              className="font-semibold text-[12px] md:text-[20px] text-[#222222B2] md:text-[#222222] leading-[100%] md:leading-[24px] underline underline-offset-4 "
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-col md:flex-row ">
        <div>
          <h4 className="mb-[6px] md:mb-[18px] text-[16px] md:text-[26px] font-semibold leading-6 ">
            Contact Us
          </h4>
          <p className="text-[12px] md:text-[18px] text-[#222222E5] leading-[18px] font-normal md:font-medium mb-[20px] md:mb-[76px]">
            For any urgent inquiries, please contact us using the details
            provided below.
          </p>
          <ul className=" flex flex-col gap-7 md:gap-10 ">
            {contactDetails.map((detail) => (
              <li
                className=" flex flex-row gap-3 md:gap-8 "
                key={detail.content}
              >
                <Image src={detail.icon} alt={detail.content} />
                <span className="font-normal md:text-[18px] text-[12px] leading-6  ">
                  {detail.content}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
