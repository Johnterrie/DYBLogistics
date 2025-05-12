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
      <h3>Support Center</h3>
      <ul>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div>
        <div>
          <h4>Contact Us</h4>
          <p>
            For any urgent inquiries, please contact us using the details
            provided below.
          </p>
          <ul>
            {contactDetails.map((detail) => (
              <li key={detail.content}>
                <Image src={detail.icon} alt={detail.content} />
                <span>{detail.content}</span>
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
