import axios from "axios";


const getData = async (number) => {
    const { data : user } = await axios(`https://jsonplaceholder.typicode.com/users/${number}`);
    const { data : post } = await axios(`https://jsonplaceholder.typicode.com/posts/${number}`);

    return {"userInformation":user,"userPosts":post}
}


// export data
export default getData