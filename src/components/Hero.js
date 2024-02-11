


function Hero(){

    return (
        <section className="hero">
            <div className="hero__text">
                <h1 className="header-primary" style={{color:"#F4CE14"}}>Little Lemon</h1>
                <span className="place">Chicago</span>
                <p className="description" style={{color:"#fff",marginBottom:"4.4rem"}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <a href="/reservation" role="button" className="btn btn--reserve">Reserve a Table</a>
            </div>

            <div className="hero__image">
            
            </div>

        </section>
    )
}

export default Hero;