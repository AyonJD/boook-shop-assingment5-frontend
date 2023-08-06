import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Rating } from '@mui/material'
import book_one from '../../assets/books/book_1.jpg'
import book_two from '../../assets/books/book_2.jpg'
import book_three from '../../assets/books/book_3.jpg'
import book_four from '../../assets/books/book_four.webp'

const BOOK_IMAGE = [
  'https://s-media-cache-ak0.pinimg.com/236x/2f/11/69/2f1169d967bd0a2505d8088011ff1a2e.jpg',
  book_one,
  book_two,
  book_three,
  book_four,
]

const BOOK_TITLE = [
  'Alice in Wonderland',
  'Emily & William',
  'Happy Day',
  'Create your own Business',
  'Brochure',
]

const BOOK_AUTHOR = [
  'Musa Abbasov',
  'William Jhonus',
  'John Smith',
  'James Murdor',
  'Alex Smith',
]
const BOOK_RATING = [4, 3, 5, 4, 5]

const BOOK_READ_BY = ['15K Readers', '10K Readers', '5K Readers', '1K Readers']

const BOOK_DATA = Array.from({ length: 5 }, (_, i) => ({
  image: BOOK_IMAGE[i],
  title: BOOK_TITLE[i],
  author: BOOK_AUTHOR[i],
  rating: BOOK_RATING[i],
  readBy: BOOK_READ_BY[i],
}))

const HeadingScroller = () => {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-300vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
        },
      }
    )
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill()
    }
  }, [])

  return (
    <section ref={triggerRef} className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <h1 className="text-3xl text-white mb-14 border-b w-fit ml-auto mr-auto">
        Read our featured books
      </h1>
      <div>
        <div ref={sectionRef} className="scroll-section-inner">
          {BOOK_DATA.map((book, index) => (
            <div key={index} className="scroll-section">
              <div className="hero_one">
                <div id="book_section">
                  <div id="book_wrapper">
                    <img src={book.image} alt="" />
                  </div>
                  <div id="book_title">
                    <h1>{book.title}</h1>
                  </div>
                  <div id="book_author">
                    <p>
                      by <span className="italic">{book.author}</span>
                    </p>
                  </div>
                  <div id="rating">
                    <Rating value={book.rating} readOnly />
                  </div>
                  <div id="review">
                    <p>
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam illum a dolore temporibus sit labore fuga ab,
                      excepturi mollitia debitis quaerat atque sapiente pariatur
                    </p>
                  </div>
                  <div id="read_by">
                    <h2>{book.readBy}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeadingScroller
