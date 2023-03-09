import Container from "@/components/Container";
import RecentPosts from "@/components/RecentPosts";
import metadata from "@/data/metadata";
import Image from "next/image";

const Home = () => {
    return (
        <Container>
            <div className={`my-5 w-full`}>
                <div className={`relative`}>
                    <Image
                        src={`/bg.jpg`}
                        alt="대표 이미지"
                        width={`1000`}
                        height={45}
                        style={{ backgroundSize: "cover" }}
                        className={`rounded-3xl`}
                    />
                    <span
                        className={`absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg`}
                    >
                        {metadata.title}
                    </span>
                </div>
                <RecentPosts />
            </div>
        </Container>
    );
};
export default Home;
