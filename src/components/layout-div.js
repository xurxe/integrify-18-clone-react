import React from 'react';

import './layout-div.css';

import Header from './header';
import TopDiv from './top-div';
import Main from './main';
import BottomDiv from './bottom-div';
import InfoDiv from './info-div';
import Footer from './footer';

const LayoutDiv = () => (
    
    <div id='layout-div'>
        <div className='grey-gradient-background'></div>
        <div className='grey-dark-background'></div>
        <div className='grey-darker-background'></div>

        <Header></Header>
        <TopDiv></TopDiv>
        <div className='stripe-background'></div>

        <Main></Main>

        <BottomDiv></BottomDiv>
        <InfoDiv></InfoDiv>
        <Footer></Footer>
    </div>
);

export default LayoutDiv;