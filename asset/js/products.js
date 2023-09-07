const listLogoBrand_laptop = {
    macbook:
      "asset/img/header/laptop/logo-macbook-149x40.png",
    asus:
      "asset/img/header/laptop/logo-asus-149x40.png",
    lenovo:
      "asset/img/header/laptop/logo-lenovo-149x40.png",
    dell:
      "asset/img/header/laptop/logo-dell-149x40.png",
    hp:
      "asset/img/header/laptop/logo-hp-149x40-1.png",
    acer:
      "asset/img/header/laptop/logo-acer-149x40.png",
  
  };

  const listLogoBrand_phone = {
    apple:
        "asset/img/header/phone/logo-iphone-220x48.png",
    samsung:
        "asset/img/header/phone/samsungnew-220x48-1.png",
    oppo:
        "asset/img/header/phone/OPPO42-b_5.jpg",
    xiaomi:
        "asset/img/header/phone/logo-xiaomi-220x48-5.png",
};

  
//Danh mục sản phẩm
const products = [
    {
        id: 1,
        name: "iPhone 14 128 GB",
        price: "35.490.000",
        brand: "apple",
        newPrice: "30.790.000",
        image:
            "asset/img/phone/iphone/iphone-14-pro-max-bac-thumb-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25,
    },
    {
        id: 2,
        name: "iPhone 11 128 GB",
        price: "16.490.000",
        brand: "apple",
        newPrice: "10.790.000",
        image:
            "asset/img/phone/iphone/iphone-11-trang.jpg",
        rating: 3,
        sale: 40,
        remain: 25
    },
    {
        id: 3,
        name: "iPhone 12 128 GB",
        price: "21.490.000",
        brand: "apple",
        newPrice: "13.790.000",
        image:
            "asset/img/phone/iphone/iphone-12-den.jpg",
        rating: 3,
        sale: 40,
        remain: 25
    },
    {
        id: 4,
        name: "iPhone 12 256 GB",
        price: "23.490.000",
        brand: "apple",
        newPrice: "14.790.000",
        image:
            "asset/img/phone/iphone/iphone-12-trang.jpg",
        rating: 3,
        sale: 40,
        remain: 25
    },
    {
        id: 5,
        name: "iPhone 12 64 GB",
        price: "21.990.000",
        brand: "apple",
        newPrice: "15.790.000",
        image:
            "asset/img/phone/iphone/iphone-12-mini.jpeg",
        rating: 3,
        sale: 40,
        remain: 25
    },
    {
        id: 6,
        name: "iPhone 13 mini 128 GB",
        price: "18.490.000",
        brand: "apple",
        newPrice: "12.790.000",
        image:
            "asset/img/phone/iphone/iphone-13-mini.jpg",
        rating: 3,
        sale: 40,
        remain: 25
    },
    {
        id: 7,
        name: "iPhone 13 mini",
        price: "21.990.000",
        brand: "apple",
        newPrice: "15.790.000",
        image:
            "asset/img/phone/iphone/iphone-13-mini-red.jpg",
        rating: 3,
        sale: 40,
        remain: 25
    },
    {
        id: 8,
        name: "iPhone 13 Pro 128 GB",
        price: "31.490.000",
        brand: "apple",
        newPrice: "25.790.000",
        image:
            "asset/img/phone/iphone/iphone-13-pro-max-gold-1-600x600.jpg",
        rating: 5,
        sale: 40,
        remain: 25
    },
    {
        id: 9,
        name: "Oppo A17",
        price: "4.490.000",
        brand: "oppo",
        newPrice: "2.790.000",
        image:
            "asset/img/phone/oppo/oppo-a17-den-thumb-600x600.jpg",
        rating: 5,
        sale: 40,
        remain: 25
    },
    {
        id: 10,
        name: "Oppo A57 5G",
        price: "4.490.000",
        brand: "oppo",
        newPrice: "2.790.000",
        image:
            "asset/img/phone/oppo/oppo-a57-xanh-thumb-1-600x600.jpg",
        rating: 5,
        sale: 40,
        remain: 25
    },
    {
        id: 11,
        name: "Oppo A77s 5G",
        price: "7.490.000",
        brand: "oppo",
        newPrice: "6.790.000",
        image:
            "asset/img/phone/oppo/oppo-a77s-den-thumb-1-2-600x600.jpg",
        rating: 5,
        sale: 40,
        remain: 25
    },
    {
        id: 12,
        name: "Oppo A96 5G",
        price: "6.990.000",
        brand: "oppo",
        newPrice: "4.790.000",
        image:
            "asset/img/phone/oppo/oppo-a96-den-thumb-1-600x600.jpg",
        rating: 5,
        sale: 40,
        remain: 25
    },
    {
        id: 13,
        name: "Oppo Find X5 Pro",
        price: "28.490.000",
        brand: "oppo",
        newPrice: "23.700.000",
        image:
            "asset/img/phone/oppo/oppo-find-x5-pro-den-thumb-600x600.jpg",
        rating: 5,
        sale: 40,
        remain: 25
    },
    {
        id: 14,
        name: "Oppo Reno 6 5G",
        price: "12.490.000",
        brand: "oppo",
        newPrice: "8.790.000",
        image:
            "asset/img/phone/oppo/oppo-reno6-5g-black-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 15,
        name: "Oppo Reno 7 5G",
        price: "9.490.000",
        brand: "oppo",
        newPrice: "6.790.000",
        image:
            "asset/img/phone/oppo/oppo-reno7-z-5g-thumb-2-1-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 16,
        name: "Oppo Reno8 5G",
        price: "18.490.000",
        brand: "oppo",
        newPrice: "12.790.000",
        image:
            "asset/img/phone/oppo/oppo-reno8-pro-thumb-xanh-1-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 17,
        name: "Samsung Galaxy Z Flip4 128 GB",
        price: "23.990.000",
        brand: "samsung",
        newPrice: "14.990.000",
        image:
            "asset/img/phone/samsung/samsung-galaxy-z-flip4-5g-128gb-thumb-tim-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 18,
        name: "Samsung Galaxy S21 FE 5G",
        price: "16.490.000",
        brand: "samsung",
        newPrice: "12.790.000",
        image:
            "asset/img/phone/samsung/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 19,
        name: "Samsung Galaxy Z Folld 3 5G",
        price: "41.490.000",
        brand: "samsung",
        newPrice: "35.790.000",
        image:
            "asset/img/phone/samsung/samsung-galaxy-z-fold-3-silver-1-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 20,
        name: "Samsung Galaxy S22+ 5G",
        price: "25.490.000",
        brand: "samsung",
        newPrice: "18.790.000",
        image:
            "asset/img/phone/samsung/Galaxy-S22-Plus-White-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 21,
        name: "Samsung Galaxy A73 5G",
        price: "12.490.000",
        brand: "samsung",
        newPrice: "8.790.000",
        image:
            "asset/img/phone/samsung/samsung-galaxy-a73-5g-xanh-thumb-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 22,
        name: "Samsung Galaxy A53 5G",
        price: "9.490.000",
        brand: "samsung",
        newPrice: "7.790.000",
        image:
            "asset/img/phone/samsung/samsung-galaxy-m53-nau-thumb-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 23,
        name: "Samsung Galaxy A23 5G",
        price: "4.490.000",
        brand: "samsung",
        newPrice: "3.790.000",
        image:
            "asset/img/phone/samsung/sam-sung-galaxy-a23-5g-xanh-thumb-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 24,
        name: "Samsung Galaxy A13 5G",
        price: "7.490.000",
        brand: "samsung",
        newPrice: "5.790.000",
        image:
            "asset/img/phone/samsung/Samsung-Galaxy-A13-cam-thumb-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 25,
        name: "Xiaomi 12",
        price: "16.490.000",
        brand: "xiaomi",
        newPrice: "11.790.000",
        image:
            "asset/img/phone/xiaomi/Xiaomi-12-xam-thumb-mau-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 26,
        name: "Xiaomi 11T",
        price: "10.490.000",
        brand: "xiaomi",
        newPrice: "8.790.000",
        image:
            "asset/img/phone/xiaomi/Xiaomi-11T-White-1-2-3-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 27,
        name: "Xiaomi 11 Lite 5G NE",
        price: "8.490.000",
        brand: "xiaomi",
        newPrice: "6.790.000",
        image:
            "asset/img/phone/xiaomi/xiaomi-11-lite-5g-ne-black-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 28,
        name: "Xiaomi Redmi 10",
        price: "4.490.000",
        brand: "xiaomi",
        newPrice: "3.790.000",
        image:
            "asset/img/phone/xiaomi/redmi-10-gray-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 29,
        name: "MacBook Air M2 2022",
        price: "28.790.000",
        brand: "macbook",
        newPrice: "22.790.000",
        image:
            "asset/img/laptop/macbook/apple-macbook-air-m2-2022-16gb-256gb-thumb.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 30,
        name: "MacBook Pro M2 2022",
        price: "29.490.000",
        brand: "macbook",
        newPrice: "23.790.000",
        image:
            "asset/img/laptop/macbook/apple-macbook-pro-13-inch-m2-2022-xam.jpg",
        rating: 3,
        sale: 40,
        remain: 25
    },
    {
        id: 31,
        name: "MacBook Pro M1",
        price: "28.490.000",
        brand: "macbook",
        newPrice: "19.790.000",
        image:
            "asset/img/laptop/macbook/apple-macbook-pro-16-m1-pro-2021.jpg",
        rating: 3,
        sale: 40,
        remain: 25
    },
    {
        id: 32,
        name: "MacBook Air M1 Gold",
        price: "33.490.000",
        brand: "macbook",
        newPrice: "26.790.000",
        image:
            "asset/img/laptop/macbook/macbook-air-m1-2020-gold.jpg",
        rating: 3,
        sale: 40,
        remain: 25
    },
    {
        id: 33,
        name: "MacBook Air M1 Gray",
        price: "21.990.000",
        brand: "macbook",
        newPrice: "15.790.000",
        image:
            "asset/img/laptop/macbook/macbook-pro-m1-2020-gray.jpg",
        rating: 3,
        sale: 40,
        remain: 25
    },
    {
        id: 34,
        name: "Acer TravelMate B3",
        price: "13.490.000",
        brand: "acer",
        newPrice: "10.790.000",
        image:
            "asset/img/laptop/acer/acer-travelmate.jpg",
        rating: 3,
        sale: 40,
        remain: 25
    },
    {
        id: 35,
        name: "Acer Nitro 5 Tiger",
        price: "31.990.000",
        brand: "acer",
        newPrice: "25.790.000",
        image:
            "asset/img/laptop/acer/acer-nitro-5-tiger.jpg",
        rating: 2,
        sale: 40,
        remain: 25
    },
    {
        id: 36,
        name: "Acer Aspire 3",
        price: "15.490.000",
        brand: "acerk",
        newPrice: "10.790.000",
        image:
            "asset/img/laptop/acer/acer-aspire-3-a315.jpg",
        rating: 2,
        sale: 40,
        remain: 25
    },
    {
        id: 37,
        name: "Acer Nitro 5 Gaming",
        price: "32.490.000",
        brand: "acer",
        newPrice: "24.790.000",
        image:
            "asset/img/laptop/acer/acer-nitro-5-gaming-an515.jpg",
        rating: 2,
        sale: 40,
        remain: 25
    },
    {
        id: 38,
        name: "Asus Gaming ROG Flow",
        price: "35.490.000",
        brand: "asus",
        newPrice: "29.790.000",
        image:
            "asset/img/laptop/asus/asus-gaming-rog-flow-z13-i7.jpg",
        rating: 5,
        sale: 40,
        remain: 25
    },
    {
        id: 39,
        name: "Asus Strix Gaming",
        price: "21.490.000",
        brand: "asus",
        newPrice: "17.790.000",
        image:
            "asset/img/laptop/asus/asus-rog-strix-gaming.jpg",
        rating: 5,
        sale: 40,
        remain: 25
    },
    {
        id: 40,
        name: "Asus TUF Gaming",
        price: "31.990.000",
        brand: "asus",
        newPrice: "28.790.000",
        image:
            "asset/img/laptop/asus/asus-tuf-gaming-fx506lhb.jpeg",
        rating: 5,
        sale: 40,
        remain: 25
    },
    {
        id: 41,
        name: "Asus Vivobook 15X Oled",
        price: "20.490.000",
        brand: "asus",
        newPrice: "16.700.000",
        image:
            "asset/img/laptop/asus/asus-vivobook-15x-oled.jpg",
        rating: 5,
        sale: 40,
        remain: 25
    },
    {
        id: 42,
        name: "Asus Vivobook X415e",
        price: "19.490.000",
        brand: "asus",
        newPrice: "12.790.000",
        image:
            "asset/img/laptop/asus/asus-vivobook-x415ea.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 43,
        name: "Dell Vostro 5620 i7",
        price: "37.490.000",
        brand: "dell",
        newPrice: "22.790.000",
        image:
            "asset/img/laptop/dell/dell-vostro-5620-i7.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 44,
        name: "Dell Vostro 3510 i5",
        price: "19.490.000",
        brand: "dell",
        newPrice: "15.790.000",
        image:
            "asset/img/laptop/dell/dell-vostro-3510-i5-1135g7.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 45,
        name: "Dell Inspiron 15 3520 i3",
        price: "14.990.000",
        brand: "dell",
        newPrice: "10.990.000",
        image:
            "asset/img/laptop/dell/dell-inspiron-15-3520.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 46,
        name: "Dell Inspiron 3511 i3",
        price: "13.490.000",
        brand: "dell",
        newPrice: "11.790.000",
        image:
            "asset/img/laptop/dell/dell-inspiron-15-3511-i3.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 47,
        name: "Dell Gaming Alienware M15",
        price: "41.490.000",
        brand: "dell",
        newPrice: "35.790.000",
        image:
            "asset/img/laptop/dell/dell-gaming-alienware-m15.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 48,
        name: "Dell Gaming G15",
        price: "25.490.000",
        brand: "dell",
        newPrice: "18.790.000",
        image:
            "asset/img/laptop/dell/dell-gaming-g15-5515-r5.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 49,
        name: "HP 15s Fq5078tu i5",
        price: "19.490.000",
        brand: "hp",
        newPrice: "16.790.000",
        image:
            "asset/img/laptop/hp/hp-15s-fq5078tu-i5.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 50,
        name: "HP 240 G8 i3",
        price: "20.490.000",
        brand: "hp",
        newPrice: "15.790.000",
        image:
            "asset/img/laptop/hp/hp-240-g8-i3-617k6pa-thumb-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 51,
        name: "HP Envy 13 a15 i7",
        price: "18.490.000",
        brand: "hp",
        newPrice: "22.790.000",
        image:
            "asset/img/laptop/hp/hp-envy-13-ba1535tu-i7.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 52,
        name: "HP Envy X360",
        price: "24.490.000",
        brand: "hp",
        newPrice: "20.790.000",
        image:
            "asset/img/laptop/hp/hp-envy-x360-convert-13.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 53,
        name: "HP Paviloin X36",
        price: "33.490.000",
        brand: "hp",
        newPrice: "29.790.000",
        image:
            "asset/img/laptop/hp/hp-pavilion-x360-14-ek0055tu-i7.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 54,
        name: "HP Victus 16",
        price: "17.490.000",
        brand: "hp",
        newPrice: "14.790.000",
        image:
            "asset/img/laptop/hp/hp-victus-16-d0292tx-i5.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 55,
        name: "HP Eliteboob 630",
        price: "30.490.000",
        brand: "hp",
        newPrice: "25.790.000",
        image:
            "asset/img/laptop/hp/hp-elitebook-630-g9-i7.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 56,
        name: "Lenovo Ideapad 3",
        price: "14.490.000",
        brand: "lenovo",
        newPrice: "10.790.000",
        image:
            "asset/img/laptop/lenovo/lenovo-ideapad-3.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 57,
        name: "Lenovo Ideapad 5",
        price: "18.490.000",
        brand: "lenovo",
        newPrice: "14.790.000",
        image:
            "asset/img/laptop/lenovo/lenovo-ideapad-5-15itl05-i5-82fg01h7vn-600x600.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 58,
        name: "Lenovo Ideapad Gaming 3",
        price: "26.490.000",
        brand: "lenovo",
        newPrice: "22.790.000",
        image:
            "asset/img/laptop/lenovo/lenovo-ideapad-gaming-3.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    },
    {
        id: 59,
        name: "Lenovo Legion 5",
        price: "24.490.000",
        brand: "lenovo",
        newPrice: "18.790.000",
        image:
            "asset/img/laptop/lenovo/lenovo-legion-5.jpg",
        rating: 4,
        sale: 40,
        remain: 25
    }
];
