<template>
    <header class="mb-5 flex flex-wrap">
        <div class="mx-auto mb-6 w-full bg-white px-3">
            <div class="grow items-stretch justify-between px-5 py-5 sm:flex lg:mb-0">
                <div class="mb-5 mr-3 flex flex-col flex-wrap justify-center lg:mb-0">
                    <span class="text-dark my-0 flex flex-col justify-center text-3xl font-semibold">
                        <a href="#">Stars</a>
                    </span>
                    <span class="text-md font-medium italic text-slate-600">
                        Touch the sky
                    </span>
                </div>
                <div class="flex items-center lg:shrink-0 lg:flex-nowrap">
                    <nav class="relative mr-2 items-center sm:mr-0 lg:ml-4">
                        <ul class="flex gap-4 text-lg">
                            <li>
                                <NuxtLink title="To home" to="/">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink title="To stars list" to="/stars">Stars WoF</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink title="To back office" to="/backoffice">Back Office</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
