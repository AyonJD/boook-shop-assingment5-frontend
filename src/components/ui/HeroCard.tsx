import { Container } from '@mui/material'
import HeroBanner from '@/assets/hero_banner.webm'

const HeroCard = () => {
  return (
    <Container>
      <div className="bg-white -mt-20 h-96 overflow-hidden flex items-end rounded-3xl">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
        >
          <source src={HeroBanner} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Container>
  )
}

export default HeroCard
