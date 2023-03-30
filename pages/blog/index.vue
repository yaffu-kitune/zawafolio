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
                <div>
                    <ContentList path="/blog" v-slot="{ list }">
                        <div v-for="article in list" :key="article._path">
                            <NuxtLink :to=article._path >{{ article.title }}</NuxtLink>
                        </div>
                    </ContentList>
                </div>
            </ul>
        </div>
    </div>
</template>
