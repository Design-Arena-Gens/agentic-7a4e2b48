import "./globals.css";

export default function Page() {
  return (
    <main className="main">
      <div className="card">
        <div className="header">
          <img src="/mark.svg" alt="LyftrAi mark" width={40} height={40} />
          <div>
            <div className="title"><span className="brand">LyftrAi</span> Logo</div>
            <div className="subtitle">Minimal, scalable SVG wordmark and icon.</div>
          </div>
        </div>

        <div className="logoWrap">
          <img src="/logo.svg" alt="LyftrAi logo" height={72} />
        </div>

        <div className="preview">
          <div className="previewItem">
            <div className="subtitle">Icon</div>
            <img src="/mark.svg" alt="LyftrAi icon" width={96} height={96} />
          </div>
          <div className="previewItem">
            <div className="subtitle">On dark</div>
            <div className="swatch" style={{background:"#0b0c10", padding:8}}>
              <img src="/logo.svg" alt="LyftrAi logo" height={28} />
            </div>
          </div>
          <div className="previewItem">
            <div className="subtitle">On light</div>
            <div className="swatch" style={{background:"#ffffff", padding:8}}>
              <img src="/logo.svg" alt="LyftrAi logo" height={28} />
            </div>
          </div>
        </div>

        <div className="btns">
          <a className="btn" href="/logo.svg" download>Download SVG (wordmark)</a>
          <a className="btn" href="/mark.svg" download>Download SVG (icon)</a>
        </div>
      </div>
    </main>
  );
}
