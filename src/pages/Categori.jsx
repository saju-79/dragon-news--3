
import { Suspense, useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';


const Categori = () => {

    const {id}= useParams();
    const data = useLoaderData()
    console.log(id )
     const[catagoriNews , setcatagoriNews] = useState([])
 
    useEffect(() =>{

        if(id == "0"){
            setcatagoriNews(data)
            return;
        }else if  (id == "1"){
            const filterNews = data.filter(news => news.others.is_today_pick == true);
            setcatagoriNews(filterNews);
            
        }else{
                 const filterNews = data.filter(news => news.category_id == id);
           console.log(filterNews)
           setcatagoriNews(filterNews)
        }
           
          
    },[data , id]);
        

   return (
        <div>
           <h2 className='text-black font-bold'>Total <span className='text-red-600'>{catagoriNews.length}</span> news funded</h2>

           <div className="grid grid-cols-1">
           <Suspense fallback={<span className="loading loading-dots loading-sm"></span>}>
             {
                catagoriNews.map(news =><NewsCard key={news.id} news ={news} ></NewsCard>)
            }
           </Suspense> 
           
           </div>

          
        </div>
    );
};

export default Categori;