import Title from '../../common/Title';
import { useInView } from 'react-intersection-observer';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export default function News() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView();

  const url = '/http/';

  // 서버에서 아이템을 가지고 오는 함수
  const getItems = useCallback(async () => {
    setLoading(true);
    await axios.get(`${url}/page=${page}`).then((res) => {
      setItems((prevState) => [...prevState, res]);
    });
    setLoading(false);
  }, [page]);

  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems();
  }, [getItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);
  return (
    <>
      <Title text="뉴스 보기" />
      <div className="list">
        {items.map((item, idx) => {
          return items.length - 1 === idx ? (
            <div className="list-item" ref={ref}>
              {item.content}
            </div>
          ) : (
            <div className="list-item">{item.content}</div>
          );
        })}
      </div>
    </>
  );
}
