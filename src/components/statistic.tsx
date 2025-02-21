import React from 'react'
import { Wrap } from './ui/wrapper'
import {Stats} from './stat'
type Props = {}

export const Statistic = (props: Props) => {
  return (
    <div className='max-w-screen-xl mx-auto  '>
      <Wrap>
        <h1 className='text-neutral-300 font-bold text-4xl lg:text-5xl pl-2 text-center'>Our value</h1>
      </Wrap>
      <div className="py-20  flex items-center ">
        <Stats></Stats>
      </div>
    </div>
  )
}