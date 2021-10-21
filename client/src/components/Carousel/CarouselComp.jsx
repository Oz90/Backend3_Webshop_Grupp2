import 'react-responsive-carousel/lib/styles/carousel.min.css'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';

export const CarouselComp = () => {
    return (
        <>
        <Carousel autoPlay axis="horizontal" infiniteLoop interval="5000">
            <div>
                <img src="https://lp.monki.com/app002prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B500%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B/cf/d9/cfd979167bb62cbd54fcb91ac6c84757f529b7a0.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile:/product/dynamic.chain%5D"/>
            </div>
            <div>
                <img src="https://lp.monki.com/app002prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B500%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B/b5/37/b537c465950a3b65db42e7e7b1d367569665bdf3.jpg%5D,type%5BLOOKBOOK%5D&call=url%5Bfile:/product/dynamic.chain%5D" />
            </div>
            <div>
                <img src="test.jpg" />
            </div>
        </Carousel> 
        </>
    )
}
