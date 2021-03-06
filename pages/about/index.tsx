import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@/pages/about/Styles.module.less';
import request from '@/utils/request';

const About: NextPage =(
    { data }:any
)=>{
    console.log('data', data)
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App Home About!</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>hello world About!</div>
            
            <div>{data.title}</div>
            <div>{data.context}</div>
        </div>
    )
};

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await request.get(`https://www.fastmock.site/mock/44dbc9af5043091cd3b24974fff963b9/next/api/blog/list`);
    const data = res.data;
  
    // Pass data to the page via props
    return { props: { data: data[1] } }
}

export default About;