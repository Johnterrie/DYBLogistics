import React from 'react'
import AccountSummary from '../sections/accountSummary/AccountSummary';
import ShipmentSummary from '../sections/shipmentSummary/ShipmentSummary';
import DashBoardHeadLine from '../sections/dashboardHeadline/DashBoardHeadLine';
import ActivityFeed from '../components/activityFeed/ActivityFeed';
import ButtonGroup from '../components/buttonGroup/ButtonGroup';

const page = () => {
  return (
    <div className='lg:px-70'>
        <DashBoardHeadLine />
        <AccountSummary />
        <ShipmentSummary />
        <div>
        <ActivityFeed />
        </div>
        <div>
          <ButtonGroup />
        </div>
    </div>
  )
}

export default page