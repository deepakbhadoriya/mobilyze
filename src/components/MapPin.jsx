import { Icon } from 'leaflet'
import { Marker } from 'react-leaflet';
import React from 'react'
import GreenPin from '../images/greenPin.png'
import RedPin from '../images/redPin.png'

const createIcon = (isAddIcon) => new Icon({
  iconUrl: isAddIcon ? GreenPin : RedPin,
  iconSize: [25, 40]
})

const MapPin = (props) => {
  const { key, isAddIcon, position, children } = props || {}

  if(!position.visible) return null

  return (
    <Marker
      key={key || position.id}
      position={position}
      icon={createIcon(isAddIcon)}
    >
      {children}
    </Marker>
  )
}

export default MapPin