/* 네비게이션 버튼 */

function introduction() {
  document.body.scrollTop = 730; // For Safari
  document.documentElement.scrollTop = 730; // For Chrome, Firefox, IE and Opera
}

function events() {
  console.log('hello');
  document.body.scrollTop = 1400; 
  document.documentElement.scrollTop = 1400; 
}

function trends() {
  document.body.scrollTop = 2490; 
  document.documentElement.scrollTop = 2490; 
}

/* 트렌드 이미지 */

/*첫번째*/

i = 0;

function Lbutton1() {
  i--;
  if (i <= -1) {
    i = 2;
  }
  album1(i);
}

function Rbutton1() {
  i++;
  if (i >= 3) {
    i = 0;
  }
  album1(i);
}

function album1(i) {
  a = ['3spider_1.png', '3spider_2.png', '3spider_3.png'];
  document.getElementById("img1").src = a[i];
}

/*두번째*/
o = 0;

function Lbutton2() {
  o--;
  if (o <= -1) {
    o = 1;
  }
  album2(o);
}

function Rbutton2() {
  o++;
  if (o >= 2) {
    o = 0;
  }
  album2(o);
}

function album2(o) {
  a = ['Vspider_1.png', 'Vspider_2.png'];
  document.getElementById("img2").src = a[o];
}

/*세번째*/
p = 0;

function Lbutton3() {
  p--;
  if (p <= -1) {
    p = 2;
  }
  album3(p);
}

function Rbutton3() {
  p++;
  if (p >= 3) {
    p = 0;
  }
  album3(p);
}

function album3(p) {
  a = ['Mspider_1.png', 'Mspider_2.png', 'Mspider_3.png'];
  document.getElementById("img3").src = a[p];
}

