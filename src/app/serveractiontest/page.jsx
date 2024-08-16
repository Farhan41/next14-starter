import { addPost, deletePost } from "@/lib/action"


const ServerActionTestPage = () => {

    // const actionInComponent = async () =>{
    //     "use server"
    //     console.log("it works!")
    // }


    return(
        <div>
            <form action={addPost}>
                <input type="text" placeholder="title" name="title"/>
                <input type="text" name="desc" placeholder="desc"/>
                <input type="text" name="slug" placeholder="slug"/>
                <input type="text" name="userId" placeholder="userId"/>
                <button>Create</button>
            </form>

            <form action={deletePost}>
                <input type="text" name="id" placeholder="postId"/>
                <button>Delete</button>
            </form>

        </div>
    )
}


export default ServerActionTestPage