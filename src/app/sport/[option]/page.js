import Section1home from '../../Components/Section1home/page'
import Section1sports from '../../Components/Section1sports/page'
import Section2sports from '../../Components/Section2sports/page'
import Data from '../../Components/data';

export default function Sport({ params, searchParams }) {
    // const data = 
    const {option} = params;
    // console.log(option);
    // console.log(findIndex(option))
    const arrSports = [
        {
          option: 'golf',
          key: 0,
        },
        {
          option: 'yoga',
          key: 1,
        },
        {
          option: 'tennis',
          key: 2,
        },
        {
          option: 'cycling',
          key: 3,
        },
      ];
      const getID = arrSports.filter(
        (item) => item.option === option
        
      )[0].key;
      // console.log(getID)
    // const getID = Data.map((index,i) => ())

    return (
        <div>
            <Section1home data={Data[getID].data} />
            <Section1sports data={Data[getID].data}/>
            <Section2sports data={Data[getID].data}/>
        </div>
    )
}