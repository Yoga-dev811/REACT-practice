function Table ({user,removeCharacter,editCharacter}){ //adding deconstructor wway {} 




    return(
        <>
        <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-bg-gray">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    email
                </th>
                <th scope="col" className="px-6 py-3">
                    role
                </th>
                <th scope="col" className="px-6 py-3">
                   Action
                </th>
            </tr>
        </thead>
        <tbody>


            {user.map((item,index)=>(//adding map function +()+key={index}

        
            <tr key={index}className="bg-white border-b  border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  { item.name}
                </th>
                <td className="px-6 py-4">
                    {item.email}
                </td>
                <td className="px-6 py-4">
                   { item.role}
                </td>
                <td className="px-6 py-4">
                   <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=>removeCharacter(index)}>Delete</button>
                   {/*  */}
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>editCharacter(index)}>Update</button>
                </td>
            </tr>
    
            ))}
        </tbody>
    </table>
</div>
        </>
    )
}

export default Table


