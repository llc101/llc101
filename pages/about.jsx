import Head from "next/head";

const About = () => {
  return (
    <div>
      <main>
        <div className="h-[30vh] bg-[url('https://images.unsplash.com/photo-1551503766-ac63dfa6401c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-no-repeat bg-center bg-cover flex justify-center items-center">
          <h1 className="text-center text-3xl font-bold">ABOUT US</h1>
        </div>
        <div className="md:w-4/5 mx-4 md:mx-auto mt-8">
          <div className="md:flex md:items-center">
            <div className="my-8 space-y-4 md:w-1/2">
              <h2 className="Logo text-xl font-bold">101</h2>
              <p className="text-lg md:text-left text-center">
                This website or platform provides guides for people who want to
                learn graphic design, video and photo editing, 3d blender and
                programming. Learn what to learn at which time makes your
                learning faster, Practising what you have learnt make you master
                the skill you learnt.
              </p>
              <p className="text-sm">101 was launch in Ghana in 2022.</p>
            </div>
            <div className="md:w-1/2 md:mx-auto md:p-4">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="md:w-4/5 w-full h-[300px] object-cover object-center rounded-md md:mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="md:w-4/5 mx-4 md:mx-auto my-16">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2 md:mx-auto md:p-4">
              <h2 className="text-xl font-bold md:hidden mb-4">Our Mission</h2>
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="md:w-4/5 w-full h-[300px] object-cover object-center rounded-md "
              />
            </div>
            <div className="my-8 space-y-4 md:w-1/2">
              <h2 className="text-xl font-bold hidden md:block">Our Mission</h2>
              <p className="text-lg md:text-left text-center">
                We want to make it easy for people all over the world to learn
                photo and video editing, programming, UI design, graphic design
                and 3d design. Our aim is to provide them with the right
                materials to use and more practical work. In other, for them to
                master the skill they want to learn.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-4/5 mx-4 md:mx-auto mt-8">
          <div className="md:flex md:items-center">
            <div className="my-8 space-y-4 md:w-1/2">
              <h2 className="text-xl font-bold">Resources</h2>
              <p className="text-lg md:text-left text-center">
                Most materials found on this website or platform are the work of
                third parties. <br />
                Most images found on this website or platform were taken from
                unsplash.com and pexels.com. Almost all the videos use were from
                youtube.
              </p>
              <p className="text-sm">
                We do not claim the right to any of the materials on this site.
              </p>
              <p className="text-sm">
                In case you think your material has been posted on this site and
                you want us to take it down, please do contact us or write a
                report to us.
              </p>
            </div>
            <div className="md:w-1/2 md:mx-auto md:p-4">
              <img
                src="https://images.unsplash.com/photo-1598618589821-f031d29a366f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="md:w-4/5 w-full h-[300px] object-cover object-center rounded-md md:mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="md:w-4/5 mx-4 md:mx-auto mt-8">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <div className="space-y-4 mb-8">
            <h2 className="font-bold Logo text-2xl">101</h2>
            <div>
              <h4 className="font-bold">Email</h4>
              <p className="text-sm">one.zero.one.llc@gmail.com</p>
            </div>
            <div>
              <h4 className="font-bold">Location</h4>
              <p className="text-sm">Ghana, Central Region, Cape Coast</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
