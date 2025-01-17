var app = new function() {
    this.name = "Pop Zey", this.version = "Unreleased v2", this.date = "2024", this.folder = "asset-v2/", this.looptime = 8000, this.bpm = 120, this.totalframe = 384, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepolotshirt = "polo-sprite-tshirt.png", this.spritepicto = "game-picto.png", this.colBck = "#0b252b", this.col0 = "#a5d7c6", this.col1 = "#6dafa3", this.col2 = "#2f6c6a", this.col3 = "#235052", this.col4 = "#18373d", this.animearray = [{
        name: "1_tshkuh",
        color: "18373d",
        uniqsnd: !0
    }, {
        name: "2_kick",
        color: "18373d",
        uniqsnd: !0
    }, {
        name: "3_kahp",
        color: "18373d",
        uniqsnd: !0
    }, {
        name: "4_pshtom",
        color: "18373d",
        uniqsnd: !0
    }, {
        name: "5_clics",
        color: "18373d",
        uniqsnd: !0
    }, {
        name: "6_ooh",
        color: "2e266d",
        uniqsnd: !0
    }, {
        name: "7_boomboom",
        color: "2e266d",
        uniqsnd: !0
    }, {
        name: "8_daft",
        color: "2e266d",
        uniqsnd: !0
    }, {
        name: "9_tukatadrop",
        color: "2e266d",
        uniqsnd: !0
    }, {
        name: "10_longuebass",
        color: "2e266d",
        uniqsnd: !0
    }, {
        name: "11_toungtu",
        color: "9a1e25",
        uniqsnd: !0
    }, {
        name: "12_tutuarp",
        color: "9a1e25",
        uniqsnd: !0
    }, {
        name: "13_hmmpad",
        color: "9a1e25",
        uniqsnd: !0
    }, {
        name: "14_ploum",
        color: "9a1e25",
        uniqsnd: !0
    }, {
        name: "15_siffle",
        color: "9a1e25",
        uniqsnd: !1
    }, {
        name: "16_weywe",
        color: "191a26",
        uniqsnd: !0
    }, {
        name: "17_lilcrush",
        color: "191a26",
        uniqsnd: !0
    }, {
        name: "18_etienne",
        color: "191a26",
        uniqsnd: !0
    }, {
        name: "19_readygo",
        color: "191a26",
        uniqsnd: !1
    }, {
        name: "20_woah",
        color: "191a26",
        uniqsnd: !0
    } /**,{name:"21_pfb",color:"ee9a48",uniqsnd:!0}**/ ], this.bonusarray = [{
        name: "Blizz",
        src: "v2-b1-blizz-hb.mp4",
        code: "2,7,13,15,16",
        sound: "bonus-blizz",
        aspire: "aspire-blizz"
    }];
     for (var e = 0, n = this.animearray.length; e < n; e++) {
        var o = this.animearray[e].name;
        this.animearray[e].soundA = o + "_a", this.animearray[e].soundB = this.animearray[e].uniqsnd ? o + "_a" : o + "_b", this.animearray[e].anime = o + "-sprite.png", this.animearray[e].animeData = o + ".json";
    }
};
