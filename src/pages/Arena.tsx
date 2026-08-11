function Arena() {
  return (
    <section className="hero">

      <div className="arena-screen">

        <div className="arena-main">

          {/* SOL - SEZON */}

          <div className="season-card">

            <div className="season-label">
              ARENA SEZONU
            </div>

            <h2>SEZON 1</h2>

            <div className="season-divider"></div>

            <div className="time-label">
              Kalan Süre
            </div>

            <strong className="season-time">
              23g 14s 32d
            </strong>

            <div className="reward-title">
              Sezon Ödülü
            </div>

            <div className="reward-content">
              <span>
                Nexus
                <br />
                Şampiyon
                <br />
                Sandığı
              </span>
            </div>

            <button className="season-button">
              Sezonu İncele →
            </button>

          </div>


          {/* ORTA - ARENA */}

          <div
            className="arena-center"
            style={{
              backgroundImage:
                "url('/arka-plan-arena.png')",
            }}
          >

            <div className="ranking-info">

              <span>SIRALAMAN</span>

              <strong>#128</strong>

              <small>
                TÜRKİYE GENELİ
              </small>

            </div>

          </div>


          {/* SAĞ - LİG */}

          <div className="league-card">

            <div className="league-title">
              ARENA LİGİ
            </div>

            <div className="league-badge">
              II
            </div>

            <div className="league-rank">
              PLATİN II
            </div>

            <div className="league-points">

              <span>Lig Puanı</span>

              <strong>2480</strong>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Arena;