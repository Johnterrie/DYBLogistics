import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import AddressSearchFilter from '../addressSearchFilter/AddressSearchFilter'
import Feed from '../feed/Feed';
import Pagination from '../pagination/Pagination';


const ShipmentFeedData = [
     {
    shipmentId: '#JT-123-343',
    sender: 'Mecury Paul',
    receiver: 'Daniel Fatoyinbo',
    shipperDate: '06/02/2025',
    destination: 'Oslo',
    weight: '15kg',
    status: 'Pending',
    action: 'view',
  },
  {
    shipmentId: '#JT-123-344',
    sender: 'Mecury Paul',
    receiver: 'Daniel Fatoyinbo',
    shipperDate: '06/02/2025',
    destination: 'Lgos',
    weight: '15kg',
    status: 'pending',
    action: 'View',
  },
  {
    shipmentId: '#JT-123-345',
    sender: 'Mecury Paul',
    receiver: 'Daniel Fatoyinbo',
    shipperDate: '06/02/2025',
    destination: 'Lagos',
    weight: '15kg',
    status: 'pending',
    action: 'View',
  },
  {
    shipmentId: '#JT-123-346',
    sender: 'Mecury Paul',
    receiver: 'Daniel Fatoyinbo',
    shipperDate: '06/02/2025',
    destination: 'Tokyo',
    weight: '15kg',
    status: 'pending',
    action: 'Track',
  },
   {
    shipmentId: '#JT-123-343',
    sender: 'Mecury Paul',
    receiver: 'Daniel Fatoyinbo',
    shipperDate: '06/02/2025',
    destination: 'Oslo',
    weight: '15kg',
    status: 'Pending',
    action: 'view',
  },
  {
    shipmentId: '#JT-123-344',
    sender: 'Mecury Paul',
    receiver: 'Daniel Fatoyinbo',
    shipperDate: '06/02/2025',
    destination: 'Lgos',
    weight: '15kg',
    status: 'pending',
    action: 'View',
  },
  {
    shipmentId: '#JT-123-345',
    sender: 'Mecury Paul',
    receiver: 'Daniel Fatoyinbo',
    shipperDate: '06/02/2025',
    destination: 'Lagos',
    weight: '15kg',
    status: 'pending',
    action: 'View',
  },
  {
    shipmentId: '#JT-123-346',
    sender: 'Mecury Paul',
    receiver: 'Daniel Fatoyinbo',
    shipperDate: '06/02/2025',
    destination: 'Tokyo',
    weight: '15kg',
    status: 'pending',
    action: 'Track',
  },
   {
    shipmentId: '#JT-123-343',
    sender: 'Mecury Paul',
    receiver: 'Daniel Fatoyinbo',
    shipperDate: '06/02/2025',
    destination: 'Oslo',
    weight: '15kg',
    status: 'Pending',
    action: 'view',
  },
  {
    shipmentId: '#JT-123-344',
    sender: 'Mecury Paul',
    receiver: 'Daniel Fatoyinbo',
    shipperDate: '06/02/2025',
    destination: 'Lgos',
    weight: '15kg',
    status: 'pending',
    action: 'View',
  },
  {
    shipmentId: '#JT-123-345',
    sender: 'Mecury Paul',
    receiver: 'Daniel Fatoyinbo',
    shipperDate: '06/02/2025',
    destination: 'Lagos',
    weight: '15kg',
    status: 'pending',
    action: 'View',
  },
 
];

type Shipment = {
  shipmentId: string;
  sender: string;
  receiver: string;
  shipperDate: string;
  destination: string;
  weight: string;
  status: string;
  action: string;
};

const PendingShipmentFeed = () => {
    //Hook State
            const [searchTerm, setSearchTerm] = useState('');
            const [filterEnabled, setFilterEnabled] = useState(false);
            const [status, setStatus] = useState('all'); // 'pending', 'delivered', etc.
            const [visibleShipments, setVisibleShipments] = useState([]);
            const [allShipments, setAllShipments] = useState<Shipment[]>([]);
    
            useEffect(() => {
            const fetchShipments = async () => {
            const res = await fetch("/api/shipments");
            const data = await res.json();
            setAllShipments(data);
        };
        fetchShipments();
        }, []);
           
    
            const filteredShipments =
           status === "all"
          ? allShipments
          : allShipments.filter((item) => item.status === status);
    
        
            const handleToggleFilter = () => {
            setFilterEnabled(!filterEnabled);
        };
  return (
    <div className='lg:px-50 sm:px-6 md:px-10 py-6'>
        <div className=' border rounded-lg border-[#E6E6E6] sm:px-4 py-2'>
            <div className='flex flex-wrap justify-between'>
                <div className='flex gap-4 py-6 ml-1'>
                <Link href="/shipment/all" className='text-[#D2D2D2]'>All</Link>
                <Link href="/shipment/pending" className='text-[#FD4A09] underline decoration-[#FD4A09]'>Pending</Link>
                <Link href="/shipment/in-transit" className='text-[#D2D2D2]'>In-Transit</Link>
                <Link href="/shipment/delivered" className='text-[#D2D2D2]'>Delivered</Link>
                <Link href="/shipment/cancelled" className='text-[#D2D2D2]'>Cancelled</Link>

                </div>
                <div className=''>
                <AddressSearchFilter 
                onSearch={setSearchTerm}
                onToggleFilter={handleToggleFilter}
                filterEnabled={filterEnabled}
                />
            
                </div>
            </div>
            <div>
                <Feed data ={ShipmentFeedData} />
            </div>
        </div>
        <div>
            <Pagination data={filteredShipments} onPaginate={setVisibleShipments}/>
        </div>
    </div>
  )
}

export default PendingShipmentFeed