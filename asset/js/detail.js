let fillterarray = [];
let galleryarray = [{
        userid: "001",
        seller: "TRẦN D. PHƯƠNG THẢO",
        avatar: "asset/img/Avatar_seller/Chef-bro.svg",
        review: "100",
        star: "5",
        id: "IP141",
        name: "Iphone14",
        price: "20.500.000",
        dungluong: "128",
        color: "GREEN",
        warranty: "12 Tháng",
        refund: "30 Ngày",
        dcr: "Like new",
        di1: "asset/img/Dilivery/express.jpg",
        di2: "asset/img/Dilivery/ExpressVPN.png",
        di3: "asset/img/Dilivery/giaohangtietkiem.jpg",
        di1name: "Express",
        di2name: "ExpressVPN",
        di3name: "GHTK"

    },
    {
        userid: "002",
        seller: "NGUYỄN PHAN HỒNG HẢO",
        avatar: "asset/img/Avatar_seller/Flying around the world-amico.svg",
        review: "120",
        star: "4.5",
        id: "IP142",
        name: "Iphone14",
        price: "21.500.000",
        dungluong: "256",
        color: "RED",
        warranty: "12 Tháng",
        refund: "30 Ngày",

        dcr: "like new",
        di1: "asset/img/Dilivery/express.jpg",
        di1name: "Express"
    },
    {
        userid: "003",
        seller: "NGUYỄN LAM THANH",
        avatar: "asset/img/Avatar_seller/Flying around the world-cuate.svg",
        review: "200",
        star: "4",
        price: "20.000.000",
        id: "IP143",
        name: "Iphone14",
        dungluong: "512",
        color: "BLUE",
        warranty: "12 Tháng",
        refund: "30 Ngày",
        dcr: "Đã qua bảo hành",
        di2: "asset/img/Dilivery/ExpressVPN.png",
        di3: "asset/img/Dilivery/giaohangtietkiem.jpg",
        di2name: "ExpressVPN",
        di3name: "GHTK"
    },
    {
        userid: "004",
        seller: "LÝ TẤN TÀI",
        avatar: "asset/img/Avatar_seller/forrest.svg",
        review: "300",
        star: "3",
        price: "18.500.000",
        id: "IP144",
        name: "Iphone14",
        dungluong: "1T",
        color: "PINK",
        warranty: "12 Tháng",
        refund: "30 Ngày",
        dcr: "Đã thay đổi linh kiện",
        di2: "asset/img/Dilivery/ExpressVPN.png",
        di2name: "ExpressVPN"
    },
    {
        userid: "005",
        seller: "NGUYỄN VIẾT THANH",
        avatar: "asset/img/Avatar_seller/lake.png",
        review: "400",
        star: "3",
        price: "16.500.000",
        id: "IP145",
        name: "Iphone14",
        dungluong: "128",
        color: "PUPLE",
        warranty: "12 Tháng",
        refund: "30 Ngày",

        dcr: "Trầy xước",
        di3: "asset/img/Dilivery/giaohangtietkiem.jpg",
        di3name: "GHTK",
    },
];

showProduct(galleryarray);

function showProduct(curarra) {
    document.getElementById("card").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("card").innerHTML += `
            <div class="col-12 col-sm-12">
            <div class="card rounded mt-3">
            <div class="row mt-5">
                <div class="col-12 col-sm-4">
                    <img id="${curarra[i].userid}" class=" rounded-circle mx-auto d-block" src="${curarra[i].avatar} " width="40%" alt="">
                        <p class=" text-center fw-bold mt-2 text-muted">${curarra[i].seller}</p>
                        <p class="text-center text-muted">${curarra[i].star}<i class="text-warning far fa-star fa-sm text-primary"></i>/5 <br>${curarra[i].review} đánh giá  </p>
                        <div class="information">
                            <p class="text-center text-muted fs-6">
                                Tình trạng: <span class="text-primary">${curarra[i].dcr}</span>
                            </p>
                            <p class="text-center text-muted fs-6">
                                Bảo hành: <span class="text-primary">${curarra[i].warranty}</span>
                            </p>
                            <p class="text-center text-muted fs-6">
                                Đổi trả: <span class="text-primary">${curarra[i].refund}</span>
                            </p>
                        </div>
                        
                </div>
                <div class="col-6 col-sm-4">
                    <div id="${curarra[i].id}" class="carousel slide" data-bs-ride="carousel">
        
                        <div class="carousel-indicators" style="margin-top:80px;">
                            <button type="button" data-bs-target="#${curarra[i].id}" data-bs-slide-to="0" class="active"></button>
                            <button type="button" data-bs-target="#${curarra[i].id}" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#${curarra[i].id}" data-bs-slide-to="2"></button>
                        </div>
        
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="asset/img/SELL/iphone-14-behind.jpg" alt="saturn" class="d-block rounded img-fluid"
                                    style="width: 100%" />
        
                            </div>
                            <div class="carousel-item">
                                <img src="asset/img/SELL/iphone-14-nghieng.jpg" alt="uranus" class="d-block rounded img-fluid"
                                    style="width: 100%" />
        
                            </div>
                            <div class="carousel-item">
                                <img src="asset/img/SELL/iphone-14-camera.jpg" alt="jupiter" class="d-block rounded img-fluid"
                                    style="width: 100%" />
                            </div>
                        </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#${curarra[i].id}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                        
                    <button class="carousel-control-next" type="button" data-bs-target="#${curarra[i].id}" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>

                   </div>
                   
                </div>
                
                <div class="col-6 col-sm-4">
                <h5 class="mt-2 text-red text-center">${curarra[i].name} ${curarra[i].dungluong} ${curarra[i].color}</h5>
                <h3 class="mt-2 text-danger text-center">${curarra[i].price}<sup class="fw-bold">đ</sup>  <br> FREE SHIPING</h3>
                <div class="d-flex flex-row bd-highlight mx-auto d-block" style="clear:'both';max-width: '100px'; ">
                    <img class="float-left mx-auto d-block" src="${curarra[i].di1} " width="15%" alt="">
                    <img class=" float-left mx-auto d-block" src="${curarra[i].di2} " width="15%" alt="">
                    <img class="float-left mx-auto d-block" src="${curarra[i].di3} " width="15%" alt="">
                </div>

                
                
                
                <button class="btn btn-primary w-80 mx-auto mt-5 me-3" style="float:right;">MUA NGAY</button>
             </div>
        
            </div>
           
        </div>
        
        
    
            </div>
    
       
  
       `
    }

}






// function filterItems(source){

//     let checkConItem = $('input[type="checkbox"][name="condition"]:checked');

//              if (chekConItem.length > 0) {

//                 checkConItem.each(function () {
//                     fillterarray = source.filter(function (item) {
//                         if (item.di1name.includes("Express") || item.di2name.includes("ExpressVPN") || item.di3name.includes("GHTK") || item.di4name.includes("NinjaVan")){
//                                 return item.id;
//                             }
//                         })
//                     });
//                 }
// }


// filterItems(galleryarray);
// alert("DONE");

// if(fillterarray == ""){
//     alert("Not found");
// }else{
//     showProduct(fillterarray);
// }