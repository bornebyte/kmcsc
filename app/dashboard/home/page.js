import AddMember from '../addmember/page'
import CreatePost from '../addpost/page'

const Home = () => {
    return (
        <div className='container'>
            <div className='text-center text-white text-3xl font-bold my-4'>Home</div>
            <CreatePost />
            <AddMember />
        </div>
    )
}

export default Home