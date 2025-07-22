function kiemtra() {
    const ht = document.dangky.txthoten.value;
    const na = document.dangky.nam.value;
    const email = document.dangky.em.value;
    const tdn = document.dangky.tdn.value;
    const mk = document.dangky.mk.value;
    const nlmk = document.dangky.nlmk.value;
    
    if (ht.length === 0) {
        alert("Vui lòng nhập họ tên");
        document.dangky.txthoten.focus();
        return false;
    }
    
    if (na.length === 0) {
        alert("Hãy điền năm sinh");
        document.dangky.nam.focus();
        return false;
    }
    
    if (isNaN(na)) {
        alert("Đây không phải là số");
        document.dangky.nam.value = "";
        document.dangky.nam.focus();
        return false;
    }
    
    const re = /\w+@\w+\.\w+/;
    
    if (email === "") {
        alert("Bạn chưa nhập email");
        document.dangky.em.value = "";
        document.dangky.em.focus();
        return false;
    } else if (!re.test(email)) {
        alert("Email không đúng định dạng!");
        document.dangky.em.focus();
        return false;
    }
    
    if (tdn.length === 0) {
        alert("Hãy điền tên đăng nhập");
        document.dangky.tdn.focus();
        return false;
    }
    
    if (mk.length === 0) {
        alert("Hãy nhập mật khẩu");
        document.dangky.mk.focus();
        return false;
    }
    
    if (nlmk.length === 0) {
        alert("Hãy nhập lại mật khẩu");
        document.dangky.nlmk.focus();
        return false;
    }
    
    if (mk !== nlmk) {
        alert("Mật khẩu và nhập lại mật khẩu không trùng nhau");
        document.dangky.nlmk.focus();
        return false;
    }
    
    alert("Đăng ký thành công! Chúc mừng bạn");
    return true;
}