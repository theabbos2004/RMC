export default function Describtion({desc,boxClassName,lineClassName,descClassName}:{desc:string,boxClassName?:string,lineClassName?:string,descClassName?:string}) {
  return (
     <div className={`flex ${boxClassName}`}>
        <div className={`w-[0.4rem] h-full bg-[linear-gradient(transparent,white,transparent)] ${lineClassName}`}></div>
        <p className={`p-5 text-app-gray-1 ${descClassName}`}>
            {desc}
        </p>
    </div>
  )
}
