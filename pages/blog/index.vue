
<script setup lang="ts">
import { Blog } from "~~/types/blog";

const { data } = await useMicroCMSGetList<Blog>({
    endpoint: "blogs",
});
console.log(data)
</script>

<template>
    <div>
        <h1>Nuxt3 Jamstack Blogs</h1>
    </div>
    <div class=" xl:rounded-box ">
        <div>
            <h1>Blog</h1>
        </div>

        <div>
            <ul class="grid grid-cols-3 gap-4 content-stretch">
                <li v-for="blog in data?.contents" :key="blog.id">
                    <NuxtLink class="btn btn-ghost btn-xl" :to="`/blog/${blog.id}`">
                        <img :src="blog.eyecatch?.url" :width="500" alt="" />
                        <div>
                            <div>
                                {{ blog.category?.name }}
                            </div>
                            <div>
                                {{ blog.title }}
                            </div>
                            <div>
                                {{ blog.publishedAt ?? blog.createdAt }}
                            </div>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
