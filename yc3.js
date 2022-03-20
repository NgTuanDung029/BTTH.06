function Dem_gio() {
    const d = new Date();
    const Gio_hien_tai = d.getHours();
    const Phut_hien_tai = d.getMinutes();
    const Giay_hien_tai = d.getSeconds();

    const gio_1 = document.querySelector(".gio_1"),
         gio_2 = document.querySelector(".gio_2"),
         phut_1 = document.querySelector(".phut_1"),
         phut_2 = document.querySelector(".phut_2"),
         giay_1 = document.querySelector(".giay_1"),
         giay_2 = document.querySelector(".giay_2");

    if (Gio_hien_tai < 10) {
        gio_1.src = "BTTH_icons/00.gif";
        gio_2.src = `BTTH_icons/0${ Gio_hien_tai }.gif`;
    } else {
        gio_1.src = `BTTH_icons/0${ Math.floor(Gio_hien_tai / 10) }.gif`;
        gio_2.src = `BTTH_icons/0${ Gio_hien_tai % 10 }.gif`;
    }
    if (Phut_hien_tai < 10) {
        phut_1.src = "BTTH_icons/00.gif";
        phut_2.src = `BTTH_icons/0${ Phut_hien_tai }.gif`;
    } else {
        phut_1.src = `BTTH_icons/0${ Math.floor(Phut_hien_tai / 10) }.gif`;
        phut_2.src = `BTTH_icons/0${ Phut_hien_tai % 10 }.gif`;
    }

    if (Giay_hien_tai < 10) {
        giay_1.src = "BTTH_icons/00.gif";
        giay_2.src = `BTTH_icons/0${ Giay_hien_tai }.gif`;
    } else {
        giay_1.src = `BTTH_icons/0${ Math.floor(Giay_hien_tai / 10) }.gif`;
        giay_2.src = `BTTH_icons/0${ Giay_hien_tai % 10 }.gif`;
    }

    const text = document.getElementsByTagName("p");
    if (Gio_hien_tai < 12 && Gio_hien_tai>=0) {
        text[0].innerHTML = "Chào buổi sáng";
    } else if (Gio_hien_tai < 17 && Gio_hien_tai>=12) {
        text[0].innerHTML = "Chào buổi chiều";
    } else {
        text[0].innerHTML = "Chào buổi tối";
    }
}
setInterval(Dem_gio, 1000);