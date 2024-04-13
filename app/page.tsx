import Image from "next/image";

export default function Home() {
  return (
    <div className = "flex justify-center items-center min-h-screen" id = "screen">
		<div className = "p-5 large-shadow border-black border-2 rounded-2xl w-96" id = "card">
			<Image
				src = "illustration-article.svg"
				alt = "illustration-article"
				height={24}
				width={360}
				className = "mb-3 rounded-lg"
			/>
			<a href = "#" className = "pt-1 pb-1 pr-3 pl-3 text-center font-bold border-black border-none bg-mentorYellow rounded-md">
				Learning
				</a>
			<p className = "mb-3 mt-3">Published 21 Dec 2023</p>
			<p className = "text-mentorYellow text-2xl font-bold mb-3">HTML & CSS foundations</p>
			<p className = "mb-3 text-gray">These languages are the backbone of every website, defining structure, content and presentation</p>
			<Image 
				src = "/image-avatar.webp"
				alt = "Greg Hooper"
				height ={30}
				width={30}
				className="inline-block mr-1 mb-3"
			/>
			<p className = "font-bold inline-block">Greg Hooper</p>
			
			
		</div>
	
	</div>
  );
}
