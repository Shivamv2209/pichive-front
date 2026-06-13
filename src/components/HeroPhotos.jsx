import Masonry from "react-masonry-css"
import img1 from "../assets/images/img10.jpg"
import img2 from "../assets/images/img12.jpg"
import img3 from "../assets/images/img13.jpg"
import img4 from "../assets/images/img1.jpg"
import img5 from "../assets/images/img2.jpeg"
import img6 from "../assets/images/img3.jpeg"
import img7 from "../assets/images/img11.jpg"
import img8 from "../assets/images/img4.jpg"
import img9 from "../assets/images/img5.jpg"
import img10 from "../assets/images/img6.jpg"
import img11 from "../assets/images/img7.jpg"
import img12 from "../assets/images/img8.jpg"
import img13 from "../assets/images/img9.jpeg"
import img14 from "../assets/images/img14.jpg"
import img15 from "../assets/images/img15.jpg"
import img16 from "../assets/images/img16.jpg"
import img17 from "../assets/images/img17.jpg"
import img18 from "../assets/images/img18.jpg"
import img19 from "../assets/images/img19.jpg"
import img20 from "../assets/images/img20.jpg"
import img21 from "../assets/images/img21.jpg"
import { motion } from "framer-motion"
import {useMediaQuery} from "react-responsive"


const grid1Images1 = [
    {url:img1,alt:"holi people",h:"h-70" ,w:"w-60"},
    {url:img2,alt:"nice people",h:"h-64" ,w:"w-60"},
    {url:img3,alt:"nice people",h:"h-75" ,w:"w-60"},
    {url:img4,alt:"holi people",h:"h-48",w:"w-70"},
    {url:img5,alt:"nice people",h:"h-75",w:"w-70"},
    {url:img6,alt:"nice people",h:"h-72",w:"w-70"},
    {url:img7,alt:"nice people",h:"h-60",w:"w-70"},
    {url:img8,alt:"nice people",h:"h-62",w:"w-70"},
    {url:img9,alt:"nice people",h:"h-50",w:"w-70"},
    {url:img10,alt:"nice people",h:"h-48",w:"w-70"},
    {url:img11,alt:"nice people",h:"h-52",w:"w-70"},
    {url:img12,alt:"nice people",h:"h-50",w:"w-70"},
    {url:img13,alt:"nice people",h:"h-64",w:"w-70"},
    {url:img14,alt:"nice people",h:"h-48",w:"w-70"},
    {url:img15,alt:"nice people",h:"h-66",w:"w-70"},
    {url:img16,alt:"nice people",h:"h-84",w:"w-70"},
    {url:img17,alt:"nice people",h:"h-75",w:"w-70"},
    {url:img20,alt:"nice people",h:"h-98",w:"w-70"},
    {url:img19,alt:"nice people",h:"h-74",w:"w-70"},
    {url:img18,alt:"nice people",h:"h-63",w:"w-70"},
    {url:img21,alt:"nice people",h:"h-90",w:"w-70"},
]

const breakpointColumnsObj = {
  default: 7,
  1280: 5,
  1024: 4,
  768: 3,
  640: 2,
};

function HeroPhotos(){

  const isMobile = useMediaQuery({maxWidth : 767})
  const imagesToShow = isMobile ? grid1Images1.slice(0,10):grid1Images1
return(
  <motion.div 
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 1,
    delay: 0.3,
    ease: "easeOut"
  }}
  >
     <Masonry
  breakpointCols={breakpointColumnsObj}
  className="flex gap-4"
  columnClassName="space-y-4"
>
  {imagesToShow.map((img, i) => (
    <img
      key={i}
      src={img.url}
      className={`rounded-2xl ${img.h} ${img.w} w-full object-cover`}
    />
  ))}
</Masonry>
  </motion.div>
)

}

export default HeroPhotos;