import Image from "next/image";
import Link from "next/link";
interface WalletProps {
  balance: number;
}

function WalletCard({ balance }: WalletProps) {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-dark/90 to-foreground flex flex-col gap-5 rounded-3xl p-5 text-white w-full lg:max-w-[350px]">
        <h3 className="flex items-center gap-2 font-bold text-lg">
          <Image
            alt="mini-wallet-icon"
            src={"/icons/mini-wallet.svg"}
            width={10}
            height={10}
          />
          Wallet Balance
        </h3>

        <p className="font-bold text-xl">₦ {balance.toFixed(2)}</p>

        <div className="w-full flex">
          <Link href={"/customer/wallet"} className="ml-auto self-end">
            <button className="cursor-pointer hover:scale-105 duration-200 ease-in-out w-fit bg-main text-white px-4 py-2 rounded-full text-xs flex items-center gap-2">
              Top Up
              <Image
                alt="mini-wallet-icon"
                src={"/icons/right-arrow-small.svg"}
                width={15}
                height={10}
              />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default WalletCard;
