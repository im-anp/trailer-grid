import React from 'react';
import ReactDOM from 'react-dom';

const Card = React.forwardRef(({ data },ref) => {
    const { EventCode, EventTitle, ratings, ShowDate } = data;
    const { wtsCount: totalCount, wtsPerc: percentage } = ratings;
  
    const [date, month, year] = ShowDate.split(" ");
    const updatedMonth = month.split(",")[0];
    //console.log(ref)
  
    return (
    <React.Fragment>
    <div className="trailerPosterWrapper">
      <img src={`https://in.bmscdn.com/events/moviecard/${EventCode}.jpg`} />
      <div className="deatilsWrapper flex-column justify-content-center ">
        <div
          className="releaseDateSection flex-row justify-content-end align-items-center"
        >
          <div
            className="date flex-column justify-content-center align-items-center"
          >
            <strong>{updatedMonth}</strong> {year}
          </div>
        </div>
        <div
          className="playBtn flex-1 flex-row justify-content-center align-items-center"
        >
          <a href="javascript:;"> <i className="far fa-play-circle"></i></a>
        </div>
        <div
          className="ratingSection flex-column align-items-end justify-content-center"
        >
          <div className="percentage flex-row">
            <i className="fas fa-thumbs-up"></i>
            <div>{percentage} %</div>
          </div>
          <div className="votes">
            {totalCount} votes
          </div>
        </div>
      </div>
    </div>
    <div className="trailerName">{EventTitle}</div>
    </React.Fragment>
    );
  });

  export default Card;