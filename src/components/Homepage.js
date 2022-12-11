import React from 'react';


const header = {
    logo:
        "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/cash-i-o-g0pdt4/assets/e7n18epwp7kk/cashIO-removebg-preview.png",
    user_profile:
        "https://www.nicepng.com/png/full/128-1280406_view-user-icon-png-user-circle-icon-png.png",
    cp:
        "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/cash-i-o-g0pdt4/assets/4klhqnw86b2w/phpLogoPNG.png"
};

const user = {
    name: "Test User",
    cp_value: 1000
};

const banner = {
    img1:
        "https://www.iwmbuzz.com/wp-content/uploads/2022/02/epic-games-next-free-game-might-be-a-letdown-this-is-why.jpg",
    img2:
        "https://unrealitymag.com/wp-content/uploads/2019/01/steam_logo_art_2000.0.jpg",
    img3:
        "https://www.riotgames.com/darkroom/800/87521fcaeca5867538ae7f46ac152740:2f8144e17957078916e41d2410c111c3/002-rg-2021-full-lockup-offwhite.jpg"
};

const item = {
    img:
        "https://media.karousell.com/media/photos/products/2018/04/19/garena_shell__1000_1524150057_69a8ef6c.jpg",
    name: "1000 Garena Shells",
    type: "Gift Code",
    value: "650 CP",
    ogvalue: "800 CP"
};

const item2 = {
    img:
        "https://www.pngfind.com/pngs/m/142-1424684_quick-view-100-steam-wallet-gift-card-hd.png",
    name: "$100 Steam Wallet",
    type: "Gift Code",
    value: "700 CP",
    ogvalue: "900 CP"
};

const item3 = {
    img:
        "https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-starlight-blue-accessory-front",
    name: "PS5 Controller",
    type: "Gaming Accesories",
    value: "1500 CP",
    ogvalue: "2000 CP"
};

const item4 = {
    img:
        "https://cdn.shopify.com/s/files/1/0373/1675/5501/products/50_85904364-1e2f-48e2-95c9-f30a007e4d7c_grande.png?v=1591091780",
    name: "$50 Steam Wallet",
    type: "Gift Code",
    value: "400 CP",
    ogvalue: "550 CP"
};

const item5 = {
    img:
        "https://img.gamewith.net/article_tools/genshin-impact/gacha/s_i_947.png",
    name: "1-Year Welkin's Blessing",
    type: "Gift Code",
    value: "10 000 CP",
    ogvalue: "15 000 CP"
};

const item6 = {
    img:
        "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22fw/img/products/productsArea_itemimg_8_m.jpg?220211",
    name: "Cash.io Hoodie",
    type: "Official Merchandise",
    value: "FREE",
    ogvalue: ""
};

const item7 = {
    img: "https://pbs.twimg.com/media/DK_PMw4W0AE6mcO.png",
    name: "Gift Codes",
    type: "Get your Gift Codes for your desired Games and Products here",
    value: "",
    ogvalue: ""
};

const item8 = {
    img:
        "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/cash-i-o-g0pdt4/assets/e7n18epwp7kk/cashIO-removebg-preview.png",
    name: "Official Merchandise",
    type: "Get your Official Cash.IO Merchandise here",
    value: "",
    ogvalue: ""
};

function addToCart(item) { }

function UserProfile(user) {
    return (
        <div class="usercard">
            <div class="card-content">
                <img src={header.user_profile} />
                <p> </p>
                <p>{user.name}</p>
            </div>
            <div class="card-content">
                <img src={header.cp} />
                <p> </p>
                <p>{user.cp_value} CP</p>
            </div>
        </div>
    );
}

function SalesCard(item) {
    return (
        <div class="sales-card">
            <img src={item.img} />
            <h3>{item.name}</h3>
            <p>{item.type}</p>
            <p>{item.value}</p>
            <div class="atc">
                <p>{item.ogvalue}</p>
                <button type="button" onClick={addToCart(item)}>
                    +
                </button>
            </div>
        </div>
    );
}

function Banner(banner) {
    return (
        <div class="banner">
            <img src={banner.img1} />
            <img src={banner.img2} />
            <img src={banner.img3} />
        </div>
    );
}

function Header() {
    return (
        <div class="main">
            <div class="navbar">
                <div>
                    <img src={header.logo} />
                </div>
                {UserProfile(user)}
            </div>
            <div>
                <input class="search-bar" type="text" placeholder="Search.."></input>
            </div>
            {Banner(banner)}
            <h1>Exclusive Offers</h1>
            <div class="content">
                {SalesCard(item)}
                {SalesCard(item2)}
                {SalesCard(item3)}
            </div>
            <h1>All-Time Deals</h1>
            <div class="content">
                {SalesCard(item4)}
                {SalesCard(item5)}
                {SalesCard(item6)}
            </div>
            <h1>Shop by Category</h1>
            <div class="content">
                <a class="sales-card" href="">
                    <img src={item7.img} />
                    <h3>{item7.name}</h3>
                    <p>{item7.type}</p>
                </a>
                <a class="sales-card" href="">
                    <img src={item8.img} />
                    <h3>{item8.name}</h3>
                    <p>{item8.type}</p>
                </a>
            </div>
        </div>
    );
}



export default Header;