import React from "react";

function Portfolio() {
  const playButtonStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "0",
    height: "0",
    // borderTop: "25px solid transparent",
    borderBottom: "25px solid transparent",
    borderLeft: "40px solid rgba(255, 255, 255, 0.3)",
    cursor: "pointer",
    filter: "drop-shadow(0 0 10px rgba(0,0,0,0.5))",
    transition: "transform 0.2s, filter 0.2s, border-left-color 0.2s",
  };

  const imageContainerStyle = {
    position: "relative",
    width: "400px",
    height: "250px",
  };

  const handlePlayClick = (projectName) => {
    console.log(`Playing ${projectName}`);
  };

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        // Changed from #4d4d4d to #1a1a1a
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        paddingTop: "20%",
        paddingBottom: "20%",
        minHeight: "100vh",
      }}>
      {/* Projects Section */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}>
        {/* Project Card 1 */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.08)",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: `
            0 0 25px rgba(0, 0, 0, 0.3),
            0 0 15px rgba(0, 0, 0, 0.2),
            0 0 60px rgba(128, 128, 128, 0.4)
          `,
            backdropFilter: "blur(4px)",
          }}>
          <div style={imageContainerStyle}>
            <img
              src="./Home page.png"
              alt="Project 1"
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={playButtonStyle}
              onClick={() => handlePlayClick("Aaine Mein 1")}
              onMouseOver={(e) => {
                e.target.style.transform = "translate(-50%, -50%) scale(1.1)";
                e.target.style.filter = "drop-shadow(0 0 15px rgba(0,0,0,0.7))";
                e.target.style.borderLeftColor = "rgba(255, 255, 255, 0.5)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translate(-50%, -50%)";
                e.target.style.filter = "drop-shadow(0 0 10px rgba(0,0,0,0.5))";
                e.target.style.borderLeftColor = "rgba(255, 255, 255, 0.3)";
              }}
            />
          </div>
          <div style={{ marginLeft: "240px" }}>
            <h2
              style={{
                fontSize: "32px",
                fontFamily: "Khand",
                fontWeight: "450",
                marginBottom: "8px",
              }}>
              Aaine Mein | Short Film
            </h2>
            <p
              style={{
                marginLeft: "35px",
                fontFamily: "Khand",
                fontWeight: "450",
                fontSize: "20px",
              }}>
              100k+ views on YouTube
            </p>
          </div>
        </div>

        {/* Project Card 2 */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.08)",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: `
            0 0 25px rgba(0, 0, 0, 0.3),
            0 0 15px rgba(0, 0, 0, 0.2),
            0 0 60px rgba(128, 128, 128, 0.4)
          `,
            backdropFilter: "blur(4px)",
          }}>
          <div style={imageContainerStyle}>
            <img
              src="./images.png"
              alt="Project 2"
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={playButtonStyle}
              onClick={() => handlePlayClick("Aaine Mein 2")}
              onMouseOver={(e) => {
                e.target.style.transform = "translate(-50%, -50%) scale(1.1)";
                e.target.style.filter = "drop-shadow(0 0 15px rgba(0,0,0,0.7))";
                e.target.style.borderLeftColor = "rgba(255, 255, 255, 0.5)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translate(-50%, -50%)";
                e.target.style.filter = "drop-shadow(0 0 10px rgba(0,0,0,0.5))";
                e.target.style.borderLeftColor = "rgba(255, 255, 255, 0.3)";
              }}
            />
          </div>
          <div style={{ marginLeft: "240px" }}>
            <h2
              style={{
                fontSize: "32px",
                fontFamily: "Khand",
                fontWeight: "450",
                marginBottom: "8px",
              }}>
              Aaine Mein | Short Film
            </h2>
            <p
              style={{
                marginLeft: "35px",
                fontFamily: "Khand",
                fontWeight: "450",
                fontSize: "20px",
              }}>
              100k+ views on YouTube
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
