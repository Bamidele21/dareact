import logo from'./assets/shooting-star-glyph-style.png'


function Header () {
    return (
        <>
        <title>SuperStar Movers</title>
        <header>
            <div className= "heading">
            <h1>SuperStar Movers</h1>
          
            <img src={logo}></img>
            
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/contact">Contact</a></li>
                    
                </ul>
            </nav>
            
            </div>


        </header>
        
        </>
    )
}

export default Header;