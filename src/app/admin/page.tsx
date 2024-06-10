import Admincontactview from '@/components/adminview/contact';
import React from 'react'
import { Adminhome } from '@/components/adminview';

const Adminview = () => {
    const menuItem = [
        {
            id: 'home',
            label: 'Home',
            component: <Adminhome/>
        }, {
            id: 'about',
            label: 'About'
        }, {
            id: 'experience',
            label: 'Experience'
        }, {
            id: 'education',
            label: 'Education'
        }, {
            id: 'project',
            label: 'Project'
        }, {
            id: 'contact',
            label: 'Contact',
            component: <Admincontactview/>
        }
    ]
    return (
        <>
            <div className='border-b border-gray-200'>
                <nav className='-mb-0.5 flex justify-center spcae-x-6' role='tablist'>
                    {menuItem?.map((value) => (
                        <button key={value?.id} type='button' className='p-4 font-bold text-xl text-black'>
                            {value?.label}
                        </button>
                    ))}
                </nav>
                <div className='mt-10'>
16 min
                </div>
            </div>
        </>
    )
}

export default Adminview;