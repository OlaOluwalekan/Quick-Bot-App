console.log('Hello World!');

const textMsg = document.querySelector("textarea");
let txtFooter = document.querySelector('.footer');
let imgMic = document.querySelector('.mic');
let imgSend = document.querySelector('.send');
let imgCamera = document.querySelector('.camera');
let imgAttachment = document.querySelector('.attachment');
let mainChat = document.querySelector('.main-chat');

  //textMsg.style.cssText = `height: ${textMsg.scrollHeight}px; overflow-y: hidden`;
textMsg.addEventListener("input", function() {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
  
  if(textMsg.value == "") {
    imgMic.style.transform = 'scale(1)';
    imgSend.style.transform = 'scale(0)';
    cameraIn();
    attachmentSlidesBack();
  } else {
    imgMic.style.transform = 'scale(0)';
    imgSend.style.transform = 'scale(1)';
    cameraOut();
    attachmentSlidesToCamera();
  }
});

function cameraOut() {
  imgCamera.style.left = '300px';
  imgCamera.style.opacity = '0';
  imgCamera.style.transition = 'all 0.5s ease';
}

function cameraIn() {
  imgCamera.style.left = '272px';
  imgCamera.style.opacity = '1';
  imgCamera.style.transition = 'all 0.5s ease';
}

function attachmentSlidesToCamera() {
  imgAttachment.style.left = '272px';
  imgAttachment.style.transition = 'all 0.5s ease';
}

function attachmentSlidesBack() {
  imgAttachment.style.left = '240px';
  imgAttachment.style.transition = 'all 0.5s ease';
}

//var msgTimeHour = time.getHours();
//var msgTimeMin = time.getMinutes();

imgSend.addEventListener('click', () => {
  createUserMessage();
  
  textMsg.value = "";
  attachmentSlidesBack();
  cameraIn();
  imgMic.style.transform = 'scale(1)';
  imgSend.style.transform = 'scale(0)';
  textMsg.style.height = '20px';
  
  setTimeout(createBotMessage, 3000);
})

function createUserMessage() {
  var time = new Date();
  var msgTime = time.toLocaleTimeString();
  
  let userMessage = textMsg.value;
  const senderMsgDiv = document.createElement('div');
  const newMsgDiv = document.createElement('div');
  const newMsgPre = document.createElement('pre');
  const newMsgPara = document.createElement('p');
  const newMsgText = document.createTextNode(userMessage);
  const newMsgTime = document.createElement('p');
  const newMsgTimeText = document.createTextNode(msgTime);
  const msgTimeTickDiv = document.createElement('div');
  const msgTick = document.createElement('i');
  
  senderMsgDiv.appendChild(newMsgDiv);
  newMsgPara.appendChild(newMsgText);
  newMsgTime.appendChild(newMsgTimeText);
  newMsgPre.appendChild(newMsgPara);
  newMsgDiv.appendChild(newMsgPre);
  newMsgDiv.appendChild(msgTimeTickDiv);
  msgTimeTickDiv.appendChild(newMsgTime);
  msgTimeTickDiv.appendChild(msgTick);
  mainChat.appendChild(senderMsgDiv);
  
  senderMsgDiv.scrollIntoView();
  
  msgTimeTickDiv.classList.add('msg-time-tick-div');
  senderMsgDiv.classList.add('sender-msg-div');
  newMsgDiv.classList.add('sender-msg');
  newMsgTime.classList.add('sender-msg-time');
  msgTick.classList.add('fas');
  msgTick.classList.add('fa-lock');
}

function createBotMessage() {
  var time = new Date();
  var msgTime = time.toLocaleTimeString();
  
  const botMsgDiv = document.createElement('div');
    const newBotMsgDiv = document.createElement('div');
    const newBotMsgPre = document.createElement('pre');
    const newBotMsgPara = document.createElement('p');
    const newBotMsgText = document.createTextNode("QuickBot");
    const newBotMsgTime = document.createElement('p');
    const newBotMsgTimeText = document.createTextNode(msgTime);
    
    newBotMsgPara.appendChild(newBotMsgText);
    newBotMsgTime.appendChild(newBotMsgTimeText);
    newBotMsgPre.appendChild(newBotMsgPara);
    newBotMsgDiv.appendChild(newBotMsgPre);
    newBotMsgDiv.appendChild(newBotMsgTime);
    botMsgDiv.appendChild(newBotMsgDiv);
    mainChat.appendChild(botMsgDiv);
    
    botMsgDiv.scrollIntoView();
    
    botMsgDiv.classList.add('bot-msg-div');
    newBotMsgDiv.classList.add('receiver-msg');
    newBotMsgTime.classList.add('bot-msg-time');
}
