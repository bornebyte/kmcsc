import connect from './lib/mongodb.js';
import MemberModel from './models/Member.model.js';

export default function Home() {
  (async () => {
    const db = await connect();
    const newmemberdata = new MemberModel({
      name: "shubham shah",
      email: "email5",
      password: "password5"
    })
    console.log(await newmemberdata.save())
    // console.log(await MemberModel.find())
  })();
  return (
    <div>Hello app/pages.js</div>
  )
}

