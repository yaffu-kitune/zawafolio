<script>

</script>

<template>
    <div class="navbar bg-transparent flex lg:justify-center">
        <div class="flex-none">
            <div class="lg:hidden">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn- swap swap-rotate">
                        <input type="checkbox" />
                        <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>
                        <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            viewBox="0 0 512 512">
                            <polygon
                                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NuxtLink to="/" class="btn btn-ghost btn-sm rounded-btn">ホーム</NuxtLink>
                        <NuxtLink to="/playground" class="btn btn-ghost btn-sm rounded-btn">遊び場</NuxtLink>
                        <NuxtLink to="/blog" class="btn btn-ghost btn-sm rounded-btn">Blog</NuxtLink>
                        <NuxtLink to="/about" class="btn btn-ghost btn-sm rounded-btn">About</NuxtLink>
                    </ul>
                </div>
            </div>
        </div>
        <div class="hidden lg:flex">
            <div class="tab gap-16">
                <NuxtLink class="tab text-cyan-50 hover:bg-gray-600 rounded-lg" href="/">ホーム</NuxtLink>
                <NuxtLink class="tab text-cyan-50 hover:bg-gray-600 rounded-lg" href="/playground">遊び場</NuxtLink>
                <NuxtLink class="tab text-cyan-50 hover:bg-gray-600 rounded-lg" href="/blog">blog</NuxtLink>
                <NuxtLink class="tab text-cyan-50 hover:bg-gray-600 rounded-lg" href="/about">about</NuxtLink>
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