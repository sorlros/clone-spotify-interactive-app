import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import Image from "next/image";
import LikedContent from "./components/LikedContent";

// 해당 페이지는 캐시를 사용하지 않고 매번 요청이 발생할 때마다 새로운 데이터로 재생성
export const revalidate = 0;

const Liked = async () => {
	const songs = await getLikedSongs();
	return (
		<div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
			<Header>
				<div className="mt-20">
					<div
						className="
						flex
						flex-col
						md:flex-row
						items-center
						gap-x-5
					"
					>
						<div
							className="
							relative
							h-32
							w-32
							lg:h-44
							lg:w-44
						"
						>
							<Image
								src="/images/liked.png"
								fill
								alt="Playlist"
								className="object-cover"
							/>
						</div>
						<div className="flex flex-col gap-y-2 mt-4 md:mt-0">
							<p className="hidden md:block font-semibold text-sm">Playlist</p>
							<h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
								Liked songs
							</h1>
						</div>
					</div>
				</div>
			</Header>
			<LikedContent songs={songs} />
		</div>
	);
};

export default Liked;
