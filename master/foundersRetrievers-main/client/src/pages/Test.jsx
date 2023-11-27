import React from 'react'
import { AutoplaySwiper } from '../components/swipers/MainSwiper'

export const Test = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <AutoplaySwiper />
  )
}
