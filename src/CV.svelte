<main class='container mx-auto mt-4'>
    <header>
        <h1 class='text-6xl font-hairline leading-none'>Michał Cymbalista</h1>
        <h2 class='text-4xl'>Full-Stack Developer</h2>
    </header>
    <div class='strip bg-teal-600 my-2 opacity-50'></div>
    <aside>
        <header class="text-2xl text-gray-700 border-solid border-b-2 border-teal-600">
            <h3>Profile Summary</h3>
        </header>
        <p class="text-lg text-gray-800 mt-3 text-justify">
            A full-stack developer based in Wroclaw, Poland.
            Passionate about everything related to web &ndash; frontend, backend and a fair bit of DevOps as well. 😎
            Tech geek interested in emerging technologies and their applications impacting our daily life. 💻
            Proud owner of a cat, Inka. 🐈
        </p>
    </aside>

    <ol>
        <li role="article">
            <h3 class="text-2xl text-gray-700 font-medium border-solid border-b-2 border-teal-600">
                <time class='text-gray-500 font-thin'>03.2020 &mdash; 10.2020</time>
                Tooploox
            </h3>
            <h4 class='text-xl text-gray-800 font-bold'>
                Full-Stack Engineer
            </h4>
            <p class=''>Tooploox is a software house working mainly with clients based in US.</p>
            <p>I was involved in the following projects:</p>
            <ul class='mt-1 ml-2 text-base'>
                <li class='' role="listitem">
                    <p>Web application for displaying and transforming macroeconomic time series.</p>
                    <p>Responsible for the frontend;
                        including setting up the infrastructure, CI/CD, choice of the technology, etc.</p>
                    <p>Main challenges: making React and d3 play together nicely, displaying thousands and thousands of data points as an SVG.</p>
                </li>
            </ul>
        </li>
    </ol>
</main>

<style>
    main {
        display: grid;
        gap: 1rem;
        grid-template:
        "header strip content" auto
        "bio strip content" 1fr
        "bio strip content" 1fr / 380px 4px auto;
    }
    .strip {
        grid-area: strip;
    }
    main>header {
        grid-area: header;
    }

    main>aside {
        grid-area: bio;
    }

    main>ol {
        grid-area: content;
    }

</style>