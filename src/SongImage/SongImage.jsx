import React from 'react';
import './SongImage.css';
function SongImage() {
  return (
    <section className="songImage">
      <div className="songImage__top">
        <div className="songImage__top__left">
          <h1>Songs for Seniors</h1>
          <h3>Virtual Concerts for long-term care homes across Canada.</h3>
          <button>More Info</button>
        </div>
        <div className="songImage__top__right">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1607547402097-VZ9EW5OJ2RGQQ75FZ7X7/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p52bY8kZn6Mpkp9xtPUVLhvLurswpbKwwoDWqBh58NLxQZMhB36LmtxTXHHtLwR3w/SFS_CREATIVES-08.png"
            alt="image-1"
          />
        </div>
      </div>
      <div className="songImage__bottom">
        <div className="songImage__bottom__left">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1606321363647-NT6GZW1WKOV64AZXYEQH/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5btdZx37rH5fuWDtePBPDaHF5LxdCVHkNEqSYPsUQCdT/dont-start-a-fire-cover-4000x4000-web-1601650819.jpg?format=1000w"
            alt="img-2"
          />
        </div>
        <div className="songImage__bottom__right">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1601401369341-TR6EHHZ2DPE43P299KUT/ke17ZwdGBToddI8pDm48kEQYJ-ZSGroJo3elGuEXYdF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT_jkhx3bsm57vl4ZUeXAkJH1xuk-qZF12sEwU8HOh6YQI1NuyNaxRHMfXcqRneseQ/rnb%2Bunder%2Bthe%2Bstars%2B-%2Bjune%2B29th%252C%2B2019%2B%252816%2Bof%2B48%2529.jpg?format=1000w"
            alt="img-2"
          />
        </div>
      </div>
    </section>
  );
}

export default SongImage;
