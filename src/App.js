import React from 'react'
import Header from './containers/Header'
import Content from './containers/Content'
import Card from './containers/Card'
import Client from './containers/Client'
import About from './containers/About'
import Pricing from './containers/Pricing'
import Contact from './containers/Contact'
import Footer from './containers/Footer/footer'

function App(){
    return (
        <div className="App">
            <Header />
            <Content />
            <Card />
            <Client />
            <About />
            <Pricing />
            <Contact />
            <Footer />
        </div>
    )
}

export default App