import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import Overlay from 'ol/Overlay';
import TileLayer from 'ol/layer/Tile';
import ImageTile from 'ol/source/ImageTile';
import { fromLonLat } from 'ol/proj'; // Use fromLonLat for setting center from lat/lng
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import CircleStyle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';

// Removed unused imports: toStringHDMS, toLonLat (will handle popup content differently)

const MapWithOpenLayers = ({ founders }) => {
  const mapRef = useRef();
  const popupRef = useRef();
  const contentRef = useRef();
  const closerRef = useRef();
  // Removed unused state: const [map, setMap] = useState(null);
  // Removed unused state: const [overlay, setOverlay] = useState(null);

  // IMPORTANT: Replace with your actual MapTiler Cloud API key for production
  const key = 'NWeRMzcQFjvps5gnWrqy'; 
  const attributions = `
    <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>
    <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>
  `;

  useEffect(() => {
    if (!mapRef.current) return;

    const overlayInstance = new Overlay({
      element: popupRef.current,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });

    // Define a basic style for the markers (blue circle)
    const markerStyle = new Style({
      image: new CircleStyle({
        radius: 7,
        fill: new Fill({
          color: '#FF6347', // Use your theme color
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 2,
        }),
      }),
    });

    // Create features for each founder with coordinates
    const features = founders.filter(f => f.lat && f.lng).map(f => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([f.lng, f.lat])),
        // Store founder data in feature properties
        founderData: f
      });
      feature.setStyle(markerStyle); // Apply the style
      return feature;
    });

    const vectorSource = new VectorSource({
      features: features,
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const mapInstance = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({ // Base map layer
          source: new ImageTile({
            attributions,
            url: `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`,
            tileSize: 512,
          }),
        }),
        vectorLayer, // Layer for the markers
      ],
      overlays: [overlayInstance],
      view: new View({
        // Center map on Tanzania roughly
        center: fromLonLat([34.0, -6.0]),
        zoom: 6,
        extent: fromLonLat([29.0, -12.0]).concat(fromLonLat([41.0, -0.5])), // Optional: Restrict view to Tanzania bounds
      }),
    });

    mapInstance.on('singleclick', (evt) => {
      const feature = mapInstance.forEachFeatureAtPixel(evt.pixel, (feat) => feat);

      if (feature) {
        const coordinate = evt.coordinate;
        const founderData = feature.get('founderData');

        // Construct popup content with basic HTML
        let popupContent = `<strong>${founderData.name}</strong><br/>`;

        // Add location/address
        if (founderData.extra?.location || founderData.extra?.spaceName) {
            popupContent += `<div>${founderData.extra.location || founderData.extra.spaceName}</div>`;
        }

        // Add description (checking different fields)
        if (founderData.description || founderData.extra?.description || founderData.extra?.additionalComments) {
             // Limit description length for popup
            const description = founderData.description || founderData.extra.description || founderData.extra.additionalComments;
            const truncatedDescription = description.length > 150 ? description.substring(0, 150) + '...' : description;
            popupContent += `<div>Description: ${truncatedDescription}</div>`;
        }

        // Add contact info
        if (founderData.extra?.contactEmail) {
            popupContent += `<div>Email: ${founderData.extra.contactEmail}</div>`;
        }
        if (founderData.extra?.phoneNumber) {
            popupContent += `<div>Phone: ${founderData.extra.phoneNumber}</div>`;
        }

        contentRef.current.innerHTML = popupContent;
        overlayInstance.setPosition(coordinate);
      } else {
        // Clicked outside of a feature, hide popup
        overlayInstance.setPosition(undefined);
      }
    });

    closerRef.current.onclick = function () {
      overlayInstance.setPosition(undefined);
      closerRef.current.blur();
      return false;
    };

    // Clean up map on component unmount
    return () => { mapInstance.setTarget(undefined); };

  }, [founders, key, attributions]); // Added attributions to dependency array

  // Removed triggerPopup as it's not needed for clicking markers

  return (
    <div>
      {/* Removed the button as clicks on markers will trigger popups */}

      <div ref={mapRef} className="map" style={{ width: '100%', height: '400px' }}></div>

      <div ref={popupRef} className="ol-popup">
        <button ref={closerRef} className="ol-popup-closer" aria-label="Close Popup"></button>
        <div ref={contentRef}></div>
      </div>

      {/* Styles remain the same for the popup */} 
      <style>{`
        .ol-popup {
          position: absolute;
          background-color: white;
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
          padding: 15px;
          border-radius: 10px;
          border: 1px solid #cccccc;
          bottom: 12px;
          left: -50px;
          min-width: 280px;
        }
        .ol-popup:after, .ol-popup:before {
          top: 100%;
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
        }
        .ol-popup:after {
          border-top-color: white;
          border-width: 10px;
          left: 48px;
          margin-left: -10px;
        }
        .ol-popup:before {
          border-top-color: #cccccc;
          border-width: 11px;
          left: 48px;
          margin-left: -11px;
        }
        .ol-popup-closer {
          text-decoration: none;
          position: absolute;
          top: 2px;
          right: 8px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-size: 16px;
        }
        .ol-popup-closer:after {
          content: "✖";
        }

        /* Basic style for OpenLayers point markers */
        .ol-layer vector { /* Target the vector layer for styling */
             /* This might not be needed with the style object */
        }
      `}</style>
    </div>
  );
};

export default MapWithOpenLayers; 