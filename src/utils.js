export const addCloudinaryPrefix = (imageUrl) => {
    if(imageUrl){
        const insertText = 'w_600,q_auto,f_auto/'
        let searchText = 'image/upload/';
        let position = imageUrl.indexOf(searchText);
        let insertPosition = position + searchText.length;
        return [imageUrl.slice(0, insertPosition), insertText, imageUrl.slice(insertPosition)].join('');
    }
};