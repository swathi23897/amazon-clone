import React from 'react'
import banner from './banner.jpg'
import './Home.css'
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src={banner} alt="home"></img>
                <div className="home__row">
                    <Product id="1231" title="The Lean Startup:How Constant Innovation Creates Radically Sucessful Business Paperback" price={299} rating={5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAIX20n23mVGC1v4MbneiDvIHFRFJ6QkUAJAa_2ypB21qLv2JAu6q4IXZBe3kxikMzcmvH8Bs&usqp=CAc" />
                    <Product id="1232" title="KenWood kMix Stand Mixer for Baking ,Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk,5 litre Glass Bowl" price={2999} rating={5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_ubEuxxjI3e1GNNl5VU_G8Vz0S4US_711lg&usqp=CAU" />
                </div>
                <div className="home__row">
                    <Product id="1233" title="PLAYFIT 21 Advanced Smart fitness band" price={1999} rating={3} image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRebrvhMF0CXUWcKE5GB3hz7wgdr20j29PYoEqlk5Jhlu5bsruEIpakYdQkgmHmy-6UldSVO_Nh3f0&usqp=CAc" />
                    <Product id="1234" title="Amazon Echo (3rd generation)Smart Speaker with Alexa" price={9899} rating={5} image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNPIwkpsSLinBy0Pr7EUnVtZUdqWjM-oV7CLiSyPvyqTq_m6RW5qxvmJs2Ig-_kFBf-fvbwPI2xnU&usqp=CAc" />
                    <Product id="1235" title="Apple iPad Pro 12.9 (4th Generation)" price={598.99} rating={4} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5X9O1ap93vYajW7wXT_p5_Ft4w-Z_I9D-Ug&usqp=CAU" />
                </div>
                <div className="home__row">
                    <Product id="1236" title="Samsung LC49G90SSLUXEN 49' Curved LED Gaming Monitor" price={10094.98} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg" />

                </div>
            </div>



        </div>
    )
}

export default Home
