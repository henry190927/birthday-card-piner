import './App.css';
import React, { useState } from 'react';

import { Button } from "@material-ui/core";
import CakeIcon from '@material-ui/icons/Cake';

const navButtonStyle = {
  margin: '5px', 
  marginTop: '10px', 
  height: '40px',
}

const birthdayText = `
嘿且哥生日快樂拉！有鑒於以往
你都在我生日的時候送我小卡還
有餅乾，今年決定一定也要回報
點什麼xd，但是又遇到了這波疫
情的緣故所以只能用這樣子的方
式哈哈哈，希望你不介意！總之
這邊就是有發現你這一年來感覺
有過的越來越有自信，也恭喜你
順利考上語言所，繼續跟台大續
約哈哈哈，也很感謝上學期末的
時候你幫我加油打氣的部分，還
好事情也都算是順利落幕了～～
希望接下來的一年不管是在學業
或是任何事情上你都能夠留下令
自己滿意的足跡，也要告訴你說
即使如果有時候會覺得對自己有
不滿意的地方，可以感到難過，
但是也一定要記得在每個人身上
都有著所有完美與不完美的地方
才造就了每個人獨一無二的存在
，希望這樣子的想法可以讓你在
面對接下來的每一個困難時能夠
堅持住並順利度過每一個難關～
最後就是在這邊誠摯地祝福你：
生日快樂＆畢業快樂！
`
const birthdayText2 = `
喜德 2021/06/09
`

function App() {
  const [coverClose, setCoverClose] = useState(false);
  const [onClose, setOnClose] = useState("Open");

  return (
    <div className='App'>
      <div className='card'>
        <div className="navbar">
          <Button
            style={navButtonStyle}
            variant="outlined"
            startIcon={<CakeIcon />}
            onClick={() => {
              if(coverClose) {
                document.querySelector(".cover").classList.add("cover-close")
                document.querySelector(".content").classList.add("content-open")
                document.querySelector(".content-textBox-textcontent").classList.add("content-hide")
                setOnClose("Open")
              } else if(!coverClose) {
                document.querySelector(".cover").classList.toggle("cover-close")
                document.querySelector(".content").classList.toggle("content-open")
                document.querySelector(".content-textBox-textcontent").classList.toggle("content-hide")
                setOnClose("Close")
              }
              setCoverClose(!coverClose)
            }}
          >
            {onClose}
          </Button>
        </div>

        <div className="cover cover-close">
          <div className="cover-textBox">
            <span>Happy</span><br/>
            <span style={{marginLeft: '40px'}}>Birthday</span><br/>
            <span style={{marginLeft: '80px'}}>Piner</span><br/>
          </div>
        </div>

        <div className="content content-open">
          <div className="content-image"></div>
          <div className="content-textBox">
            <div className="content-textBox-textcontent content-hide">
              {birthdayText}
              <br/>
              {birthdayText2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
