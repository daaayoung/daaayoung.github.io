
function myFunction() {
  var x =document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}

let selections = document.querySelectorAll('.selection');

let imageItem = document.getElementById("selected-item");

console.log(selections);
selections.forEach(function(element){
  element.addEventListener('click', function() {
    imageItem.src=element.dataset.item+".png"
  })
})

class Cursor {


       constructor() {
        this._dom = {};
        this._cursors = ["cursor_1", "cursor_2"];
        this.initHtml();
        this.initCss();
        this.initEvent();
    }


    initHtml() {
        let _cursor;
        const _this = this;
        this._dom["body"] = document.getElementsByTagName('body')[0];
        this._cursors.forEach(function (value) {
            _cursor = document.createElement('div');
            _cursor.className = value;
            _cursor.id = value;
            _this._dom.body.appendChild(_cursor)
            _this._dom[value] = _cursor
        });


    }

    initCss() {
        const style_cursor = { position: 'fixed', borderRadius: '50%', transform: 'translateX(-50%) translateY(-50%)', pointerEvents: 'none', left: '100px', top: '50%' }
        const style_cursor_1 = { backgroundColor: '#000000', height: '5px', width: '5px', zIndex: 99999 }
        const style_cursor_2 = { border: '1.3px solid #000000', height: ' 30px', width: '30px', zIndex: 99998, webkitTransition: 'all 0.3s ease-out', mozTransition: 'all 0.3s ease-out', oTransition: 'all 0.3s ease-out', msTransition: 'all 0.3s ease-out', transition: 'all 0.3s ease-out' }
        this.setStylesOnElement(Object.assign({}, style_cursor, style_cursor_1), this._dom.cursor_1)
        this.setStylesOnElement(Object.assign({}, style_cursor, style_cursor_2), this._dom.cursor_2)
    }

    initEvent() {
        const _this = this;
        this._dom.body.addEventListener("mousemove", function (e) {
            let _clientX = e.clientX;
            let _clientY = e.clientY;
            let _position = { top: _clientY + "px", left: _clientX + "px" };
            _this.setStylesOnElement(_position, _this._dom.cursor_1)
            _this.setStylesOnElement(_position, _this._dom.cursor_2)
        })
    }


    setStylesOnElement(styles, element) {
        Object.assign(element.style, styles);
    }



}

const _cursor = new Cursor()

var bacons = "<img src = 'bacons.gif'>";
var candles = "<img src = 'candles.gif'>";
var chicken = "<img src = 'chicken.gif'>";
var cigarettes = "<img src = 'cigarettes.gif'>";
var cookie = "<img src = 'cookie.gif'>";
var donut = "<img src = 'donut.gif'>";
var donut2 = "<img src = 'donut2.gif'>";
var friedegg = "<img src = 'friedegg.gif'>";
var gold = "<img src = 'gold.gif'>";
var goldfish = "<img src = 'goldfish.gif'>";
var icecream = "<img src = 'icecream.gif'>";
var ketchup = "<img src = 'ketchup.gif'>";
var kimchi = "<img src = 'kimchi.gif'>";
var leaf = "<img src = 'leaf.gif'>";
var lemon = "<img src = 'lemon.gif'>";
var magicwand = "<img src = 'magicwand.gif'>";
var minivodka = "<img src = 'minivodka.gif'>";
var nailclipper = "<img src = 'nailclipper.gif'>";
var paintbrush = "<img src = 'paintbrush.gif'>";
var popcorn = "<img src = 'popcorn.gif'>";
var porchekey = "<img src = 'porchekey.gif'>";
var ramen = "<img src = 'ramen.gif'>";
var shuttlecock = "<img src = 'shuttlecock.gif'>";
var sushi = "<img src = 'sushi.gif'>";
var teddybear = "<img src = 'teddybear.gif'>";
var images = [bacons, candles, chicken, cigarettes, cookie, donut, donut2, friedegg, gold, goldfish, icecream, ketchup, kimchi, leaf, lemon, magicwand, minivodka, nailclipper, paintbrush, popcorn, porchekey, ramen, shuttlecock, sushi, teddybear];
var names = ["bacons", "candles", "chicken", "cigarettes", "cookie", "donut", "donut2", "friedegg", "gold", "goldfish", "icecream", "ketchup", "kimchi", "leaf", "lemon", "magicwand", "minivodka", "nailclipper", "paintbrush", "popcorn", "porchekey", "ramen", "shuttlecock", "sushi", "teddybear"];
function displayImage(){
  var rn = Math.random();
  rn = rn*25;
  rn = Math.floor(rn);
  document.getElementById("pic").innerHTML=images[rn];
  document.getElementById("name").innerHTML=names[rn];
  
}
