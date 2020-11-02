<script lang="ts">
    import ExpEntry from './ExpEntry.svelte'
    import Skill from './Skill.svelte'
</script>

<main class='container mx-auto mt-4 px-4 relative'>
    <header>
        <h1 class='text-4xl sm:text-6xl font-hairline leading-none'>Michał Cymbalista</h1>
        <h2 class='text-2xl sm:text-4xl'>Full-Stack Developer</h2>
    </header>
    <aside>
        
        <img src="/gauge.svg" alt="">
        <h3 class="text-2xl text-gray-700 border-solid border-b-2 border-teal-600">
            Profile Summary
        </h3>
        <p class="text-lg text-gray-800 mt-3 text-justify">
            A full-stack developer based in Wroclaw, Poland.
            Passionate about everything related to web &ndash; frontend, backend and a fair bit of DevOps as well. 😎
            Tech geek interested in emerging technologies and their applications impacting our daily life. 💻
            Proud owner of a cat, Inka. 🐈
        </p>

        <h3 class="text-2xl mt-4 text-gray-700 border-solid border-b-2 border-teal-600">Skills</h3>
        <Skill name='Noice' level={5} />
        <Skill name='Python' level={4.5} />
        <Skill name='JavaScript' level={4} />
        <Skill name='Typescript' level={4} />
        <Skill name='ReactJS' level={4.5} />
        <Skill name='PostgreSQL' level={3.5} />
        <Skill name='Node.JS' level={2} />
        
    </aside>

    <ol>
        <li role="article">
            <h3 class="text-2xl text-gray-700 font-medium border-solid border-b-2 border-teal-600">
                <time class='text-gray-500 font-thin'>03.2018 &mdash; 10.2020</time>
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
                    </p>
                        <li>TypeScript</li>
                        <li>ReactJS; Redux; d3.js; SASS; Jest+Enzyme; Cypress</li>
                        <li>Parcel; Gitlab CI</li>
                        <li>Python3; Cython; Rust</li>
                        <li>Flask; Nginx</li>
                        <li>SQLAlchemy; PostgreSQL, ElasticSearch</li>
                        <li>Docker; AWS ECS, S3, RDS, CW, Lambda, SQS, SES, etc.</li>
                </ExpEntry>
                <ExpEntry>
                    <p slot="desc">
                        Web application used by medical doctors in clinics to manage their patients' medical records, pending visits, prescriptions, lab tests etc.
                    <br>
                        I was responsible for the client-facing API, calling other services via gRPC and exposing a GraphQL API.
                        Our team was also responsible for the frontend and design.
                    </p>
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
                </ExpEntry>
                <ExpEntry>
                    <p slot="desc">
                        Alexa integration for a smart oven and infrastructure optimizations for handling more users while being more cost effective. <br>
                        I was responsible for developing new features for the integration, load testing, writing proposals for enhancements and implementing them.
                        <li>Python2</li>
                        <li>Tornado; ELK Stack; Grafana</li>
                        <li>AWS EC2, Lambda, DynamoDB, Kinesis, ElastiCache (Redis)</li>
                        <li>MZBench; locust</li>
                </ExpEntry>
                <ExpEntry>
                    <p slot="desc">
                        An internal application for tracking leaves and project allocation.<br>
                        Delivered features both on the frontend and the backend.
                    </p>
                        <li>TypeScript</li>
                        <li>ReactJS; Redux; jest+enzyme; SASS</li>
                        <li>Python3</li>
                        <li>Flask; SQLAlchemy; PostgreSQL</li>
                        <li>AWS Beanstalk, RDS, S3, etc.</li>
                </ExpEntry>
            </ul>
        </li>
        
        <li role="article">
            <h3 class="text-2xl text-gray-700 font-medium mt-4 border-solid border-b-2 border-teal-600">
                <time class='text-gray-500 font-thin'>03.2015 &mdash; 01.2018</time>
                Techland
            </h3>
            <h4 class='text-xl text-gray-800 font-bold'>
                Full-Stack Engineer
            </h4>
            <p class='mt-1 text-gray-700 italic'>Techland is one of the biggest video game companies in Poland.</p>
            <p>I was involved in the following projects:</p>
            <ul class='mt-2 ml-4 text-sm divide-y divide-solid divide-gray-400'>
                <ExpEntry>
                    <p slot="desc">
                        News article reader with social network and cloud storage mixed in.<br>
                        Developed features both in the frontend and the backend.<br>
                    </p>
                        <li>JavaScript</li>
                        <li>VueJS; Vuex; SASS</li>
                        <li>Python</li>
                        <li>Django; Flask; Nginx; gevent</li>
                        <li></li>
                        <li>PostgreSQL; Solr; Redis</li>
                        <li>AWS EC2, S3, RDS, CW, etc.</li>
                </ExpEntry>
                <ExpEntry>
                    <p slot="desc">
                        Online game shop.<br>
                        Maintained .<br>
                    </p>
                        <li>Python</li>
                        <li>Django; Nginx;</li>
                        <li>JQuery 😎</li>
                        <li>MySQL; Solr</li>
                </ExpEntry>
            </ul>
        </li>
    </ol>
</main>

<style>
    main {
        display: block;
        display: grid;
            gap: 2rem;
            grid-template:
            "header" auto
            "bio" auto
            "content" auto / 1fr;
        
    }
    
    @media (min-width: 640px) {
        main {
            display: grid;
            gap: 1rem;
            grid-template:
            "header break content" auto
            "bio break content" 1fr
            "bio break content" max-content / min(40vw, 25em) 0.5rem minmax(min-content, 40em);
        }
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