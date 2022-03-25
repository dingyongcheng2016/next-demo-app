import type { NextPage } from 'next';
import Head from 'next/head';
import fetch from '@/utils/request';
import _ from 'lodash';
import styles from '@/pages/blog/styles.module.less';

const Blog: NextPage =(props: any)=>{
    const { posts=[] } = props;
    console.log('posts', posts)
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App Blog Page!</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h3>hello world Blog Page! </h3>
            <div className={styles.list}>
              {
                _.map(posts, item=>{
                  return(
                    <div className={styles.item} key={item.id}>
                      <h4 className={styles.title}>{item.title}</h4>
                      <div>{item.context}</div>
                    </div>
                  )
                })
              }
            </div>
        </div>
    )
};

export async function getStaticProps() {
     // 调用外部 API 获取博文列表
  const res = await fetch.get('https://www.fastmock.site/mock/44dbc9af5043091cd3b24974fff963b9/next/api/blog/list');
  const posts = res.data;
 
  // 通过返回 { props: { posts } } 对象，Blog 组件
  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      posts,
    },
  }
}

export default Blog;