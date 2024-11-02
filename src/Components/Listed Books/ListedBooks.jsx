import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList } from '../../utility/addtoDb';
import ReadList from '../ReadList/ReadList';
const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const data = useLoaderData()
    useEffect(() => {
        const storedList = getStoredList()
        const storedListInt = storedList.map(id => parseInt(id))
        const readBookList = data.filter(book => storedListInt.includes(book.bookId))
        console.log(storedList, storedListInt, readBookList, data)
        setReadList(readBookList)
    }, [])
    return (
        <div>
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