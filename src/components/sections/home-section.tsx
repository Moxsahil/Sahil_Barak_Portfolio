import Hero from "../contents/hero";
import Wrapper from "../utils/wrapper"

const HomeSection = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center relative">
            <Wrapper className="lg:max-w-screen-lg">
                <Hero />
            </Wrapper>
        </div>
    )
}

export default HomeSection;