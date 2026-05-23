import { useEffect, useState } from "react";

const Ticker = () => {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(
          `Latitude: ${position.coords.latitude.toFixed(2)} | Longitude: ${position.coords.longitude.toFixed(2)}`,
        );
      },
      () => {
        setLocation("Location access denied");
      },
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 w-full bg-black text-white py-2 overflow-hidden z-50">
      <marquee>
        Date: {time.toLocaleDateString()} | Time: {time.toLocaleTimeString()} |{" "}
        {location}
      </marquee>
    </div>
  );
};

export default Ticker;
