import { memo } from "react"

function Card({imageUrl,title,main,style,classNameBox,classNameTitle,classNameMain}:{imageUrl?:any,title?:string,main?:string,style?:any,classNameBox?:string,classNameTitle?:string,classNameMain?:string}) {
  return (
    <div 
      className={`w-72 flex flex-col justify-end group text-gray-50 cursor-pointer bg-[100%_100%] ${classNameBox}`}
      style={{
        ...style
      }
      }>
        <img src={imageUrl} className="w-full object-cover object-center"/>
        <div className=" absolute bottom-0">
          {
            title && 
              <div className="flex flex-col gap-3 p-6 bg-gradient-to-t from-gray-900 to-[transparent]">
                <div className={`font-semibold font-[Roboto] ${classNameTitle}`}>{title}</div>
                <div className={`leading-5 ${classNameMain}`}>{main}</div>
              </div>
          }
        </div>
    </div>
  )
}
export default memo(Card)