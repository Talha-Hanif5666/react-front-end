import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './greeting.module.css';
import { greetingsRequest } from './greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, loading, error } = useSelector((state) => state.greeting);
  useEffect(() => {
    dispatch(greetingsRequest());
  }, [dispatch]);

  const handler = () => {
    dispatch(greetingsRequest());
  };
  return (
    <div className={style.container}>
      {loading && <div className={style.loader} />}
      {error && <p>Error!</p>}
      <h1>{!loading && greeting}</h1>
      {!loading && <button type="button" className={style.button1} onClick={handler}>Refresh</button>}
    </div>
  );
};

export default Greeting;
