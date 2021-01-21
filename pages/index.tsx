import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { getProjectsData } from "../lib/projects";
import { GetStaticProps } from "next";

interface AllPostsData {
  readonly date: string;
  readonly title: string;
  readonly id: string;
}

interface AllProjectsData {
  readonly id: number;
  readonly name: string;
  readonly url: string;
  readonly github: { fe: string; be: string };
  readonly tech: string[];
}

export default function Home({
  allPostsData,
  allProjectsData,
}: {
  allPostsData: AllPostsData[];
  allProjectsData: AllProjectsData[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <a href="https://github.com/schang1146/">GitHub</a>
            {` | `}
            <a href="https://www.linkedin.com/in/sammy-chang/">LinkedIn</a>
          </div>
        </div>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allProjectsData ? (
            allProjectsData.map(({ id, name, url, github, tech }) => (
              <li className={utilStyles.listItem} key={id}>
                <a href={url}>{name}</a>
                {github.fe !== "" && (
                  <>
                    <br />
                    <small>
                      <a href={github.fe}>Frontend GitHub</a>
                    </small>
                  </>
                )}
                {github.be !== "" && (
                  <>
                    <br />
                    <small>
                      <a href={github.be}>Backend GitHub</a>
                    </small>
                  </>
                )}
              </li>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Get external data from the file system, API, DB, etc.
  const allPostsData = getSortedPostsData();
  const allProjectsData = getProjectsData();

  // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      allPostsData,
      allProjectsData,
    },
  };
};
