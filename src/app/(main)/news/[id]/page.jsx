
const NewsDetailsPage = async ({params}) => {

    const {id}= await params;
    console.log(id)
    return (
        <div>
            
            <h1>News Details Page</h1>
        </div>
    );
};

export default NewsDetailsPage;