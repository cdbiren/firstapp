import React from "react";




const Home = () => {
    const photos = "https://picsum.photos/201";
    const messiPics =
      "https://images.daznservices.com/di/library/GOAL/8c/ad/lionel-messi-antoine-griezmann-barcelona-granada-gfx_1h3njed0nkpi1l8p6hv5t6g1r.jpg?t=-327211690&amp;quality=60&amp;w=700";
      const psgImage = "https://t.resfu.com/media/img_news/agencia-efe_multimedia_4125931.multimedia.photos.16033972.file.jpg?size=776x&q=60";
      const chelseaNews =
    "https://images.daznservices.com/di/library/GOAL/b5/3/frank-lampard-chelsea-2021_1amh17yqjfs5c12jilydr6w3yj.jpg?t=557052183&amp;quality=60&amp;w=500";
  const transferNewsImg = "https://images.daznservices.com/di/library/GOAL/a9/c9/january-winners-and-losers-gfx_1fxebvfatzn2p1n9p6bm7g8igz.jpeg?t=1646674215&amp;quality=60&amp;w=500";

  const transferNewsImg2 = "https://images.daznservices.com/di/library/GOAL/79/29/ainsley-maitland-niles-arsenal-2020-21_1swn5agha9x26164gtia5zrj8q.jpg?t=1345148183&amp;quality=60&amp;w=500";
  const transferNewsImg3 = "https://images.daznservices.com/di/library/GOAL/bc/81/ozan-kabak-schalke-liverpool-badge_12uwu74bt341kyfj0d2rp353.jpeg?t=1638623863&amp;quality=60&amp;w=700";
  return (
    <>
      <h1 className="latest-news">Latest News</h1>
      <div className="main">
        <div className="container card-1">
          <div className="card_news">
            <div className="news_image">
              <img src={messiPics} alt="random" />
            </div>
            <div className="news_info">
              <a href="#">
                <p>
                  Messi's back! Barcelona captain smiling again after four goals
                  in two games
                </p>
              </a>
            </div>
          </div>
          <a href="#">
            <h1>FC Barcelona</h1>
          </a>
        </div>
        <div className=" container card-2">
          <div className="card_2 img">
            <img src={psgImage} alt="random" />
          </div>
          <div className="info">
            <p>
              'There is a lot to correct' - Pochettino wants more from PSG
              players after first win
            </p>
          </div>
          <h1>Paris Saint Germain</h1>
        </div>
        <div className="container card-3">
          <img src={chelseaNews} alt="random" />
          <p>Lampard: My future is out of my control</p>
          <h1>Chelsea</h1>
        </div>

        <div className="container card-4">
          <div className="newDiv">
            <div className="transfers">
              <h1>Transfers</h1>
              <img
                src="https://images.daznservices.com/di/library/GOAL/77/3/david-alaba-bayern-munich-2020-21_j701jl42ng01n27vd47nr0to.jpg?t=-1328168843&quality=100"
                alt="random"
              />
              <p>David Alaba linked to Real Madrid</p>
            </div>
            <div className="worldcup">
              <h1>World Cup</h1>
              <img
                src="https://static.bangkokpost.com/media/content/20190904/c1_3312819.jpg"
                alt="random"
              />
              <p>Qatar to host 2022 FIFA World Cup</p>
            </div>
            <div className="newNews">
              <h1>Latest News</h1>
              <img
                src="https://images.daznservices.com/di/library/GOAL/1e/84/phil-neville-inter-miami-badge-composite-2021_1o1kc7bhqlxkn1ha58s6gnz4u9.jpg?t=-424023754&quality=60&w=1200&h=800"
                alt="random"
              />
              <p>Inter Miami appoint Neville as new head coach</p>
            </div>
          </div>
        </div>
        <div className="container card-5">
          <div className="transfer-main-div">
          <img src={transferNewsImg} alt="random" />
          <p>Winners and losers from January transfer window</p>
            <h1>Transfers</h1>
            </div>
        </div>
        <div className="container card-6">
          <img src={transferNewsImg2} alt="random" />
          <p>Maitland Niles joins West Brom on loan from Arsenal</p>
          <h1>Arsenal</h1>
        </div>
        <div className="container card-7">
          <img src={transferNewsImg3} alt="random" />
          <p>Liverpool seal Ozan Kabak loan signing from Shalke</p>
          <h1>Liverpool</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
