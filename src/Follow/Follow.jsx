import React from 'react';
import './Follow.css';
function Follow() {
  const dataImageInstagram = [
    {
      id: 0,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1614184927346-BG0N1AV5T0Q0SOKVSR20/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 1,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1613658572404-M9C3QJEQ9ZS9AF70KVDW/ke17ZwdGBToddI8pDm48kOnCiz415dJCpuRwSlX2I7wUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcgWEkNBMu8fkv4fyzLlMyq58PkkJzF2bV3Mirh_AMMl99UY7a-K_jOSIi8QXLpOtY/image-asset.jpeg?format=750w',
    },
    {
      id: 2,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1612062716788-XMG8P12XLY843VV3X451/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 3,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1612022217838-MY4LC4CPKA7K1Q5S3QB2/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 4,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1611973418126-IHF81O4ICSZ0ZO4RPZFK/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 5,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1611943936980-8WBS72LP5F23UITYA4VP/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 6,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1611764340426-LB0996ADTUU2SKL93G45/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 7,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1611620293386-0DBF4Q6MU19MH7WZUZ5Y/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 8,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1611595214606-BS3MC1VS9E8N7HWWIHON/ke17ZwdGBToddI8pDm48kFWNavzyyk3HlleHYEOMsJNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIw7yBgmf38v2HWfcgsc3BA3WqqiJriAYGxnw5HVKWBfYKMshLAGzx4R3EDFOm1kBS/image-asset.jpeg?format=500w',
    },
    {
      id: 9,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1611246892204-TITND3PZZ663GFG9Z5Y1/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 10,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1611171470876-HWQTEPXZFO2YOZIZNOMR/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 11,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1611077219343-PR4YLGYYZL4W28TKRPJR/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 12,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1610984099877-1B0KUI8QZ625QDRWQ5AN/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 13,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1610751605516-YYG5J0QC2BVCT7TPYXWQ/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 14,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1610658489110-MH1MZ0U7FZPFUL4SH22R/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 15,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1610490815956-0H2LUS8XX7WILNM37K0X/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 16,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1610474816635-NRZK0G90JNQMWTKPO48J/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 17,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1610152053930-1XEIV97X3E7FXBTPXCKS/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 18,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1610067487446-MGWNIIO52JE7DF6LL6VY/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
    {
      id: 19,
      link:
        'https://images.squarespace-cdn.com/content/v1/5a591550f14aa14948c64386/1609978937264-9CU88ATR482BPFUFT7JU/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmzJBBHkqvGAibxByi2-xi1RoNc7vr9m3ozvkcMF-yMAseWsVVmXrIaQg6-A-MY58/image-asset.jpeg?format=500w',
    },
  ];
  const renderListImageInstagram = () => {
    return dataImageInstagram.map((item, index) => (
      <div className="image-instagram" key={index}>
        <img src={item.link} alt={`img-instagram${index}`} />
      </div>
    ));
  };
  return (
    <div className="follow">
      <h1>FOLLOW US ON INSTAGRAM</h1>
      <div className="follow__listImage">{renderListImageInstagram()}</div>
    </div>
  );
}

export default Follow;
