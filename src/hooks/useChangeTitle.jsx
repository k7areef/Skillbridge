import React from 'react';
function useChangeTitle(title = "Skillbride - Home") {
    React.useEffect(() => {
        window.document.title = "Skillbride - " + title;
    }, [title]);
    return null;
};
export default useChangeTitle;