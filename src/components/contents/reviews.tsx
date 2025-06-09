import { getReviews } from "@/actions";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { StarIcon } from "lucide-react";
import { MagicCard } from "../ui/magic-card";
import AnimationContainer from "../utils/animation-container";

type ReviewProps = {
    name: string;
    text: string;
    rating: number;
    country: string;
}

const Reviews = async () => {

    const reviews = await getReviews();

    return (
        <div className="w-full relative pb-20 py-10 z-40">
            <AnimationContainer
                animation="slide-up"
                delay={0.1}
                className=""
            >
                <div className="w-full">
                    <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
                        Reviews
                    </h2>
                </div>
            </AnimationContainer>

            <AnimationContainer
                animation="slide-up"
                delay={0.2}
                className="flex items-center justify-center overflow-hidden relative w-full pt-10 mx-auto"
            >
                <Carousel className="w-full max-w-full">
                    <CarouselContent>
                        {reviews.map((review: ReviewProps, index: number) => (
                            <CarouselItem key={index} className="md:basis-1/2lg:basis-1/3 relative">
                                <div className="absolute inset-0 w-4/5 h-20 top-1/4 left-1/2 -translate-x-1/2 -rotate-45 lg:h-52 bg-blue-500/10 blur-[8rem]"></div>
                                <MagicCard className="p-2">
                                    <Review review={review} />
                                </MagicCard>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-end gap-4 mt-6">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </AnimationContainer>
        </div>
    )
};

const Review = ({ review }: { review: ReviewProps }) => {

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<StarIcon key={i} className="size-4 lg:size-5 fill-foreground text-foreground" />);
            } else if (i === fullStars && hasHalfStar) {
                stars.push("");
            } else {
                stars.push("");
            }
        }
        return stars;
    };

    return (
        <Card className="bg-neutral-900/8 border-none p-0 transition-all duration-300 select-none rounded-xl lg:rounded-2xl">
            <CardContent className="flex flex-col h-[22rem] lg:h-80 aspect-video p-4 md:p-6">
                <div className="flex items-center gap-2">
                    {renderStars(review.rating)}
                </div>
                <p className="text-neutral-300 flex-grow mt-4 text-sm text-justify md:text-lg lg:text-xl leading-relaxed">
                    "{review.text}"
                </p>
                <div className="mt-auto">
                    <h4 className="text-lg text-foreground font-semibold">
                        {review.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                        {review.country}
                    </p>
                </div>
            </CardContent>
            {/* <CardContent className="flex flex-col h-full aspect-video p-4 md:p-6">
                <div className="flex items-center gap-2">
                    {renderStars(review.rating)}
                </div>
                <p className="text-neutral-300 flex-grow mt-4 text-sm leading-relaxed">
                    "{review.text}"
                </p>
                <div className="mt-6">
                    <h4 className="text-lg text-muted-foreground font-semibold">
                        {review.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                        {review.country}
                    </p>
                </div>
            </CardContent> */}
        </Card>
    );
};

export default Reviews