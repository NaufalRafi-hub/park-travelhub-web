import Section1home from "../../../Components/Section1home/page";

export default function page (params) {
  const {...getParams} = params;
  console.log (getParams)
  return (
    <div className="mt-[87px] p-24">
        {/* <Section1home data={getParams} /> */}
       {/* <Section1home data={getParams} /> */}
    </div>
  )
}
