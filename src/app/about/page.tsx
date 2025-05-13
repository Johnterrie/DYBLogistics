import React from 'react'
import Faq from '../sections/faq/Faq';
import Global from '../sections/global/Global';
import User from '../sections/users/User';
import Image from '../sections/image/Image';
import Mission from '../sections/mission/Mission';
import Dyb from '../sections/dyb/Dyb';

const about = () => {
  return (
    <div className="bg-white py-16 px-6 text-center">
           <Global />

           <User />

           <Image />

           <Mission />

           <Dyb />

           <Faq />


  </div>
  )
}

export default about;