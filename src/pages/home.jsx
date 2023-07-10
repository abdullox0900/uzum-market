import { useState } from 'react'


import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Footer from '../components/footer/footer'
import Slider from '../components/slider/slider'
// import Test from './components/test/test'
import Card from '../components/card/card'

function Home() {

    const [lang, setLang] = useState('uz')


    return (
        <>
            <Header lang={lang} setLang={setLang} />
            <Hero lang={lang} setLang={setLang} />
            <Slider />
            <Card />

            <Footer />
        </>
    )
}

export default Home