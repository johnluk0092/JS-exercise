function Holdap() {
    const question = confirm("Bạn thật sự muốn truy cập Website?");
    if (question) {
        top.location = "https://tuoitre.vn/";
    }
}
