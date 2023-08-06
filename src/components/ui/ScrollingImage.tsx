import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import image1 from '@/assets/book_banner.jpg'

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
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <h3>Section 1</h3>
            <img src={image1} alt="" />
          </div>
          <div className="scroll-section">
            <h3>Section 1</h3>
            <img src={image1} alt="" />
          </div>
          <div className="scroll-section">
            <h3>Section 1</h3>
            <img src={image1} alt="" />
          </div>
          <div className="scroll-section">
            <h3>Section 1</h3>
            <img src={image1} alt="" />
          </div>
          <div className="scroll-section">
            <h3>Section 1</h3>
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeadingScroller
