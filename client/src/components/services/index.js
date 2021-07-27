import React from 'react'
import { ServicesCard,ServicesContainer, ServicesH1, ServicesWrapper, ServicesP, ServicesIcon, ServicesH2 } from './service';
import Icon1 from '../../images/park.svg';
import Icon2 from '../../images/three.svg';
import Icon3 from '../../images/one.svg';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Take Care of Plants</ServicesH2>
                    <ServicesP>We help taking care of your plants and mainting their health.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Finding New Plants</ServicesH2>
                    <ServicesP>We help taking care of your plants and mainting their health.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Find a Gardener</ServicesH2>
                    <ServicesP>We help taking care of your plants and mainting their health.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>   
    )
}

export default Services
