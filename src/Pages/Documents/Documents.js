import React from 'react';
import Navbar from '../Shared/Navbar';

const Documents = () => {
    return (
        <div className='container'>
            <div className='flex place-content-between items-center'>
            <h1 className='text-3xl my-10'>Documents</h1>
            <button className="btn btn-wide bg-blue-400 text-black btn-outline">Upload Files</button>
        </div>
        <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-4 mx-auto">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
            <tr className='mx-auto'>
                <th scope="col" class="px-10 py-6 mx-auto">
                    File
                </th>
                <th scope="col" class="px-10 py-6">
                    Year
                </th>
                <th scope="col" class="px-10 py-6">
                    Upload by
                </th>
                <th scope="col" class="px-10 py-6">
                    P
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-200 dark:border-gray-200">
                
                <td class="px-10 py-4">
                    
                </td>
                <td class="px-10 py-4">
                    
                </td>
                <td class="px-10 py-4">
                    No Data...
                </td>
                <td class="px-10 py-4">
                    
                </td>
            </tr>
            
        </tbody>
    </table>
</div>
        </div>
    );
}

export default Documents;
