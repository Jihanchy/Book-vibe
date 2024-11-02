import {toast } from 'react-toastify';

const getStoredList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}

const addToStoredList = (id) => {
    const storedList = getStoredList()

    if(storedList.includes(id)){
        toast.warn('this book is already exist')
    }else{
        toast.success('added to mark as read')
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr)
    }
}

export {addToStoredList,getStoredList};