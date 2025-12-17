import React from "react";
import ReactDOM from "react-dom/client";


function Card(val) {
    return (
        <div className="card">
            <img src={val.image} />
            <div className="text-box">
                <p id="Ethnic">{val.cloth}</p>
                <p id="off-text">{val.offer}</p>
                <p id="Btn-text">Shop Now</p>
            </div>
        </div>
    )
}


function Header() {
    return (
        <div className="nav">
            <div className="logo">
                <img src="https://logos-world.net/wp-content/uploads/2021/02/New-Myntra-Logo.png" alt="logo"></img>
            </div>

            <div className="links">
                <a href="./myntra.html">Men</a>
                <a href="./myntra.html">Women</a>
                <a href="./myntra.html">Kids</a>
                <a href="./myntra.html">Home</a>
                <a href="./myntra.html">Beauty</a>
                <a href="./myntra.html">Genz</a>
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Search For Products,brands and more"></input>
            </div>

            <div className="poster-link">
                <div className="link1">
                    <a href="myntra.html">Profile</a>
                </div>

                <div className="link1">
                    <a href="myntra.html">Wishlist</a>
                </div>

                <div className="link1">
                    <a href="myntra.html">Bag</a>
                </div>
            </div>
        </div>
    )
}


function Footer(){
    return (
        <div className="footer-content">
        <div className="info">
            <span>
                <p className="first">Popular searches</p>
                Makeup  Dresses For Girls  T-Shirts  Sandals  Headphones  Babydolls  Blazers For Men  Handbags  Ladies Watches  Bags  Sport Shoes  Reebok Shoes  Puma Shoes  Boxers  Wallets  Tops  Earrings  Fastrack Watches  Kurtis  Nike  Smart Watches  Titan Watches  Designer Blouse  Gowns  Rings  Cricket Shoes  Forever 21  Eye Makeup  Photo Frames  Punjabi Suits  Bikini  Myntra Fashion Show  Lipstick  Saree  Watches  Dresses  Lehenga  Nike Shoes  Goggles  Bras  Suit  Chinos  Shoes  Adidas Shoes  Woodland Shoes  Jewellery  Designers Sarees
            </span>

            <p className="first">ONLINE SHOPPING MADE EASY AT MYNTRA</p>
            <span>If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.

</span>
        </div>
    </div>
    )
}


function Banner() {
    return (
        <div className="nav2">
            <div className="banner-img">
                <img src="https://blog.myntra.com/wp-content/uploads/2024/05/Myntra_End_Of_Reason_Sale_1.35_million_new_customers_likely_to_shop_from_30_lakh_styles.jpg" alt="banner"></img>
            </div>
        </div>
    )
}

const arr = [{ cloth: "Ethnic Wear", offer: "20-30% off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAV9nn9cDeOLiAs_65405er6ol6ja2AwtRsQ&s" },
{ cloth: "Kurtas", offer: "40-80% off", image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/JULY/14/rHtSNij2_93bafe38c5f2421ca00db517a2b6dffa.jpg" },
{ cloth: "Home-Decor", offer: "10-15% off", image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/29397510/2024/8/1/008807b4-9143-4b32-a173-9605c06f5f6f1722500886832-OLIVE-TREE-Beige-Canvas-Paintings-Wall-Art-8461722500886300-1.jpg" },
{ cloth: "Jewellary", offer: "20-30% off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUSsxvAmF11O6F42A0aBGcqA3O4IF11nx-w&s" },
{ cloth: "T-shirts", offer: "20-30% off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_gcuNr4_-THT0W5NhONz3TCoxb390vJWHA&s" },
{ cloth: "Work Wear", offer: "20-30% off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ixHZeY5-diLDs7SQTwWm0YJ0lZdwV_rziw&s" },
{ cloth: "Formals", offer: "20-30% off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFFht6EZJT1FXoXujKH2aEZZ5S3cXNQlhow&s" },
{ cloth: "Party Wear", offer: "20-30% off", image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2024/JULY/17/CWsPI9UX_520b528ce37d44f09302b6d5af19bc3a.jpg" },
{ cloth: "Sleep Wear", offer: "20-30% off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOvXgJPzQY7MGK-cOOo2K6Qi4rgfeyN4v7Qg&s" }
]

function App() {
    return (
        <>
            {/* Header */}
            <Header />
            <Banner />

            {/* Body */}
            <div id="Root-card">
                {
                    arr.map((val, index) => (
                        <Card
                            key={index}
                            image={val.image}
                            offer={val.offer}
                            cloth={val.cloth}
                        />
                    ))
                }
            </div>

            {/* Footer */}

            <Footer/>
        </>
    );
}



const main = document.getElementById('root');
const Root = ReactDOM.createRoot(main);
Root.render(<App />)
