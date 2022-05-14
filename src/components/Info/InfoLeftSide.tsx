import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

type Props = {}

const InfoLeftSide = (props: Props) => {
  return (
    <div className="home-content-info">
    <div className="home-content-info__bio">
      <div className="home-content-info--text">
        <div className="home-content-info--text__title">
          <span>BIOGRAPHY</span>
        </div>
        <div className="home-content-info--text__content">
          <p>
            Work for money and design for love
            <br />
            I'm Phuongthao Trinh, newbie Frontend Developer based in Ha
            Dong, Ha Noi
          </p>
        </div>
      </div>
    </div>
    <div className="home-content-info__contact">
      <div className="home-content-info--text">
        <div className="home-content-info--text__title">
          <span>Contact</span>
        </div>
        <div className="home-content-info--text__content">
          <div className="d-flex align-items-center gap-1">
            <AiOutlineMail /> phuongthaotrinh2109@gmail.com
          </div>
          <div className="d-flex align-items-center gap-1">
            <AiOutlinePhone /> 0327072255
          </div>
        </div>
      </div>
    </div>
    <div className="home-content-info__service">
      <div className="home-content-info--text">
        <div className="home-content-info--text__title">
          <span>service</span>
        </div>
        <div className="home-content-info--text__content">
          <p>
            Website Design <br />
            Mobile Application Design
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InfoLeftSide