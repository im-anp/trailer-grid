import React from 'react';


const Video = ({ data }) => {
    console.log(data.TrailerURL)
    if(data.TrailerURL){
    const { TrailerURL, EventCode, EventTitle } = data
    const Yurl= TrailerURL.replace("/watch?v=", "/embed/");
    return (
    <div className="flex-row video-section my-vid">
    <div className="flex-row video-wrapper">
        <div className="iframe-section flex-3">
          <iframe frameborder="0" src={Yurl}></iframe>
        </div>
        <div className="video-detail-panel flex-column flex-2">
          <h3>{EventTitle}</h3>
          <div className="flex-row trailer-details flex-1 align-items-start">
            <div className="flex-row align-items-center ">
              <div>
                <i className="fas fa-thumbs-up"></i>
              </div>
              <div className="flex-column">
                <div className="percent">100%</div>
                <div className="votes">100 votes</div>
              </div>
            </div>
            <div className="flex-row align-items-center">
              <div>
                <i className="far fa-calendar-alt"></i>
              </div>
              <div className="flex-column">
                <div className="percent">100%</div>
                <div className="votes">00 votes</div>
              </div>
            </div>
          </div>
          <div className="flex-row align-items-center">
            <div className="feelings flex-1 flex-column align-items-center">
              <button className="circle">
                <i className="fas fa-thumbs-up"></i>
              </button>
              <span>WILL WATCH</span>
              <span className="count">(100)</span>
            </div>
            <div className="feelings flex-1 flex-column align-items-center">
              <button className="circle">
                <i className="fas fa-thumbs-up"></i>
              </button>
              <span>WILL WATCH</span>
              <span className="count">(100)</span>
            </div>
            <div className="feelings flex-1 flex-column align-items-center">
              <button className="circle">
                <i className="fas fa-thumbs-up"></i>
              </button>
              <span>WILL WATCH</span>
              <span className="count">(909090)</span>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    );
    }
    return <div class="vid"></div>
  };

  export default Video;