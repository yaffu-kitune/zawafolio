<script>

</script>

<template>
    <div class="navbar bg-transparent flex lg:justify-center">
        <div class="flex-none">
            <div class="lg:hidden">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NuxtLink to="/" class="btn btn-ghost btn-sm rounded-btn">Home</NuxtLink>
                        <NuxtLink to="/about" class="btn btn-ghost btn-sm rounded-btn">About</NuxtLink>
                    </ul>
                </div>
            </div>
        </div>
        <div class="hidden lg:flex">
            <div class="tab gap-16">
                <NuxtLink class="tab text-cyan-50 hover:bg-gray-600 rounded-lg" href="/" >ホーム</NuxtLink>
                <NuxtLink class="tab text-cyan-50 hover:bg-gray-600 rounded-lg" href="/playground" >遊び場</NuxtLink>
                <NuxtLink class="tab text-cyan-50 hover:bg-gray-600 rounded-lg" href="/blog" >blog</NuxtLink>
                <NuxtLink class="tab text-cyan-50 hover:bg-gray-600 rounded-lg" href="/about" >about</NuxtLink>
            </div>
        </div>
    </div>
</template>

<!--
    <div>
        <div class="navbar bg-transparent flex lg:justify-center">
            <div class="hidden lg:flex">
                <NuxtLink to="/">
                    <img src=".././kitune.png" alt="kitune" class="btn btn-ghost w-32 h-24">
                </NuxtLink>
                <NuxtLink to="/about" class="btn btn-ghost btn-sm rounded-btn">About</NuxtLink>
            </div>
            <div class="flex-none lg:hidden">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NuxtLink to="/" class="btn btn-ghost btn-sm rounded-btn">Home</NuxtLink>
                        <NuxtLink to="/about" class="btn btn-ghost btn-sm rounded-btn">About</NuxtLink>
                    </ul>
                </div>
            </div>
        </div>

    </div>
-->