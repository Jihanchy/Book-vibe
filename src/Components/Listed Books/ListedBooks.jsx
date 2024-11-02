import {useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList } from '../../utility/addtoDb';
import ReadList from '../ReadList/ReadList';
import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
    
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState('')
    const data = useLoaderData()

    useEffect(() => {
        const storedList = getStoredList()
        const storedListInt = storedList.map(id => parseInt(id))
        const readBookList = data.filter(book => storedListInt.includes(book.bookId))
        console.log(storedList, storedListInt, readBookList, data)
        setReadList(readBookList)
    }, [])

    const handleSort = (sortType) => {
       setSort(sortType)
       if(sortType === 'Rating'){
        const sortedListByRate = [...readList].sort((a, b) => a.rating - b.rating)
        setReadList(sortedListByRate)
       }else if(sortType === 'Pages'){
            const sortedListByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedListByPages)
       }
    }
    
    
    return (
        <div>
            <div className='text-center mb-7'>
                <details className="dropdown">
                    <summary className="px-4 py-2 gap-2 font-semibold rounded-md m-1 flex bg-[#23BE0A] text-white items-center">
                        <span>
                            {
                                sort ? `Sort By ${sort}` : 'Sort By'
                            }
                        </span><span><IoIosArrowDown /></span></summary>
                    <ul className="menu dropdown-content bg-slate-200 rounded-md z-[1] w-48 px-1">
                        <li onClick={()=>handleSort('Rating')}><a>Rating</a></li>
                        <li onClick={()=>handleSort('Pages')}><a>Pages</a></li>
                    </ul>
                </details>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className='space-y-6 mt-6'>
                        {
                            readList.map(read => <ReadList key={read.bookId} read={read}></ReadList>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
                                                                                  
        </div>
    );
};
export default ListedBooks;

