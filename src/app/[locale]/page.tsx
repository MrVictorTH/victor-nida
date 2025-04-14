// import {useTranslations} from 'next-intl';
// import {Link} from '@/i18n/navigation';
 
// export default function HomePage() {
//   const t = useTranslations('HomePage');
//   return (
//     <div>
//       <h1>{t('title')}</h1>
//       <Link href="/about">{t('about')}</Link>
//     </div>
//   );
// }
import dynamic from 'next/dynamic';
import { fetchHome } from '@/service/homepage'
import React from 'react';

const NewsComponent = dynamic(() => import('@/components/homepage/news'));

const HomePage = async () => {
    const homeDataList = await fetchHome();
    console.log(homeDataList);
    console.log(homeDataList.news);
    return <NewsComponent newsList={homeDataList.news} />
}

export default HomePage;
