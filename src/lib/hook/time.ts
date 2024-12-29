const timeManipulation=(startTime:string,endTime:string)=>{
    const startTimeM = new Date(startTime);
    const endTimeM = new Date(endTime);
    return `${startTimeM?.getHours()}-${endTimeM?.getHours()} ${startTimeM?.getHours() > 12 ? "pm":"am"}`
}
export default timeManipulation