import type { NextPage } from 'next';
import Head from 'next/head';
import fetch from '@/utils/request';
import _ from 'lodash';

const Blog: NextPage =(props)=>{
    const { posts=[] } = props;
    console.log('posts', posts)
    return (
        <div>
            <Head>
                <title>Create Next App Blog Page!</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>hello world Blog Page! </div>
            <div>
              {
                _.map(_.get(posts, 'list', []), item=>{
                  return(
                    <div key={item.id}>
                      <div>{item.title}</div>
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
  const res = await fetch.get('http://localhost:3000/api/blog');
  const posts = await res.data;
 
  // 通过返回 { props: { posts } } 对象，Blog 组件
  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      posts,
    },
  }
}

export default Blog;