const getStoredWishList = () => {
    const storedList = localStorage.getItem('wish-list')
    if(storedList){
        const wishListStr = JSON.parse(storedList);
        return wishListStr;
    }else{
        return [];
    }
}

const addWishlist = (id) => {
    const storedWishList = getStoredWishList()
    if(storedWishList.includes(id)){
        alert('this book is already exist')
    }else{
        storedWishList.push(id)
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr)
    }
}

export {addWishlist}