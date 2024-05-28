import React, { useState } from 'react';
import './HomePage.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const characters = [
    {
      name: "albus dumbledore",
      role:"Professor" ,
      Image: "https://wallpapercave.com/wp/wp1914748.jpg",
      
      des:"Rowling said she enjoyed writing Dumbledore because he is the epitome of goodness. She said that Dumbledore speaks for her, as he knows pretty much everything about the Harry Potter universe.Rowling mentioned that Dumbledore regrets that he has always had to be the one who knew, and who had the burden of knowing. And he would rather not know. As a mentor to the central character Harry Potter, Dumbledore is a very wise man who knows that Harry is going to have to learn a few hard lessons to prepare him for what may be coming in his life. He allows Harry to get into what he would not allow another pupil to do, and he also unwillingly permits Harry to confront things he'd rather protect him from. In a 1999 interview, Rowling stated that she imagined Dumbledore more as a John Gielgud type, you know, quite elderly and  and quite stately.[9] During his time as a student, Dumbledore was in Gryffindor House. Rowling said in an interview that Dumbledore was about 150 years old. However, on her website, she states that Dumbledore was born in 1881, making him either 115 or 116 at the time of his death."
    },
    {
      name: "Harry potter",
      role:"Main cherecter" ,
      Image: "https://wallpapercave.com/wp/wp6029118.jpg",
      
      des:"Rowling said she enjoyed writing Dumbledore because he is the epitome of goodness. She said that Dumbledore speaks for her, as he knows pretty much everything about the Harry Potter universe.Rowling mentioned that Dumbledore regrets that he has always had to be the one who knew, and who had the burden of knowing. And he would rather not know. As a mentor to the central character Harry Potter, Dumbledore is a very wise man who knows that Harry is going to have to learn a few hard lessons to prepare him for what may be coming in his life. He allows Harry to get into what he would not allow another pupil to do, and he also unwillingly permits Harry to confront things he'd rather protect him from. In a 1999 interview, Rowling stated that she imagined Dumbledore more as a John Gielgud type, you know, quite elderly and  and quite stately.[9] During his time as a student, Dumbledore was in Gryffindor House. Rowling said in an interview that Dumbledore was about 150 years old. However, on her website, she states that Dumbledore was born in 1881, making him either 115 or 116 at the time of his death."
    },
    {
      name: "Hermione Granger",
      role:"Main cherecter female friend" ,
      Image: "https://wallpaperset.com/w/full/a/7/b/522280.jpg",
      
      des:"Rowling said she enjoyed writing Dumbledore because he is the epitome of goodness. She said that Dumbledore speaks for her, as he knows pretty much everything about the Harry Potter universe.Rowling mentioned that Dumbledore regrets that he has always had to be the one who knew, and who had the burden of knowing. And he would rather not know. As a mentor to the central character Harry Potter, Dumbledore is a very wise man who knows that Harry is going to have to learn a few hard lessons to prepare him for what may be coming in his life. He allows Harry to get into what he would not allow another pupil to do, and he also unwillingly permits Harry to confront things he'd rather protect him from. In a 1999 interview, Rowling stated that she imagined Dumbledore more as a John Gielgud type, you know, quite elderly and  and quite stately.[9] During his time as a student, Dumbledore was in Gryffindor House. Rowling said in an interview that Dumbledore was about 150 years old. However, on her website, she states that Dumbledore was born in 1881, making him either 115 or 116 at the time of his death."
    },
    {
      name: "Severus Snape ",
      role:"Negative Role professor" ,
      Image: "https://wallpapercave.com/wp/wp1914211.jpg",
      
      des:"said she enjoyed writing Dumbledore because he is the epitome of goodness. She said that Dumbledore speaks for her, as he knows pretty much everything about the Harry Potter universe.Rowling mentioned that Dumbledore regrets that he has always had to be the one who knew, and who had the burden of knowing. And he would rather not know. As a mentor to the central character Harry Potter, Dumbledore is a very wise man who knows that Harry is going to have to learn a few hard lessons to prepare him for what may be coming in his life. He allows Harry to get into what he would not allow another pupil to do, and he also unwillingly permits Harry to confront things he'd rather protect him from. In a 1999 interview, Rowling stated that she imagined Dumbledore more as a John Gielgud type, you know, quite elderly and  and quite stately.[9] During his time as a student, Dumbledore was in Gryffindor House. Rowling said in an interview that Dumbledore was about 150 years old. However, on her website, she states that Dumbledore was born in 1881, making him either 115 or 116 at the time of his death."
    },
    {
      name: "Draco Malfoy",
      role:"class mate negative role" ,
      Image: "https://wallpapercave.com/wp/wp1866825.jpg",
      
      des:"Rowling said she enjoyed writing Dumbledore because he is the epitome of goodness. She said that Dumbledore speaks for her, as he knows pretty much everything about the Harry Potter universe.Rowling mentioned that Dumbledore regrets that he has always had to be the one who knew, and who had the burden of knowing. And he would rather not know. As a mentor to the central character Harry Potter, Dumbledore is a very wise man who knows that Harry is going to have to learn a few hard lessons to prepare him for what may be coming in his life. He allows Harry to get into what he would not allow another pupil to do, and he also unwillingly permits Harry to confront things he'd rather protect him from. In a 1999 interview, Rowling stated that she imagined Dumbledore more as a John Gielgud type, you know, quite elderly and  and quite stately.[9] During his time as a student, Dumbledore was in Gryffindor House. Rowling said in an interview that Dumbledore was about 150 years old. However, on her website, she states that Dumbledore was born in 1881, making him either 115 or 116 at the time of his death."
    },    {
      name: "Lord Voldemort",
      role:"wizards" ,
      Image: "https://wallpaperset.com/w/full/0/d/d/469510.jpg",
      
      des:"Rowling said she enjoyed writing Dumbledore because he is the epitome of goodness. She said that Dumbledore speaks for her, as he knows pretty much everything about the Harry Potter universe.Rowling mentioned that Dumbledore regrets that he has always had to be the one who knew, and who had the burden of knowing. And he would rather not know. As a mentor to the central character Harry Potter, Dumbledore is a very wise man who knows that Harry is going to have to learn a few hard lessons to prepare him for what may be coming in his life. He allows Harry to get into what he would not allow another pupil to do, and he also unwillingly permits Harry to confront things he'd rather protect him from. In a 1999 interview, Rowling stated that she imagined Dumbledore more as a John Gielgud type, you know, quite elderly and  and quite stately.[9] During his time as a student, Dumbledore was in Gryffindor House. Rowling said in an interview that Dumbledore was about 150 years old. However, on her website, she states that Dumbledore was born in 1881, making him either 115 or 116 at the time of his death."
    },
  ];

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handleArrowClick = (index) =>{
            setCurrentIndex();

  }
   

  return (
    <>
      <div className='carousel next flex'>
        <div className='w-screen h-screen'>
          {characters.map((item, index) => (
            <div className={`allcontent relative w-screen ${index === currentIndex ? 'full-size' : 'hidden'}`}  key={index}>
              <div className='absolute top-0 left-0'>
                <img className='bgImg z-auto w-screen h-dvh object-cover ' alt="" src={item?.Image} />
              </div>
              <div className='content poppins-italic m-20 absolute top-10 right-10'>
                <div className='name poppins-bold-italic text-3xl text-white font-bold'>{item?.name}</div>
                <div className='role poppins-bold-italic text-3xl text-amber-500'>{item?.role}</div>
                <div className='des text-white my-4'>{item?.des}</div>
                <button className='main-button bg-white/0 poppins-light mr-2 text-white border hover:bg-white hover:text-black rounded-sm h-10 w-40'>See More</button>
                <button className='main-button bg-white/0 poppins-light text-white border hover:bg-red-600 hover:text-white hover:border-none rounded-sm h-10 w-40'>Subscribe</button>

                <button onClick={()=> handleArrowClick(index)} className='main-button bg-white/50 w-7 h-7 m-4 rounded-2xl hover:bg-white'> <KeyboardArrowLeftIcon /></button>
                <button onClick={()=> handleArrowClick(index)} className='main-button bg-white/50 w-7 h-7 m-4 rounded-2xl hover:bg-white'> <KeyboardArrowRightIcon /></button>
              </div>
            </div>
          ))}
        </div>

        {/* Thumbnails */}
        <div className='thumbnail relative object-cover flex justify-end items-end pb-10 pr-10'>

          {characters.map((item, index) => (
            <div key={index} onClick={() => handleThumbnailClick(index)} className={`container w-[90px] h-[160px] shrink-0 text-white rounded-xl m-2 shadow-white shadow-md ${index === currentIndex ? 'hidden' : 'thumbnail-size' }`}>
              <img className='absolute w-[90px] h-[160px] object-cover object-center rounded-xl' src={item?.Image} alt="" />
              <div className='absolute h-[100%] ml-1 text-xs poppins-light pt-24 shadow-white'>
                <p className='text-teal-300'>{item?.name}</p>
                <p >Description </p>
                <p className='text-white'>{index}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
