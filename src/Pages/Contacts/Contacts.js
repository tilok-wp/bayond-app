import React from 'react';

const Contacts = () => {
    return (    
        <div className='container'>
         <div className='flex items-center justify-between'>
            <h1 className='text-4xl my-10'>Contact & Owners</h1>
            <div className='flex gap-4'>
            <button className="btn btn-wide btn-outline">Manage Membership</button>
            <button className="btn btn-wide bg-blue-400 text-black btn-outline">Add Contact</button>
            </div>
        </div>       
            <h1 className='text-2xl mb-10'>Primary Contact</h1>
            <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-4 mx-auto">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
            <tr className='mx-auto'>
                <th scope="col" class="px-10 py-6 mx-auto">
                    Name
                </th>
                <th scope="col" class="px-10 py-6">
                    Ownership
                </th>
                <th scope="col" class="px-10 py-6">
                    Preferred Contact
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-200 dark:border-gray-200">
                
                <td class="px-10 py-4">
                    <h1>Rich Sibert</h1>
                    <p>Portal Access</p>
                </td>
                <td class="px-10 py-4">
                    <h1 className='bg-black rounded-full w-fit p-2'>100%</h1>
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

export default Contacts;
