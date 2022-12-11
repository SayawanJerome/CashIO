import React from 'react';

const arrowItem = {
    img: "https://www.pngfind.com/pngs/m/670-6700898_left-arrow-icon-white-hd-png-download.png"
};

const item = {
    img: "https://www.pngfind.com/pngs/m/142-1424684_quick-view-100-steam-wallet-gift-card-hd.png",
    title: "Steam Wallets"
};

const item2 = {
    img: "https://cdn.shopify.com/s/files/1/0054/5007/2113/products/1350_700x700.png?v=1651198808",
    title: "Riot Points"
};

const item3 = {
    img: "https://cdn2.unrealengine.com/faq-singular-card-102721-739x1023-651e0791cffe.png",
    title: "Fortnite V-Bucks"
};

const item4 = {
    img: "https://cdn.shopify.com/s/files/1/0373/1675/5501/products/10_6c870ff5-903b-4675-be44-d47c5291f7dd_1024x1024@2x.png?v=1585285058",
    title: "Robux"
};

const item5 = {
    img: "https://ph-test-11.slatic.net/p/447e7966f882d497990dfefa78f743d3.png",
    title: "Garena Shells"
};

const item6 = {
    img: "https://w7.pngwing.com/pngs/146/40/png-transparent-hoodie-t-shirt-scotty-sire-hoodie-hat-hoodie-black.png",
    title: "Cash.IO Accesories"
};

function Arrow() {
    return (
        <div>
            <div class="long-arrow-left"></div>
        </div>
    );
}

function Header() {
    return (
        <div class="header-center">
            <h1 class="header">Shop By Category</h1>
            <input class="search-bar" type="text" placeholder="Search.."></input>
        </div>
    );
}

function Table() {
    return (
        <table>
            <tr>
                <td>
                    <div class="card">
                        <img src={item.img} />
                        <p class="title">{item.title}</p>
                    </div>
                </td>
                <td>
                    <div class="card card2">
                        <img src={item2.img} />
                        <p class="title">{item2.title}</p>
                    </div>
                </td>
                <td>
                    <div class="card">
                        <img src={item3.img} />
                        <p class="title">{item3.title}</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="card">
                        <img src={item4.img} />
                        <p class="title">{item4.title}</p>
                    </div>
                </td>
                <td>
                    <div class="card card2">
                        <img src={item5.img} />
                        <p class="title">{item5.title}</p>
                    </div>
                </td>
                <td>
                    <div class="card">
                        <img src={item6.img} />
                        <p class="title">{item6.title}</p>
                    </div>
                </td>
            </tr>
        </table>
    );
}

function Categories() {
    return (
        <div class="Categories">
            <Arrow />
            <Header />
            <Table />
        </div>
    );
}

export default Categories;

