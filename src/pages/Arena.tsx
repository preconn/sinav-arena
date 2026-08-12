import {
  Users,
  Settings,
  Star,
  Swords,
  Sigma,
  Atom,
  FlaskConical,
  Leaf,
  BookOpen,
  Globe,
  Languages,
} from "lucide-react";

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

              <div className="ranking-progress">
                <div
                  className="ranking-progress-bar"
                  style={{ width: "85%" }}
                ></div>
              </div>

              <span className="ranking-xp-text">
                1280 / 1500 XP
              </span>

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

            <div className="league-stars">
              <Star className="star-filled" />
              <Star className="star-filled" />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>

            <div className="league-rank">
              PLATİN II
            </div>

            <div className="league-points">

              <span>Lig Puanı</span>

              <strong>2480</strong>

            </div>

            <div className="next-league">
              <span className="next-league-label">Sonraki Lig</span>
              <strong className="next-league-name">PLATİN I</strong>
              <span className="next-league-req">2520 Puan Gerekiyor</span>
              <div className="next-league-track">
                <div
                  className="next-league-bar"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

          </div>

        </div>


        {/* AKSİYON BUTONLARI */}

        <div className="arena-actions">

          <button className="action-btn secondary">
            <Users size={18} />
            Arkadaşınla Savaş
          </button>

          <button className="action-btn primary">
            <Swords size={18} />
            <span className="action-btn-text">
              <strong>RAKİP BUL</strong>
              <small>+15 XP Kazan</small>
            </span>
          </button>

          <button className="action-btn secondary">
            <Settings size={18} />
            Özel Arena Kur
          </button>

        </div>


        {/* KONU ARENALARI */}

        <div className="topic-arenas">

          <div className="topic-arenas-header">

            <h3>KONU ARENALARI</h3>

            <a href="#" className="view-all-link">
              Tümünü Gör →
            </a>

          </div>

          <div className="topic-grid-wrapper">

            {/* 1. SATIR */}
            <div className="topic-grid topic-grid-row1">

              {/* TÜRKÇE */}
              <div
                className="topic-card"
                style={{ backgroundImage: "url('/arena-turkce.png')" }}
              >
                <div className="topic-card-overlay">

                  <div className="topic-card-top">
                    <div className="topic-icon-badge red">
                      <Languages size={16} />
                    </div>
                    <div className="topic-card-title">
                      <strong>TÜRKÇE</strong>
                      <span>Kütüphane</span>
                    </div>
                  </div>

                  <div className="topic-card-bottom">
                    <div className="topic-card-info">
                      <span className="topic-level">Seviye 8</span>
                      <span className="topic-xp">1100 / 1300 XP</span>
                      <div className="topic-progress-track">
                        <div
                          className="topic-progress-bar red"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <Swords className="topic-card-sword" size={16} />
                  </div>

                </div>
              </div>

              {/* MATEMATİK */}
              <div
                className="topic-card"
                style={{ backgroundImage: "url('/arena-matematik.png')" }}
              >
                <div className="topic-card-overlay">

                  <div className="topic-card-top">
                    <div className="topic-icon-badge blue">
                      <Sigma size={16} />
                    </div>
                    <div className="topic-card-title">
                      <strong>MATEMATİK</strong>
                      <span>Kale</span>
                    </div>
                  </div>

                  <div className="topic-card-bottom">
                    <div className="topic-card-info">
                      <span className="topic-level">Seviye 7</span>
                      <span className="topic-xp">980 / 1200 XP</span>
                      <div className="topic-progress-track">
                        <div
                          className="topic-progress-bar blue"
                          style={{ width: "82%" }}
                        ></div>
                      </div>
                    </div>
                    <Swords className="topic-card-sword" size={16} />
                  </div>

                </div>
              </div>

              {/* FİZİK */}
              <div
                className="topic-card"
                style={{ backgroundImage: "url('/arena-fizik.png')" }}
              >
                <div className="topic-card-overlay">

                  <div className="topic-card-top">
                    <div className="topic-icon-badge cyan">
                      <Atom size={16} />
                    </div>
                    <div className="topic-card-title">
                      <strong>FİZİK</strong>
                      <span>Laboratuvar</span>
                    </div>
                  </div>

                  <div className="topic-card-bottom">
                    <div className="topic-card-info">
                      <span className="topic-level">Seviye 6</span>
                      <span className="topic-xp">870 / 1000 XP</span>
                      <div className="topic-progress-track">
                        <div
                          className="topic-progress-bar cyan"
                          style={{ width: "87%" }}
                        ></div>
                      </div>
                    </div>
                    <Swords className="topic-card-sword" size={16} />
                  </div>

                </div>
              </div>

              {/* BİYOLOJİ */}
              <div
                className="topic-card"
                style={{ backgroundImage: "url('/arena-biyoloji.png')" }}
              >
                <div className="topic-card-overlay">

                  <div className="topic-card-top">
                    <div className="topic-icon-badge green">
                      <Leaf size={16} />
                    </div>
                    <div className="topic-card-title">
                      <strong>BİYOLOJİ</strong>
                      <span>Orman</span>
                    </div>
                  </div>

                  <div className="topic-card-bottom">
                    <div className="topic-card-info">
                      <span className="topic-level">Seviye 5</span>
                      <span className="topic-xp">650 / 800 XP</span>
                      <div className="topic-progress-track">
                        <div
                          className="topic-progress-bar green"
                          style={{ width: "81%" }}
                        ></div>
                      </div>
                    </div>
                    <Swords className="topic-card-sword" size={16} />
                  </div>

                </div>
              </div>

            </div>

            {/* 2. SATIR */}
            <div className="topic-grid topic-grid-row2">

              {/* KİMYA */}
              <div
                className="topic-card"
                style={{ backgroundImage: "url('/arena-kimya.png')" }}
              >
                <div className="topic-card-overlay">

                  <div className="topic-card-top">
                    <div className="topic-icon-badge purple">
                      <FlaskConical size={16} />
                    </div>
                    <div className="topic-card-title">
                      <strong>KİMYA</strong>
                      <span>Reaktör</span>
                    </div>
                  </div>

                  <div className="topic-card-bottom">
                    <div className="topic-card-info">
                      <span className="topic-level">Seviye 6</span>
                      <span className="topic-xp">810 / 1000 XP</span>
                      <div className="topic-progress-track">
                        <div
                          className="topic-progress-bar purple"
                          style={{ width: "81%" }}
                        ></div>
                      </div>
                    </div>
                    <Swords className="topic-card-sword" size={16} />
                  </div>

                </div>
              </div>

              {/* TARİH */}
              <div
                className="topic-card"
                style={{ backgroundImage: "url('/arena-tarih.png')" }}
              >
                <div className="topic-card-overlay">

                  <div className="topic-card-top">
                    <div className="topic-icon-badge gold">
                      <BookOpen size={16} />
                    </div>
                    <div className="topic-card-title">
                      <strong>TARİH</strong>
                      <span>Saray</span>
                    </div>
                  </div>

                  <div className="topic-card-bottom">
                    <div className="topic-card-info">
                      <span className="topic-level">Seviye 5</span>
                      <span className="topic-xp">600 / 800 XP</span>
                      <div className="topic-progress-track">
                        <div
                          className="topic-progress-bar gold"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <Swords className="topic-card-sword" size={16} />
                  </div>

                </div>
              </div>

              {/* COĞRAFYA */}
              <div
                className="topic-card"
                style={{ backgroundImage: "url('/arena-cografya.png')" }}
              >
                <div className="topic-card-overlay">

                  <div className="topic-card-top">
                    <div className="topic-icon-badge teal">
                      <Globe size={16} />
                    </div>
                    <div className="topic-card-title">
                      <strong>COĞRAFYA</strong>
                      <span>Dünya</span>
                    </div>
                  </div>

                  <div className="topic-card-bottom">
                    <div className="topic-card-info">
                      <span className="topic-level">Seviye 4</span>
                      <span className="topic-xp">430 / 700 XP</span>
                      <div className="topic-progress-track">
                        <div
                          className="topic-progress-bar teal"
                          style={{ width: "61%" }}
                        ></div>
                      </div>
                    </div>
                    <Swords className="topic-card-sword" size={16} />
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Arena;