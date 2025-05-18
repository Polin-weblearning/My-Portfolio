import React from "react";
import { POSTS } from "../constants";
import { motion } from "framer-motion";

export default function Shortcourse() {
  return (
    <div className="border-neutral-900 ">
      <div>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Experience & <span className="text-neutral-500">Short Course</span>
        </motion.h1>
      </div>
      <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {POSTS.map((post) => (
          <article
            key={post.id}
            className="flex flex-col items-start justify-between"
          >
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-x-4 text-xs"
            >
              <time dateTime={post.datetime} className="text-neutral-400">
                {post.date}
              </time>
              <a
                href={post.category.href}
                className="relative z-10 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text  tracking-tight text-transparent rounded-full px-3 py-1.5 font-medium  "
              >
                {post.category.title}
              </a>
            </motion.div>
            <div className="group relative">
              <motion.h3
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="mt-3 text-lg/6 font-semibold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent "
              >
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </motion.h3>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className=" mt-5 text-sm text-neutral-500 line-clamp-4"
              >
                {post.description}
              </motion.p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <a
                href={post.author.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt={post.author.name}
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-gray-50"
                />
              </a>
              <div className="text-sm/6">
                <p className="font-semibold">
                  <a
                    href={post.author.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </a>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
