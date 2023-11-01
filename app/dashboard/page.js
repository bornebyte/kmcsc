import AddMember from './addmember/page'
import CreatePost from './addpost/page'

const Dashboard = () => {
    return (
        <div>
            <CreatePost />
            <AddMember />
        </div>
    )
}

export default Dashboard