export const getAllCategories = async () =>{
    const res = await fetch("https://dragon-news-server-seven-sandy.vercel.app/categories");
    return res.json();
}