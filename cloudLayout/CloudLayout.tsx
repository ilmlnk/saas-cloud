import { useRouter } from "next/router";

export const CloudLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const router = useRouter();
    const selectedMenu = router.pathname;

    return (
        <div>

        </div>
    );
}