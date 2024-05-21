import Image from 'next/image'

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='Huy Nguyen' />
    </div>
  )
}

export default DevImg