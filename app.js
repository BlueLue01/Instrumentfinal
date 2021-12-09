new Vue({
    el: "#store-app",



    data: {
        PU: false,
        NI: false,
        Empty: false,
        reqsMet: false,
        puIndexEr: null,
        CITEMS: [],
        PUItem: {},
        name1: "",
        type1: "",
        brand1: "Yamaha",
        price1: "",
        img1: "",












        instruments: [
            {
                name: "Banjo",
                type: "Banjo",
                brand: "Maton",
                price: 500.0,
                img: "https://armadillo.sirv.com/assets/web/feature/bw6ebc.png?w=640&format=webp&q=80&subsampling=4:2:0"

            },
            {
                name: "Kazoo",
                type: "Kazoo",
                brand: "Yamaha",
                price: 10.0,
                img:
                    "http://img.fasttechcdn.com/964/9644905/9644905-2.jpg"
            },
            {
                name: "Conga",
                type: "Conga",
                brand: "Yamaha",
                price: 350.00,
                img:
                    "https://www.lpmusic.com/sites/default/files/products/slider/WB2040_0.png"
            },
            {
                name: "Clarinet",
                type: "Clarinet",
                brand: "Fender",
                price: 1800.00,
                img:
                    "https://external-preview.redd.it/IqMKJvPNfvnuKMqE16CvCM--btJpr6pcZ32wtXvnssY.jpg?auto=webp&s=29fc97533ffd3e4adb5e889cc545700810bf4996"
            },
            {
                name: "Accordion",
                type: "Accordion",
                brand: "Fender",
                price: 650.00,
                img: "https://cdn.shopify.com/s/files/1/0399/4540/4575/products/petosa-Bass-Acc.jpg?v=1618096315"
            },
            {
                name: "Harp",
                type: "Harp",
                brand: "Maton",
                price: 4200.00,
                img:
                    "https://www.harpconnection.com/SalviUSA/images/d47ex-mah-300.jpg"
            }
        ]
    },












    methods: {
        PUDetails: function (inst, index) {
            this.puIndexEr = index;
            this.PUItem = inst;
            this.PU = true;
        },


        removePU: function () {
            this.name1 = "";
            this.type1 = "";
            this.brand1 = "Yamaha";
            this.price1 = "";
            this.img1 = "";
            this.NI = false;
        },









        NINST: function () {
            if (this.img1 === "") {
                this.img1 =
                    "https://www.stma.org/wp-content/uploads/2017/10/no-image-icon.png";
            } else {
                this.img1 = this.img1;
            }

            this.instruments.push({
                name: this.name1,
                type: this.type1,
                brand: this.brand1,
                price: this.price1,
                img: this.img1
            });


            this.name1 = "";
            this.type1 = "";
            this.brand1 = "Yamaha";
            this.price1 = "";
            this.img1 = "";
            this.NI = false;
        },


        addToCart: function (inst, index) {
            this.PopUp = false;
            this.CITEMS.push(inst);
            this.instruments.splice(index, 1);
        },


        addToCart2: function (inst) {
            this.CITEMS.push(inst);
            this.instruments.splice(this.puIndexEr, 1);
        },


        emptyCart: function () {
            this.instruments = this.instruments.concat(this.CITEMS);
            this.CITEMS = [];
        },


        imageUrlAlt(event) {
            event.target.src =
                "https://www.stma.org/wp-content/uploads/2017/10/no-image-icon.png";
        }
    },










    computed: {
        whatLeft: function () {
            if (
                this.name1.length < 1 &&
                this.type1.length < 1 &&
                this.price1.length < 1
            ) {

            } else if (
                this.name1.length >= 1 &&
                this.type1.length < 1 &&
                this.price1.length < 1
            ) {
                this.reqsMet = false;
                return "Still need instrument type & price.";
            } else if (
                this.name1.length < 1 &&
                this.type1.length >= 1 &&
                this.price1.length < 1
            ) {
                this.reqsMet = false;
                return "Still need instrument name & price.";
            } else if (
                this.name1.length < 1 &&
                this.type1.length < 1 &&
                this.price1.length >= 1
            ) {
                this.reqsMet = false;
                return "Still need instrument name & type.";
            } else if (
                this.name1.length >= 1 &&
                this.type1.length >= 1 &&
                this.price1.length < 1
            ) {
                this.reqsMet = false;
                return "Still need instrument price.";
            } else if (
                this.name1.length < 1 &&
                this.type1.length >= 1 &&
                this.price1.length >= 1
            ) {
                this.reqsMet = false;
                return "Still need instrument name.";
            } else if (
                this.name1.length >= 1 &&
                this.type1.length < 1 &&
                this.price1.length >= 1
            ) {
                this.reqsMet = false;
                return "Still need instrument type.";
            } else if (
                this.name1.length >= 1 &&
                this.type1.length >= 1 &&
                this.price1.length >= 1 &&
                this.img1.length < 10
            ) {
                this.reqsMet = true;
                return "You can submit.";
            } else {
                this.reqsMet = true;
                return "You can submit";
            }
        }
    },






    watch: {
        instruments: function () {
            if (this.instruments.length <= 0) {
                this.Empty = true;
            } else {
                this.Empty = false;
            }
        }
    }
});