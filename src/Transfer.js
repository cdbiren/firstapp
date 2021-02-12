import React from 'react';

const Transfer = () => {
    const transferNewsImg =
      "https://images.daznservices.com/di/library/GOAL/a9/c9/january-winners-and-losers-gfx_1fxebvfatzn2p1n9p6bm7g8igz.jpeg?t=1646674215&amp;quality=60&amp;w=500";
    return (
      <>
        <h1>Transfer Market is here</h1>
        <div className="container card-5">
          <img src={transferNewsImg} alt="random" />
          <p>Winners and losers from January transfer window</p>
          <h1>Transfers</h1>
        </div>
      </>
    );
};

export default Transfer;
