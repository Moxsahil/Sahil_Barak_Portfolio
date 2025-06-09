import { BlogProps } from '@/types';
import BlogDetails from '../utils/blog-details';
import Wrapper from '../utils/wrapper';

interface Props {
    data: BlogProps;
}

const BlogDetailSection = ({ data: blog }: Props) => {
    return (
        <Wrapper>
            <div className="flex flex-col items-start w-full px-2 md:px-4 py-20">
                <BlogDetails blog={blog} />
            </div>
        </Wrapper>
    )
};

export default BlogDetailSection