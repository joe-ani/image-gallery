const imageContainer1 = document.querySelector(".image1-cont");
const imageContainer2 = document.querySelector(".image2-cont");
const imageContainer3 = document.querySelector(".image3-cont");
const imageContainer4 = document.querySelector(".image4-cont");
const imageContainer5 = document.querySelector(".image5-cont");
const openBtn1 = document.querySelector(".open-btn1");
const openBtn2 = document.querySelector(".open-btn2");
const openBtn3 = document.querySelector(".open-btn3");
const openBtn4 = document.querySelector(".open-btn4");
const openBtn5 = document.querySelector(".open-btn5");

let isSet1 = true;
let isSet2 = true;
let isSet3 = true;
let isSet4 = true;
let isSet5 = true;
const openImg1 = () => {
  if (isSet1) {
    isSet1 = false;
    imageContainer1.style.width = "500px";
    openBtn1.style.transform = "translateX(15px) translateY(-25px)";
    // imageContainer.style.transform = "rotate(40deg)";
    imageContainer2.style.width = "80px";
    openBtn2.style.transform = "translateX(0px) translateY(0px)";
    imageContainer3.style.width = "80px";
    openBtn3.style.transform = "translateX(0px) translateY(0px)";
    imageContainer4.style.width = "80px";
    openBtn4.style.transform = "translateX(0px) translateY(0px)";
    imageContainer5.style.width = "80px";
    openBtn5.style.transform = "translateX(0px) translateY(0px)";
    isSet2 = true;
    isSet3 = true;
    isSet4 = true;
    isSet5 = true;
  } else {
    isSet1 = true;
    imageContainer1.style.width = "80px";
    openBtn1.style.transform = "translateX(0px) translateY(0px)";
  }
};

const openImg2 = () => {
  if (isSet2) {
    isSet2 = false;
    imageContainer2.style.width = "500px";
    openBtn2.style.transform = "translateX(15px) translateY(-25px)";
    // imageContainer.style.transform = "rotate(40deg)";
    imageContainer1.style.width = "80px";
    openBtn1.style.transform = "translateX(0px) translateY(0px)";
    imageContainer3.style.width = "80px";
    openBtn3.style.transform = "translateX(0px) translateY(0px)";
    imageContainer4.style.width = "80px";
    openBtn4.style.transform = "translateX(0px) translateY(0px)";
    imageContainer5.style.width = "80px";
    openBtn5.style.transform = "translateX(0px) translateY(0px)";
    isSet1 = true;
    isSet3 = true;
    isSet4 = true;
    isSet5 = true;
  } else {
    isSet2 = true;
    imageContainer2.style.width = "80px";
    openBtn2.style.transform = "translateX(0px) translateY(0px)";
  }
};

const openImg3 = () => {
  if (isSet3) {
    isSet3 = false;
    imageContainer3.style.width = "500px";
    openBtn3.style.transform = "translateX(15px) translateY(-25px)";
    // imageContainer.style.transform = "rotate(40deg)";
    imageContainer2.style.width = "80px";
    openBtn2.style.transform = "translateX(0px) translateY(0px)";
    imageContainer1.style.width = "80px";
    openBtn1.style.transform = "translateX(0px) translateY(0px)";
    imageContainer4.style.width = "80px";
    openBtn4.style.transform = "translateX(0px) translateY(0px)";
    imageContainer5.style.width = "80px";
    openBtn5.style.transform = "translateX(0px) translateY(0px)";
    isSet2 = true;
    isSet1 = true;
    isSet4 = true;
    isSet5 = true;
  } else {
    isSet3 = true;
    imageContainer3.style.width = "80px";
    openBtn3.style.transform = "translateX(0px) translateY(0px)";
  }
};

const openImg4 = () => {
  if (isSet4) {
    isSet4 = false;
    imageContainer4.style.width = "500px";
    openBtn4.style.transform = "translateX(15px) translateY(-25px)";
    // imageContainer.style.transform = "rotate(40deg)";
    imageContainer2.style.width = "80px";
    openBtn2.style.transform = "translateX(0px) translateY(0px)";
    imageContainer3.style.width = "80px";
    openBtn3.style.transform = "translateX(0px) translateY(0px)";
    imageContainer1.style.width = "80px";
    openBtn1.style.transform = "translateX(0px) translateY(0px)";
    imageContainer5.style.width = "80px";
    openBtn5.style.transform = "translateX(0px) translateY(0px)";
    isSet2 = true;
    isSet3 = true;
    isSet1 = true;
    isSet5 = true;
  } else {
    isSet4 = true;
    imageContainer4.style.width = "80px";
    openBtn4.style.transform = "translateX(0px) translateY(0px)";
  }
};

const openImg5 = () => {
  if (isSet5) {
    isSet5 = false;
    imageContainer5.style.width = "500px";
    openBtn5.style.transform = "translateX(15px) translateY(-25px)";
    // imageContainer.style.transform = "rotate(40deg)";
    imageContainer2.style.width = "80px";
    openBtn2.style.transform = "translateX(0px) translateY(0px)";
    imageContainer3.style.width = "80px";
    openBtn3.style.transform = "translateX(0px) translateY(0px)";
    imageContainer4.style.width = "80px";
    openBtn4.style.transform = "translateX(0px) translateY(0px)";
    imageContainer1.style.width = "80px";
    openBtn1.style.transform = "translateX(0px) translateY(0px)";
    isSet2 = true;
    isSet3 = true;
    isSet4 = true;
    isSet1 = true;
  } else {
    isSet5 = true;
    imageContainer5.style.width = "80px";
    openBtn5.style.transform = "translateX(0px) translateY(0px)";
  }
};
