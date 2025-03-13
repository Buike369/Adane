import React from 'react'
import Card from "./aboutService"
import withTitle from './title';

const Service = () => {

  return (
    <div>
     <div>
        <Card/>
     </div>
    </div>
  )
}

export default withTitle(Service, 'Our Services At - Adane Technology');