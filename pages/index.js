import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div>
        <ul>
          {allPostsData.map(({ id, date, title }, index) => (
            <li key={index}>
              <a href={`/posts/${id}`}>
                <a>{title}</a>
              </a>
              <br />
              <span>{date}</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
