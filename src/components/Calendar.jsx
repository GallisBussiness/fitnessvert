import { GoCalendar } from 'react-icons/go'

const Calendar = () => {
  return (
    <>
    <div classNameName="w-4/5 my-3 p-4 mx-auto" id="calendar">    
<div className="w-full relative overflow-x-scroll shadow-md sm:rounded-lg h-96">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
<tr>
<th scope="col" className="px-6 py-3 flex items-center justify-center">
 <GoCalendar className="w-10 h-10 text-green-700" />
</th>
<th scope="col" className="px-6 py-3">
LUNDI
</th>
<th scope="col" className="px-6 py-3">
MARDI
</th>
<th scope="col" className="px-6 py-3">
MERCREDI
</th>
<th scope="col" className="px-6 py-3">
JEUDI
</th>
<th scope="col" className="px-6 py-3">
VENDREDI
</th>
<th scope="col" className="px-6 py-3">
SAMEDI
</th>
<th scope="col" className="px-6 py-3">
DIMANCHE
</th>
</tr>
</thead>
<tbody>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
<th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
    09H:12H
</th>
<td className="px-6 py-4">

</td>
<td className="px-6 py-4">
  
</td>
<td className="px-6 py-4">

</td>
<td className="px-6 py-4">
   
</td>
<td className="px-6 py-4">
  
</td>
<td className="px-6 py-4">
 <div className="flex items-center justify-center flex-col">
    <div className="uppercase font-bold">Body PUMP</div>
<div>09:00 - 10:00</div>   
 </div>
</td>
<td className="px-6 py-4">
 <div className="flex items-center justify-center flex-col">
    <div className="uppercase font-bold">Core training
Stretching
Yoga</div>
<div>09:00 - 10:00</div>   
 </div>
</td>
</tr>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
<th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
15H:00H
</th>
<td className="px-6 py-4">
 <div className="flex items-center justify-center flex-col">
    <div className="uppercase font-bold">Aerobic</div>
<div>19:00 - 20:00</div>   
 </div>
 <div className="flex items-center justify-center flex-col">
    <div className="uppercase font-bold">Step</div>
<div>20:00 - 21:00</div>   
 </div>
</td>
<td className="px-6 py-4">
 <div className="flex items-center justify-center flex-col">
    <div className="uppercase font-bold">Spinning</div>
<div>19:00 - 20:00</div>   
 </div>
 <div className="flex items-center justify-center flex-col">
    <div className="uppercase font-bold">Body Pump</div>
<div>20:00 - 21:00</div>   
 </div>
</td>
<td className="px-6 py-4">
 <div className="flex items-center justify-center flex-col">
    <div className="uppercase font-bold">Body Attak</div>
<div>19:00 - 20:00</div>   
 </div>
 <div className="flex items-center justify-center flex-col">
    <div className="uppercase font-bold">Body Combat</div>
<div>20:00 - 21:00</div>   
 </div>
</td>
<td className="px-6 py-4">
 <div className="flex items-center justify-center flex-col">
    <div className="uppercase font-bold">Spinning</div>
<div>19:00 - 20:00</div>   
 </div>
 <div className="flex items-center justify-center flex-col">
    <div className="uppercase font-bold">Body Pump</div>
<div>20:00 - 21:00</div>   
 </div>
</td>
<td className="px-6 py-4">
 <div className="flex items-center justify-center flex-col">
    <div className="uppercase font-bold">Step</div>
<div>19:00 - 20:00</div>   
 </div>
 <div className="flex items-center justify-center flex-col">
    <div className="uppercase font-bold">Cx/circuit trainning</div>
<div>20:00 - 21:00</div>   
 </div>
</td>
<td className="px-6 py-4">

</td>
<td className="px-6 py-4">

</td>
</tr>
</tbody>
</table>
</div>

    </div>
    </>
  )
}

export default Calendar