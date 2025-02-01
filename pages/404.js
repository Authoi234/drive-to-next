import Image from "next/image";
import errorImage from '../public/error.png'
import Link from "next/link";

const ErrorPage = () => {
    return (
        <div className="my-0 mx-auto">
            <Image src={errorImage} width={1340} height={100}>

            </Image>
            <Link href={'/'}>
                <button className="btn btn-info text-white text-center">
                    Back To Home!
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;
