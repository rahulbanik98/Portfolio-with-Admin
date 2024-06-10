import dynamic from 'next/dynamic'

const Adminhome = dynamic(() => import('../adminview/home/index'), {
    ssr: true,
    // loading: () => <p>Loading...</p>,
})


export { Adminhome, }