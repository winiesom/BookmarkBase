"use client";

import Image from "next/image";
import Link from "next/link";
import CustomButton from './CustomButton';

const Hero = () => {

  const handleScroll = () => {

  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Save, Edit, or delete a link  - quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Keep a bookmark of your important links with our effortless bookmark tool.
        </p>

<Link href={"#bl"}>

        <CustomButton 
        title="Bookmark Links"
        containerStyles="bg-primary-yellow text-white rounded-full mt-10"
        handleClick={handleScroll}
        />
</Link>
      </div>
    </div>
  )
}

export default Hero

