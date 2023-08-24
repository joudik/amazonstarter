import React from 'react'
import './Hero.css'
import HeroImg from '../../assets/hero.png'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
export const Hero = () => {
  const transition = { duration: 3, type: 'spring' }
  return (
    <div className="h-container">
      {/*left side*/}
      <div className="h-sides">
        <span className="text1">skin protection cream</span>
        <div className="text2">
          <span>trendy collection</span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
      </div>

      {/*middle side*/}
      <div className="wrapper">
        <motion.div
          initial={{ bottom: '2rem' }}
          whileInView={{ bottom: '0rem' }}
          className="blueCircle"
          transition={transition}
        ></motion.div>
        <motion.img
          transition={transition}
          initial={{ bottom: '-2rem' }}
          whileInView={{ bottom: '0rem' }}
          src={HeroImg}
          alt=""
          width={600}
        />
        <motion.div
          transition={transition}
          initial={{ right: '4%' }}
          whileInView={{ right: '2%' }}
          className="cart2"
        >
          <RiShoppingBagFill />
          <div className="signup">
            <span>Best signup offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/*right side*/}
      <div className="h-sides">
        <div className="traffic">
          <span>1.5m</span>
          <span>monthly traffic</span>
        </div>
        <div className="customers">
          <span>100K</span>
          <span>happy customers</span>
        </div>
      </div>
    </div>
  )
}
