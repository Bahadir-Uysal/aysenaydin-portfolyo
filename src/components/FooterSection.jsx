


const FooterSection = () => {
  return (
    <footer className="h-[454px] flex flex-col justify-center items-center gap-4">
      <h2 className="text-light-purple dark:text-dark-dblila   text-3xl mb-4 font-bold">Send me a message!</h2>
      <p className="text-2xl leading-9 text-center dark:text-white">
        Got a question or proposal, or just want <br/> to say hello? Go ahead.
      </p>
      <a href="mailto:aysen904@gmail.com" className="text-light-purple dark:text-dark-dblila text-xl font-medium hover:underline">
        aysen904@gmail.com
      </a>
      <div className=" flex gap-6 text-3xl">
        <a href="#" className=" text-light-purple dark:text-dark-dblila ">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#" className=" text-light-purple dark:text-dark-dblila ">
          <i className="fa fa-codepen"></i>
        </a>
        <a href="#" className=" text-light-purple dark:text-dark-dblila">
          <i className="fa fa-at"></i>
        </a>
        <a href="#" className=" text-light-purple dark:text-dark-dblila">
          <i className="fa fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;