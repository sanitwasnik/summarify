import { logo } from '../assets';


const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img className='w-28 object-contain' src={logo} alt='logo' />
                <div>
                    <button
                        type='button'
                        onClick={() => window.open('https://github.com/sanitwasnik')}
                        className='black_btn m-1'>
                        Github

                    </button>
                    <button
                        type='button'
                        onClick={() => window.open('https://twitter.com/WasnikSanit24')}
                        className='black_btn'>
                        Twitter

                    </button>
                </div>

            </nav>
            <h1 className='head_text'>Summarize Articles with <br className='max-md:hidden' />
                <span className='orange_gradient'>OpenAI GPT</span>
            </h1>
            <h2 className='desc'>
                An innovative web application that leverages AI-driven summarization technology to
                distill lengthy articles and texts into concise two-line summaries, making information
                consumption more efficient and accessible.
            </h2>
        </header>
    )
}

export default Hero