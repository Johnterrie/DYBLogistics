import React, {useState} from 'react';
import { SlOptionsVertical } from "react-icons/sl";
import { MdCancel } from "react-icons/md"
import { PiEyeFill } from "react-icons/pi";

interface FeedItem {
  shipmentId: string;
  sender: string;
  receiver: string;
  shipperDate: string;
  destination: string;
  weight: string;
  status: string;
  action: string;
}

interface FeedProps {
  data: FeedItem[];
}

const Feed: React.FC<FeedProps> = ({ data }) => {
  const [showActions, setShowActions] = useState(false);

  const toggleActions = () => {
    setShowActions(!showActions);
  };
  return (
    <div className="max-w-full overflow-x-auto lg:px-10">
  <div className="min-w-[640px] rounded-lg">
    {/* Header Row */}
    <div className="hidden md:grid grid-cols-8 bg-[#FFF8F5] text-[#FD4A09] font-semibold text-sm px-3 py-4 gap-2">
      <div>Shipment ID</div>
      <div>Sender</div>
      <div>Receiver</div>
      <div>Shipper Date</div>
      <div>Destination</div>
      <div>Weight</div>
      <div>Status</div>
      <div>Action</div>
    </div>

    {/* Data Rows */}
    {data.map((item, index) => ( //This is the arrow function passed to .map().//It takes two parameters://item: The current item in the array.//index: The current index (position) of the item in the array.
      <div
        key={`${item.shipmentId}-${index}`} //This creates a <div> element for each item in the array. and gives them identity whether it has changedn added or removed
        className="border-b border-gray-200 md:grid grid-cols-8 text-sm text-[#BDBDBD] px-4 py-3 hover:bg-gray-50"
      >
        {/* On small screens, show simplified stacked info */}
        <div className="md:hidden flex flex-col gap-1">
          <div><span className="font-semibold">Shipment ID:</span> {item.shipmentId}</div>
          <div><span className="font-semibold">Sender:</span> {item.sender}</div>
          <div><span className="font-semibold">Receiver:</span> {item.receiver}</div>
          <div><span className="font-semibold">Date:</span> {item.shipperDate}</div>
          <div><span className="font-semibold">Destination:</span> {item.destination}</div>
          <div><span className="font-semibold">Weight:</span> {item.weight}</div>
          <div>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                item.status === 'Delivered'
                  ? 'text-green-700 bg-green-100'
                  : item.status === 'In Transit'
                  ? 'text-blue-600 bg-blue-100'
                  : item.status === 'Cancelled'
                  ? 'text-red-600 bg-red-100'
                  : 'text-[#FFD045] bg-yellow-100'
              }`}
            >
              {item.status}
            </span>
          </div>
          <div>
            <button className="text-gray-600 hover:text-gray-800 mt-2">
              <SlOptionsVertical className="text-xl" />
            </button>
          </div>
        </div>

        {/* On md+ screens, show grid columns */}
        <div className="hidden md:flex items-center">{item.shipmentId}</div>
        <div className="hidden md:flex items-center">{item.sender}</div>
        <div className="hidden md:flex items-center">{item.receiver}</div>
        <div className="hidden md:flex items-center">{item.shipperDate}</div>
        <div className="hidden md:flex items-center">{item.destination}</div>
        <div className="hidden md:flex items-center">{item.weight}</div>
        <div className="hidden md:flex items-center">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              item.status === 'Delivered'
                ? 'text-green-700'
                : item.status === 'In Transit'
                ? 'text-[#FEa483]'
                : item.status === 'Cancelled'
                ? 'text-red-600'
                : 'text-[#FFD045]'
            }`}
          >
            {item.status}
          </span>
        </div>
        <div className="hidden md:flex items-center">
          <button className="text-gray-600 hover:text-gray-800">
            <SlOptionsVertical
            onClick={toggleActions} 
            className="text-xl"
             />
          </button>
          {showActions && (
        <div
          className="absolute top-1/2 mt-2 -translate-y-1/2 bg-white border border-gray-300 rounded shadow-md w-30"
          style={{ zIndex: 1 }}
        >
          <button
            className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-100"
            onClick={() => {
              alert('View clicked!');
              setShowActions(false);
            }}
          >
            <PiEyeFill 
            className='text-[#7C7C7C] text-2xl'
            />
            <span>View</span>
          </button>

          <button
            className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-100"
            onClick={() => {
              alert('Cancel clicked!');
              setShowActions(false);
            }}
          >
            <MdCancel
            className='text-[#7C7C7C] text-2xl' 
            />
            <span>Cancel</span>
          </button>
        </div>
      )}
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Feed;
