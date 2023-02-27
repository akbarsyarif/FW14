// NOMOR 1
// DOM => digunakan untuk memanipulasi elemen HTML yang bertujuan untuk membuat halaman lebih interaktif

// NOMOR 2 & 3
const loginBtn = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  //   console.log(email, password);
  let emailA = "nakbarsyarif@gmail.com";
  let passwordA = "tugasweek4";
  let alert = document.getElementById("wrong-account");

  if (email.length === 0 && password.length === 0) {
    // console.log("email dan password harus diisi");
    document.getElementById("email").style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
    document.getElementById("password").style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
    alert.innerHTML = `email atau password harus diisi!`;
  } else if (email.match(/[@]/) === null) {
    document.getElementById("email").style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
    alert.innerHTML = `format email salah!`;
  } else if (email !== emailA || password !== passwordA) {
    // console.log("password salah");
    document.getElementById("email").style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
    document.getElementById("password").style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
    alert.innerHTML = `email atau password yang anda masukan salah!`;
  } else alert.innerHTML = `anda berhasil login`;
  // console.log("password benar");
};

const signupBtn = () => {
  let emailRegis = document.getElementById("email-regis").value;
  let passwordRegis = document.getElementById("password-regis").value;
  let phoneRegis = document.getElementById("phone-regis").value;
  let alertRegis = document.getElementById("alert-regis");
  let emailAlert = document.getElementById("email-alert");
  let passwordAlert = document.getElementById("password-alert");
  let phoneAlert = document.getElementById("phone-alert");
  // console.log(emailRegis, passwordRegis, phoneRegis)

  const isEmailregisValid = () => {
    if (emailRegis.length === 0) {
      document.getElementById("email-regis").style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
      emailAlert.innerHTML = `Email Harus Diisi!`;
    } else if (emailRegis.match(/[@]/) === null) {
      emailAlert.innerHTML = `Format Email Salah!`;
      document.getElementById("email-regis").style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
    } else {
      document.getElementById("email-regis").style.backgroundColor = "white";
      return true;
    }
  };

  const isPasswordValid = () => {
    if (passwordRegis.length === 0) {
      document.getElementById("password-regis").style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
      passwordAlert.innerHTML = `Password Harus Diisi!`;
    } else {
      document.getElementById("password-regis").style.backgroundColor = "white";
      return true;
    }
  };

  const isPhoneRegisValid = () => {
    if (phoneRegis.length === 0) {
      document.getElementById("phone-regis").style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
      phoneAlert.innerHTML = `Nomor Handphone Harus Diisi!`;
    } else if (phoneRegis.length !== 12 && phoneRegis.match(/[0-9]\g/) === null) {
      phoneAlert.innerHTML = `Masukan Nomor Handphone Yang Valid`;
      document.getElementById("phone-regis").style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
    } else {
      document.getElementById("phone-regis").style.backgroundColor = "white";
      return true;
    }
  };

  isEmailregisValid();
  isPasswordValid();
  isPhoneRegisValid();

  if (isEmailregisValid() && isPasswordValid() && isPhoneRegisValid()) {
    alertRegis.innerHTML = `Akun Berhasil dibuat <br> email: ${emailRegis} <br> Password: ${passwordRegis} <br> Phone: ${phoneRegis}`;
  }
};

const forgotBtn = () => {
  let userEmail = document.getElementById("user-email").value;
  // console.log(userEmail)
  let userA = "nakbarsyarif@gmail.com";
  let resetLink = document.getElementById("reset-link");

  if (userEmail.length === 0) {
    return (resetLink.innerHTML = `Masukan email anda`);
  }
  if (userEmail !== userA) {
    return (resetLink.innerHTML = `email yang anda masukan belum terdaftar!`);
  }
  return (resetLink.innerHTML = `reset link sudah dikirim ke ${userEmail}`);
};

// let profileEmail = document.getElementById("email").value;
// let profileMobile = document.getElementById("phone-number").value;
// let profileAdress = document.getElementById("adress").value;
// let emailBox = document.getElementById("email");
// let mobileBox = document.getElementById("phone-number");
// let adressBox = document.getElementById("adress");
// let contactBg = document.querySelector(".contact-wrap");

const profileBtn = () => {
  let profileEmail = document.getElementById("email").value;
  let profileMobile = document.getElementById("phone-number").value;
  let profileAdress = document.getElementById("adress").value;
  let emailBox = document.getElementById("email");
  let mobileBox = document.getElementById("phone-number");
  let adressBox = document.getElementById("adress");
  let contactBg = document.querySelector(".contact-wrap");
  emailBox.placeholder = `${profileEmail}`;
  newEmail = emailBox.value = ``;
  mobileBox.placeholder = `${profileMobile}`;
  newMobile = mobileBox.value = ``;
  adressBox.placeholder = `${profileAdress}`;
  newAdress = adressBox.value = ``;
  contactBg.style.backgroundColor = `#eaeaea`;
  emailBox.style.backgroundColor = `#eaeaea`;
  mobileBox.style.backgroundColor = "#eaeaea";
  adressBox.style.backgroundColor = "#eaeaea";
};

const saveBtn = () => {
  let emailBox = document.getElementById("email");
  let mobileBox = document.getElementById("phone-number");
  let adressBox = document.getElementById("adress");
  let contactBg = document.querySelector(".contact-wrap");

  let emailAlert = document.getElementById("email-alert");
  let adressAlert = document.getElementById("adress-alert");
  let mobileAlert = document.getElementById("mobile-alert");
  newEmail = document.getElementById("email").value;
  newAdress = document.getElementById("adress").value;
  newMobile = document.getElementById("phone-number").value;
  // console.log(profileEmail);
  const isNewEmailValid = () => {
    if (newEmail.length === 0) {
      emailBox.style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
      emailAlert.innerHTML = "Email Adress : <span>email harus diisi!</span>";
    } else if (newEmail.match(/[@]/) === null) {
      emailBox.style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
      emailAlert.innerHTML = "Email Adress : <span>format email salah!</span>";
    } else {
      emailBox.style.backgroundColor = "white";
      emailAlert.innerHTML = "Email Adress : ";
      return true;
    }
  };

  const isNewPhoneValid = () => {
    if (newMobile.length === 0) {
      mobileBox.style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
      mobileAlert.innerHTML = "Mobile Number : <span>Nomor Telepon harus diisi!</span>";
    } else if (newMobile.length !== 12 && newMobile.match(/[0-9]\g/) === null) {
      mobileBox.style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
      mobileAlert.innerHTML = "Mobile Number : <span>Masukan nomor valid!</span>";
    } else {
      mobileBox.style.backgroundColor = "white";
      mobileAlert.innerHTML = "Mobile Number : ";
      return true;
    }
  };

  const isNewAdressValid = () => {
    if (newAdress.length === 0) {
      adressBox.style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
      adressAlert.innerHTML = "Delivery Adress : <span>Alamat harus diisi!</span>";
    } else if (newAdress.length < 10) {
      adressBox.style.backgroundColor = "hsl(0, 100%, 70%, 40%)";
      adressAlert.innerHTML = "Delivery Adress : <span>Berikan alamat jelas!</span>";
    } else {
      adressBox.style.backgroundColor = "white";
      adressAlert.innerHTML = "Delivery Adress : ";
      return true;
    }
  };

  isNewEmailValid();
  isNewPhoneValid();
  isNewAdressValid();

  console.log(isNewEmailValid());
  console.log(isNewPhoneValid());
  console.log(isNewAdressValid());

  if (isNewEmailValid() && isNewPhoneValid() && isNewAdressValid()) {
    contactBg.style.backgroundColor = `white`;
  }
};

const cancelBtn = () => {
  location.reload();
};

// NOMOR 4
let productCard = document.querySelectorAll(".product-card");
let deleteOption = document.querySelectorAll("#delete-option");
let productCardCont = document.querySelectorAll(".product-card-cont");
let deleteBtn = document.querySelectorAll("#delete-btn");
let crossBtn = document.querySelectorAll("#cross-btn");

const select = () => {
  for (let i = 0; i < productCard.length; i++) {
    productCard[i].addEventListener("click", function () {
      productCard[i].style = "opacity: 50%";
      deleteBtn[i].className = `delete-cont`;
      deleteBtn[i].innerHTML = `<div><img src= "./images/trash.svg" alt="trash.svg" /></div>`;
      crossBtn[i].className = `cross-cont`;
      crossBtn[i].innerHTML = `<div class="cross">x</div>`;
    });
  }
};
select();

const back = () => {
  for (let a = 0; a < crossBtn.length; a++) {
    crossBtn[a].addEventListener("click", function () {
      productCard[a].style = "opacity: 100%";
      deleteBtn[a].className = ``;
      deleteBtn[a].innerHTML = ``;
      crossBtn[a].className = ``;
      crossBtn[a].innerHTML = ``;
    });
  }
};
back();

const deleteProduct = () => {
  for (let c = 0; c < crossBtn.length; c++) {
    deleteBtn[c].addEventListener("click", function () {
      productCardCont[c].remove();
    });
  }
};
deleteProduct();

// NOMOR 5
const toggleNavBar = () => {
  let nav = document.querySelector(".nav-bar");
  let profileWrap = document.querySelector(".profile-wrapper");

  nav.classList.toggle("active");
  profileWrap.classList.toggle("active");
};
