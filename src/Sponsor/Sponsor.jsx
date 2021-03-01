import React from 'react';
import './Sponsor.css';
function Sponsor() {
  const dataImage = [
    {
      id: 0,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1607545048851-380LAUSI4HCHBESJFCBG/ke17ZwdGBToddI8pDm48kLnwIKqW3C-yewgKRW5kgK1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzA5utG4nNvKqlNVTo56RukGltviLgRSbzuvil2avbtz4b4TOPe20kaKzyaYKs4_cI/Screen+Shot+2020-12-09+at+3.16.35+PM.png?format=500w',
    },
    {
      id: 1,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1601425308398-91HBT47IHQEQ4JQK8Y1G/ke17ZwdGBToddI8pDm48kK2vluSmlAvuVbCe5tGXzG1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwet8mZ40ZLLtWJVf4Z1r_hX39DvYBP9gJfG1dRWXVKdCRyeBRfXwKnnvxbvddYX2Y/image-asset+%281%29.png?format=500w',
    },
    {
      id: 2,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1601425398158-JONHZ45MWCXF9XYFV4YC/ke17ZwdGBToddI8pDm48kFTEgwhRQcX9r3XtU0e50sUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcW7uEhC96WQdj-SwE5EpM0lAopPba9ZX3O0oeNTVSRxdHAmtcci_6bmVLoSDQq_pb/Factor+2.jpg?format=500w',
    },
    {
      id: 3,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1606409364225-WUW6A7JOIY1GRYVJTVAT/ke17ZwdGBToddI8pDm48kGh2srPWk6KmLyX2HSQU_4VZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIGIFEV8HvElxW1l7vede3B7diDJZUpVfG6Cf7KqYr3jMKMshLAGzx4R3EDFOm1kBS/Toronto-Logo-jpeg.jpg?format=500w',
    },
    {
      id: 4,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1611067526584-2ZAPG0FZMR058BZCVMYN/ke17ZwdGBToddI8pDm48kJK1VRtp0_1-VjAC6KijVqUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dqIYoX38wwJRmhVgqNlewYUeHzIzHViBg6DRitbfgAiXCjLISwBs8eEdxAxTptZAUg/Music-Canada-logo-Black.png?format=500w',
    },
    {
      id: 5,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1601425306738-N482JXD9MIQRTD4WDHQG/ke17ZwdGBToddI8pDm48kO5kBq5EvnYhvlHvh_s2fYQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcE04P2H5_WZKqzMYXvRn7mpONid7dRsXqtcxb8vwpQz1DrXeGhZAR5FW91v6gZlf3/0.jpeg?format=500w',
    },
    {
      id: 6,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1601425459578-ANMBG5LE2BJSZ4ZIAM7P/ke17ZwdGBToddI8pDm48kDEDYh4Y0JGhR6hzuwcJ44gUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc_WPspi7-QrSvUImIB_kEyVcUzAzg2hRR40nlgLXfHkXjVKlDC5fpFActlTo5Uuex/Accenture-Logo.png?format=500w',
    },
    {
      id: 7,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1601425399814-DC470032LSETT8D4B2YV/ke17ZwdGBToddI8pDm48kG4rUIcCsE1B_Lw2R2WPyrJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzqAYSCWOLm9yVSVbMGzZXptdKl0LhLAhHro5dhi2gTQj3pYgEMX1RHH0IidxTv2lM/Economic-Club-of-Canada-logo.jpeg?format=500w',
    },
    {
      id: 8,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1601425459568-7ZVISMEMLJSAJHVV1WG5/ke17ZwdGBToddI8pDm48kAXALKN3x-TfMe96UD_RVr5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHAWVMUrWdBSYPEE2_zN73rcDYWwD3Ut1hbf_pGA02oPakebq3ZfLmgl1fzghfkGkM/Airbnb-rebrand-by-DesignStudio_dezeen_468_8.jpg?format=500w',
    },
    {
      id: 9,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1601425400442-LYFYGL9YQGZ6MD4D22PX/ke17ZwdGBToddI8pDm48kH2JRUPJrwZB9ajH2HkxETp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UW42dhVgJCY9FqAxGP7ARDqvreAuUjM2Ug2c8fXsaGDHpC969RuPXvt2ZwyzUXQf7Q/collision.png?format=500w',
    },
    {
      id: 10,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1601425312145-COGPU0C406KTXEOMYVV5/ke17ZwdGBToddI8pDm48kEEneuJKIwf7vhbG1TokU5wUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcq5QweqPptUKSPTzn-dxjjldvHzD0NVoKPkiqJXyrr6ZKP6fpzEvd9hyPF_xyGW0f/ykVlwLfuj-bMvogZtIvIYcaejfuMCbFY7AjVI29Y6bs.jpg?format=500w',
    },
    {
      id: 11,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1601425399911-84YPEU8DYIDYX62QPAVP/ke17ZwdGBToddI8pDm48kK3svdqmw2prsPjqjcUJoBVZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF7RmyLDtJHBhtEIo-X_TAce22u6AHy1bdwsvc5E9QtZgBFgVkekprcylsdk2tFZ18/steamwhistle_largelogo.jpg?format=500w',
    },
    {
      id: 12,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1606409366375-E6UHR58HWQHEX8HXLGRQ/ke17ZwdGBToddI8pDm48kPUOuHm6OGK-tVxipoD35g1Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHloc_YbBKUdr4kQey44jQf2V59o-XDdUI5TgQmyKtfYj-3CTWZQ124CTRPXn-dnvM/images.png?format=500w',
    },
    {
      id: 13,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1601425398033-AWXQKKVKDJ8L8OUFRS2Y/ke17ZwdGBToddI8pDm48kLxnK526YWAH1qleWz-y7AFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVH33scGBZjC30S7EYewNF5iKKwhonf2ThqWWOBkLKnojuqYeU1KwPvsAK7Tx5ND4WE/AlBDzQtT_400x400.jpg?format=500w',
    },
    {
      id: 14,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1611067678748-63AGWU0H50V8LPRVC0TI/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/TIO_LOGO-02.png?format=500w',
    },
  ];
  const renderLogo = () => {
    return dataImage.map((item, index) => {
      return (
        <div className="sponsor__logo__item" key={index}>
          <img src={item.link} alt={`img-${item.id}`} />
        </div>
      );
    });
  };
  return (
    <div className="sponsor">
      <h1>Trusted By</h1>
      <div className="sponsor__logo"> {renderLogo()}</div>
      <img
        className="bg-sponsor"
        src="https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1607624671011-YS375K7N1A34P28MSHL5/ke17ZwdGBToddI8pDm48kFMezAbNN99cc_VXBbFa22Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUzjtIVsR_h1JXbZWNMM__cdWBqzxC3r5WReWQYgZBXx6T7rG4wCiOgWBMcIofOR7g/Toronto+R%26B+Sounds+2.jpg?format=2500w"
        alt="bg-sponsor"
      />
      <div className="border-line" />
    </div>
  );
}

export default Sponsor;
