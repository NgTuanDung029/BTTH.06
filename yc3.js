var getTime = document.querySelector('#getHello')
function Dong_ho() {
    var d = new Date();
    var Gio_hien_tai = d.getHours();
    var Phut_hien_tai = d.getMinutes();
    var Giay_hien_tai = d.getSeconds();
    
    if (Gio_hien_tai < 10) {
        const gio_1 = document.querySelector(".gio_1");
        const gio_2 = document.querySelector(".gio_2");
        gio_1.src = "BTTH_icons/00.gif";
        gio_2.src = BTTH_icons / 0${ Gio_hien_tai }.gif;
    } else {
        const gio_1 = document.querySelector(".gio_1");
        const gio_2 = document.querySelector(".gio_2");
        gio_1.src = BTTH_icons / 0${ Math.floor(Gio_hien_tai / 10) }.gif;
        gio_2.src = BTTH_icons / 0${ Giay_hien_tai % 10 }.gif;
    }
    if (minutes < 10) {
        const phut_1 = document.querySelector(".phut_1");
        const phut_2 = document.querySelector(".phut_2");
        phut_1.src = "BTTH_icons/00.gif";
        phut_2.src = BTTH_icons / 0${ Phut_hien_tai }.gif;
    } else {
        const phut_1 = document.querySelector(".phut_1");
        const phut_2 = document.querySelector(".phut_2");
        phut_1.src = BTTH_icons / 0${ Math.floor(phut / 10) }.gif;
        phut_2.src = BTTH_icons / 0${ phut % 10 }.gif;
    }

    if (Giay_hien_tai < 10) {
        const giay_1 = document.querySelector(".giay_1");
        const giay_2 = document.querySelector(".second_2");
        giay_1.src = "BTTH_icons/00.gif";
        giay_2.src = BTTH_icons / 0${ seconds }.gif;
    } else {
        const giay_1 = document.querySelector(".giay_1");
        const giay_2 = document.querySelector(".giay_2");
        giay_1.src = BTTH_icons / 0${ Math.floor(giay / 10) }.gif;
        giay_2.src = BTTH_icons / 0${ Giay_hien_tai % 10 }.gif;
    }

    const text = document.getElementsByTagName("p");
    if (Gio_hien_tai < 12) {
        text[0].innerHTML = "Chào buổi sáng";
    } else if (Gio_hien_tai < 17) {
        text[0].innerHTML = "Chào buổi chiều";
    } else {
        text[0].innerHTML = "Chào buổi tối";
    }
}
       
    var Dem_gio = setInterval(Dong_ho, 1000);

