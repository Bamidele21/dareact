import logo from './assets/shooting-star-glyph-style.png'
import './home.css'

function Home () {
    return (
        <div className="home-css">
            <h1>SuperStar Movers!</h1>
            <img src={logo} alt="shooting-star"/>
            <h1>Moving Your Furniture Faster than a Shooting Star!</h1>

        </div>
    )
}

export default Home;