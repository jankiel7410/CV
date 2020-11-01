<script lang="ts">
    import ExpEntry from './ExpEntry.svelte'
</script>

<main class='container mx-auto mt-4'>
    <header>
        <h1 class='text-6xl font-hairline leading-none'>Michał Cymbalista</h1>
        <h2 class='text-4xl'>Full-Stack Developer</h2>
    </header>
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
            <p class='mt-1 text-gray-700 italic'>Tooploox is a software house working mainly with clients based in US.</p>
            <p>I was involved in the following projects:</p>
            <ul class='mt-2 ml-4 text-sm divide-y divide-solid divide-gray-400'>
                <ExpEntry>
                    <p slot="desc">
                        Web application for displaying and transforming macroeconomic time series.<br>
                        Frontend side: in charge of the infrastructure, CI/CD, choice of the technology, etc.<br>
                        Backend side: tracking down performance issues, performing load tests, writing new features, maintaining the infrastructure.<br>
                        <!-- Main challenges: making React and d3 play together nicely.
                            Displaying thousands and thousands of data points as an SVG.
                            Keeping the database healthy while handling over 60M time series up to date. -->
                    </p>
                    <slot slot='tech-used'>
                        <li>TypeScript</li>
                        <li>ReactJS; Redux; d3.js; SASS; Jest+Enzyme; Cypress</li>
                        <li>Parcel; Gitlab CI</li>
                        <li>Python3; Cython; Rust</li>
                        <li>Flask; Nginx</li>
                        <li>SQLAlchemy; PostgreSQL, ElasticSearch</li>
                        <li>Docker; AWS ECS, S3, RDS, CW, Lambda, SQS, etc.</li>
                    </slot>
                </ExpEntry>
                <ExpEntry>
                    <p slot="desc">
                        Web application in clinics by medical doctors to manage their patients, visits, prescriptions, lab tests etc.
                    <br>
                        I was responsible for the client-facing API, calling other services via gRPC and exposing a GraphQL API.
                        Our team was also responsible for the frontend and design.
                    </p>
                    <slot slot='tech-used'>
                        <li>
                            TypeScript
                        </li>
                        <li>
                            NodeJS; GraphQL; gRPC; jest
                        </li>
                        <li>
                            React; Apollo; styled-components; react-testing-library; Webpack
                        </li>
                        <li>Google Kubernetes Engine</li>
                    </slot>
                </ExpEntry>
                <ExpEntry>
                    <p slot="desc">
                        Alexa integration for a smart oven and infrastructure optimizations for handling more users while being more cost effective. <br>
                        I was responsible for developing new features for the integration, load testing, writing proposals for enhancements and implementing them.
                    <slot name='tech-used'>
                        <li>Python2</li>
                        <li>Tornado; ELK Stack; Graphana</li>
                        <li>AWS EC2, Lambda, DynamoDB, Kinesis, ElastiCache (Redis)</li>
                        <li>MZBench; locust</li>
                    </slot>
                </ExpEntry>
                <ExpEntry>
                    <p slot="desc">
                        An internal application for tracking leaves and project allocation.<br>
                        Delivered features both on the frontend and the backend.
                    </p>
                    <slot name='tech-used'>
                        <li>TypeScript</li>
                        <li>ReactJS; Redux; jest+enzyme; SASS</li>
                        <li>Python3</li>
                        <li>Flask; SQLAlchemy; PostgreSQL</li>
                        <li>AWS Beanstalk, RDS, S3, etc.</li>
                    </slot>
                </ExpEntry>
            </ul>
        </li>
    </ol>
</main>

<style>
    main {
        display: grid;
        gap: 1rem;
        grid-template:
        "header break content" auto
        "bio break content" 1fr
        "bio break content" 1fr / min(40vw, 25em) 0.5rem minmax(min-content, 40em);
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