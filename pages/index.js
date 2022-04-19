import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import TopProducts from "../components/TopProducts"
import { db } from '../firebase'
import { useEffect, useRef, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import Menu from "../components/Menu";



export default function Home() {
  const [ banners, setBanners ] = useState([])
  const [ products, setProducts] = useState([])
  const [ brands, setBrands ] = useState([])
  const brandsRef = useRef(null)
  

 useEffect(() => {
  
  onSnapshot(collection(db, 'features1'), (snapshot) => setBanners(snapshot.docs))

  onSnapshot(collection(db, 'products'), (snapshot) => setProducts(snapshot.docs))

  onSnapshot(collection(db, 'brands'), (snapshot) => setBrands(snapshot.docs))

 }, [])

 

 const executeScroll = () => window.scrollTo({ 
  top: brandsRef.current.offsetTop, 
  behavior: 'smooth', 
  block: 'start' })

  

  return (
    <div className="w-full h-full bg-gray-200 relative">
        <Menu 
          onScrollBrands={executeScroll}
        />
      <div className='w-11/12 mx-auto pt-20 lg:pt-5'>
        <Banner
          banners={banners}
        />
        <TopProducts
          topProducts={products}
        />
        <Featured/>
        <div ref={brandsRef}>
          <Brands
            brands={brands}
          />
        </div>
      </div>
      <div className="bg-black mt-10">
        <Footer/>
      </div>
    </div>
  )
}