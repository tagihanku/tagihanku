import Home from './routes/Home'
import WhyUs from './routes/WhyUs'
import Features from './routes/Features'
import Pricing from './routes/Pricing'
import Demo from './routes/Demo'
import Faq from './routes/Faq'
import Contact from './routes/Contact'

export default [
    {
        path: '/',
        name: 'Beranda',
        component: Home,
    },
    {
        path: '/why-us',
        name: 'Mengapa Memilih Kami?',
        component: WhyUs,
    },
    {
        path: '/features',
        name: 'Fitur',
        component: Features,
    },
    {
        path: '/pricing',
        name: 'Harga',
        component: Pricing,
    },
    {
        path: '/demo',
        name: 'Demo',
        component: Demo,
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: Faq,
    },
    {
        path: '/contact',
        name: 'Kontak',
        component: Contact,
    },
]
