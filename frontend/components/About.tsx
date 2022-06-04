import Image from "next/image";

const About = () => {
    return (
        <section id='about' className='text-white body-font'>
            <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10'>
                    <Image
                        className='object-cover object-center rounded'
                        width={500}
                        height={500}
                        alt='hero'
                        src='/about_image.png'
                    />
                </div>
                <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
                    <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
                        How Decetable works?
                    </h1>
                    <p className='mb-8 leading-relaxed'>
                        Decetable will help you to reach your goals. Set a goal
                        with a deadline and put it real money. If you dont reach
                        your goal the money will go Charity. If you reach it you
                        get all your money back.
                        <br />
                        You make yourself accountable and this is one of the
                        best way to avoid procrastination and achieve your
                        goals.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
