/**
 * Bài tập tính tiền lương
 ** Đầu vào
  - Số ngày làm
  - Lương 1 ngày
 ** Xử lý
  - Tạo biến
    + soNgayLam: cho người dùng nhập vào số ngày làm
    + luongMotNgay: gán giá trị là 100000
    + luong = soNgayLam * luongMotNgay
** Đầu ra
  - Thông báo kết quả
 */

document.getElementById("btnTinhTienLuong").onclick = function () {
  const LUONG = 100000;
  var soNgayLam = document.getElementById("txtsoNgayLam").value;
  var tinhLuong = soNgayLam * LUONG;

  var currentFormat = new Intl.NumberFormat("vn-VN");

  var ketQua = "<div> Tiền lương nhân viên là: ";
  ketQua += currentFormat.format(tinhLuong);
  ketQua += "</div>";
  document.getElementById("footerTienLuong").innerHTML = ketQua;
};

/**
 * Bài tập tính giá trị trung bình
 ** Đầu vào
  - Nhập vào 5 số thực: a, b, c, d, e
 ** Xử lý
  - Tạo biến 
    + a, b, c, d, e: Cho người dùng nhập vào giá trị của từng biến
    + gttb = (a + b + c + d + e) / 5
 ** Đầu ra: Thông báo kết quả
 */
document.getElementById("btnTinhGTTB").onclick = function () {
  var soA = document.getElementById("txtsoA").value * 1;
  var soB = document.getElementById("txtsoB").value * 1;
  var soC = document.getElementById("txtsoC").value * 1;
  var soD = document.getElementById("txtsoD").value * 1;
  var soE = document.getElementById("txtsoE").value * 1;
  var gttb = (soA + soB + soC + soD + soE) / 5;
  var ketQua = "<div>Giá trị trung bình là: ";
  ketQua += gttb;
  ketQua += "</div>";
  document.getElementById("footerTinhGGTB").innerHTML = ketQua;
};

/**
 * Bài tập quy đổi tiền
 ** Đầu vào
  - Số tiền USD
 ** Xử lý
  - Tạo biến:
   + soTienUSD: Cho người dùng nhập vào số tiền USD
   + tyGia: gán giá trị = 23500
   + quyDoiVND = soTienUSD * tyGia
 ** Đầu ra: Thông báo kết quả 
 */

document.getElementById("btnQuyDoi").onclick = function () {
  const USD = 23500;
  var soTien = document.getElementById("txtsoTien").value;
  var quyDoi = soTien * USD;

  var currentFormat = new Intl.NumberFormat("vn-VN");
  var ketQua = "<div>Số tiền sau quy đổi VND là: ";
  ketQua += currentFormat.format(quyDoi);
  ketQua += "vnd</div>";
  document.getElementById("footerQuyDoiTien").innerHTML = ketQua;
};

/**
 * Bài tập tính dt, cv hình chữ nhật
 ** Đầu vào
  - Chiều dài
  - Chiều rộng
 ** Xử lý
  - Tạo biến
   + dai: Cho nhập chiều dài
   + rong: Cho nhập chiều rộng
   + dienTich = dai * rong
   + chuVi = (dai + rong) / 2
 ** Đầu ra: Thông báo kết quả
 */

document.getElementById("btnTinhHCN").onclick = function () {
  var chieuDai = document.getElementById("txtchieuDai").value * 1;
  var chieuRong = document.getElementById("txtchieuRong").value * 1;
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;

  var ketQua = "<div>";
  ketQua += "<p>Diện tích hình chữ nhật là: " + dienTich + "</p>";
  ketQua += "<p>Chu vi hình chữ nhật là: " + chuVi + "</p>";
  ketQua += "</div>";
  document.getElementById("footerTinhHCN").innerHTML = ketQua;
};

/**
 * Bài tập tính tổng 2 ký số
 ** Đầu vào
  - Một số có 2 chữ số
 ** Xử lý
  - Tạo biến
   + so: Nhập vào số có 2 chữ số
   + hangDonVi = so % 10
   + hangChuc = so / 10
   + tong = hangDonVi + hangChuc
 ** Đầu ra: Thông báo kết quả 
 */
document.getElementById("btnTongHaiKySo").onclick = function () {
  var so = document.getElementById("txtso").value;
  var hangDonVi = Math.floor(so % 10);
  var hangChuc = Math.floor(so / 10);
  var tongHaiKySo = hangChuc + hangDonVi;
  console.log(tongHaiKySo);

  var ketQua = "<div>Tổng 2 ký số là: " + tongHaiKySo + "</div>";
  document.getElementById("footerTinhTong").innerHTML = ketQua;
};
