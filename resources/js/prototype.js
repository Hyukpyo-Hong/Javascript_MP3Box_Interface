// btn Number is the page number of Powerpoint of Part2 Assignment

$(document).ready(function () {
    firstPage();
    $("#btn_back").hide();

    $("#content").delegate("#btn1", "click", function () {
        route_Add("btn1");
        btn1();
    });

    $("#content").delegate("#btn2_1", "click", function () {
        route_Add("btn2_1");
        btn2_1();
    });

    $("#content").delegate("#btn3", "click", function () {
        route_Add("btn3");
        btn3();
    });

    $("#content").delegate("#btn2_2", "click", function () {
        route_Add("btn2_2");
        btn2_2();
    });

    $("#content").delegate("#btn3_1", "click", function () {
        route_Add("btn3_1");
        product = get_Product($(this).text());
        btn3_1();
    });

    $("#content").delegate("#btn4_1", "click", function () {
        route_Add("btn4_1");
        btn4_1();
    });

    $("#content").delegate("#btn4_2", "click", function () {
        route_Add("btn4_2");
        btn4_2();
    });

    $("#content").delegate("#btn6_1", "click", function () {
        route_Add("btn6_1");
        set_product_list(100);
        btn6_1();
    });

    $("#content").delegate("#btn6_2", "click", function () {
        route_Add("btn6_2");
        btn6_2();
    });

    $("#content").delegate("#btn8", "click", function () {
        route_Add("btn8");
        set_product_list(10 + (Math.floor(Math.random() * 30)));
        btn8();
    });

    $("#content").delegate("#btn10", "click", function () {
        route_Add("btn10");
        last_page = true;
        btn_back_check();
        btn10();
    });

    $("#content").delegate("#filter_price_high", "click", function () {
        list_sort("price_high");
    });

    $("#content").delegate("#filter_price_low", "click", function () {
        list_sort("price_low");
    });

    $("#content").delegate("#filter_brand", "click", function () {
        list_sort("brand");
    });

    $("#content").delegate("#filter_model", "click", function () {
        list_sort("model");
    });

    $("#content").delegate(".prio-item", "click", function () {
        if (priorities.size < 5 || priorities.has($(this).text())) {
            $(this).toggleClass("green");
            if (priorities.has($(this).text())) {
                priorities.delete($(this).text());
            } else {
                priorities.add($(this).text());
                switch ($(this).text()) {
                    case "WIFI":
                        type("WIFI can connect to Internet with wireless technology to interact with App server");
                        break;
                    case "LYRIC SUPPORT":
                        type("On MP3 player screen, you can see the lyric of the song");
                        break;
                    case "BLUE TOOTH":
                        type("The device can connect to other device with blue tooth technology.");
                        break;
                    case "LONG BATTERY":
                        type("Usually, the device can last more than 10 hours.");
                        break;
                    case "VIDEO SUPPORT":
                        type("The device can display video file such as MP4, and MPEG files.");
                        break;
                    case "VARIOUS EQ SET":
                        type("Varuous Equalizer setting can help you enjoy various music experience.");
                        break;
                    case "POPULARITY":
                        type("We will consider popularity of device and brand value");
                        break;
                    case "PRICE":
                        type("We will consider affordable price of the device");
                        break;
                    case "NEWEST":
                        type("We will consider brand new devices");
                        break;
                    case "STRONG BODY":
                        type("It endure againt to unexpected shock to the device");
                        break;
                    case "WARRANTY":
                        type("Usually more than 3 years warranty will be considered");
                        break;
                    case "BIG STORAGE":
                        type("Usually more than 4GB storage will be considered");
                        break;
                }
            }

            var temp = "<div class='row'><div class='col-md-12'><table class='table'><thead><tr class='info'>";
            temp += "<th class='text-center'>Selected Priorities (" + priorities.size + "/5)</th></tr></thead><tbody>";
            for (let item of priorities) {
                temp += "<tr class='active text-center prio-table'><td>" + item + "</td></tr>";
            }
            for (i = 0; i < 5 - priorities.size; i++) {
                temp += "<tr class='active text-center prio-table'><td></td></tr>";
            }
            temp += "</tbody></table></div></div>";
            $("#topRight").html(temp);
        } else {
            type("You can select up to <label style='color:red'>5 priorities</label>. Please cancel the one of the selected items");
        }
    });


});

var route = [];
var product = [];
var product_list;
var last_page = false;
var priorities = new Set();

var desc = `<ul>
<li><strong>DIMENSIONS (W X H X D)</strong>2.87" x 4.89" x 0.78"</li>
<li><strong>WEIGHT</strong> 16.05 oz</li>
<li><strong>BATTERY LIFE</strong> - CONTINUOUS PLAYBACK MUSIC 33 Hour (MP3 128 kbps) 30 Hour (FLAC 96 kHz/24 bit) 26 Hour (FLAC 192 kHz/24 bit) 11 Hour (DSD 11.2 MHz)</li>
<li><strong>CHARGING TIME (QUICK CHARGE)</strong> No</li>
<li><strong>CHARGING TIME (FULL CHARGE)</strong> 7 hours</li>
<li><strong>MEMORY SIZE</strong>  256 GB</li>
<li><strong>USB CONNECTION</strong> Hi-Speed USB (USB 2.0 compliant)</li>
<li><strong>WM-PORT</strong> 22 pins</li>
<li><strong>MUSIC PLAY MODE</strong> Normal, Repeat, Shuffle</li>    
<li><strong>FILE MANAGEMENT</strong> No</li>    
<li><strong>DISPLAY RESOLUTION</strong> 854 x 480 (FWVGA)</li>    
<li><strong>DISPLAY TYPE</strong> TFT color video display</li>    
<li><strong>DRAG AND DROP</strong> Yes</li>    
<li><strong>DYNAMIC NORMALIZER</strong> Yes</li>    
</ul>
`
function get_Product_Name() {
    var products = [
        "NW-E394/R",
        "NW-E1000",
        "NW-Enovation",
        "NW-EPower100",
        "DF-ER2",
        "DF-K432",
        "DF-POWER",
        "DF-ENERGY",
        "DF-GIIEK",
        "KAIO-POE10",
        "KAIO-EO10",
        "KAIO-FDDE10",
        "KAIO-DKKA0",
        "SOU-DKKA0",
        "SOU43",
        "SOU-PRO32",
        "SOU-ULTRA23",
        "KAIO-FJKD",
        "KAIO-NOVA",
        "KAIO-BOOM1002",
        "KAIO-BEST10D",
    ];
    var temp = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (i = 0; i < Math.floor(Math.random() * 3); i++) {
        temp += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return temp + products[Math.floor(Math.random() * products.length)];
}

function get_Company() {
    var companies = [
        "Amazon",
        "Sony",
        "Google",
        "Apple",
        "CASIO",
        "Samsung",
        "LG",
        "Xiaomi",
        "Columbus",
        "HTC",
        "Xeon",
        "Adobe",
        "Uber",
        "HaoHao",
        "Kakao",
        "Tencent",
        "Dragon"
    ]
    return companies[Math.floor(Math.random() * companies.length)];
}

function get_Price() {
    return 100 + Math.floor(Math.random() * 300)+(Math.ceil(Math.random()*10)/10);
}

function get_Pic() {
    var tags = [
        "<img src='resources/img/player1.jpg' class='img-responsive'>",
        "<img src='resources/img/player2.jpg' class='img-responsive'>",
        "<img src='resources/img/player3.jpg' class='img-responsive'>",
        "<img src='resources/img/player4.jpg' class='img-responsive'>",
    ]
    return tags[Math.floor(Math.random() * tags.length)];
}

function get_Product(name) {
    var product = {
        name: name || get_Product_Name(),
        company: get_Company(),
        price: get_Price(),
        desc: desc,
        pic: get_Pic()
    };
    return product
}

function set_product_list(cnt) {
    product_list = [];
    for (var i = 0; i < cnt; i++) {
        product_list.push(get_Product());
    }
}

function list_sort(type) {
    switch (type) {
        case "price_high":
            product_list.sort(function (a, b) {
                if (a["price"] < b["price"]) return 1;
                if (a["price"] > b["price"]) return -1;
                return 0;
            })
            break;
        case "price_low":
            product_list.sort(function (a, b) {
                if (a["price"] < b["price"]) return -1;
                if (a["price"] > b["price"]) return 1;
                return 0;
            })
            break;
        case "brand":
            product_list.sort(function (a, b) {
                if (a["company"] < b["company"]) return -1;
                if (a["company"] > b["company"]) return 1;
                return 0;
            })
            break;
        case "model":
            product_list.sort(function (a, b) {
                if (a["name"] < b["name"]) return -1;
                if (a["name"] > b["name"]) return 1;
                return 0;
            })
            break;
    }
    $("#content").html(get_product_list());
}

function get_product_list() {
    var product_list_html = `
    <div class="col-md-3"></div>
    <div class="col-md-6 product_table">
    <h3 class="text-center">
    <table class="table">
    <thead>
      <tr class="info">
        <th class="text-center">Name</th>
        <th class="text-center">Company</th>
        <th class="text-center">Price</th>        
      </tr>
    </thead>
    <tbody>`;
    for (var i = 0; i < product_list.length; i++) {
        product_list_html += "<tr class='active' onclick='product_click(" + i + ")'><td>" + product_list[i]["name"] + "</td>";
        product_list_html += "<td>" + product_list[i]["company"] + "</td>";
        product_list_html += "<td>USD " + product_list[i]["price"] + "</td></tr>";
    }
    product_list_html += `
    </tbody></table></h3></div>
    <div class='col-md-3'>    
    <div class="btn-group-vertical topmargin">    
    <button type="button" class="btn btn-static"><h4>FILTER</h4></button>
    <button type="button" id="filter_price_high" class="btn btn-primary"><h4>PRICE HIGH</h4></button>
    <button type="button" id="filter_price_low" class="btn btn-primary"><h4>PRICE LOW</h4></button>
    <button type="button" id="filter_brand" class="btn btn-primary"><h4>BRAND NAME(A-Z)</h4></button>
    <button type="button" id="filter_model"class="btn btn-primary"><h4>MODEL NAME(A-Z)</h4></button>    
  </div>   
    </div>`;
    return product_list_html;
}


function log(str) {
    console.log(str);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function type(str) {
    var i = 0;
    var isTag = false;
    var text = ""
    while (text !== str) {
        char = str[i];
        text = str.slice(0, i++);
        if (char === "<") isTag = true;
        if (char === ">") isTag = false;
        if (!isTag) {
            $("#typewriter")[0].innerHTML = text;
            await sleep(2);
        }
    }
};

function home() {
    last_page = false;
    rounte = [];
    firstPage();
}
function back() {
    last_page = false;
    route.pop();
    btn_back_check();
    navigate(route[route.length - 1]);
}

function route_Add(str) {
    route.push(str);
    btn_back_check();
}

function btn_back_check() {
    if (route.length === 0 || last_page) {
        $("#btn_back").hide();
    } else {
        $("#btn_back").show();
    }
}

function navigate(str) {
    switch (str) {
        case "btn1":
            btn1();
            break;
        case "btn2_1":
            btn2_1();
            break;
        case "btn3":
            back();
            break;
        case "btn2_2":
            btn2_2();
            break;
        case "btn3_1":
            btn3_1();
            break;
        case "btn4_1":
            btn4_1();
            break;
        case "btn4_2":
            btn4_2();
            break;
        case "btn6_1":
            btn6_1();
            break;
        case "btn6_2":
            btn6_2();
            break;
        case "btn8":
            btn8();
            break;
        default:
            firstPage();
    }
}

function firstPage() {
    type("Welecome to the MP3 Box.<br/>How Can I Help You?");
    $("#topRight").html(``);
    $("#content").html(`   
    <div class="col-md-3"></div>
<div class="btn btn-primary col-md-6 topmargin" id="btn1">
<h1>I Want to Purchase a MP3 player.</h1>
</div>
<div class="col-md-3"></div>
`);
};

function btn1() {
    type("Is there any specific model you want?");
    $("#topRight").html(``);
    $("#content").html(`  
    <div class="col-md-3"></div>
    <div class="col-md-6 topmargin"> 
    <button type="button" class="btn btn-success" id="btn2_1"><h1>Yes, I Know the Model Name</h1>
    </button>
    <button type="button" class="btn btn-info" id="btn2_2"><h1>No, I Need Your Help</h1>
    </button>             
    </div>                  
    <div class="col-md-3"></div>
`);
}

function btn2_1() {
    type("What is the model’s name?<br><small>FYI: Since this is a prototype, <label style='color:blue'>Clicking KeyPad</label> will input sample keywords. Then, select one of recommended products.</small>");
    $("#topRight").html(``);
    $("#content").html(`     
    <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
        <div class="input_form">
            <span>_</span>
        </div>
        <img src="resources/img/keyboard.jpg" class="img-responsive" id="btn3">
    </div>
    <div class="col-md-3"></div>
</div>
    `);
}

function btn3() {
    $("#topRight").html(``);
    $("#content").html(`     
    <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
        <div class="input_form">
            <p>NW-E_</p>
            <span class="label label-info" id="btn3_1">NW-E394/R</span>
            <span class="label label-info" id="btn3_1">NW-E1000</span>
            <span class="label label-info" id="btn3_1">NW-Enovation</span>
            <span class="label label-info" id="btn3_1">NW-E32</span>
        </div>
        <img src="resources/img/keyboard.jpg" class="img-responsive">
    </div>
    <div class="col-md-3"></div>
</div>
    `);
}

function btn2_2() {
    type("How can I help you to find a model?");
    $("#topRight").html(``);
    $("#content").html(`     
    <div class="col-md-2"></div>
    <div class="col-md-8 topmargin text-center">
    <button type="button" class="btn btn-info" id="btn6_1"><h1>Show Me the Whole List</h1>
    </button>
    <button type="button" class="btn btn-success" id="btn6_2"><h1>Recommend Me the Model
    </h1>
    </button>    
    </div>
    <div class="col-md-2"></div>
    `);
}

function btn3_1() {
    type("Is it right what you want?");
    $("#topRight").html(``);
    $("#content").html(` 
<div class="row product">
    <div class="col-md-3 text-center">`
        + product["pic"] +
        `<button type= "button" class="btn btn-success" id= "btn4_1"> <h4> <span class="glyphicon glyphicon-usd"></span> Yes, I Want to Buy This One.
        </h4>
        </button >
        <button type="button" class="btn btn-info" id="btn4_2"><h4> <span class="glyphicon glyphicon-music"></span> Yes, I Want to Do Sound Test
        </h4>
        </button></div>
    <div class="col-md-9">
        <h2>`+ product["name"] + " / " + product["company"] + " / USD " + product["price"] + `</h2><p>`
        + product["desc"] + `</p>` + `
    </div >
</div >
            `);
}

function btn4_1() {
    type("You selected <label class='label label-info'>"+ product["company"]+" "+product["name"] +"</label>. And the price is <label class='label label-success'>USD "+product["price"] +"</label>. Do you want to buy this one? Please select payment method.");

    $("#topRight").html(``);

    $("#content").html(`
    <div class="col-md-2"></div>
    <div class="col-md-8 topmargin">
    <div class="btn-group btn-group-justified">
    <a id="btn10" class="btn btn-success"><img class="paypic" src="resources/img/debit.png"><h3>DEBIT CARD</h3></a>
    <a id="btn10" class="btn btn-primary"><img class="paypic" src="resources/img/credit.png"><h3>CREDIT CARD</h3></a>
    <a id="btn10" class="btn btn-info"><img class="paypic" src="resources/img/cash.png"><h3>CASH</h3></a>
    <a id="btn10" class="btn btn-warning"><img class="paypic" src="resources/img/bitcoin.png"><h3>BITCOIN</h3></a>
    </button>
    </div>
    </div>
    <div class="col-md-2"></div>    
    `);
}

function btn4_2() {
    type("This is recorded sound of this device. Please use the headset to listen.");
    $("#topRight").html(``);
    $("#content").html(` 
    <div class="row product">
    <div class="col-md-3 text-center">` + product["pic"] + `
        <button type="button" class="btn btn-sm btn-success" id="btn4_1">
            <h4>
                <span class="glyphicon glyphicon-usd"></span> I Want to Buy This One.</h4>
    </div>
    <div class="col-md-9">
        <h2>
            <span class="label label-primary">Sound Test</span>
        </h2>
        <div class="audio">
            <audio controls preload="none">
                <source src="resources/audio/sample.mp3" type="audio/mpeg"> Your browser does not support the audio element.
            </audio>
        </div>
        <h2>`+ product["name"] + " / " + product["company"] + " / USD " + product["price"] + `</h2>
        <p>` + product["desc"] + `</p>` + `
    </div>
</div>
    `);
}

function btn10() {
    type("Please Use the Pinpad to Finish the Payment.");
    $("#topRight").html(``);
    $("#content").html(` 
    <div class="row topmargin">
    <div class="col-md-3"></div>
    <div class="col-md-6 pinpad">
        <img src="resources/img/pinpad.png" class="img-responsive">
    </div>
    <div class="col-md-3">
    <div class="btn-group-vertical">
    <button type="button" onclick="home()" class="btn btn-primary lastbtn">
    <h1><span class="glyphicon glyphicon-home"></span> Exit</h1>
</button>
    <button type="button" onclick="back()" class="btn btn-danger lastbtn">
    <h1><span class="glyphicon glyphicon-step-backward"></span> Back to Previous</h1>
</button>
  </div>
    </div>
</div>
    `);
};

function btn6_1() {
    type("Okay, here is the whole list. We have " + product_list.length + " items. You can use the filter.");
    $("#topRight").html(``);
    $("#content").html(get_product_list());
}

function btn6_2() {
    type("Okay, please select your priorities from below boxes.");
    priorities = new Set();
    var temp = "<div class='row'><div class='col-md-12'><table class='table'><thead><tr class='info'>";
    temp += "<th class='text-center'>Selected Priorities (" + priorities.size + "/5)</th></tr></thead><tbody>";
    for (i = 0; i < 5 - priorities.size; i++) {
        temp += "<tr class='active text-center prio-table'><td></td></tr>";
    }
    temp += "</tbody></table></div></div>";
    $("#topRight").html(temp);
    $("#content").html(` 
<div class="row topmargin ">
    <div class="col-md-2 prio-item">WIFI</div>
    <div class="col-md-2 prio-item">LYRIC SUPPORT</div>
    <div class="col-md-2 prio-item">BLUE TOOTH</div>
    <div class="col-md-2 prio-item">LONG BATTERY</div>
    <div class="col-md-2 prio-item">VIDEO SUPPORT</div>
    <div class="col-md-2 prio-item">VARIOUS EQ SET</div>
</div>
<div class="row">
    <div class="col-md-2 prio-item">POPULARITY</div>
    <div class="col-md-2 prio-item">PRICE</div>
    <div class="col-md-2 prio-item">NEWEST</div>
    <div class="col-md-2 prio-item">STRONG BODY</div>
    <div class="col-md-2 prio-item">WARRANTY</div>
    <div class="col-md-2 prio-item">BIG STORAGE</div>
</div>
<div class="row">
    <div class="btn-group btn-group-justified">
        <a class="btn btn-success" id="btn8"><h3>Click Here to see the Result</h3></a>
    </div>
</div>
    `);
}
function btn8() {
    type("I found " + product_list.length + " items for you. You can use the filter.");
    $("#topRight").html(``);
    $("#content").html(get_product_list());
}

function product_click(num) {
    product = product_list[num];
    route.push("btn3_1");
    btn3_1();
}