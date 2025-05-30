"use client"
import AddressSearchFilter from '@/app/sections/addressSearchFilter/AddressSearchFilter';
import Feed from '@/app/sections/feed/Feed';
import React, { useState } from 'react'

const activityFeedData = [
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
    status: 'Cancelled',
    action: 'View',
  },
  {
    shipmentId: '#JT-123-345',
    sender: 'Mecury Paul',
    receiver: 'Daniel Fatoyinbo',
    shipperDate: '06/02/2025', 
    destination: 'Lagos',
    weight: '15kg',
    status: 'Delivered',
    action: 'View',
  },
  {
    shipmentId: '#JT-123-346',
    sender: 'Mecury Paul',
    receiver: 'Daniel Fatoyinbo',
    shipperDate: '06/02/2025',
    destination: 'Tokyo',
    weight: '15kg',
    status: 'In Transit',
    action: 'Track',
  },
];

const ActivityFeed: React.FC = () => {
    //Hook State
    const [searchTerm, setSearchTerm] = useState('');
    const [filterEnabled, setFilterEnabled] = useState(false);

    const handleToggleFilter = () => {
    setFilterEnabled(!filterEnabled);
};
  return (
    <div className="px-4 py-6 lg:px-10">
  {/* Header Row: Title + Search */}
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 mb-6">
    <h3 className="text-gray-700 text-2xl font-semibold pt-8 ml-4">Activity Feed</h3>

    {/* Search Input */}
    <div className="w-full lg:w-auto">
      <AddressSearchFilter
        onSearch={setSearchTerm}
        onToggleFilter={handleToggleFilter}
        filterEnabled={filterEnabled}
      />

      {filterEnabled && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow w-full">
          <p className="text-sm text-gray-600">Filter: Showing names starting with A–M</p>
        </div>
      )}
    </div>
  </div>

  {/* Feed Section */}
  <div className="w-full mx-auto">
    <div className="min-h-[168px]">
      <Feed data={activityFeedData} />
    </div>
  </div>
</div>

  )
}

export default ActivityFeed