import ProjectCards from "../contents/project-cards";
import AnimationContainer from "../utils/animation-container";
import Heading from "../utils/heading";
import Wrapper from "../utils/wrapper";

const ProjectSection = () => {
    return (
        <Wrapper>
            <div className="flex flex-col items-start w-full mt-0 lg:mt-8">
                <Heading title="Projects" />

                <AnimationContainer className="w-full flex flex-col gap-5 mb-8">
                    <p className="text-base text-justify lg:leading-8 text-foreground/80">
                        Here’s a collection of my work where I’ve turned ideas into real, working solutions. From useful tools for students to creative SaaS platforms, these projects show my love for building things that solve real problems with modern web and mobile technologies.
                    </p>
                </AnimationContainer>

                <ProjectCards />
            </div>
        </Wrapper>
    )
};

export default ProjectSection