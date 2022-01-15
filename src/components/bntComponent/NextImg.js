import vector from '../../assets/Vector.png';
const NextImg = ({ checked, changeModeNext }) => {
  return (
    <>{checked && <img src={vector} onClick={changeModeNext} alt="vector" />}</>
  );
};

export default NextImg;
