import React, {useState}  from 'react'
import Video from '../../video/video.mp4';
import { HomeContainer, HomeBg, VideoBg, HomeContent, HomeH1, HomeP, HomeBtnWrapper, ArrowForward, ArrowRight } from './home_page';
import { Button } from '../button';
const HomePage = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HomeContainer id='home'>
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBg>
            <HomeContent>
                <HomeH1>Gardening Made Easy</HomeH1>
                <HomeP>
                Want to make a hobby of gardening and don’t know where to start? We have a perfect one stop solution for you. We provide you with the exact details of your plants, when to water them, what kind of conditions and manure they need, and how much to water them according to the weather they’re in.
                </HomeP>
                <HomeBtnWrapper>
                    <Button to = 'about' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary= 'true'
                    dark='true' smooth={true} duration={500} spy={true} exact='true' activeClass='active'>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HomeBtnWrapper>
            </HomeContent>
        </HomeContainer>
    )
}

export default HomePage
