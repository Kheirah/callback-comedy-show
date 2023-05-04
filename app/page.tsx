import Image from "next/image";
import host from "@/public/host-pat-mchosterson.png";
import manager from "@/public/event-listener-elvie-listenwell.png";
import comedian from "@/public/callback-chris-callbackson.png";
import expert from "@/public/expert-serious-proud.png";

const characters = [
  {
    name: "Pat McHosterson",
    role: "Host",
    imageUrl: host,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Elvie Listenwell",
    role: "Stage Manager",
    imageUrl: manager,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Chris Callbackson",
    role: "Legendary JavaScript Comedian",
    imageUrl: comedian,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

export default function Home() {
  return (
    <main className="bg-white sm:py-24 px-8">
      <div className="mx-auto max-w-full px-6 lg:px-8 border border-gray-300 rounded-xl py-7">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Callback Comedy Show
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our panel of today&apos;s top educational technology experts is
            going to talk about one of the most important concepts in JavaScript
            - <span className="font-medium">callback functions!</span>
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {characters.map((person) => (
            <li key={person.name}>
              <Image
                className="aspect-[5/4] w-full rounded-2xl object-contain"
                src={person.imageUrl}
                width={728}
                height={416}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a
                    href={person.twitterUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center gap-4 max-w-full px-6 lg:px-8 border border-gray-300 rounded-xl py-7 mt-8">
        <Image
          className="rounded-2xl object-contain"
          src={host}
          width={364}
          height={208}
          alt=""
        />
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-lg">
          So, I heard{" "}
          <span className="font-medium text-xl">callback functions</span> are a
          big thing in JavaScript, but I don&apos;t quite get what they are. Can
          you help me out here, Serious?
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-6 xl:flex-row px-24">
        <Image
          className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
          src={expert}
          width={728}
          height={416}
          alt=""
        />
        <div className="flex-auto">
          <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 mt-1">
            Dr. Serious Proud
          </h3>
          <p className="text-base leading-7 text-gray-600">Full Stack Professor</p>
          <p className="mt-6 text-base leading-7 text-gray-600 max-w-md">
            Of course! Imagine callbacks as comedians like our guest Chris
            tonight, who are invited to perform at a comedy club by the host,
            which is you in this case.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 max-w-full px-6 lg:px-8 border border-gray-300 rounded-xl py-7 mt-8">
        <Image
          className="rounded-2xl object-contain"
          src={host}
          width={364}
          height={208}
          alt=""
        />
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-lg">
          Oh, I see! So, the host invites the comedian to the stage to entertain
          the audience.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-6 xl:flex-row px-24">
        <Image
          className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
          src={expert}
          width={728}
          height={416}
          alt=""
        />
        <div className="flex items-center">
          <p className="text-base leading-7 text-gray-600 max-w-sm">
            Exactly! Now, let&apos;s bring in our stage manager friend, Elvie.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 max-w-full px-6 lg:px-8 border border-gray-300 rounded-xl py-7 mt-8">
        <div className="mt-6 text-lg leading-8 text-gray-600 max-w-lg">
          <p>
            Elvie here is a very attentive listener. He&apos;s responsible for
            watching out for specific cues, like someone shouting{" "}
            <span className="font-medium text-xl">&quot;Joke Time!&quot;</span>{" "}
          </p>
          <p className="mt-2">
            When that happens, Elvie knows it&apos;s time to let the comedian
            perform. It&apos;s his job to call the comedian to the stage.
          </p>
        </div>

        <Image
          className="rounded-2xl object-contain"
          src={manager}
          width={364}
          height={208}
          alt=""
        />
      </div>

      <div className="flex items-center justify-center gap-4 max-w-full px-6 lg:px-8 border border-gray-300 rounded-xl py-7 mt-8">
        <Image
          className="rounded-2xl object-contain"
          src={host}
          width={364}
          height={208}
          alt=""
        />
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-lg">
          Ah, so when the cue drops, the comedian comes up to the stage. I think
          I get it!
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-6 xl:flex-row px-24">
        <Image
          className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
          src={expert}
          width={728}
          height={416}
          alt=""
        />
        <div className="flex items-center">
          <div className="text-base leading-7 text-gray-600 max-w-sm">
            <p>Almost! There&apos;s just one more piece to the puzzle:</p>
            <p className="mt-3">
              You, the host, no longer have to call the comedian to the stage
              yourself. Elvie does it for you. Elvie knows that the time is
              right because he&apos;s attentively listening to the cue
              &quot;Joke Time!&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 max-w-full px-6 lg:px-8 border border-gray-300 rounded-xl py-7 mt-8">
        <Image
          className="rounded-2xl object-contain"
          src={host}
          width={364}
          height={208}
          alt=""
        />
        <div className="mt-6 text-lg leading-8 text-gray-600 max-w-lg">
          <p>
            Okay, so I pass the job over to Elvie, and when the cue drops, Elvie
            calls the comedian. I&apos;m curious to see it in action!
          </p>
          <p className="mt-3">Ready? &quot;Joke Time!&quot;</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 max-w-full px-6 lg:px-8 border border-gray-300 rounded-xl py-7 mt-8">
        <p className="mt-6 text-lg italic leading-8 text-gray-600 max-w-lg">
          ... gesturing the comedian to come up to the stage ...
        </p>

        <Image
          className="rounded-2xl object-contain"
          src={manager}
          width={364}
          height={208}
          alt=""
        />
      </div>

      <div className="flex items-center justify-center gap-4 max-w-full px-6 lg:px-8 border border-gray-300 rounded-xl py-7 mt-8">
        <Image
          className="rounded-2xl object-contain"
          src={comedian}
          width={364}
          height={208}
          alt=""
        />
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-lg">
          Why did the JavaScript developer go broke?{" "}
          <span className="font-medium text-xl">
            Because he used up all his cache!
          </span>
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 max-w-full px-6 lg:px-8 border border-gray-300 rounded-xl py-7 mt-8">
        <Image
          className="rounded-2xl object-contain"
          src={host}
          width={364}
          height={208}
          alt=""
        />
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-lg">
          That was funny! So, that&apos;s how callbacks work in JavaScript, huh?
          I think I understand now.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-6 xl:flex-row px-24">
        <Image
          className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
          src={expert}
          width={728}
          height={416}
          alt=""
        />
        <div className="flex items-center">
          <p className="text-base leading-7 text-gray-600 max-w-sm">
            You got it! Callbacks are just like comedians waiting to be called
            to the stage. Once the stage manager hears the right event, it
            allows the comedian to perform, creating bellies full of laughter!
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 max-w-full px-6 lg:px-8 border border-gray-300 rounded-xl py-7 mt-8">
        <Image
          className="rounded-2xl object-contain"
          src={host}
          width={364}
          height={208}
          alt=""
        />
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-lg">
          Thanks for the laugh and the lesson, Serious!
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-6 xl:flex-row px-24">
        <Image
          className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
          src={expert}
          width={728}
          height={416}
          alt=""
        />
        <div className="flex items-center">
          <p className="text-base leading-7 text-gray-600 max-w-sm">
            Anytime! Remember, understanding JavaScript is no joke, but it can
            be fun!
          </p>
        </div>
      </div>
    </main>
  );
}
