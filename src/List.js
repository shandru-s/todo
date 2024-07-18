import React from "react";

const List = ({datas, setDatas}) => {

  const handledelete = (index) => {
    const update= datas.filter((data,ind) => ind!==index);
    setDatas(update);
  };

  const render = datas.map((data,index)=>{
    return(
        <tr key={index} className='text-xl'>
            <td>{index+1}</td>
            <td>{data}</td>
            <td><button className="btn btn-error" onClick={()=>handledelete(index)}>Delete</button></td>
        </tr>
    )
   })
return (
<div className="flex justify-center">
   <div className="overflow-x-auto">
<table className="table">
<tbody>
  {render}
</tbody>
</table>
</div>
</div>
)
}

export default List
