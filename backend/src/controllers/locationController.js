export const getLocationName = async (req, res) => {
    const { coords } = req.body;
    const { latitude, longitude } = coords;
  
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=en`
    );
    
    const data = await response.json();
    res.json(data);
  };
  