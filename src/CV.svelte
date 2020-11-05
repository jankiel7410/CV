<script lang="ts">
  import Tailwind from './Tailwind.svelte'
  import ExpEntryList from './ExpEntryList.svelte'
  import ExpEntry from './ExpEntry.svelte'
  import Header from './Header.svelte'
  import Skill from './Skill.svelte'
  import Entry from './Entry.svelte'
import OrgHeader from './OrgHeader.svelte'
</script>

<Tailwind />
<main class="container mx-auto mt-4 px-4 relative grid gap-4 md:gap-8 overflow-visible print:block">
  <header>
    <h1 class="text-4xl md:text-6xl font-hairline leading-none">Michał Cymbalista</h1>
    <h2 class="text-2xl md:text-4xl mt-2 text-gray-700 font-light">Full-Stack Developer</h2>
    <div class='my-4'>
      <p><a href="https://jankiel.me">🔗 jankiel.me</a></p>
      <p><a href="mailto:michal.cymbalista@pm.me">📪 michal.cymbalista@pm.me</a></p>
      <p>📍 Wroclaw, Poland</p>
    </div>
    <div>
      <Header>Profile Summary</Header>
      <p class="text-lg text-gray-900 mt-1 text-justify">
        A full-stack developer based in Wroclaw, Poland.<br />
        Passionate about everything related to web &ndash; frontend, backend and a fair bit of DevOps as well. 😎<br />
        Tech geek interested in emerging technologies and their applications impacting our daily life. Proud owner of a
        siberian cat Inka. 🐈<br />
      </p>
    </div>
  </header>
  <div>
    <Header>Career</Header>
    <ol>
      <Entry
        company="Tooploox"
        timespan="03.2018&mdash;10.2020"
        role="Full-Stack Engineer"
        sub="Tooploox is a software house working mainly with clients based in US.">
        <p>I was involved in the following projects:</p>
        <ExpEntryList>
          <ExpEntry>
            <p slot="desc">
              Web application for displaying and transforming macroeconomic time series.<br />
              Frontend side: in charge of the infrastructure, CI/CD, choice of the technology, etc.<br />
              Backend side: tracking down performance issues, performing load tests, writing new features, maintaining
              the infrastructure.<br />
            </p>
            <li>TypeScript</li>
            <li>ReactJS, Redux, d3.js, SASS, Jest+Enzyme, Cypress</li>
            <li>Parcel, Gitlab CI</li>
            <li>Python3, Cython, Rust</li>
            <li>Flask, Nginx</li>
            <li>SQLAlchemy, PostgreSQL, ElasticSearch</li>
            <li>Docker, AWS ECS, S3, RDS, CW, Lambda, SQS, SES, etc.</li>
          </ExpEntry>
          <ExpEntry>
            <p slot="desc">
              Web application used by medical doctors in clinics to manage their patients' medical records, pending
              visits, prescriptions, lab tests etc.
              <br />
              I was responsible for the client-facing API, calling other services via gRPC and exposing a GraphQL API.
              Our team was also responsible for the frontend and design.
            </p>

            <li>TypeScript</li>
            <li>NodeJS, GraphQL, gRPC, jest</li>
            <li>React, Apollo, styled-components, react-testing-library, Webpack</li>
          </ExpEntry>
          <ExpEntry>
            <p slot="desc">
              Alexa integration for a smart oven and infrastructure optimizations for handling more users while being
              more cost effective.
              <br />
              I was responsible for developing new features for the integration, load testing, writing proposals for
              enhancements and implementing them.
            </p>
            <li>Python2</li>
            <li>Tornado, ELK Stack, Grafana</li>
            <li>AWS EC2, Lambda, DynamoDB, Kinesis, ElastiCache (Redis)</li>
            <li>MZBench, locust</li>
          </ExpEntry>
          <ExpEntry>
            <p slot="desc">
              An internal application for tracking leaves and project allocation.<br />
              Delivered features both on the frontend and the backend.
            </p>
            <li>TypeScript</li>
            <li>ReactJS, Redux, jest+enzyme, SASS</li>
            <li>Python3</li>
            <li>Flask, SQLAlchemy, PostgreSQL</li>
            <li>AWS Beanstalk, RDS, S3, etc.</li>
          </ExpEntry>
        </ExpEntryList>
      </Entry>

      <Entry
        company="Techland"
        timespan="02.2015&mdash;01.2018"
        role="Full-Stack Engineer"
        sub="Techland is one of the biggest video game companies in Poland.">
        <p>I was involved in the following projects:</p>
        <ExpEntryList>
          <ExpEntry>
            <p slot="desc">
              News article reader and a cloud storage with a social network on top of it.<br />
              Developed features both in the frontend and the backend.<br />
            </p>
            <li class="no-break">JavaScript</li>
            <li class="no-break">VueJS, Vuex, SASS</li>
            <li class="no-break">Python</li>
            <li class="no-break">Django, Flask, Nginx, gevent</li>
            <li class="no-break">PostgreSQL, Solr, Redis</li>
            <li class="no-break">AWS EC2, S3, RDS, CW, etc.</li>
          </ExpEntry>
          <ExpEntry>
            <p slot="desc">An online game store.<br /> Bugfixing and developing new features.<br /></p>
            <li>Python</li>
            <li>Django, Nginx;</li>
            <li>Jinja2, JQuery, LESS</li>
            <li>MySQL, Solr</li>
          </ExpEntry>
        </ExpEntryList>
      </Entry>
    </ol>
  </div>

  <aside class="grid grid-cols-1 auto-rows-min gap-8 print:block">
    <div>
      <Header>Skills</Header>
      <div class="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 print:grid-cols-4">
        <Skill name="Python" level={4.5} />
        <Skill name="Typescript" level={4} />
        <Skill name="ReactJS" level={4} />
        <Skill name="Svelte" level={2.5} />
        <Skill name="PostgreSQL" level={3} />
        <Skill name="AWS" level={3.5} />
        <Skill name="English" level={4} label="B2+" />
        <Skill name="Teamwork" level={5} label="🚀" />
      </div>
    </div>
    <div>
      <Header>Education</Header>
      <ol class='text-lg text-gray-800'>
        <li>
          <Entry
            company="Wroclaw University of Science and Technology"
            timespan="09.2014&mdash;02.2015"
            role="Master of science"
            sub="Computer Science and Technology. Thesis: Influence propagation in multilayer networks" />
        </li>
        <li>
          <Entry
            company="Wroclaw University of Science and Technology"
            timespan="09.2011&mdash;02.2014"
            role="Bachelor of Science"
            sub="Applied Computer Science"/>
        </li>
      </ol>
    </div>
  </aside>
</main>

<footer class="container px-8 mx-auto text-justify text-sm italic text-gray-600">
  <p class="pt-2 border-t border-gray-400">
    I agree to the processing of personal data provided in this document for realising the recruitment process pursuant
    to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with
    Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural
    persons with regard to the processing of personal data and on the free movement of such data, and repealing
    Directive 95/46/EC (General Data Protection Regulation).
  </p>
  <p class="my-2">
    I also consent to processing of my personal data for the purposes of any future recruitment processes.
  </p>
</footer>

<style>
  main {
    grid-template:
      'header' auto
      'bio' auto
      'content' auto / 1fr;
  }

  main > header {
    grid-area: header;
  }

  main > aside {
    grid-area: bio;
  }

  main > div {
    grid-area: content;
  }

  @media screen and (min-width: 768px) {
    main {
      display: grid;
      grid-template:
        'header break content' auto
        'bio break content' 1fr
        'bio break content' max-content / minmax(20%, 40%) 0.5rem 2fr;
    }
  }

  @media print {
    main {
      width: 100%;
      height: 100%;
      overflow: visible;
    }

    .grid.print\:block > * + * {
      margin-top: 2rem;
    }
  }
</style>
