import vector from '../../assets/Vector.png';
const NextImg = ({ checked, changeModeNext }) => {
  return <>{checked && <img src={vector} onClick={changeModeNext} />}</>;
};

export default NextImg;
