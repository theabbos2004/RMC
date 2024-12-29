import { ProtsentType } from "../../types";

export default function Protsent({data,boxClassName,numberClassName,protsentClassName,titleClassName}:{data:ProtsentType,boxClassName?:string,numberClassName?:string,protsentClassName?:string,titleClassName?:string}) {
  return (
    <div className={`flex flex-col ${boxClassName}`}>
        <div className="flex items-end font-[Roboto] text-app-orange">
            <h1 className={`text-5xl ${numberClassName}`}>{data?.number}</h1>
            <h1 className={`text-3xl ${protsentClassName}`}>%</h1>
        </div>
        <div className={`text-app-gray-1 ${titleClassName}`}>
            {data?.title}
        </div>
    </div>
  )
}
