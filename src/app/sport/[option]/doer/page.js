import Section1Act from "../../../Components/Section1Act/page";
import Section2sDet from "../../../Components/Section2sDet/page";

import Data from '../../../Components/data';

export default function page (params) {
  const {...getParams} = params;
  console.log (getParams.params.option)
  const option = getParams.params.option;
  const arrSports2 = [
    {
      option: 'golf',
      key: 0,
    },
    {
      option: 'cycling',
      key: 1,
    },
    {
      option: 'yoga',
      key: 2,
    },
    {
      option: 'tennis',
      key: 3,
    },
  ];
  const getID2 = arrSports2.filter(
    (item) => item.option === option
    
  )[0].key;
  // console.log (getID2)
    // console.log (Data[getID2].data[0].doer)
  return (
    <div className="mt-[87px]">
        <Section1Act data={Data[getID2].data[0].doer}/>
        <Section2sDet data={Data[getID2].data[0].doer}/>
    </div>
  )
}
