import dynamic from 'next/dynamic';
import { fetchHome } from '@/service/homepage'
import React from 'react';

const MainComponent = dynamic(() => import('@/components/homepage/main'));
const NewsComponent = dynamic(() => import('@/components/homepage/news'));
const FreeRegistrationComponent = dynamic(() => import('@/components/homepage/registration'));

const HomePage = async () => {
    const homeDataList = await fetchHome();
    // console.log(homeDataList);
    // console.log(homeDataList.news);
    return (
        <>
            <MainComponent />
            <div className="flex flex-col items-center justify-center gap-8 py-12">
                <NewsComponent newsList={homeDataList.news} />
                <FreeRegistrationComponent />
            </div>
        </>

    ) 
    
}

export default HomePage;
