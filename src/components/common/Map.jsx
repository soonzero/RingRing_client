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

    @media screen and (max-width: 768px) {
      height: 300px;
    }
  }
`;

const Map = ({ address, setLocation }) => {
  const [map, setMap] = useState(null);

  //지도 그리기
  const LoadMap = (x, y) => {
    const container = document.getElementById('map');
    const options = { center: new kakao.maps.LatLng(x, y) };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  };

  //최초 위치
  useEffect(() => {
    LoadMap(33.450701, 126.570667);
  }, []);

  //주소값 변경될때마다 주소위치

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();
    if (address) {
      //address가 있을때만
      geocoder.addressSearch(address, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          setLocation({ x: result[0].x, y: result[0].y });
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">현재 위치</div>',
          });
          infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      });
    }
  }, [address]);

  return (
    <MapStyle>
      <div id="map"></div>
    </MapStyle>
  );
};

export default Map;
