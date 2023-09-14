import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export const metadata = {
  title: "Bambo",
  description: "My Portfolio",
};



export default function Home() {
  return (
    <main>
      <div className="text-center p-10 py-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-indigo-600 font-medium dark:text-indigo-400 md:text-6xl ">
              Bello Bambo
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I provide freelance services for all your programming and design
              needs. Let&apos;s work together to bring your projects to life.
              Your content goals, my expertise.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <Link
                href="https://twitter.com/odidi_bee6ix?t=BuGGAAm4DJC_eKM6TQn--g&s=09"
                className="cursor-pointer hover:scale-100"
              >
                <AiFillTwitterCircle className="cursor-pointer hover:rotate-45 transition-transform duration-300" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/bello-bambo-2880b1259"
                className="cursor-pointer hover:scale-100"
              >
                <AiFillLinkedin className="cursor-pointer hover:rotate-45 transition-transform duration-300" />
              </Link>
              <Link
                href="https://github.com/bellobambo"
                className="cursor-pointer hover:scale-100"
              >
                <AiFillGithub className="cursor-pointer hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
            <div className="mx-auto bg-gradient-to-b from-indigo-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 items-center flex justify-center">
              <Image src="./me.png" alt="img" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Throughout my freelance career as a designer and developer, I have
              engaged in remote work with
              <span className="text-indigo-500"> agencies </span>
              consulted for <span className="text-indigo-500">startups </span>
              and partnered with skilled individuals to craft digital solutions
              for various business and consumer needs.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I provide a diverse set of services, which encompass brand design,
              programming, and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              {/* <Image src={design} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Crafting stylish and tailored designs to match your specific
                requirements while adhering to fundamental design principles.
              </p>
              <h4 className="py-4 text-indigo-600">Design Stack</h4>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">DaisyUI</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              {/* <Image src={code} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have a concept for your next amazing website? Let&quot;s
                transform it into a reality.
              </p>
              <h4 className="py-4 text-indigo-600">Technologies</h4>
              <div>
                <div className="text-gray-800 py-1 font-bold ">
                  Nextjs/Reactjs <span className="text-red-500">*</span>
                </div>
              </div>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Machine Learning</p>
              <p className="text-gray-800 py-1">Javascript/Typescript</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              {/* <Image src={consulting} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2 ">Servers</h3>
              <p className="py-2">
                I also have knowledge in backend works with expressjs and manage
                database services performance and reliability for your digital
                infrastructure.
              </p>
              <h4 className="py-4 text-indigo-600">Backend/Database</h4>
              <p className="text-gray-800 py-1">Nodejs</p>
              <p className="text-gray-800 py-1">GraphQL</p>
              <p className="text-gray-800 py-1">Expressjs</p>
              <p className="text-gray-800 py-1">Mongodb</p>
              <p className="text-gray-800 py-1">Mysql</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I&apo;ve done remote work for
              <span className="text-indigo-500"> agencies </span>
              consulted for <span className="text-indigo-500">startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
            Sample Projects Previews
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                alt="img"
                width={100}
                height={200}
                layout="responsive"
                src="./canvas.png"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                alt="img"
                width={200}
                height={200}
                layout="responsive"
                src="./man.png"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                alt="img"
                width={200}
                height={200}
                layout="responsive"
                src="./map.png"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                alt="img"
                width={200}
                height={200}
                layout="responsive"
                src="./tac.png"
              />
            </div>
            {/* <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                alt="img"
                width={200}
                height={200}
                layout="responsive"
                src="./canvas.png"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                alt="img"
                width={200}
                height={200}
                layout="responsive"
                src="./img.png"
              />
            </div> */}
          </div>
        </section>
      </div>
    </main>
  );
}
