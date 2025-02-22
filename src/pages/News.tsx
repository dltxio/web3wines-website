import React, { useLayoutEffect } from "react";
import { PageLayout } from "../components";

const posts = [
  {
    id: 1,
    title: "News #1",
    href: "/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Aug 16, 2023",
    datetime: "2023-08-16",
    category: { title: "Blockchain", href: "/" },
    author: {
      name: "ABC",
      role: "Co-Founder / CEO",
      href: "#",
      imageUrl: "https://www.dltx.io/images/icons/coding.png"
    }
  },
  {
    id: 2,
    title: "News #2",
    href: "/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Aug 16, 2023",
    datetime: "2023-08-16",
    category: { title: "Blockchain", href: "/" },
    author: {
      name: "DEF",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "https://www.dltx.io/images/icons/coding.png"
    }
  },
  {
    id: 3,
    title: "News #3",
    href: "/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Aug 16, 2023",
    datetime: "2023-08-16",
    category: { title: "Blockchain", href: "/" },
    author: {
      name: "OPQ",
      role: "CFO",
      href: "#",
      imageUrl: "https://www.dltx.io/images/icons/coding.png"
    }
  },
  {
    id: 4,
    title: "Update #1",
    href: "/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Aug 16, 2023",
    datetime: "2023-08-16",
    category: { title: "Blockchain", href: "/" },
    author: {
      name: "XYZ",
      role: "COO",
      href: "#",
      imageUrl: "https://www.dltx.io/images/icons/coding.png"
    }
  },
  {
    id: 5,
    title: "Update #2",
    href: "/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Aug 16, 2023",
    datetime: "2023-08-16",
    category: { title: "Blockchain", href: "/" },
    author: {
      name: "MNO",
      role: "CMO",
      href: "#",
      imageUrl: "https://www.dltx.io/images/icons/coding.png"
    }
  },
  {
    id: 6,
    title: "Update #3",
    href: "/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Aug 16, 2023",
    datetime: "2023-08-16",
    category: { title: "Blockchain", href: "/" },
    author: {
      name: "QRS",
      role: "CQO",
      href: "#",
      imageUrl: "https://www.dltx.io/images/icons/coding.png"
    }
  }
];
const News: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <PageLayout>
      <div className="relative isolate overflow-hidden bg-cover bg-hero-pattern py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-navbar sm:text-6xl">
              News & Updates
            </h2>
            <p className="mt-2 text-lg leading-8 text-white">
              Latest news about application of blockchain, NFT and dApps around
              the world and updates about our upcoming meetups, events and
              projects.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-page py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 g:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map(post => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-white">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-navbar"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="my-4 text-lg font-semibold leading-6 text-navbar group-hover:text-white">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="p-4 pb-10 rounded-xl line-clamp-3 text-sm leading-6 text-white group-hover:bg-orange-50 group-hover:text-navbar">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-4 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-white">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-white">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default News;
