import {
  MapContainer,
  TileLayer,
  Marker,
  ZoomControl,
  LayersControl,
} from "react-leaflet";
import L, { Map } from "leaflet";
import { RefObject, useRef } from "react";
import zoomIn from "../assets/images/zoom-in.png";
import zoomOut from "../assets/images/zoom-out.png";
import markerIcon from "../assets/images/marker.png";
import places from "@/data/places";

import "leaflet/dist/leaflet.css";

const resizeMap = (mapRef: RefObject<Map>) => {
  const resizeObserver = new ResizeObserver(() =>
    mapRef.current?.invalidateSize()
  );
  const container = document.getElementById("map-container");

  if (container) {
    resizeObserver.observe(container);
  }
};

const MapView = () => {
  const mapRef = useRef(null);

  return (
    <MapContainer
      id="map-container"
      ref={mapRef}
      center={[35.1895, 24.9747]}
      zoom={6}
      minZoom={10}
      maxZoom={16}
      scrollWheelZoom={false}
      zoomControl={false}
      className="h-full rounded-3xl shadow-xl"
      attributionControl={false}
      whenReady={() => resizeMap(mapRef)}
    >
      <LayersControl position="bottomleft">
        <LayersControl.BaseLayer name="Google Maps" checked={true}>
          <TileLayer
            url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            maxZoom={20}
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Openstreetmaps">
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Dark">
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            maxZoom={20}
          />
        </LayersControl.BaseLayer>
      </LayersControl>

      <ZoomControl
        position="bottomleft"
        zoomInText={`<img width="21" height="21" src='${zoomIn.src}' alt='zoom-in' />`}
        zoomOutText={`<img width="21" height="21" src='${zoomOut.src}' alt='zoom-out' />`}
      />

      {places.length > 0
        ? places.map((place, index) => {
            return (
              <Marker
                key={index}
                position={[place.lat, place.lng]}
                icon={
                  new L.Icon({
                    iconUrl: markerIcon.src,
                    iconRetinaUrl: markerIcon.src,
                    iconSize: [30, 40],
                  })
                }
              >
                {/* <ProjectPopup
                  thumbnail={project.attributes.thumbnail.data?.attributes.url}
                  title={project.attributes.title}
                  slug={project.attributes.slug}
                  status={project.attributes.status.data}
                /> */}
              </Marker>
            );
          })
        : null}
    </MapContainer>
  );
};

export default MapView;
