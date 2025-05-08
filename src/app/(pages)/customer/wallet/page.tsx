import Link from "next/link";
import Image from "next/image";
function Wallet() {
  const walletBalance = 0;
  return (
    <>
      <section className="w-full h-full md:overflow-y-auto p-5 flex flex-col gap-8">
        <header className="w-full flex flex-col items-center md:items-start md:justify-center md:justify-start gap-1">
          <h2 className="font-bold text-xl md:text-3xl">Wallet</h2>
          <div className="flex items-center gap-3">
            <span>Manage your transactions</span>
            <Link
              href={"/customer/wallet"}
              className="text-main hidden md:block"
            >
              Refresh
            </Link>
          </div>
        </header>

        {walletBalance === 0 && (
          <div className="w-full md:w-2/3 mx-auto flex flex-col items-center gap-5">
            <Image
              alt="wallet empty"
              src={"/images/walletEmpty.svg"}
              width={500}
              height={500}
              className="hidden md:block"
            />

            <Image
              alt="wallet empty"
              src={"/images/wallet-empty-small.svg"}
              width={500}
              height={500}
              className="md:hidden"
            />

            <Link
              href={"/customer/wallet"}
              className="text-main text-sm md:hidden"
            >
              Refresh
            </Link>

            <div className="hidden md:block">
              <h3 className="text-lg md:text-xl text-center font-[500]">
                Your Wallet is Empty
              </h3>
              <p className="text-sm text-gray-dark/50 text-center">
                start by adding some funds into your wallet
              </p>
            </div>

            <button className="btn-large w-fit">Fund Wallet</button>
          </div>
        )}
      </section>
    </>
  );
}

export default Wallet;
