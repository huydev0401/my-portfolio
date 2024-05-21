'use client'
import Link from 'next/link'
import {
  RiFacebookCircleFill,
  RiGithubFill
} from 'react-icons/ri'

const socials = [
  {
    path: '/',
    icon: <RiFacebookCircleFill />
  },
  {
    path: '/',
    icon: <RiGithubFill />
  }
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((social, index) => {
        return <Link href={social.path} key={index}>
          <div className={`${iconStyles}`}>{social.icon}</div>
        </Link>
      })}
    </div>
  )
}

export default Socials