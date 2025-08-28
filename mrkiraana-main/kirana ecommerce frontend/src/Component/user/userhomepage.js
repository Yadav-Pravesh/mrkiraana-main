import React from 'react'
import Header from './header'
import HeroBanner from './hero'
import Popularproducts from './popularproducts'
import DealOfTheDay from './dealofthedayproducts'
import HeroProcessSection from './heroprocess'
import Footer from './footer'
import ProductCategories from './categoriesproduct'
import FeatureCategories from './FeatureCategories'  
import NewBanner from './NewBanner'
import TeaserFile from './TeaserFile'


function Userhomepage() {
  return (
    <div >
        <Header/>
        <HeroBanner/>
        {/* <Popularproducts/> */}
        <ProductCategories/>
         <FeatureCategories/>
        {/* <DealOfTheDay/> */}
        <HeroProcessSection/>
        <NewBanner />
        <TeaserFile />
        <Footer/>
  
    </div>
  )
}

export default Userhomepage
