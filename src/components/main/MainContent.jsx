import "./MainContent.css";
function MainContent() {
  return (
    <>
      <div className="main-body">
        <div className="container-header">
          <h1 className="new-headline">
            Jadi Programmer <br /> Profesional dalam 2 Bulan <br />
            dengan Jaminan Kerja
          </h1>
          <h5 className="body1-regular">
            {" "}
            Upgrade skills kamu dan raih karir impian di dunia teknologi
          </h5>
          <div className="container-row">
            <div className="card-row">
              <img
                src="https://www.coding.id/images/homepage/robot1.png"
                alt=""
              />
              <div className="card-right-section">
                <h5 className="headline-card">Fullstack Engineer Bootcamp</h5>
                <h6 className="body-card">
                  Jadi Profesional Fullstack Engineer dalam waktu 2,5 bulan
                  serta mendapa...
                </h6>
                <div className="container-button">
                  <button id="button-daftar">Daftar</button>
                  <button id="button-detail">Lihat Detail</button>
                </div>
              </div>
            </div>

            <div className="card-row">
              <img
                src="https://www.coding.id/images/homepage/robot1.png"
                alt=""
              />
              <div className="card-right-section">
                <h5 className="headline-card">
                  Quality Assurance Automation <br />
                  Engineer Bootcamp
                </h5>
                <h6 className="body-card">
                  Jadi Professional QA engineer dalam waktu 2 bulan seta bantuan
                  mendapa...
                </h6>
                <div className="container-button">
                  <button id="button-daftar">Daftar</button>
                  <button id="button-detail">Lihat Detail</button>
                </div>
              </div>
            </div>
          </div>
          <div className="reason-block">
            <div className="track">
              <div className="card-reason">
                <h4 className="headline-reason">
                  100% Jaminan Kerja atau Uang Kembali
                </h4>
                <p className="reason">
                  Proses penyaluran kerja cepat ke seluruh partner{" "}
                  <u>
                    Coding.id dengan garansi 100% uang kembali jika tidak dapat
                    pekerjaan
                  </u>{" "}
                </p>
              </div>
              <div className="card-reason">
                <h4 className="headline-reason">
                  Program Pembayaran Fleksibel
                </h4>
                <p className="reason">
                  Bebas pilih program pembayaran yang fleksibel sesuai dengan
                  pilihan kamu
                </p>
              </div>
              <div className="card-reason">
                <h4 className="headline-reason">Coding Bootcamp Berkualitas</h4>
                <p className="reason">
                  Bangun kemampuan programming kamu dengan dipandu oleh coach
                  praktisi yang berpengalaman. Materi pembelajaran terkini dan
                  relevan di dunia kerja.
                </p>
              </div>
              <div className="card-reason">
                <h4 className="headline-reason">
                  Bebas Akses ke Event & Course
                </h4>
                <p className="reason">
                  peserta dan alumni bisa menghadiri event dan mendapat akses ke
                  course di <u>Coding.ID</u> secara gratis
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bootcamp-block">
          <h2 className="bootcamp-headline">Kelas Bootcamp</h2>
          <h5 className="bootcamp-subheadline">
            Belajar intensif bersama coach berpengalaman
          </h5>
          <div className="bootcamp-card-row">
            <div className="bootcamp-card">
              <img
                className="bootcamp-card-img"
                src="https://storage.googleapis.com/codingid-storage-bucket/storage/uploads/course-thumbnail/16835430575.png"
                alt=""
              />
              <div className="bootcamp-card-container">
                <h6 className="bootcamp-card-overline">BOOTCAMP</h6>
                <h6 className="bootcamp-card-highlight">
                  Fulstack Engineer Bootcamp
                </h6>
                <div className="bootcamp-arrow">
                  <img
                    height={14.3}
                    width={24}
                    src="https://www.coding.id/extra-images/home/Group1.png"
                    alt=""
                  />
                  <h6>Advance Level</h6>
                </div>
                <h6 className="bootcamp-card-text">
                  Jadi Profesional Fullstack Engineer dala waktu 2,5 bulan serta
                  mendapat jaminan kerja setelah lulu..
                </h6>
              </div>
            </div>
            <div className="bootcamp-card">
              <img
                className="bootcamp-card-img"
                src="https://storage.googleapis.com/codingid-storage-bucket/storage/uploads/course-thumbnail/16835430856.png"
                alt=""
              />
              <div className="bootcamp-card-container">
                <h6 className="bootcamp-card-overline">BOOTCAMP</h6>
                <h6 className="bootcamp-card-highlight">
                  Quality Assurance Automation Engineer Bootcamp
                </h6>
                <div className="bootcamp-arrow">
                  <img
                    height={14.3}
                    width={24}
                    src="https://www.coding.id/extra-images/home/Group1.png"
                    alt=""
                  />
                  <h6>Advance Level</h6>
                </div>
                <h6 className="bootcamp-card-text">
                  Jadi Professional QA Engineer dalam waktu 2 bulan serta
                  bantuan mendapatkan pekerjaan!..
                </h6>
              </div>
            </div>
          </div>
          <button className="bootcamp-button">Lihat Semua Kelas</button>
        </div>
      </div>
    </>
  );
}

export default MainContent;
