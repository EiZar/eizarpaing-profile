import Image from 'next/image'
import { 
  FaPhoneAlt, FaRegEnvelope, FaHome, 
  FaStar, FaRegStar, FaRegStarHalfStroke 
} from 'react-icons/fa';

export default function Home() {
  return (
    <>
    <div className='firstFlex'>
      <div className='flexItem item1'/>
      <div className='flexItem item2'/>
      <div className='flexItem item3'/>
    </div>
    <div className='content'>
        <div className='box boxItem1'>A</div>
        <div className='box boxItem2'>B</div>
        <div className='box boxItem3'>C</div>
        <div className='box1 boxItem4'>D</div>
        <div className='box1 boxItem5'>E</div>
    </div>
    {/* <h2>Stretch all</h2>
    <div class="container">
        <div class="item"></div>
        <div class="item item-center"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div> */}
    <h2>Masonry</h2>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item item-center">4</div>
        <div class="item">5</div>
    </div>
    </>
  )
}
