import React from 'react'
import { GoKebabHorizontal } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";

function Tweet() {
  return (
    <div className="max-w-xl my-24 mx-auto p-3 border bg-white flex">
        <img className="h-12 w-12 rounded-full mr-3" src="img.png" alt="saad" />
        <div className="w-full">
        <div className="flex">
            <div className="flex">
             <strong className="text-gray-800 mr-1" >Saad Waheed Abbasi</strong> 
             <span className="text-gray-500 mr-1">@saad_waheed_abb</span>
             <span className="text-gray-500 mr-1">&middot;</span>
             <span className="text-gray-500 mr-1">Mar 18</span>
             </div>
             <div className="ml-auto"><GoKebabHorizontal /></div>
             
             </div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
        <div className="mt-2 flex justify-between">
            <div className="flex items-center text-gray-600">
                < FaRegComment className="mr-2" /> <span>20</span>
            </div>
            <div className="flex items-center text-gray-600">
                < FaRetweet className="mr-2" /> <span>17</span>
            </div>
            <div className="flex items-center text-gray-600">
                < AiOutlineHeart className="mr-2" /> <span>215</span>
            </div>
            <div className="flex items-center text-gray-600">
                < BsUpload className="mr-2" /> 
            </div>
            <div className="flex items-center text-gray-600">
                < FiBarChart2 className="mr-2" /> 
            </div>
        </div>
        </div>
    </div>
  )
}

export default Tweet