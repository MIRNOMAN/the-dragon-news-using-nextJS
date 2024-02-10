export const getCategoryNews = async (category) =>{
   const res = await fetch(`https://dragon-news-server-seven-sandy.vercel.app/news?category=${category}`,
   {
    cache: "no-store",
   }
   );
   return res.json();
} 