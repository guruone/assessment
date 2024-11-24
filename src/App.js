import React, { useEffect, useState } from "react";
import SlideViewer from "./SlideViewer";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const querySnapshot = await getDocs(collection(db, "slides"));
      const slidesData = querySnapshot.docs.map((doc) => doc.data());
      setSlides(slidesData);
    };

    fetchSlides();
  }, []);

  return <SlideViewer slides={slides} />;
}

export default App;
