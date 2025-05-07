import { NavLink } from "./navLink";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
function SideNav() {
  return (
    <>
      <nav className="hidden md:block min-w-fit max-w-[30%] p-3 border border-gray-shade/40">
        <div
          className={`text-secondary min-w-fit py-10 px-5 h-screen flex flex-col gap-5 duration-200 ease-in-out`}
        >
          <NavLink
            href="/customer/dashboard"
            label="Dashboard"
            activeIcon="/icons/dash-active.svg"
            inactiveIcon="/icons/dash-inactive.svg"
          />
          <NavLink
            href="/customer/book-shipment"
            label="Book Shipment"
            activeIcon="/icons/book-ship-active.svg"
            inactiveIcon="/icons/book-ship-inactive.svg"
          />
          <NavLink
            href="/customer/track-shipment"
            label="Track Shipment"
            activeIcon="/icons/track-ship-active.svg"
            inactiveIcon="/icons/track-ship-inactive.svg"
          />
          <NavLink
            href="/customer/rate-calculator"
            label="Rate Calculator"
            activeIcon="/icons/calculator-active.svg"
            inactiveIcon="/icons/calculator-inactive.svg"
          />
          <NavLink
            href="/customer/wallet"
            label="Wallet"
            activeIcon="/icons/wallet-active.svg"
            inactiveIcon="/icons/wallet-inactive.svg"
          />
          <NavLink
            href="/customer/shipment-summary"
            label="Shipment Summary"
            activeIcon="/icons/summary-active.svg"
            inactiveIcon="/icons/summary-inactive.svg"
          />
          <NavLink
            href="/customer/settings"
            label="Settings"
            activeIcon="/icons/settings-active.svg"
            inactiveIcon="/icons/settings-inactive.svg"
          />
          <Link
            href={"/"}
            className={`
        group cursor-pointer 
        text-gray-shade
        
        hover:text-main hover:font-bold 
        duration-200 ease-in-out 
        flex items-center gap-2 text-lg font-semibold
      `}
          >
            <CiLogout className="text-2xl" />
            Log Out
          </Link>
        </div>
      </nav>
    </>
  );
}

export default SideNav;
