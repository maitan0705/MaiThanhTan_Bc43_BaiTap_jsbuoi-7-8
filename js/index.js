// thêm phần tử cho mãng
var arrayNumber = [];
tagID("#btn-them-so").onclick = function () {
  var num = Number(tagID("#themSoMang").value);
  arrayNumber.push(num);
  tagID("#text-mang").innerHTML = `[ ${arrayNumber} ]`;
};

// bài 1 tổng số dương
tagID("#btn-bai-1").onclick = function () {
  let tongSoDuong = 0;
  duyetMang(arrayNumber, function (item) {
    if (item > 0) {
      tongSoDuong += item;
    }
  });
  tagID("#tinhTong").innerHTML = tongSoDuong;
};
//bài 2 đếm số dương
tagID("#btn-bai-2").onclick = function () {
  let soDuong = 0;
  duyetMang(arrayNumber, function (item) {
    if (item > 0) {
      soDuong++;
    }
  });
  tagID("#soDuong").innerHTML = soDuong;
};

//bài 3 tìm số nhỏ nhất
tagID("#btn-bai-3").onclick = function () {
  let soNho = arrayNumber[0];
  duyetMang(arrayNumber, function (item) {
    if (item < soNho) {
      soNho = item;
    }
  });
  tagID("#soNho").innerHTML = soNho;
};
// bài 4
tagID("#btn-bai-4").onclick = function () {
  let soDuongNhoNhat = Infinity;
  duyetMang(arrayNumber, function (item) {
    if (item > 0 && item < soDuongNhoNhat) {
      soDuongNhoNhat = item;
    }
  });
  if (soDuongNhoNhat === Infinity) {
    soDuongNhoNhat = "Không có số dương trong mãng!";
  }
  tagID("#soDuongnho").innerHTML = soDuongNhoNhat;
};
//bai 5 tìm số chẳn cuối cùng
tagID("#btn-bai-5").onclick = function () {
  let soChanCuoiCung = null;
  duyetMang(arrayNumber, function (item) {
    if (item % 2 === 0) {
      soChanCuoiCung = item;
    }
  });
  if (soChanCuoiCung === null) {
    soChanCuoiCung = "Không có số chẳn!";
  }
  tagID("#soChanCuoiCung").innerHTML = soChanCuoiCung;
};
//bài 6 hoán đổi vị trí
tagID("#btn-bai-6").onclick = function () {
  function doiCho(arrayNumber, viTri1, viTri2) {
    let temp = arrayNumber[viTri1];
    arrayNumber[viTri1] = arrayNumber[viTri2];
    arrayNumber[viTri2] = temp;
  }
  let viTri1 = tagID("#viTri1").value;
  let viTri2 = tagID("#viTri2").value;
  doiCho(arrayNumber, viTri1, viTri2);
  tagID("#viTriHoanDoi").innerHTML = arrayNumber;
};
//bài 7
tagID("#btn-bai-7").onclick = function () {
  arrayNumber.sort(function (a, b) {
    return a - b;
  });
  tagID("#tangDan").innerHTML = arrayNumber;
};
//bai 8

tagID("#btn-bai-8").onclick = function () {
  var soNguenTo = "";
  for (let index = 0; index < arrayNumber.length; index++) {
    if (kiemTraSoNguyenTo(arrayNumber[index]) == true) {
      soNguenTo = arrayNumber[index];
      break;
    }
  }
  tagID("#soNguyenTo").innerHTML = soNguenTo;
};

//bài 9
tagID("#btn-bai-9").onclick = function () {
  var count = 0;
  duyetMang(arrayNumber, function (item) {
    if (Number.isInteger(item)) {
      count++;
    }
  });
  
  tagID("#soNguyen").innerHTML = count;
};

//bai 10 
tagID("#btn-bai-10").onclick = function () {
  var soAm = 0;
  var soDuong = 0;
  var ketQua ='';
  duyetMang(arrayNumber, function (item) {
  item < 0 ? soAm++ : soDuong ++;
  })
  if(soAm === soDuong){
 ketQua = `Số Âm =  Số Dương`
  }else{
    ketQua = soAm > soDuong ? `Số Âm > Số Dương` : `Số Âm < Số Dương`
  }

  tagID("#soSanh").innerHTML = ketQua;
}
