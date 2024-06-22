"use client"
import Admincontactview from '@/components/adminview/contact';
import React, { useState } from 'react'
import { Adminhome, Adminabout, Adminexperience, Admieducation, Adminporject, Admincontact } from '@/components/adminview';

interface menuItemTypes {
    id: string,
    label: string,
    component: React.ReactNode
}

const Adminview = () => {
    const [selectedtabs, setSelectedTabs] = useState<string>("home")
    const menuItem: menuItemTypes[] = [
        {
            id: 'home',
            label: 'Home',
            component: <Adminhome />
        }, {
            id: 'about',
            label: 'About',
            component: <Adminabout />
        }, {
            id: 'experience',
            label: 'Experience',
            component: <Adminexperience />
        }, {
            id: 'education',
            label: 'Education',
            component: <Admieducation />
        }, {
            id: 'project',
            label: 'Project',
            component: <Adminporject />
        }, {
            id: 'contact',
            label: 'Contact',
            component: <Admincontact />
        }
    ]

    const selectedNavTabsFunction = (id: string) => {
        setSelectedTabs(id)
    }

    return (
        <>
            <div className='border-b border-gray-200'>
                <nav className='-mb-0.5 flex justify-center spcae-x-6' role='tablist'>
                    {menuItem?.map((value) => (
                        <button key={value?.id} type='button' className='p-4 font-bold text-xl text-black' onClick={() => selectedNavTabsFunction(value.id)}>
                            {value?.label}
                        </button>
                    ))}
                </nav>
                <div className='mt-10'>
                    {
                        menuItem?.map(item => item?.id === selectedtabs && item?.component)
                    }
                </div>
            </div>
        </>
    )
}

export default Adminview;