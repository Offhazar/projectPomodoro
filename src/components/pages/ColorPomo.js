import { useParams } from 'react-router-dom';

const ColorPomo = () => {
  const param = useParams();
  console.log(param);
  return <div>{param.pomos}</div>;
};

export default ColorPomo;
