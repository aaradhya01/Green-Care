import React from 'react'
import { ServicesCard,ServicesContainer, ServicesH1, UserBg,VideoBg, ServicesWrapper, ServicesP, ServicesIcon, ServicesH2 } from './user';
import Icon1 from '../../images/park.svg';
import Icon2 from '../../images/three.svg';
import Icon3 from '../../images/one.svg';
import Video from '../../video/video.mp4';


const User = () => {
    return (
        
        <ServicesContainer id='user'>
            <UserBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' /></UserBg>
            <ServicesH1>Your Plants</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Plant1</ServicesH2>
                    <ServicesP>Uses: here are the uses of plant1</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Plant2</ServicesH2>
                    <ServicesP>Uses: here are the uses of plant2</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Plant3</ServicesH2>
                    <ServicesP>Uses: here are the uses of plant3</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Plant4</ServicesH2>
                    <ServicesP>Uses: here are the uses of plant</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>   
       
    )
}

export default User