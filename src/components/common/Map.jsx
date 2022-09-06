/* global kakao */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const MapStyle = styled.div`
  width: 100%;
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;

  #map {
    width: 99%;
    height: 500px;
  }
`;
const Map = () => {
  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById('map');
    const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  return (
    <MapStyle>
      <div id="map"></div>
    </MapStyle>
  );
};

export default Map;
