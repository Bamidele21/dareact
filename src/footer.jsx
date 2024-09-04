function Footer() {
    return(
        <>
        
        
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        
                        <div className="col">
                            <h4>Where to Find Us</h4>
                            <ul className="list-unstyled">
                                <li>321-123-5432</li>
                                <li>Mordor, Middle Earth</li>
                                <li>976 Tower of Sauron</li>
                            </ul>
                        </div>
                        
                        <div className="col">
                            <h4>Please Hire Me</h4>
                            <ul className="list-unstyled">
                                <li>please?</li>
                                <li>pretty please?</li>
                                <li>With sugar on Top?</li>
                            </ul>
                        </div>

                        
                        <div className="col">
                            <h4>Main Menu</h4>
                            <ul className="list-unstyled">
                                <li><a href="/pricing">Pricing</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                                
                            </ul>
                        </div>

                    </div>

                </div>
            
                
            <hr/>
        <div>
            
       <p>By Bamidele Ogunseye &copy;{new Date().getFullYear()} Please Hire Me </p>
       </div>
        


       </div>
       
        
        </>
    )
}

export default Footer;