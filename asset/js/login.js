let users = [{
        sdt: '0362049407',
        pass: 'Abcd@1234',
        avatar: 'asset/img/login_register/avt_user.webp',
        status: 0
    },
    {
        sdt: '0345952196',
        pass: 'Abcd@1234',
        avatar: 'asset/img/Avatar_seller/Flying around the world-cuate.svg',
        status: 0
    }
];

localStorage.setItem('user', JSON.stringify(users));
let st = JSON.parse(localStorage.getItem('user'));

function Redirect(){
    //Thay thế link http bằng link của trang chủ
    location.replace("http://127.0.0.1:5500/home.html");
}

// localStorage.setItem('statusValue', '0')
localStorage.setItem('currentUser', '')
let i = 0;

function frmLoginValidate() {

    var frm_login = document.forms['frm-login'];
    var fg_sdt = frm_login.user_sdt;
    var fg_pw = frm_login.user_pass;

    alert(fg_sdt.value + " " + fg_pw.value);

    let i = 0;
    for (i; i < st.length; i++) {
        if (st[i].sdt === fg_sdt.value && st[i].pass === fg_pw.value) {
            alert('Đăng nhập thành công');
            document.write("Bạn sẽ được chuyển đến trang đăng nhập trong giây lát!");
            localStorage.setItem('currentUser', st[i].sdt);
            setTimeout(Redirect,3000);
            return true;
        }
    }
    alert('Sai số điện thoại hoặc mật khẩu');
    return false;
}