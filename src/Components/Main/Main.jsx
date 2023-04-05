import React, {useEffect}from 'react'
import './main.css'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import img from '../../Pictures/img(1).jpg'
import img2 from '../../Pictures/img(2).jpg'
import img3 from '../../Pictures/img(3).jpg'
import img4 from '../../Pictures/img(4).jpg'
import img5 from '../../Pictures/img(5).jpg'
import img6 from '../../Pictures/img(6).jpg'
import img7 from '../../Pictures/img(7).jpg'
import img8 from '../../Pictures/img(8).jpg'
import img9 from '../../Pictures/img(9).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'This epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is "lavish" and "beauty". Always interesting to be in this place'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activites'
  },
  
  {
    id:5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'A city in central Mexico, Guanajuato is known for its history silver and mining colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!'
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul Cambodia. This place is known for its luxurious stays and adventurous activities'
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities'
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bali is an Indonesian Island and one of the best holiday destination in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches'
  },


]

const Main = () => {
  // Creating a react hook to add a scroll animation....

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="main container section">

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/*Here we are going to use high order array method(map).
        To do that we shall use a list of object in one array.
        We need to create an array named data from that we shall .map() array to fetch each destination at once.*/}
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>
          {
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                {/*Here it will return single id from the map array*/}

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle}/>
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }


      </div>
    </section>
  )
}

export default Main
