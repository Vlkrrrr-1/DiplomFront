import * as React from "react";
import ResCard from "./ResCard";

const NetworkCard = () => {
  const [downloadSpeed, setDownloadSpeed] = React.useState<number | null>(null);
  const [downloadSpeedInPerc, setDownloadSpeedInPerc] =
    React.useState<number>(0);
  const [loading, setLoading] = React.useState(false);

  const getColor = (load: number | undefined) => {
    if (load === undefined) return "gray";
    if (load >= 80) return "linear-gradient(135deg, #00c853, #b2ff59)";
    if (load >= 50) return "linear-gradient(135deg, #ffeb3b, #ff9800)";
    if (load >= 20) return "linear-gradient(135deg, #ff9800, #ff5722)";
    return "linear-gradient(135deg, #ff5722, #d32f2f)";
  };

  const testDownloadSpeed = async () => {
    const testFileUrl = `http://localhost:5000/resources/download?nocache=${Date.now()}`;
    setLoading(true);
    setDownloadSpeed(null);
    setDownloadSpeedInPerc(0);
    const startTime = Date.now();

    setTimeout(async () => {
      try {
        const response = await fetch(testFileUrl, {
          cache: "no-cache",
        });

        const contentLength = response.headers.get("Content-Length");
        const fileSizeInBytes = contentLength
          ? parseInt(contentLength)
          : 5 * 1024 * 1024;

        await response.blob();
        const endTime = Date.now();
        const duration = (endTime - startTime) / 1000;

        const bitsLoaded = fileSizeInBytes * 8;
        const speedMbps = bitsLoaded / duration / 1024 / 1024;
        const roundedSpeed = parseFloat(speedMbps.toFixed(2));
        setDownloadSpeed(roundedSpeed);
        setDownloadSpeedInPerc(
          parseFloat(((roundedSpeed / 120) * 100).toFixed(2))
        );
      } catch (error) {
        console.error("Failed to test download speed:", error);
        setDownloadSpeed(null);
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  React.useEffect(() => {
    testDownloadSpeed();
  }, []);

  return (
    <ResCard
      title="Network Activity"
      imageSrc="/images/resourceLogo/NetworkLogo.png"
      imageAlt="Network icon"
      usageValue={downloadSpeedInPerc}
      usageLabel={
        downloadSpeed !== null
          ? `Speed: ${downloadSpeed} Mbps`
          : "Download speed"
      }
      buttonText={loading ? "Checking..." : "Your current speed"}
      getColor={getColor}
    />
  );
};

export default NetworkCard;
