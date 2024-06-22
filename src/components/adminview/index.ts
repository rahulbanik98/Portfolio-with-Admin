import dynamic from 'next/dynamic'

const Adminhome = dynamic(() => import('../adminview/home/index'), {
    ssr: true,
    // loading: () => <p>Loading...</p>,
})

const Adminabout = dynamic(() => import('../adminview/about/index'), {
    ssr: true,
    // loading: () => <p>Loading...</p>,
})

const Admincontact = dynamic(() => import('../adminview/contact/index'), {
    ssr: true,
    // loading: () => <p>Loading...</p>,
})

const Admieducation = dynamic(() => import('../adminview/education/index'), {
    ssr: true,
    // loading: () => <p>Loading...</p>,
})

const Adminexperience = dynamic(() => import('../adminview/experience/index'), {
    ssr: true,
    // loading: () => <p>Loading...</p>,
})

const Adminporject = dynamic(() => import('../adminview/porject/index'), {
    ssr: true,
    // loading: () => <p>Loading...</p>,
})

export { Adminhome, Adminabout, Admincontact, Admieducation, Adminexperience, Adminporject}